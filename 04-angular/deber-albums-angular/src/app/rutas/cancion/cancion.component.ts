import { Component, OnInit } from '@angular/core';
import {AlbumInterface} from "../../servicios/http/interfaces/album-interfaz";
import {AlbumService} from "../../servicios/http/album/album.service";
import {ActivatedRoute, Router} from "@angular/router";
import {CancionInterface} from "../../servicios/http/interfaces/cancion-interfaz";
import {CancionService} from "../../servicios/http/cancion/cancion.service";

@Component({
  selector: 'app-cancion',
  templateUrl: './cancion.component.html',
  styleUrls: ['./cancion.component.scss']
})
export class CancionComponent implements OnInit {
  arregloDeCanciones:CancionInterface[]= [];
  buscarUsuario = '';

  constructor(
    private readonly cancionService: CancionService,
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    const parametrosConsulta$ = this.activatedRoute
      .queryParams;
    parametrosConsulta$
      .subscribe(
        {
          next: (queryParams) => {
            this.buscarUsuario = queryParams['name']
            this.buscarCanciones();
          },
          error: () => {

          },
          complete: () => {

          },
        }
      );
  }

  actualizarParametrosDeConsulta(){
    this.router
      .navigate(
        ['/app','usuario'],
        {
          queryParams:{
            name:this.buscarUsuario
          }
        }
      )
  }

  buscarCanciones() {
    this.cancionService
      .buscarTodos()
      .subscribe({
        next: (datos) => {
          this.arregloDeCanciones = datos;
          this.buscarUsuario = '';
          console.log(this.arregloDeCanciones)
        },
        error: (error) => {
          console.error({error});
        }
      })
  }

  actualizarCancion(idCancion: number){
    const ruta = ['/cancion', idCancion];
    this.router.navigate(ruta);
  }

  eliminarCancion(idCancion: number){
    this.cancionService
      .eliminar(idCancion)
      .subscribe({
        next: (datos) => {
          window.location.reload();
        },
        error: (error) => {
          console.error({error});
        }
      })
  }

  crearCancion() {
    const ruta = ['/cancion-nueva'];
    this.router.navigate(ruta);
  }


}
