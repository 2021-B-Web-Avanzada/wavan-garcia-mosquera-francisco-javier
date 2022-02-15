import {ConnectedSocket, MessageBody, SubscribeMessage, WebSocketGateway} from "@nestjs/websockets";
import {Server, Socket} from "socket.io";

@WebSocketGateway(
    8080,
    {
        cors: {
            origin: '*',
        }
    })

export class EventosGateway {
    @SubscribeMessage('hola')
    devolverHola(
        @MessageBody()
            message: { nombre: string },
        @ConnectedSocket()
            socket: Socket
    ) {
        console.log(socket.id)
        socket.broadcast.emit('escucharEventoHola',
            {mensaje: 'Bienvenido ' + message})
        return 'ok'

    }


    @SubscribeMessage('unirseSala')
    unirseSala(
        @MessageBody()
            message: { salaId: string, nombre: string },
        @ConnectedSocket()
            socket: Socket
    ) {
        socket.join(message.salaId);
        const mensajeAEnviar: any = {
            mensaje: 'Bienvenido ' + message.nombre
        };
        socket.broadcast
            .to(message.salaId)
            .emit(
                'escucharEventoUnirseSala',
                mensajeAEnviar
            );
        return 'ok';
    }

    @SubscribeMessage('enviarMensaje')
    enviarMensaje(
        @MessageBody()
            message: {
            salaId: string,nombre: string, mensaje: string
        },
        @ConnectedSocket()
            socket: Socket
    ) {
        const nuevoMensaje = {
            nombre: message.nombre,
            mensaje: message.mensaje
        };
        socket.broadcast.to(message.salaId)
            .emit('escucharEventoMensajeSala'
                , nuevoMensaje);
        return 'ok';
    }
}
