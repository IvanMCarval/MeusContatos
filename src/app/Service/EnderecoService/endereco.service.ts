import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, catchError, map, of } from 'rxjs';
import { Endereco } from 'src/app/Models/endereco.interface';

@Injectable({
  providedIn: 'root',
})
export class EnderecoService {
  constructor(private http: HttpClient, private snackBar: MatSnackBar) {}

  private validarCep(cep: string): boolean {
    const validacaoCep = /^[0-9]{8}$/;
    return validacaoCep.test(cep);
  }

  getEnderecoPorCep(
    cep: string,
    numeroEndereco: string
  ): Observable<Endereco | null> {
    if (!this.validarCep(cep)) {
      this.snackBar.open('CEP não encontrado ou invalido', 'Fechar', {
        duration: 3000,
      });

      return of(null);
    }

    return this.http
      .get<Endereco | null>(`https://viacep.com.br/ws/${cep}/json/`)
      .pipe(
        map((response) => {
          if (response?.erro) {
            this.snackBar.open('CEP não encontrado ou invalido', 'Fechar', {
              duration: 3000,
            });
          }
          const enderecoCompleto: Endereco = {
            ...response,
            numero: numeroEndereco,
          };
          return enderecoCompleto;
        }),
        catchError((erro) => {
          console.log('erro no service: ', erro);
          return of(null);
        })
      );
  }
}
