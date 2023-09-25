import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import jwtDecode from 'jwt-decode';
import { MatSnackBar } from '@angular/material/snack-bar';

interface DecodedToken {
  id: string,
  nome: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = '/api/usuario/auth'
  private token: string | null = ''

  constructor(private http: HttpClient, private snackBar: MatSnackBar) {}

  login(email: string, senha: string): Observable<string | null> {
    const body = {email, senha}

    return this.http.post<any>(`${this.baseUrl}`, body)
      .pipe(
        map(response => {
          this.token = response.token
          localStorage.setItem('token', this.token!)

          this.obterClaims()

          return this.token
        }),
        catchError((erro) => {
          this.snackBar.open(erro.error, 'Fechar', {
            duration: 3000,
          })
          return of(null)
        })
      );
  }

  obterClaims() {
    const token = localStorage.getItem('token')
    const decodedToken: DecodedToken = jwtDecode(token!)

    const idUsuario = decodedToken.id
    const nomeUsuario = decodedToken.nome

    localStorage.setItem('id', idUsuario)
    localStorage.setItem('nome', nomeUsuario)
  }

  logout(): void {
    localStorage.removeItem('token')
    localStorage.removeItem('id')
    localStorage.removeItem('nome')
    this.token = null
  }

  isAuthenticated(): boolean {
    return !!this.token || !!localStorage.getItem('token')
  }

  getToken(): string | null {
    return this.token || localStorage.getItem('token')
  }
}
