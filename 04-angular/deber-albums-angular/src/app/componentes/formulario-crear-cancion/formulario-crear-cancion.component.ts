import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {AlbumService} from "../../servicios/http/album/album.service";
import {AlbumAActualizarInterface, AlbumInterface} from "../../servicios/http/interfaces/album-interfaz";
import {CancionService} from "../../servicios/http/cancion/cancion.service";
import {CancionInterface} from "../../servicios/http/interfaces/cancion-interfaz";

@Component({
  selector: 'app-formulario-crear-cancion',
  templateUrl: './formulario-crear-cancion.component.html',
  styleUrls: ['./formulario-crear-cancion.component.scss']
})
export class FormularioCrearCancionComponent implements OnInit {

  formGroup!: FormGroup;
  idAlbum:number=0
  arregloDeAlbums: AlbumInterface[]=[]

  items = [
    {
      label: 'Update', icon: 'pi pi-refresh', command: () => {
        console.log('Hola')
      }
    },
    {label: 'Setup', icon: 'pi pi-cog', routerLink: ['/setup']}
  ]

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly router: Router,
    private readonly cancionService: CancionService,
    private readonly albumService: AlbumService,
    private readonly formBuilder: FormBuilder,
  ) {
  }

  ngOnInit(): void {
    this.prepararFormulario()
    this.buscarAlbums()
  }

  prepararObjeto(): CancionInterface {
    let cancion: CancionInterface = {
      titulo: this.formGroup?.get('titulo')?.value,
      duracion: this.formGroup?.get('duracion')?.value,
      explicito:  this.formGroup?.get('explicito')?.value,//boolean/undefined
      artistaSecundario: this.formGroup?.get('artistaSecundario')?.value
    };
    this.idAlbum=this.formGroup.get('album')?.value[0]
    return cancion
  }

  private prepararFormulario() {
    //console.log(this.cancionActual)
    this.formGroup = this.formBuilder.group({
      titulo: new FormControl(
        {
          value: '',
          disabled: false//this.usuarioActual
        },
        [Validators.required]
      ),
      duracion: new FormControl(
        {
          value: '',
          disabled: false//this.usuarioActual
        },
        [Validators.required]
      ),
      explicito: new FormControl(
        {
          value: false,
          disabled: false//this.usuarioActual
        },
        [Validators.required]
      ),
      artistaSecundario: new FormControl(
        {
          value: '',
          disabled: false//this.usuarioActual
        },
        [Validators.required]
      ),
      album: new FormControl(
        {
          value: '',
          disabled: false//this.usuarioActual
        },
        [Validators.required]
      )

    });

  }

  crearCancion() {
    const valoresNuevos = this.prepararObjeto();
    const crear$ = this.cancionService
      .crear(this.idAlbum,
        valoresNuevos
      );
    crear$
      .subscribe({
        next: (datos) => {
          console.log({datos});
          const url = ['/cancion'];
          this.router.navigate(url);
        },
        error: (error) => {
          console.log({error})
        }
      });

  }

  buscarAlbums() {
    this.albumService
      .buscarTodos()
      .subscribe({
        next: (datos) => {
          this.arregloDeAlbums = datos;
        },
        error: (error) => {
          console.error({error});
        }
      })
  }

}
