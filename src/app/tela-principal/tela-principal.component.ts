import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../Service/Auth/auth.service';
import { ContatoService } from '../Service/Contato/contato.service';
import { Contato } from '../Models/contato.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ModalDeletarContatoComponent } from '../modal-deletar-contato/modal-deletar-contato.component';
@Component({
  selector: 'app-tela-principal',
  templateUrl: './tela-principal.component.html',
  styleUrls: ['./tela-principal.component.css'],
})
export class TelaPrincipalComponent implements OnInit{
  constructor(
    private router: Router,
    private contatoService: ContatoService,
    private snackBar: MatSnackBar,
    public dialog: MatDialog
  ) {}

  contatos: Contato[] = [];
  estadoPainel = false;
  idUsuario: string = '';
  name: string = '';

  navegarAteCadastro(): void {
    this.router.navigate(['/cadastro_contato']);
  }

  ngOnInit(): void {
    this.name = localStorage.getItem('nome')!;
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
      error: (err) => {
        this.snackBar.open('Erro ao buscar lista de Contatos!', 'Fechar', {
          duration: 3000,
        });
      }
    });
  }

  navegarTelaEdiacao(id: string): void {
    const idContato = Number(id)
    this.router.navigate(['/edicao', idContato])
  }

  deletarContato(id: string, index: number): void{
    const idContato = Number(id)
    this.contatoService.deletarContato(idContato).subscribe({
      next: (response) => {
        this.contatos.splice(index, 1);
      },
      error: (err) => {
        this.snackBar.open('Erro ao deletar Contato!', 'Fechar', {
          duration: 3000,
        });
      }
    })
  }

  abrirModalDeletarContato(id: string, index: number): void {
    const dialogRef = this.dialog.open(ModalDeletarContatoComponent, {
      data: {}
    })

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.deletarContato(id, index)
      }
    })
  }
}
