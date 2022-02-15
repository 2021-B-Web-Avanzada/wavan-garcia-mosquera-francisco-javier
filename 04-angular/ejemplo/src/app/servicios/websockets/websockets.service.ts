import {Injectable} from "@angular/core";
import {Socket} from "ngx-socket-io";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class WebsocketsService {
  constructor(private socket: Socket) {
  }

  ejecutarEventoHola() {
    const resp = this.socket.emit('hola', {
      nombre: 'Francisco'
    });
    console.log(resp)
  }

  escucharEventoHola() {
    return this.socket.fromEvent('escucharEventoHola');
  }

  ejecutarEventoUnirseSala(salaId: number, nombre: string) {
    this.socket.emit(
      'unirseSala', {
        salaId,
        nombre
      });
  }

  escucharEventoUnirseSala() {
    return this
      .socket
      .fromEvent('escucharEventoUnirseSala');
  }


  ejecutarEventoEnviarMensaje(salaId: number,
                              nombre: string,
                              mensaje:string) {
    this.socket.emit(
      'enviarMensaje', {
        salaId,
        nombre,
        mensaje
      });
  }

  escucharEventoEnviarMensaje() {
    return this
      .socket
      .fromEvent('escucharEventoMensajeSala');
  }
}
