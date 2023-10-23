import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  imagensBanner: string[] = [
    'assets/imagensbanner/principal.png',
    'assets/imagensbanner/principal1.png',
    'assets/imagensbanner/produto1.png',
    'assets/imagensbanner/produto2.png',
    'assets/imagensbanner/produto3.png',
    'assets/imagensbanner/gym1.png',
    'assets/imagensbanner/gym2.png'
  ];

  imagemAtualIndex: number = 0;

  ngOnInit() {
    this.iniciarCarrosel();
  }

  iniciarCarrosel(){
    setInterval(()=>{
      this.proximaImagem();
    }, 3000);
  }
  proximaImagem(){
    this.imagemAtualIndex = (this.imagemAtualIndex + 1) % this.imagensBanner.length;
    console.log('Imagem atual: ${this.imagemAtualIndex}');
    const imagens = document.querySelectorAll('.banner img');
    imagens.forEach((imagem) => {
      imagem.classList.remove('active');
    });

    imagens[this.imagemAtualIndex].classList.add('active');
  }
}
