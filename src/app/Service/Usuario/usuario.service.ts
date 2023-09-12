import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from 'src/app/Models/usuario.model';
import { UsuarioDTO } from 'src/app/Models/usuarioDTO.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private baseUrl = 'http://localhost:8080'

  constructor(private http: HttpClient) { }

  cadastrarUsuario(usuario: Usuario) {
    const usuarioObj = usuario
    return this.http.post<any>(`${this.baseUrl}/usuario/cadastrarUsuario`, usuarioObj)
  }

  atualizarUsuario(usuario: UsuarioDTO, idUsuario: String) {
    const usuarioDtoObj = usuario
    const id = idUsuario
    return this.http.put<any>(`${this.baseUrl}/usuario/${id}/atualizar-usuario`, usuarioDtoObj)
  }
}
