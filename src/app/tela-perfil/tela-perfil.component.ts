import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EnderecoService } from '../Service/EnderecoService/endereco.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UsuarioDTO } from '../Models/usuarioDTO.model';

@Component({
  selector: 'app-tela-perfil',
  templateUrl: './tela-perfil.component.html',
  styleUrls: ['./tela-perfil.component.css']
})
export class TelaPerfilComponent{
  formularioAtualizarUsuartio: FormGroup;
  formSubmited: boolean = false;

  constructor(
    private router: Router,
    private endereco: EnderecoService,
    private fb: FormBuilder,
    private snackBar: MatSnackBar
  ) {
    this.formularioAtualizarUsuartio = this.fb.group({
      nome: ['', Validators.required],
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

  atualizarUsuario() {
    this.formSubmited = true;

    if (this.formularioAtualizarUsuartio.valid) {
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

      console.log(usuario);
    } else {
      this.snackBar.open('Preencha os campos obrigatorios!', 'Fechar', {
        duration: 3000,
      });
    }
  }
}
