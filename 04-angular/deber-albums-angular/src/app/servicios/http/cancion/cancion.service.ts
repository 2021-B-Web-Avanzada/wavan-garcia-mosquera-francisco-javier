import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {environment} from "../../../../environments/environment";
import {CancionInterface} from "../interfaces/cancion-interfaz";
import {AlbumAActualizarInterface, AlbumInterface} from "../interfaces/album-interfaz";

@Injectable({
  providedIn: 'any'
})
export class CancionService {

  constructor(
    private readonly httpClient: HttpClient
  ) { }

  buscarTodos(): Observable<CancionInterface[]> {
    const url = environment.url + '/cancion'
    return this.httpClient
      .get(url)
      .pipe(
        map(
          (resultadoEnDatos) => resultadoEnDatos as CancionInterface[]
        )
      )
  }

  buscarUno(idCancion: number): Observable<CancionInterface> {
    const url = environment.url + '/cancion/' + idCancion
    return this.httpClient
      .get(url)
      .pipe(
        map(
          (resultadoEnDatos) => resultadoEnDatos as CancionInterface
        )
      )
  }

  actualizar(idCancion: number, datosActualizar: CancionInterface): Observable<CancionInterface> {
    const url = environment.url + '/cancion/'+idCancion;
    return this.httpClient
      .put(url, datosActualizar)
      .pipe(map(
        (resultadoEnData) => resultadoEnData as CancionInterface
      ))
  }

  eliminar(idCancion: number){
    const url = environment.url + '/cancion/'+idCancion;
    return this.httpClient
      .delete(url)
      .pipe(map(
        (resultadoEnData) => resultadoEnData
      ))
  }

  crear(idAlbum: number,datosActualizar: CancionInterface): Observable<CancionInterface> {
    const url = environment.url + '/cancion/'+idAlbum;
    return this.httpClient
      .post(url, datosActualizar)
      .pipe(map(
        (resultadoEnData) => resultadoEnData as CancionInterface
      ))
  }
}
