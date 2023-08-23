import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tela-login',
  templateUrl: './tela-login.component.html',
  styleUrls: ['./tela-login.component.css']
})
export class TelaLoginComponent {
  constructor(private router: Router) {}

  navegarAtePrincipal() {
    this.router.navigate(['/principal']);
  }

  navegarAteCadastroUsuario() {
    this.router.navigate(['/cadastro_usuario']);
  }
}
