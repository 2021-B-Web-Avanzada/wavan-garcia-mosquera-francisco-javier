import { Component, OnInit } from '@angular/core';
import {NgbCarouselConfig} from "@ng-bootstrap/ng-bootstrap";


@Component({
  selector: 'app-ruta-buscar-component',
  templateUrl: './ruta-buscar.component.html',
  styleUrls: ['./ruta-buscar.component.scss'],
  providers: [NgbCarouselConfig]
})
export class RutaBuscarComponent implements OnInit {


  //constructor() {}
  arregloGeneros = [
    {
      id:1,
      src:'/assets/img/genero/9.JPG'
    },
    {
      id:2,
      src:'/assets/img/genero/1.JPG'
    },
    {
      id:3,
      src:'/assets/img/genero/2.JPG'
    },
    {
      id:3,
      src:'/assets/img/genero/3.JPG'
    },
    {
      id:3,
      src:'/assets/img/genero/4.JPG'
    },
    {
      id:3,
      src:'/assets/img/genero/5.JPG'
    },
    {
      id:3,
      src:'/assets/img/genero/6.JPG'
    },
    {
      id:3,
      src:'/assets/img/genero/7.JPG'
    },
    {
      id:3,
      src:'/assets/img/genero/8.JPG'
    },
    {
      id:3,
      src:'/assets/img/genero/10.JPG'
    },
    {
      id:3,
      src:'/assets/img/genero/11.JPG'
    },

    {
      id:3,
      src:'/assets/img/genero/13.JPG'
    }
  ];

  constructor(config: NgbCarouselConfig) {

  }


  ngOnInit(): void {
  }

}
export class NgbdCarouselConfig {


}
