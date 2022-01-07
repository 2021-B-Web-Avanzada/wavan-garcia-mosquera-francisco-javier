import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RutaInicioComponent} from "./rutas/ruta-inicio-component/ruta-inicio.component";
import {RutaBuscarComponent} from "./rutas/ruta-buscar-component/ruta-buscar.component";

const routes: Routes = [
  {
    path: '',
    component: RutaInicioComponent
  },
  {
    path: 'buscar',
    component: RutaBuscarComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
