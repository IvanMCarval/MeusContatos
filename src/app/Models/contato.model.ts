import { Endereco } from "./endereco.interface";

export class Contato {
  id: string = '';
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
  usuarioId: number = 0;

  constructor() {}
}
