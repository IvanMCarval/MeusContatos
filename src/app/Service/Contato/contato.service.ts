import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contato } from 'src/app/Models/contato.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {
  private baseUrl = '/api/contato'

  constructor(private http: HttpClient) { }

  criarContato(contato: Contato) {
    const contatoObj = contato
    return this.http.post<any>(`${this.baseUrl}/criarContato`, contatoObj)
  }

  findAllContatos(id: string) : Observable<Contato[]> {
    return this.http.get<Contato[]>(`${this.baseUrl}/${id}/contatos`)
  }

}
