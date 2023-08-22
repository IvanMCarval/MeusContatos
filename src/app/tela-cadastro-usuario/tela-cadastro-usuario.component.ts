import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tela-cadastro-usuario',
  templateUrl: './tela-cadastro-usuario.component.html',
  styleUrls: ['./tela-cadastro-usuario.component.css']
})
export class TelaCadastroUsuarioComponent {
  constructor(private router: Router) {}

  navagarTelaLogin() {
    this.router.navigate(['/'])
  }
}
