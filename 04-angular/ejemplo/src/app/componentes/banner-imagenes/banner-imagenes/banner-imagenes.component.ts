import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-banner-imagenes',
  templateUrl: './banner-imagenes.component.html',
  styleUrls: ['./banner-imagenes.component.scss']
})
export class BannerImagenesComponent implements OnInit {

  nombre = 'Francisco';
  apellido = 'Garcia'

  mascotas = {
    cachetes: {
      edad: 7
    }
  }

  @Input()
  url = 'http://www.google.com'

  @Input()
  urlImagen = 'https://f4.bcbits.com/img/a1436580974_10.jpg'

  @Input()
  color='yellow'

  fecha = new Date()
  sueldo = 1000

  constructor() {
  }

  ngOnInit(): void {
  }

  ejecutarEventoClick() {
    console.log({mensaje: 'click'})
  }

  ejecutarEventoBlur() {
    console.log({mensaje: 'blur'})
  }

}
