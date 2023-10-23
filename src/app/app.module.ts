import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { ExerciciosComponent } from './exercicios/exercicios.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentComponent } from './content/content.component';
import { SubmenuProdutosComponent } from './submenu-produtos/submenu-produtos.component';
import { GraoComponent } from './grao/grao.component';
import { SuplementoComponent } from './suplemento/suplemento.component';
import { ListaProdutosComponent } from './lista-produtos/lista-produtos.component';
import { DetalhesProdutoComponent } from './detalhes-produto/detalhes-produto.component';
import { FooterComponent } from './footer/footer.component';
import { IndexComponent } from './index/index.component';

@NgModule({
  declarations: [
    AppComponent,
    ProdutosComponent,
    ExerciciosComponent,
    SidebarComponent,
    ContentComponent,
    SubmenuProdutosComponent,
    GraoComponent,
    SuplementoComponent,
    ListaProdutosComponent,
    DetalhesProdutoComponent,
    FooterComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
