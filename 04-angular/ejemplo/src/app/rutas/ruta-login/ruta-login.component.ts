import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-ruta-login',
  templateUrl: './ruta-login.component.html',
  styleUrls: ['./ruta-login.component.scss']
})
export class RutaLoginComponent implements OnInit {

  mostrarSegundoBanner = false;

  arregloUsuarios = [
    {
      id:1,
      nombre: 'Francisco',
      color:'#00BCFF',
      link:'https://comicec.bandcamp.com/album/cuartos-de-atr-s',
      linkImagen:'https://f4.bcbits.com/img/a2263477121_16.jpg'
    },
    {
      id:2,
      nombre: 'García',
      color:'#007AFF',
      link:'https://www.facebook.com/',
      linkImagen:'https://f4.bcbits.com/img/a0244972904_7.jpg'
    }
  ]

  constructor() {
  }

  ngOnInit(): void {
  }

  cambiarOcultarBanner() {
    this.mostrarSegundoBanner = !this.mostrarSegundoBanner
  }
}
