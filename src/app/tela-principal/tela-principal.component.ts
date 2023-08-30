import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tela-principal',
  templateUrl: './tela-principal.component.html',
  styleUrls: ['./tela-principal.component.css']
})
export class TelaPrincipalComponent {
  constructor(private router : Router){}

  navegarAteCadastro() {
    this.router.navigate(['/cadastro_contato'])
  }

  name: string = "Ivan" 

  list: any[] = [
    {nome: "Contato 1", email: "email1@email.com"},
    {nome: "Contato 2", email: "email2@email.com"},
    {nome: "Contato 3", email: "email3@email.com"},
    {nome: "Contato 1", email: "email1@email.com"},
    {nome: "Contato 2", email: "email2@email.com"},
    {nome: "Contato 3", email: "email3@email.com"},
    {nome: "Contato 1", email: "email1@email.com"},
    {nome: "Contato 2", email: "email2@email.com"},
    {nome: "Contato 3", email: "email3@email.com"},
    {nome: "Contato 1", email: "email1@email.com"},
    {nome: "Contato 2", email: "email2@email.com"},
    {nome: "Contato 3", email: "email3@email.com"},
  ]
}
