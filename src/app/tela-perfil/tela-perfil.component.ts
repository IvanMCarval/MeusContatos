import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EnderecoService } from '../Service/EnderecoService/endereco.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UsuarioDTO } from '../Models/usuarioDTO.model';
import { AuthService } from '../Service/Auth/auth.service';
import { UsuarioService } from '../Service/Usuario/usuario.service';

@Component({
  selector: 'app-tela-perfil',
  templateUrl: './tela-perfil.component.html',
  styleUrls: ['./tela-perfil.component.css']
})
export class TelaPerfilComponent implements OnInit{
  formularioAtualizarUsuartio: FormGroup;
  formSubmited: boolean = false;

  private id: string = ''

  constructor(
    private router: Router,
    private endereco: EnderecoService,
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private authService: AuthService,
    private usuarioService: UsuarioService
  ) {
    this.formularioAtualizarUsuartio = this.fb.group({
      nome: ['', [Validators.required, Validators.pattern(/^[a-zA-Z\sÀ-ÿ]+$/u)]],
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
  ngOnInit(): void {
    this.id = localStorage.getItem('id')!
    this.buscarDadosUsuario()
  }

  navagarTelaLogin(): void {
    this.router.navigate(['/']);
  }

  buscarDadosUsuario(): void {
    this.usuarioService.getUsuarioPorId(this.id).subscribe({
      next: (response) => {
        this.formularioAtualizarUsuartio.patchValue({
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
      error(erro) {
        console.log('Erro ao carregar informações ')
      },
    })
  }

  procurarEndereco(): void {
    const cep = this.formularioAtualizarUsuartio.get('cep')?.value;
    const numeroEndereco = this.formularioAtualizarUsuartio.get('numero')?.value;

    this.endereco.getEnderecoPorCep(cep, numeroEndereco).subscribe({
      next: (response) => {
        this.formularioAtualizarUsuartio.patchValue({
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

  atualizarUsuario(): void {
    this.formSubmited = true;
    
    if (this.formularioAtualizarUsuartio.valid) {
      this.criarUsuario()
    } else if (this.formularioAtualizarUsuartio.get('nome')?.hasError('pattern')){
      this.snackBar.open('Este campo deve conter apenas letras!', 'Fechar', {
        duration: 3000
      })
    } else{
      this.snackBar.open('Preencha todos os campos.', 'Fechar', {
        duration: 3000
      })
    }
  }

  criarUsuario() {
    const usuario: UsuarioDTO = new UsuarioDTO();

    usuario.nome = this.formularioAtualizarUsuartio.get('nome')?.value;
    usuario.email = this.formularioAtualizarUsuartio.get('email')?.value;
    usuario.telefone = this.formularioAtualizarUsuartio.get('telefone')?.value;
    usuario.endereco.cep = this.formularioAtualizarUsuartio.get('cep')?.value;
    usuario.endereco.logradouro =
      this.formularioAtualizarUsuartio.get('logradouro')?.value;
    usuario.endereco.bairro =
      this.formularioAtualizarUsuartio.get('bairro')?.value;
    usuario.endereco.localidade =
      this.formularioAtualizarUsuartio.get('localidade')?.value;
    usuario.endereco.uf = this.formularioAtualizarUsuartio.get('uf')?.value;
    usuario.endereco.numero =
      this.formularioAtualizarUsuartio.get('numero')?.value;

    this.usuarioService.atualizarUsuario(usuario, this.id).subscribe({
      next: (response) => {
        if (response) {
          localStorage.setItem('nome', usuario.nome)
          this.snackBar.open('Informações alteradas com sucesso!', 'Fechar', {
            duration: 3000,
          });
        }
      },
      error: (err) => {
        this.snackBar.open(err.error, 'Fechar', {
          duration: 10000,
        })
      }
    })
  }

  logout(): void {
    this.authService.logout()
    this.navagarTelaLogin()
  }
}
