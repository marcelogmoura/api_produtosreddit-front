import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProdutoCadastroComponent } from './components/produto-cadastro/produto-cadastro.component';
import { ProdutoConsultaComponent } from './components/produto-consulta/produto-consulta.component';
import { MovimentoCadastroComponent } from './components/movimento-cadastro/movimento-cadastro.component';
import { MovimentoConsultaComponent } from './components/movimento-consulta/movimento-consulta.component';

@NgModule({
  declarations: [
    AppComponent,
    ProdutoCadastroComponent,
    ProdutoConsultaComponent,
    MovimentoCadastroComponent,
    MovimentoConsultaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
