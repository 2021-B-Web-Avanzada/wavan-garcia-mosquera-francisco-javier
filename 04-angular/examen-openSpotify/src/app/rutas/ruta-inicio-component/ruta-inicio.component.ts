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



  arregloTarjetas = [
    {
      id: 1,
      tituloTarjeta: 'Recientemente escuchado',
      contenido : [
        {
          id: 1,
          urlImagen: 'https://i.scdn.co/image/ab67616d0000b273913b6a1fd4817cb3328a7d22',
          titulo: 'Comic',
          descripcion: 'Artista',
          bordeStyle: 'border-radius:50%'
        },
        {
          id: 2,
          urlImagen: 'https://www.humonegro.com/wp-content/BLACK-MIDI-CAVALCADE.png',
          titulo: 'Cavalcade',
          descripcion: 'Black Midi',
          bordeStyle: 'border-radius:1px'
        },
        {
          id: 3,
          urlImagen: 'https://ismorbo.com/wp-content/uploads/2019/11/fka-twigs-magdalene.jpg',
          titulo: 'MAGDALANE',
          descripcion: 'FKA twigs',
          bordeStyle: 'border-radius:1px'
        },
        {
          id: 4,
          urlImagen: 'https://www.mondosonoro.com/wp-content/uploads/2019/08/lingua_ignota_caligula.jpg',
          titulo: 'Caligula',
          descripcion: 'Lingua Ignota',
          bordeStyle: 'border-radius:1px'
        }
      ]
    },
    {
      id: 2,
      tituloTarjeta: 'Artistas recomendados',
      contenido : [
        {
          id: 1,
          urlImagen: 'data:image/jpeg;base64,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',
          titulo: 'OASIS',
          descripcion: 'Artista',
          bordeStyle: 'border-radius:50%'
        },
        {
          id: 2,
          urlImagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzvwMC1-sAOQWCvLULwsCbdBzQ85-Gfs9mRA&usqp=CAU',
          titulo: 'Munn',
          descripcion: 'Artista',
          bordeStyle: 'border-radius:50%'
        },
        {
          id: 3,
          urlImagen: 'https://m.media-amazon.com/images/I/81TqDIiKLVL._SS500_.jpg',
          titulo: 'Death Grips',
          descripcion: 'Artista',
          bordeStyle: 'border-radius:50%'
        },
        {
          id: 4,
          urlImagen: 'data:image/jpeg;base64,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',
          titulo: 'Black Midi',
          descripcion: 'Artista',
          bordeStyle: 'border-radius:50%'
        },
      ]
    },
    {
      id: 3,
      tituloTarjeta: 'Nostalgia',
      contenido : [
        {
          id: 1,
          urlImagen: 'https://media.pitchfork.com/photos/6019c47c5de6cbd35d68b402/1:1/w_600/Black-Country-New-Road-For-the-first-time.jpg',
          titulo: 'For The First Time',
          descripcion: 'Black Country, New Road',
          bordeStyle: 'border-radius:1px'
        },
        {
          id: 2,
          urlImagen: 'https://pm1.narvii.com/6763/4820616d684ea6319853483f878cc85097733507v2_hq.jpg',
          titulo: 'Lift your skinny fists...',
          descripcion: 'Godspeed You Black E...',
          bordeStyle: 'border-radius:1px'
        },
        {
          id: 3,
          urlImagen: 'https://f4.bcbits.com/img/a0265836195_10.jpg',
          titulo: 'Odisea',
          descripcion: 'Munn',
          bordeStyle: 'border-radius:1px'
        },
        {
          id: 4,
          urlImagen: 'https://is2-ssl.mzstatic.com/image/thumb/Music125/v4/4e/2a/2e/4e2a2ec7-1b02-a1b0-5e38-a169ed3c9fb7/21UMGIM02518.rgb.jpg/500x0w.jpg',
          titulo: 'Butterfly 3000',
          descripcion: 'King Gizzard and The Liz...',
          bordeStyle: 'border-radius:1px'
        },
      ]
    },
    {
      id: 4,
      tituloTarjeta: 'Beatlemania',
      contenido : [
        {
          id: 1,
          urlImagen: 'https://upload.wikimedia.org/wikipedia/en/3/39/Paul_McCartney_-_McCartney.jpg',
          titulo: 'McCartney',
          descripcion: 'Paul McCartney',
          bordeStyle: 'border-radius:1px'
        },
        {
          id: 2,
          urlImagen: 'https://m.media-amazon.com/images/I/91Wp+hSOvnL._SY355_.jpg',
          titulo: 'Plastic Ono Band',
          descripcion: 'John Lennon/Plastic On...',
          bordeStyle: 'border-radius:1px'
        },
        {
          id: 3,
          urlImagen: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c2/All_Things_Must_Pass_%282001%29_-_Album_Artwork.jpg/220px-All_Things_Must_Pass_%282001%29_-_Album_Artwork.jpg',
          titulo: 'All Things Must Pass',
          descripcion: 'George Harrison',
          bordeStyle: 'border-radius:1px'
        },
        {
          id: 4,
          urlImagen: 'http://pm1.narvii.com/6912/40a239429464a9d699f43461deaca9a6e3d901der1-802-800v2_uhq.jpg',
          titulo: 'Revolver',
          descripcion: 'The Beatles',
          bordeStyle: 'border-radius:1px'
        },
      ]
    },
    {
      id: 5,
      tituloTarjeta: 'Comic',
      contenido : [
        {
          id: 1,
          urlImagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoML4J9vDY58Z-kFHe1MyDZgz5GD6agWN2ZE_W12VOUZEOmxSEks5ITKagBKqz0FM5&usqp=CAU',
          titulo: 'OMG Donda 2!',
          descripcion: 'Ye',
          bordeStyle: 'border-radius:1px'
        },
        {
          id: 2,
          urlImagen: 'https://f4.bcbits.com/img/a2119432069_10.jpg',
          titulo: 'JINX',
          descripcion: 'Crumb',
          bordeStyle: 'border-radius:1px'
        },
        {
          id: 3,
          urlImagen: 'https://www.mondosonoro.com/wp-content/uploads/2020/02/tame-impala-nuevo-disco.jpg',
          titulo: 'The Slow Rush',
          descripcion: 'Don Medardo y sus Players',
          bordeStyle: 'border-radius:1px'
        },
        {
          id: 4,
          urlImagen: 'https://f4.bcbits.com/img/a3751659521_10.jpg',
          titulo: 'The Turning Wheel',
          descripcion: 'SPELLING',
          bordeStyle: 'border-radius:1px'
        },
      ]
    },
    {
      id: 6,
      tituloTarjeta: 'Para Tí',
      contenido : [
        {
          id: 1,
          urlImagen: 'https://newjams-images.scdn.co/image/ab676477000033ad/dt/v3/discover-weekly/aAbca4VNfzWuUCQ_FGiEFA==/bmVuZW5lbmVuZW5lbmVuZQ==',
          titulo: 'Descubrimiento semanal',
          descripcion: 'Crumb, Comic, Father John Misty, Ye, Black Midi,...',
          bordeStyle: 'border-radius:1px'
        },
        {
          id: 2,
          urlImagen: 'https://pbs.twimg.com/media/CtcVNESWIAEYGWI.jpg',
          titulo: 'Daily Mix 1',
          descripcion: 'Death, Bob Dylan, Led, Beastie Boys, Beach, ..',
          bordeStyle: 'border-radius:1px'
        },
        {
          id: 3,
          urlImagen: 'https://i.redd.it/avxncpgy8do11.png',
          titulo: 'Daily Mix 2',
          descripcion: 'Comunicate, King Gizzard and the Lizard Gizzard,...',
          bordeStyle: 'border-radius:1px'
        },
        {
          id: 4,
          urlImagen: 'https://i.pinimg.com/474x/f3/77/87/f37787dab83272540b31a8b566455e7e.jpg',
          titulo: 'Daily Mix 3',
          descripcion: 'Ariana Grande, Kanye, Kim, Uptight, BTS,...',
          bordeStyle: 'border-radius:1px'
        },
      ]
    }
  ]


  constructor() {
  }

  ngOnInit(): void {
  }

}
