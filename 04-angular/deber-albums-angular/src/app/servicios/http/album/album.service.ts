import { Injectable } from '@angular/core';
import {AlbumAActualizarInterface, AlbumInterface} from "../interfaces/album-interfaz";
import {map, Observable} from "rxjs";
import {environment} from "../../../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'any'
})
export class AlbumService {

  constructor(
    private readonly httpClient: HttpClient
  ) { }

  buscarTodos(): Observable<AlbumInterface[]> {
    const url = environment.url + '/album'
    return this.httpClient
      .get(url)
      .pipe(
        map(
          (resultadoEnDatos) => resultadoEnDatos as AlbumInterface[]
        )
      )
  }

  buscarUno(idAlbum: number): Observable<AlbumInterface> {
    const url = environment.url + '/album/' + idAlbum
    return this.httpClient
      .get(url)
      .pipe(
        map(
          (resultadoEnDatos) => resultadoEnDatos as AlbumInterface
        )
      )
  }

  actualizar(idAlbum: number, datosActualizar: AlbumAActualizarInterface): Observable<AlbumInterface> {
    const url = environment.url + '/album/'+idAlbum;
    return this.httpClient
      .put(url, datosActualizar)
      .pipe(map(
        (resultadoEnData) => resultadoEnData as AlbumInterface
      ))
  }

  eliminar(idAlbum: number){
    const url = environment.url + '/album/'+idAlbum;
    return this.httpClient
      .delete(url)
      .pipe(map(
        (resultadoEnData) => resultadoEnData
      ))
  }

  crear(datosActualizar: AlbumAActualizarInterface): Observable<AlbumInterface> {
    const url = environment.url + '/album/';
    return this.httpClient
      .post(url, datosActualizar)
      .pipe(map(
        (resultadoEnData) => resultadoEnData as AlbumInterface
      ))
  }
}
