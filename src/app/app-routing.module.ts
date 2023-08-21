import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TelaPrincipalComponent } from './tela-principal/tela-principal.component';
import { TelaPerfilComponent } from './tela-perfil/tela-perfil.component';
import { TelaLoginComponent } from './tela-login/tela-login.component'

const routes: Routes = [
  {path: '', component: TelaLoginComponent},
  {path: 'principal', component: TelaPrincipalComponent},
  {path: 'perfil', component: TelaPerfilComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
