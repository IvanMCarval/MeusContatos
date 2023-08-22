import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TelaPrincipalComponent } from './tela-principal/tela-principal.component';
import { TelaPerfilComponent } from './tela-perfil/tela-perfil.component';
import { TelaLoginComponent } from './tela-login/tela-login.component'
import { TelaCadastroContatoComponent } from './tela-cadastro-contato/tela-cadastro-contato.component';

const routes: Routes = [
  {path: '', component: TelaLoginComponent},
  {path: 'principal', component: TelaPrincipalComponent},
  {path: 'perfil', component: TelaPerfilComponent},
  {path: 'cadastro_contato', component: TelaCadastroContatoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
