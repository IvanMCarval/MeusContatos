import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../Service/Auth/auth.service';

@Component({
  selector: 'app-tela-login',
  templateUrl: './tela-login.component.html',
  styleUrls: ['./tela-login.component.css']
})
export class TelaLoginComponent {
  email: string = ''
  senha: string = ''

  constructor(private router: Router, private authService: AuthService) {}

  logarUsuario() {
    this.authService.login(this.email, this.senha).subscribe({
      next: (response) => {
        if (response) {
          console.log(response)
          this.router.navigate(['/principal']);
        }
      },
      error(erro) {
        console.log('erro ao tentar fazer login')
      },
    })


  }

  navegarAteCadastroUsuario() {
    this.router.navigate(['/cadastro_usuario']);
  }
}
