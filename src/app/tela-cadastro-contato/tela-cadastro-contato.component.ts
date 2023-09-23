import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EnderecoService } from '../Service/EnderecoService/endereco.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Contato } from '../Models/contato.model';
import { ContatoService } from '../Service/Contato/contato.service';

@Component({
  selector: 'app-tela-cadastro-contato',
  templateUrl: './tela-cadastro-contato.component.html',
  styleUrls: ['./tela-cadastro-contato.component.css']
})
export class TelaCadastroContatoComponent implements OnInit{
  formularioCadastroContato: FormGroup;
  formSubmited: boolean = false;

  isEdicao: boolean = false;
  titulo: string = 'Novo Contato'
  btnCadastrar: string = 'Cadastrar'

  idContatoParaEdicao: number = 0

  constructor(
    private router : Router,
    private route: ActivatedRoute,
    private endereco : EnderecoService,
    private fb : FormBuilder,
    private snackBar : MatSnackBar,
    private contatoService : ContatoService
  ) {
      this.formularioCadastroContato = this.fb.group({
        nome: ['', Validators.required],
        email: ['', Validators.required],
        telefone: ['', Validators.required],
        cep: ['', Validators.required],
        logradouro: ['', Validators.required],
        bairro: ['', Validators.required],
        numero: ['', Validators.required],
        localidade: ['', Validators.required],
        uf: ['', Validators.required],
      });
  }


  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.idContatoParaEdicao = +params['id']
      if (!isNaN(this.idContatoParaEdicao)) {
        this.isEdicao = true
        this.titulo = 'Editar Contato'
        this.btnCadastrar = 'Salvar'
        this.buscarDadosContato(this.idContatoParaEdicao)
      }
    })
  }

  navegarAtePrincipal() {
    this.router.navigate(['/principal'])
  }

  buscarDadosContato(id: number): void {
    this.contatoService.getContatoPorId(id).subscribe({
      next: (response) => {
        this.formularioCadastroContato.patchValue({
          nome: response.nome,
          email: response.email,
          telefone: response.telefone,
          cep: response.endereco.cep,
          logradouro: response.endereco.logradouro,
          bairro: response.endereco.bairro,
          numero: response.endereco.numero,
          localidade: response.endereco.localidade,
          uf: response.endereco.uf,
        })
      },
      error: (err) => {
        this.snackBar.open('Erro ao buscar Contato!', 'Fechar', {
          duration: 3000,
        });
      }
    })
  }

  procurarEndereco() {
    const cep = this.formularioCadastroContato.get('cep')?.value;
    const numeroEndereco = this.formularioCadastroContato.get('numero')?.value;

    this.endereco.getEnderecoPorCep(cep, numeroEndereco).subscribe({
      next: (response) => {
        this.formularioCadastroContato.patchValue({
          cep: response?.cep?.replace(/\D/g,''),
          logradouro: response?.logradouro,
          bairro: response?.bairro,
          numero: response?.numero,
          localidade: response?.localidade,
          uf: response?.uf,
        });
      },
      error: (erro) => console.log('erro no comp: ', erro),
    });
  }

  enviarDadosContato() {
    this.formSubmited = true;

    if (this.formularioCadastroContato.valid) {
      const contato: Contato = new Contato();
      const usuarioIDString = localStorage.getItem('id');
      const id_usuario = Number(usuarioIDString);

      contato.usuarioId = id_usuario;
      contato.nome = this.formularioCadastroContato.get('nome')?.value;
      contato.email = this.formularioCadastroContato.get('email')?.value;
      contato.telefone = this.formularioCadastroContato.get('telefone')?.value;
      contato.endereco.cep = this.formularioCadastroContato.get('cep')?.value;
      contato.endereco.logradouro = this.formularioCadastroContato.get('logradouro')?.value;
      contato.endereco.bairro = this.formularioCadastroContato.get('bairro')?.value;
      contato.endereco.localidade = this. formularioCadastroContato.get('localidade')?.value;
      contato.endereco.uf = this.formularioCadastroContato.get('uf')?.value;
      contato.endereco.numero = this.formularioCadastroContato.get('numero')?.value;

      if (this.isEdicao) {
        this.editarContato(contato, this.idContatoParaEdicao)
      } else {
        this.criarContato(contato);
      }
    } else {
      this.snackBar.open('Preencha os campos obrigatorios!', 'Fechar', {
        duration: 3000,
      });
    }
  }

  private editarContato(contato: Contato, id: number) {
    this.contatoService.editarContato(contato, id).subscribe({
      next: (response) => {
        this.snackBar.open('Contato editado com sucesso!', 'Fechar', {
          duration: 3000,
        });
        this.navegarAtePrincipal()
      },
      error: (err) => {
        this.snackBar.open('Erro ao editar o Contato!', 'Fechar', {
          duration: 3000,
        });
      }
    })
  }

  private criarContato(contato: Contato) {
    this.contatoService.criarContato(contato).subscribe({
      next: (response) => {
        if (response) {
          this.snackBar.open('Contato criado com sucesso!', 'Fechar', {
            duration: 3000,
          });
          this.navegarAtePrincipal();
        }
      },
      error: (err) => {
        this.snackBar.open('Erro ao criar o Contato!', 'Fechar', {
          duration: 3000,
        });
      }
    });
  }
}
