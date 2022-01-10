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
      urlImagen:'https://upload.wikimedia.org/wikipedia/en/thumb/b/bd/RamMcCartneyalbumcover.jpg/220px-RamMcCartneyalbumcover.jpg',
      titulo:'RAM (Archive Collection)',
      descripcion:'John Lennon',
      bordeStyle:'border-radius:1px'
    },
    {
      id:2,
      urlImagen:'http://www.suicidebystar.com/blog/wp-content/uploads/2012/12/moneystore.jpg',
      titulo:'The Money Store',
      descripcion:'Death Grips',
      bordeStyle:'border-radius:1px'
    },
    {
      id:3,
      urlImagen:'https://images-na.ssl-images-amazon.com/images/I/81pV8tEPwhL._SL1500_.jpg',
      titulo:'I\'m in your mind fuzz',
      descripcion:'Comic',
      bordeStyle:'border-radius:1px'
    },
    {
      id:4,
      urlImagen:'https://m.media-amazon.com/images/I/71RoGMpXr-L._SL1425_.jpg',
      titulo:'Comic',
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
