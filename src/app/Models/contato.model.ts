import { Endereco } from "./endereco.interface";

export class Contato {
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
  id_usuario: number = 0;

  constructor(

  ) {

  }
}
