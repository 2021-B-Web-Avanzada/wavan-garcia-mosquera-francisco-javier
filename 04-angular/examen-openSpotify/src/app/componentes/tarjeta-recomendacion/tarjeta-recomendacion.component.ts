import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-tarjeta-recomendacion',
  templateUrl: './tarjeta-recomendacion.component.html',
  styleUrls: ['./tarjeta-recomendacion.component.scss']
})
export class TarjetaRecomendacionComponent implements OnInit {
  arregloPrimeraFila = [
    {
      id:1,
      urlImagen:'https://i.scdn.co/image/ab67616d0000b2739ad2a9d4362443234a1a70b6',
      titulo:'Cuartos de Atrás',
      descripcion:'Comic',
      bordeStyle:'border-radius:1px'
    },
    {
      id:2,
      urlImagen:'https://f4.bcbits.com/img/0019615438_10.jpg',
      titulo:'Comic',
      descripcion:'Artista',
      bordeStyle:'border-radius:50%'
    },
    {
      id:3,
      urlImagen:'https://i.pinimg.com/originals/f9/f2/d0/f9f2d04a4f0706917e12e1a81b3dcdf8.jpg',
      titulo:'Club de Arte EPN',
      descripcion:'De la Calle a la Cima',
      bordeStyle:'border-radius:1px'
    },
    {
      id:4,
      urlImagen:'https://lastfm.freetls.fastly.net/i/u/500x500/126d402e276d4495b456224fe0bf0da2.jpg',
      titulo:'Beastie Boys',
      descripcion:'Artista',
      bordeStyle:'border-radius:50%'
    }
  ]

  @Input()
  tituloTarjeta="TituloTarjetaGenérico"

  constructor() { }

  ngOnInit(): void {
  }

}
