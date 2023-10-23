import { Component, OnInit } from '@angular/core';
import { produtos } from '../produtos/produtos';

@Component({
  selector: 'app-lista-produtos',
  templateUrl: './lista-produtos.component.html',
  styleUrls: ['./lista-produtos.component.css']
})
export class ListaProdutosComponent implements OnInit {
  produtos = produtos;

  constructir() { }

  ngOnInit(): void{
    
  }
}
