import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RutaLoginComponent} from "./rutas/ruta-login/ruta-login.component";
import {RutaForbiddenComponent} from "./rutas/ruta-forbidden/ruta-forbidden.component";
import {RutaNotFoundComponent} from "./rutas/ruta-not-found/ruta-not-found.component";
import {RutaInicioComponent} from "./rutas/ruta-inicio/ruta-inicio.component";
import {RutaUsuarioComponent} from "./rutas/ruta-usuario/ruta-usuario.component";
import {RutaPostComponent} from "./rutas/ruta-post/ruta-post.component";
import {RutaAppComponent} from "./rutas/ruta-app/ruta-app.component";
import {EstaLogueadoGuard} from "./servicios/auth/esta-logueado.guard";
import {EsAdministradorGuard} from "./servicios/auth/es-administrador.guard";
import {RutaUsuarioPerfilComponent} from "./rutas/ruta-usuario-perfil/ruta-usuario-perfil.component";
import {RutaSalaComponent} from "./rutas/ruta-sala/ruta-sala.component";


//login
//inicio
//app
//usuario
//posts
//configuracion

const routes: Routes = [
  {
    path: 'login',
    component: RutaLoginComponent,
  },
  {
    path: ':salaId/sala/:nombre',
    component: RutaSalaComponent,
  },
  {
    path:'lazy-inventario',
    loadChildren: () => import('./modulos/modulo-inventario/modulo-inventario.module')
      .then(m=> m.ModuloInventarioModule)
  },
  {
    path: 'app',
    component: RutaAppComponent,
    canActivate: [EsAdministradorGuard],
    children: [
      {
        path: 'usuario',
        component: RutaUsuarioComponent
      },
      {
        path: 'usuario/:idUsuario',
        component: RutaUsuarioPerfilComponent
      },
      {
        path: 'post',
        component: RutaPostComponent
      }
    ]
  },
  {
    path: 'forbidden',
    component: RutaForbiddenComponent
  },
  {
    path: 'not-found',
    component: RutaNotFoundComponent
  },
  {
    path: 'inicio',
    canActivate:[EstaLogueadoGuard],
    component: RutaInicioComponent
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: RutaNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    {useHash: true},
  )],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
