import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../Service/Auth/auth.service';
import { ContatoService } from '../Service/Contato/contato.service';
import { Contato } from '../Models/contato.model';
@Component({
  selector: 'app-tela-principal',
  templateUrl: './tela-principal.component.html',
  styleUrls: ['./tela-principal.component.css'],
})
export class TelaPrincipalComponent implements OnInit{
  constructor(
    private router: Router,
    private contatoService: ContatoService
  ) {}
  contatos: Contato[] = [];
  estadoPainel = false;
  idUsuario: string = '';

  navegarAteCadastro() {
    this.router.navigate(['/cadastro_contato']);
  }

  name: string = localStorage.getItem('nome')!;

  ngOnInit(): void {
    this.idUsuario = localStorage.getItem('id')!;
    this.buscarListaDeContatos(this.idUsuario);
  }

  buscarListaDeContatos(idUsuario: string): void{
    this.contatoService.findAllContatos(idUsuario).subscribe({
      next:(response) => {
        response.forEach(contato => {
          const contatoObj: Contato = new Contato();

          contatoObj.id = contato.id;
          contatoObj.nome = contato.nome;
          contatoObj.email = contato.email;
          contatoObj.telefone = contato.telefone;
          contatoObj.endereco.bairro = contato.endereco.bairro;
          contatoObj.endereco.cep = contato.endereco.cep;
          contatoObj.endereco.localidade = contato.endereco.localidade;
          contatoObj.endereco.logradouro = contato.endereco.logradouro;
          contatoObj.endereco.numero = contato.endereco.numero;
          contatoObj.endereco.uf = contato.endereco.uf;
          contatoObj.usuarioId = contato.usuarioId;

          this.contatos.push(contatoObj);
        })
      },
      error(err) {
          console.log("Erro ao buscar lista de contato.")
      },
    });
  }

  deletarContato(id: string): void{
    const idContato = Number(id)
    this.contatoService.deletarContato(idContato).subscribe({
      next: (response) => {
        console.log(response)
      },
      error(err) {
          console.log(err)
      },
    })
    window.location.reload();
  }
}
