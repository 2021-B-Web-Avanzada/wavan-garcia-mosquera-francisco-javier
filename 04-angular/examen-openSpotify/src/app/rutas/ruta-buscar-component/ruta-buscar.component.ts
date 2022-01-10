import { Component, OnInit } from '@angular/core';
import {NgbCarouselConfig} from "@ng-bootstrap/ng-bootstrap";


@Component({
  selector: 'app-ruta-buscar-component',
  templateUrl: './ruta-buscar.component.html',
  styleUrls: ['./ruta-buscar.component.scss'],
  providers: [NgbCarouselConfig]
})
export class RutaBuscarComponent implements OnInit {
  images = [700, 533, 807, 124].map((n) => `https://picsum.photos/id/${n}/900/500`);

  //constructor() {}
  arregloGeneros = [
    {
      id:1
    },
    {
      id:2
    },
    {
      id:3
    },
    {
      id:4
    },
    {
      id:5
    },
    {
      id:6
    },
    {
      id:7
    },
    {
      id:8
    },
    {
      id:1
    },
    {
      id:2
    },
    {
      id:3
    },
    {
      id:4
    },
    {
      id:5
    },
    {
      id:6
    },
    {
      id:7
    },
    {
      id:8
    }
  ];

  constructor(config: NgbCarouselConfig) {
    config.interval = 100000;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = false;
    config.showNavigationIndicators=false;
  }


  ngOnInit(): void {
  }

}
export class NgbdCarouselConfig {


}
