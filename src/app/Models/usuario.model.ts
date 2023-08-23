import { Endereco } from "./endereco.interface";

export class Usuario {
  nome: string;
  senha: string;
  email: string;
  telefone: string;
  endereco: Endereco;

  constructor(
    nome: string,
    senha: string,
    email: string,
    telefone: string,
    endereco: Endereco
  ) {
    this.nome = nome;
    this.senha = senha;
    this.email = email;
    this.telefone = telefone;
    this.endereco = endereco;
  }
}