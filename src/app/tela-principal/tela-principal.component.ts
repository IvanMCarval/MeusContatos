import { Component } from '@angular/core';

@Component({
  selector: 'app-tela-principal',
  templateUrl: './tela-principal.component.html',
  styleUrls: ['./tela-principal.component.css']
})
export class TelaPrincipalComponent {
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
