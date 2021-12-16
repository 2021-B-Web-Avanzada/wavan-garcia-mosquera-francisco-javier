import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RutaLoginComponent } from './rutas/ruta-login/ruta-login.component';
import { RutaForbiddenComponent } from './rutas/ruta-forbidden/ruta-forbidden.component';
import { RutaNotFoundComponent } from './rutas/ruta-not-found/ruta-not-found.component';
import { RutaInicioComponent } from './rutas/ruta-inicio/ruta-inicio.component';
import { RutaUsuarioComponent } from './rutas/ruta-usuario/ruta-usuario.component';
import { RutaPostComponent } from './rutas/ruta-post/ruta-post.component';
import { RutaAppComponent } from './rutas/ruta-app/ruta-app.component';
import {EstaLogueadoGuard} from "./servicios/auth/esta-logueado.guard";
import {AuthService} from "./servicios/auth/auth.service";
import {EsAdministradorGuard} from "./servicios/auth/es-administrador.guard";


@NgModule({

  //componentes
  declarations: [
    AppComponent,
    RutaLoginComponent,
    RutaForbiddenComponent,
    RutaNotFoundComponent,
    RutaInicioComponent,
    RutaUsuarioComponent,
    RutaPostComponent,
    RutaAppComponent
  ],

  //modulos
  imports: [
    BrowserModule,
    AppRoutingModule
  ],

  //servicios
  providers: [
    AuthService,
    EstaLogueadoGuard,
    EsAdministradorGuard
  ],

  //componente principal, aquí empieza todo
  bootstrap: [AppComponent]
})
export class AppModule { }
