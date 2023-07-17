import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tela-perfil',
  templateUrl: './tela-perfil.component.html',
  styleUrls: ['./tela-perfil.component.css']
})
export class TelaPerfilComponent implements OnInit{
  @Input() telefone: string = '';

  formatarTelefone(valor: string) {
    // Remove todos os caracteres não numéricos
    valor = valor.replace(/\D/g, '');

    // Aplica a formatação do telefone (exemplo: (XX) XXXX-XXXX)
    valor = valor.replace(/^(\d{2})(\d{4,5})(\d{4})$/, '($1) $2-$3');

    // Atualiza o valor do input com a formatação
    this.telefone = valor;
  }

  constructor() {}

  ngOnInit(): void {
  }
}
