import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EnderecoService } from '../Service/EnderecoService/endereco.service';
import { Endereco } from '../Models/endereco.interface';
import { Usuario } from '../Models/usuario.model';

@Component({
  selector: 'app-tela-cadastro-usuario',
  templateUrl: './tela-cadastro-usuario.component.html',
  styleUrls: ['./tela-cadastro-usuario.component.css']
})
export class TelaCadastroUsuarioComponent {
  constructor(private router: Router, private endereco: EnderecoService) {}

  nome: string = '';
  senha: string = '';
  email: string = '';
  telefone: string = '';
  cep: string = '';
  numero: string = '';
  enderecoCompleto: Endereco = {
    cep: '',
    logradouro: '',
    bairro: '',
    localidade: '',
    uf: '',
    numero: ''
  };
  
  usuario: Usuario = new Usuario('', '', '', '', this.enderecoCompleto)

  navagarTelaLogin() {
    this.router.navigate(['/']);
  }

  formatarTelefone(valor: string) {
    valor = valor.replace(/\D/g, '');

    valor = valor.replace(/^(\d{2})(\d{4,5})(\d{4})$/, '($1) $2-$3');

    this.telefone = valor;
  }

  procurarEndereco() {
    const validacaoCep = /^[0-9]{8}$/;

    if (validacaoCep.test(this.cep)) {
      if (this.cep && this.cep.length == 8) {
        this.endereco.getEnderecoPorCep(this.cep).subscribe({
          next: (response) => {
            this.enderecoCompleto = {
              cep: response.cep.replace(/\D/g, ''),
              logradouro: response.logradouro,
              bairro: response.bairro,
              localidade: response.localidade,
              uf: response.uf,
              numero: '',
            }
          },
          error: (erro) => console.log(erro)
        })
      }
    } else {
      this.enderecoCompleto = {
        cep: '',
        logradouro: '',
        bairro: '',
        localidade: '',
        uf: '',
        numero: '',
      }
    }
  }

  cadastrarUsuario() {
    this.usuario.nome = this.nome
    this.usuario.email = this.email
    this.usuario.senha = this.senha

    this.usuario.telefone = this.telefone
    this.usuario.telefone = this.usuario.telefone.replace(/\D/g, '')

    this.enderecoCompleto.numero = this.numero
    this.usuario.endereco = this.enderecoCompleto
    console.log(this.usuario)
  }
}
