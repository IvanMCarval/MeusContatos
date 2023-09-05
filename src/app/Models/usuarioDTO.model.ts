import { Endereco } from "./endereco.interface";

export class UsuarioDTO {
  nome: string = '';
  email: string = '';
  telefone: string = '';
  endereco: Endereco = {
    cep: '',
    logradouro: '',
    bairro: '',
    localidade: '',
    uf: '',
    numero: ''
  };

  constructor() {}
}
