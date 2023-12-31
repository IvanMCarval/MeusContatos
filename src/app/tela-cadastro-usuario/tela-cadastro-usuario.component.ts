import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EnderecoService } from '../Service/EnderecoService/endereco.service';
import { Usuario } from '../Models/usuario.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UsuarioService } from '../Service/Usuario/usuario.service';

@Component({
  selector: 'app-tela-cadastro-usuario',
  templateUrl: './tela-cadastro-usuario.component.html',
  styleUrls: ['./tela-cadastro-usuario.component.css'],
})
export class TelaCadastroUsuarioComponent {
  formularioCadastroUsuartio: FormGroup;
  formSubmited: boolean = false;

  constructor(
    private router: Router,
    private endereco: EnderecoService,
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private usuarioSevice: UsuarioService
  ) {
    this.formularioCadastroUsuartio = this.fb.group({
      nome: ['', [Validators.required, Validators.pattern(/^[a-zA-Z\sÀ-ÿ]+$/u)]],
      senha: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefone: ['', Validators.required],
      cep: ['', Validators.required],
      logradouro: ['', Validators.required],
      bairro: ['', Validators.required],
      numero: ['', Validators.required],
      localidade: ['', Validators.required],
      uf: ['', Validators.required],
    });
  }

  navagarTelaLogin() {
    this.router.navigate(['/']);
  }

  procurarEndereco() {
    const cep = this.formularioCadastroUsuartio.get('cep')?.value;
    const numeroEndereco = this.formularioCadastroUsuartio.get('numero')?.value;

    this.endereco.getEnderecoPorCep(cep, numeroEndereco).subscribe({
      next: (response) => {
        this.formularioCadastroUsuartio.patchValue({
          cep: response?.cep?.replace(/\D/g, ''),
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

  cadastrarFormularioUsuario() {
    this.formSubmited = true;

    if (this.formularioCadastroUsuartio.valid) {
      this.criarUsuario()
    } else if (this.formularioCadastroUsuartio.get('nome')?.hasError('pattern')){
      this.snackBar.open('Este campo deve conter apenas letras!', 'Fechar', {
        duration: 3000
      })
    } else {
      this.snackBar.open('Preencha os campos obrigatorios!', 'Fechar', {
        duration: 3000,
      });
    }
  }

  criarUsuario() {
    const usuario: Usuario = new Usuario();

    usuario.nome = this.formularioCadastroUsuartio.get('nome')?.value;
    usuario.senha = this.formularioCadastroUsuartio.get('senha')?.value;
    usuario.email = this.formularioCadastroUsuartio.get('email')?.value;
    usuario.telefone = this.formularioCadastroUsuartio.get('telefone')?.value;
    usuario.endereco.cep = this.formularioCadastroUsuartio.get('cep')?.value;
    usuario.endereco.logradouro = 
    this.formularioCadastroUsuartio.get('logradouro')?.value;
    usuario.endereco.bairro =
      this.formularioCadastroUsuartio.get('bairro')?.value;
    usuario.endereco.localidade =
      this.formularioCadastroUsuartio.get('localidade')?.value;
    usuario.endereco.uf = this.formularioCadastroUsuartio.get('uf')?.value;
    usuario.endereco.numero =
      this.formularioCadastroUsuartio.get('numero')?.value;

    this.usuarioSevice.cadastrarUsuario(usuario).subscribe({
      next: (response) => {
        if (response) {
          this.snackBar.open('Usuario cadastrado com sucesso!', 'Fechar', {
            duration: 3000,
          })

          this.navagarTelaLogin()
        }
      },
      error: (err) => {
        this.snackBar.open(err.error, 'Fechar', {
          duration: 3000,
        })
      }
    })
  }
}
