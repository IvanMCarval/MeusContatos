import { Endereco } from "./endereco.interface";

export class Usuario {
  nome: string = '';
  senha: string = '';
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

  constructor(

  ) {

  }
}
