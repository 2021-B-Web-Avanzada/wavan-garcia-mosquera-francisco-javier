import {NgModule, OnChanges, SimpleChanges} from '@angular/core';
import {Router, RouterModule, Routes} from '@angular/router';
import {AlbumComponent} from "./rutas/album/album.component";
import {CancionComponent} from "./rutas/cancion/cancion.component";
import {FormularioCancionComponent} from "./componentes/formulario-cancion/formulario-cancion.component";
import {FormularioAlbumComponent} from "./componentes/formulario-album/formulario-album.component";
import {FormularioCrearCancionComponent} from "./componentes/formulario-crear-cancion/formulario-crear-cancion.component";
import {FormularioCrearAlbumComponent} from "./componentes/formulario-crear-album/formulario-crear-album.component";


const routes: Routes = [
  {
    path: 'cancion',
    component: CancionComponent
  },
  {
    path:'album',
    component: AlbumComponent
  },
  {
    path: 'album/:idAlbum',
    component: FormularioAlbumComponent
  },
  {
    path: 'cancion/:idCancion',
    component: FormularioCancionComponent
  },
  {
    path: 'cancion-nueva',
    component: FormularioCrearCancionComponent
  },
  {
    path: 'album-nuevo',
    component: FormularioCrearAlbumComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    {onSameUrlNavigation: 'reload',useHash:true},
  )],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
