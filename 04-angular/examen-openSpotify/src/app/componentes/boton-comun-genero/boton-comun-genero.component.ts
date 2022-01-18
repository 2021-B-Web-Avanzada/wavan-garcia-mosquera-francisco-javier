import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-boton-comun-genero',
  templateUrl: './boton-comun-genero.component.html',
  styleUrls: ['./boton-comun-genero.component.scss']
})
export class BotonComunGeneroComponent implements OnInit {

  @Input()
  urlImagen=''


  constructor() { }

  ngOnInit(): void {
  }

}
