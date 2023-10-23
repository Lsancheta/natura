import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { produtos } from '../produtos/produtos';

@Component({
  selector: 'app-detalhes-produto',
  templateUrl: './detalhes-produto.component.html',
  styleUrls: ['./detalhes-produto.component.css']
})
export class DetalhesProdutoComponent implements OnInit {
  produto: any; // Variável para armazenar o produto

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const produtoId = +params['id']; // Certifique-se de converter para número

      // Encontre o produto com base no ID
      this.produto = produtos.find(produto => produto.id === produtoId);

      // Se o produto não for encontrado, você pode redirecionar para uma página de erro ou lidar com isso de outra forma
      if (!this.produto) {
        // Por exemplo, redirecionar para a página de produtos
        this.router.navigate(['/produtos']);
      }
    });
  }
}
