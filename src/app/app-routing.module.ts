import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TelaPrincipalComponent } from './tela-principal/tela-principal.component';
import { TelaPerfilComponent } from './tela-perfil/tela-perfil.component';
import { TelaLoginComponent } from './tela-login/tela-login.component'
import { TelaCadastroContatoComponent } from './tela-cadastro-contato/tela-cadastro-contato.component';
import { TelaCadastroUsuarioComponent } from './tela-cadastro-usuario/tela-cadastro-usuario.component';
import { authGuard } from './Service/Auth/Guard/auth.guard';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: TelaLoginComponent},
  {path: 'principal', component: TelaPrincipalComponent, canActivate: [authGuard]},
  {path: 'perfil', component: TelaPerfilComponent, canActivate: [authGuard]},
  {path: 'cadastro_contato', component: TelaCadastroContatoComponent, canActivate: [authGuard]},
  {path: 'cadastro_usuario', component: TelaCadastroUsuarioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
