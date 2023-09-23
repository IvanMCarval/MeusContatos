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

  editarContato(contato: Contato, id: number) {
    const contatoAtualizado = contato
    return this.http.put<any>(`${this.baseUrl}/${id}/atualizar-contato`, contatoAtualizado)
  }

  findAllContatos(id: string) : Observable<Contato[]> {
    return this.http.get<Contato[]>(`${this.baseUrl}/${id}/contatos`)
  }

  deletarContato(id: number) {
    return this.http.delete<any>(`${this.baseUrl}/${id}/deletar-contato`)
  }

  getContatoPorId(id: number) {
    return this.http.get<Contato>(`${this.baseUrl}/${id}`)
  }
}
