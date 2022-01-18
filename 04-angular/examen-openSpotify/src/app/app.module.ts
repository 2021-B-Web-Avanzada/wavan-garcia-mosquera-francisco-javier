import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReproductorComponent } from './componentes/reproductor/reproductor.component';
import { MenuLateralComponent } from './componentes/menu-lateral/menu-lateral.component';
import { BotonRecomendacionInicialComponent } from './componentes/boton-recomendacion-inicial/boton-recomendacion-inicial.component';
import { TarjetaRecomendacionComponent } from './componentes/tarjeta-recomendacion/tarjeta-recomendacion.component';
import { BotonRecomendacionComunComponent } from './componentes/boton-recomendacion-comun/boton-recomendacion-comun.component';
import { BotonComunGeneroComponent } from './componentes/boton-comun-genero/boton-comun-genero.component';
import { RutaInicioComponent } from './rutas/ruta-inicio-component/ruta-inicio.component';
import { RutaBuscarComponent } from './rutas/ruta-buscar-component/ruta-buscar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,

    ReproductorComponent,
    MenuLateralComponent,
    BotonRecomendacionInicialComponent,
    TarjetaRecomendacionComponent,
    BotonRecomendacionComunComponent,
    BotonComunGeneroComponent,

    RutaInicioComponent,
    RutaBuscarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
