import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-boton-recomendacion-inicial',
  templateUrl: './boton-recomendacion-inicial.component.html',
  styleUrls: ['./boton-recomendacion-inicial.component.scss']
})
export class BotonRecomendacionInicialComponent implements OnInit {

  @Input()
  urlImagen="assets/img/album/loud-like-love.jpg"

  @Input()
  titulo="Titulo Genérico"


  constructor() { }

  ngOnInit(): void {
  }

}
