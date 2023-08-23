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
import { TelaCadastroUsuarioComponent } from './tela-cadastro-usuario/tela-cadastro-usuario.component';
import { EnderecoService } from './Service/EnderecoService/endereco.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    TelaPerfilComponent,
    TelaPrincipalComponent,
    TelaLoginComponent,
    TelaCadastroContatoComponent,
    TelaCadastroUsuarioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [EnderecoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
