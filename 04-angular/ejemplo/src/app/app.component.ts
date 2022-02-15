import {Component, OnInit} from '@angular/core';
import {WebsocketsService} from "./servicios/websockets/websockets.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'ejemplo';

  constructor(
    private readonly webSocketsService: WebsocketsService
  ) {
  }

  ngOnInit() {
    this.webSocketsService
      .escucharEventoHola()
      .subscribe(
        {
          next: (data) => {
            console.log(data);
          },
          error: (error) => {
            console.log(error);
          }
        }
      );
  }

  eventoHola() {
    this.webSocketsService.ejecutarEventoHola()
  }
}
