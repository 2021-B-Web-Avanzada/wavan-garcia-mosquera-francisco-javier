import {Component, Injectable, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AlbumService} from "../../servicios/http/album/album.service";
import {AlbumInterface} from "../../servicios/http/interfaces/album-interfaz";


@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {
  arregloDeAlbums:AlbumInterface[]= [];
  album = '';

  constructor(
    private readonly albumService: AlbumService,
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
            this.album = queryParams['name']
            this.buscarAlbums();
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
            name:this.album
          }
        }
      )
  }

  buscarAlbums() {
    this.albumService
      .buscarTodos()
      .subscribe({
        next: (datos) => {
          this.arregloDeAlbums = datos;
          this.album = '';
          console.log(this.arregloDeAlbums)
        },
        error: (error) => {
          console.error({error});
        }
      })
  }

  actualizarAlbum(idAlbum: number){
    const ruta = ['/album', idAlbum];
    this.router.navigate(ruta);
  }

  eliminarAlbum(idAlbum: number){
    this.albumService
      .eliminar(idAlbum)
      .subscribe({
        next: (datos) => {
          window.location.reload();
        },
        error: (error) => {
          console.error({error});
        }
      })
  }

  crearAlbum() {
    const ruta = ['/album-nuevo'];
    this.router.navigate(ruta);
  }
}
