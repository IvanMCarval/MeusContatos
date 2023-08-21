import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

import {MatIconModule} from '@angular/material/icon';
import { TelaPerfilComponent } from './tela-perfil/tela-perfil.component'

import { FormsModule } from '@angular/forms';
import { TelaPrincipalComponent } from './tela-principal/tela-principal.component';
import { TelaLoginComponent } from './tela-login/tela-login.component';
import { TelaCadastroContatoComponent } from './tela-cadastro-contato/tela-cadastro-contato.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    TelaPerfilComponent,
    TelaPrincipalComponent,
    TelaLoginComponent,
    TelaCadastroContatoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
