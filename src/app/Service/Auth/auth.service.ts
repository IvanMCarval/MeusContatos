import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:8080/usuario/auth'

  constructor(private http: HttpClient) { }

  login(email: string, senha: string) {
    const body = {email, senha}

    return this.http.post<any>(`${this.baseUrl}`, body)
      .pipe(
        map(response => response.token),
        catchError((erro) => {
          //console.log(erro)
          return of(null)
        })
      );
  }
}
