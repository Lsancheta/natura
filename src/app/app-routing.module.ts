import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutosComponent } from './produtos/produtos.component';
import { ExerciciosComponent } from './exercicios/exercicios.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SubmenuProdutosComponent } from './submenu-produtos/submenu-produtos.component';
import { SuplementoComponent } from './suplemento/suplemento.component';
import { GraoComponent } from './grao/grao.component';
import { DetalhesProdutoComponent } from './detalhes-produto/detalhes-produto.component';
import { IndexComponent } from './index/index.component';

const routes: Routes = [
  { path: 'exercicios', component: ExerciciosComponent },
  { path: 'sidebar', component: SidebarComponent },
  { path: '', component: IndexComponent}, // rota padrao main
  { 
    path: 'produtos', 
    component: ProdutosComponent,
    children: [
      {path: '', redirectTo: 'todos', pathMatch: 'full'}, // rota padrao para produtos
      { path: 'todos', component: SubmenuProdutosComponent},
      { path: 'grao', component: GraoComponent},
      { path: 'suplemento', component: SuplementoComponent},
    ] },
    { path: 'produtos/:id', component: DetalhesProdutoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
