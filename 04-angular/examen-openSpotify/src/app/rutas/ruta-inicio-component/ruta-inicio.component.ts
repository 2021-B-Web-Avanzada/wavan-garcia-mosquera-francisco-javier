import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-ruta-inicio-component',
  templateUrl: './ruta-inicio.component.html',
  styleUrls: ['./ruta-inicio.component.scss']
})
export class RutaInicioComponent implements OnInit {

  arregloRecomendaciones = [
    {
      id: 1,
      urlImagen: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/bd/RamMcCartneyalbumcover.jpg/220px-RamMcCartneyalbumcover.jpg',
      titulo: 'RAM (Archive Collection)'
    },
    {
      id: 2,
      urlImagen: 'http://www.suicidebystar.com/blog/wp-content/uploads/2012/12/moneystore.jpg',
      titulo: 'The Money Store'
    },
    {
      id: 3,
      urlImagen: 'https://images-na.ssl-images-amazon.com/images/I/81pV8tEPwhL._SL1500_.jpg',
      titulo: 'I\'m in your mind fuzz'
    },
    {
      id: 4,
      urlImagen: 'https://m.media-amazon.com/images/I/71RoGMpXr-L._SL1425_.jpg',
      titulo: 'Loveless'
    },
    {
      id: 5,
      urlImagen: 'https://upload.wikimedia.org/wikipedia/en/a/a1/All_Things_Must_Pass_1970_cover.jpg',
      titulo: 'All Things Must Pass'
    },
    {
      id: 6,
      urlImagen: 'https://i0.wp.com/www.scienceofnoise.net/wp-content/uploads/2020/09/kid-a-58da4e6d53cc6.jpg',
      titulo: 'Kid D'
    }
  ]

  arregloPrimeraFila = [
    {
      id: 1,
      urlImagen: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/bd/RamMcCartneyalbumcover.jpg/220px-RamMcCartneyalbumcover.jpg',
      titulo: 'RAM (Archive Collection)',
      descripcion: 'John Lennon',
      bordeStyle: 'border-radius:1px'
    },
    {
      id: 2,
      urlImagen: 'http://www.suicidebystar.com/blog/wp-content/uploads/2012/12/moneystore.jpg',
      titulo: 'The Money Store',
      descripcion: 'Death Grips',
      bordeStyle: 'border-radius:1px'
    },
    {
      id: 3,
      urlImagen: 'https://images-na.ssl-images-amazon.com/images/I/81pV8tEPwhL._SL1500_.jpg',
      titulo: 'I\'m in your mind fuzz',
      descripcion: 'Comic',
      bordeStyle: 'border-radius:1px'
    },
    {
      id: 4,
      urlImagen: 'https://m.media-amazon.com/images/I/71RoGMpXr-L._SL1425_.jpg',
      titulo: 'Comic',
      descripcion: 'Artista',
      bordeStyle: 'border-radius:50%'
    }
  ]

  arregloTarjetas = [
    {
      id: 1,
      tituloTarjeta: 'Recientemente escuchado'
    },
    {
      id: 2,
      tituloTarjeta: 'Lo que escuchan tus amigos'
    },
    {
      id: 3,
      tituloTarjeta: 'Nostalgia'
    },
    {
      id: 4,
      tituloTarjeta: 'Beatlemania'
    },
    {
      id: 5,
      tituloTarjeta: 'Comic'
    },
    {
      id: 6,
      tituloTarjeta: 'Vuelve a tu mes'
    }
  ]


  constructor() {
  }

  ngOnInit(): void {
  }

}
