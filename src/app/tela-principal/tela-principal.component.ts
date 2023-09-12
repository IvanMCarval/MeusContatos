import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../Models/usuario.model';
import { AuthService } from '../Service/Auth/auth.service';

@Component({
  selector: 'app-tela-principal',
  templateUrl: './tela-principal.component.html',
  styleUrls: ['./tela-principal.component.css'],
})
export class TelaPrincipalComponent {
  constructor(private router: Router) {}

  estadoPainel = false;

  navegarAteCadastro() {
    this.router.navigate(['/cadastro_contato']);
  }

  name: string = localStorage.getItem('nome')!;

  list: any[] = [
    {
      nome: 'Contato 1',
      email: 'email1@email.com',
      telefone: 16999999999,
      endereco: {
        logradouro: 'Rua',
        numero: '111',
        bairro: 'Bairro',
        localidade: 'Localidade',
        uf: 'SP',
      },
    },
    {
      nome: 'Contato 2',
      email: 'email1@email.com',
      telefone: 16999999999,
      endereco: {
        logradouro: 'Rua',
        numero: '111',
        bairro: 'Bairro',
        localidade: 'Localidade',
        uf: 'SP',
      },
    },
    {
      nome: 'Contato 3',
      email: 'email1@email.com',
      telefone: 16999999999,
      endereco: {
        logradouro: 'Rua',
        numero: '111',
        bairro: 'Bairro',
        localidade: 'Localidade',
        uf: 'SP',
      },
    },
  ];
}
