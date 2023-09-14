import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from 'src/app/Models/usuario.model';
import { UsuarioDTO } from 'src/app/Models/usuarioDTO.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private baseUrl = '/api/usuario'

  constructor(private http: HttpClient) { }

  cadastrarUsuario(usuario: Usuario) {
    const usuarioObj = usuario
    return this.http.post<any>(`${this.baseUrl}/cadastrarUsuario`, usuarioObj)
  }

  atualizarUsuario(usuario: UsuarioDTO, idUsuario: String) {
    const usuarioDtoObj = usuario
    const id = idUsuario
    return this.http.put<any>(`${this.baseUrl}/${id}/atualizar-usuario`, usuarioDtoObj)
  }

  getUsuarioPorId(id: string) {
    return this.http.get<any>(`${this.baseUrl}/${id}`)
  }
}
