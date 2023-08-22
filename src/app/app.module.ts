import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { ProdutoCadastroComponent } from './components/produto-cadastro/produto-cadastro.component';
import { ProdutoConsultaComponent } from './components/produto-consulta/produto-consulta.component';
import { MovimentoCadastroComponent } from './components/movimento-cadastro/movimento-cadastro.component';
import { MovimentoConsultaComponent } from './components/movimento-consulta/movimento-consulta.component';

const routes: Routes = [

  { path: 'produto-cadastro' , component: ProdutoCadastroComponent },
  { path: 'produto-consulta', component: ProdutoConsultaComponent },
  { path: 'movimento-cadastro', component: MovimentoCadastroComponent },
  { path: 'movimento-consulta' , component: MovimentoConsultaComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    ProdutoCadastroComponent,
    ProdutoConsultaComponent,
    MovimentoCadastroComponent,
    MovimentoConsultaComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
