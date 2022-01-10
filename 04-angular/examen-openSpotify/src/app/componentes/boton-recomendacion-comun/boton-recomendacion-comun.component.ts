import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-boton-recomendacion-comun',
  templateUrl: './boton-recomendacion-comun.component.html',
  styleUrls: ['./boton-recomendacion-comun.component.scss']
})

export class BotonRecomendacionComunComponent implements OnInit {

  @Input()
  urlImagen="assets/img/album/loud-like-love.jpg"

  @Input()
  titulo="Titulo Genérico"

  @Input()
  descripcion="Descripción Genérica"

  @Input()
  bordeStyle="border-radius:50%"

  constructor() { }

  ngOnInit(): void {
  }

}

