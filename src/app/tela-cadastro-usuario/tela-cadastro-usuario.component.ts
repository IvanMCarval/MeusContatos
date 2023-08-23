import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EnderecoService } from '../Service/EnderecoService/endereco.service';


@Component({
  selector: 'app-tela-cadastro-usuario',
  templateUrl: './tela-cadastro-usuario.component.html',
  styleUrls: ['./tela-cadastro-usuario.component.css']
})
export class TelaCadastroUsuarioComponent {
  constructor(private router: Router, private endereco: EnderecoService) {}

  cep: string = '';
  enderecoCompleto: any = {
    logradouro: '',
    bairro: '',
    cidade: ''
  };

  navagarTelaLogin() {
    this.router.navigate(['/']);
  }

  procurarEndereco() {
    const validacaoCep = /^[0-9]{8}$/;

    if (validacaoCep.test(this.cep)) {
      if (this.cep && this.cep.length == 8) {
        this.endereco.getEnderecoPorCep(this.cep).subscribe({
          next: (response) => {
            this.enderecoCompleto.logradouro = response.logradouro;
            this.enderecoCompleto.bairro = response.bairro;
            this.enderecoCompleto.cidade = response.localidade;
          },
          error: (erro) => console.log(erro)
        })
      }
    } else {
      this.enderecoCompleto = {}
    }
  }
}
