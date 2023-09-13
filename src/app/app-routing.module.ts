import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TelaPrincipalComponent } from './tela-principal/tela-principal.component';
import { TelaPerfilComponent } from './tela-perfil/tela-perfil.component';
import { TelaLoginComponent } from './tela-login/tela-login.component'
import { TelaCadastroContatoComponent } from './tela-cadastro-contato/tela-cadastro-contato.component';
import { TelaCadastroUsuarioComponent } from './tela-cadastro-usuario/tela-cadastro-usuario.component';
import { AuthGuard } from './Service/Auth/Guard/auth.guard';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: TelaLoginComponent},
  {path: 'principal', component: TelaPrincipalComponent, canActivate: [AuthGuard]},
  {path: 'perfil', component: TelaPerfilComponent, canActivate: [AuthGuard]},
  {path: 'cadastro_contato', component: TelaCadastroContatoComponent, canActivate: [AuthGuard]},
  {path: 'cadastro_usuario', component: TelaCadastroUsuarioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
