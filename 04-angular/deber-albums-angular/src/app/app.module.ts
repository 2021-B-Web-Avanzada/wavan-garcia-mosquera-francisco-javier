import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlbumComponent } from './rutas/album/album.component';
import { CancionComponent } from './rutas/cancion/cancion.component';
import {HttpClientModule} from "@angular/common/http";
import { FormularioCancionComponent } from './componentes/formulario-cancion/formulario-cancion.component';
import { FormularioAlbumComponent } from './componentes/formulario-album/formulario-album.component';
import {FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormularioCrearAlbumComponent } from './componentes/formulario-crear-album/formulario-crear-album.component';
import { FormularioCrearCancionComponent } from './componentes/formulario-crear-cancion/formulario-crear-cancion.component';

@NgModule({
  declarations: [
    AppComponent,
    AlbumComponent,
    CancionComponent,
    FormularioCancionComponent,
    FormularioAlbumComponent,
    FormularioCrearAlbumComponent,
    FormularioCrearCancionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule

  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
