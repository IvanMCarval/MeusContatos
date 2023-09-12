import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EnderecoService } from '../Service/EnderecoService/endereco.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Contato } from '../Models/contato.model';
import { AuthService } from '../Service/Auth/auth.service';

@Component({
  selector: 'app-tela-cadastro-contato',
  templateUrl: './tela-cadastro-contato.component.html',
  styleUrls: ['./tela-cadastro-contato.component.css']
})
export class TelaCadastroContatoComponent {
  formularioCadastroContato: FormGroup;
  formSubmited: boolean = false;

  constructor(
    private router : Router,
    private endereco : EnderecoService,
    private fb : FormBuilder,
    private snackBar : MatSnackBar
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

  cadastrarContato() {
    this.formSubmited = true;

    if (this.formularioCadastroContato.valid) {
      const contato: Contato = new Contato();

      contato.nome = this.formularioCadastroContato.get('nome')?.value;
      contato.email = this.formularioCadastroContato.get('email')?.value;
      contato.telefone = this.formularioCadastroContato.get('telefone')?.value;
      contato.endereco.cep = this.formularioCadastroContato.get('cep')?.value;
      contato.endereco.logradouro = this.formularioCadastroContato.get('logradouro')?.value;
      contato.endereco.bairro = this.formularioCadastroContato.get('bairro')?.value;
      contato.endereco.localidade = this. formularioCadastroContato.get('localidade')?.value;
      contato.endereco.uf = this.formularioCadastroContato.get('uf')?.value;
      contato.endereco.numero = this.formularioCadastroContato.get('numero')?.value;

      console.log(contato);

      this.navegarAtePrincipal();
    } else {
      this.snackBar.open('Preencha os campos obrigatorios!', 'Fechar', {
        duration: 3000,
      });
    }
  }

  navegarAtePrincipal() {
    this.router.navigate(['/principal'])
  }
}
