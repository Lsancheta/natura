import { Component, OnInit } from '@angular/core';
import { produtos } from '../produtos/produtos';

interface Produto{
  id: number;
  nome: string;
  preco: number;
  estoque: boolean;
  tipo:string;
  descricao:string;
  imagem: string;
  infoPeso: string;
  composicao: string;
  comoUsar: string;
  indicacao: string;
}

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})

export class ProdutosComponent implements OnInit {
  produtos: Produto[] = produtos;
  //produtos = produtos; // lista de todos os produtos
  produtosFiltrados: Produto[] = []; // lista de produtos filtrados
  tipoSelecionado = ''; // tipo de produto selecionado

  constructor() {}

  ngOnInit(): void{
    this.produtosFiltrados = this.produtos;
  }

  filtrarPorTipo(tipo: string):void{
    if ( tipo === 'todos'){
      this.produtosFiltrados = this.produtos;
    } else {
      this.produtosFiltrados = this.produtos.filter(produto => produto.tipo === tipo); 
    }
 
    this.tipoSelecionado = tipo;
  }
}
