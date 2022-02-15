import { Component, OnInit } from '@angular/core';
import {CancionInterface} from "../../servicios/http/interfaces/cancion-interfaz";
import {ActivatedRoute, Router} from "@angular/router";
import {CancionService} from "../../servicios/http/cancion/cancion.service";
import {AlbumAActualizarInterface, AlbumInterface} from "../../servicios/http/interfaces/album-interfaz";
import {AlbumService} from "../../servicios/http/album/album.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-formulario-album',
  templateUrl: './formulario-album.component.html',
  styleUrls: ['./formulario-album.component.scss']
})
export class FormularioAlbumComponent implements OnInit {

  idAlbum = 0;
  albumActual?: AlbumInterface;
  formGroup!: FormGroup;
  tracklist: CancionInterface[] = [];
  items = [
    {
      label: 'Update',icon:'pi pi-refresh',command: () => {
        console.log('Hola')
      }
    },
    {label:'Setup',icon:'pi pi-cog',routerLink:['/setup']}
  ]
  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly router: Router,
    private readonly albumService: AlbumService,
    private readonly formBuilder: FormBuilder,

  ) { }

  ngOnInit(): void {
    console.log("parametrosRuta");
    const parametrosRuta$ = this.activatedRoute.params;
    parametrosRuta$.subscribe(
      (parametrosRuta) => {
        console.log(parametrosRuta);
        this.idAlbum = +parametrosRuta['idAlbum'];
        this.buscarAlbum(this.idAlbum);
      },
      () => {
      },
      () => {
      }
    );
  }

  prepararObjeto(): AlbumAActualizarInterface {
    let album: AlbumAActualizarInterface = {
      titulo: this.formGroup?.get('titulo')?.value,
      artista: this.formGroup?.get('artista')?.value,
      recopilatorio: this.formGroup?.get('recopilatorio')?.value,
      productor: this.formGroup?.get('productor')?.value,
      anio: this.formGroup?.get('anio')?.value,
    };
    return album
  }

  actualizarAlbum() {
    console.log("s",this.prepararObjeto())
    if (this.albumActual) {
      const valoresAActualizar = this.prepararObjeto();
      const actualizar$ = this.albumService
        .actualizar(
          this.idAlbum,
          valoresAActualizar
        );
      actualizar$
        .subscribe({
          next: (datos) => {
            console.log({datos});
            const url = ['/album'];
            this.router.navigate(url);
          },
          error: (error) => {
            console.log({error})
          }
        });
    }
  }


  guardar(){
    console.log('Guardar')
  }

  buscarAlbum(id: number) {
    const buscarAlbum$ = this.albumService.buscarUno(id);
    buscarAlbum$.subscribe(
      (data) => {
        this.albumActual = data;
        this.prepararFormulario();
        if(this.albumActual.canciones){
          this.tracklist = this.albumActual.canciones
        }
        else{
          this.tracklist=[]
        }
        console.log("tracklist",this.tracklist);
      },
      (error) => {
        console.log(error);
      },
      () => {
      }

    );
  }

  private prepararFormulario() {
    //console.log(this.cancionActual)
    this.formGroup = this.formBuilder.group({
      titulo: new FormControl(
        {
          value: this.albumActual ? this.albumActual.titulo : '',
          disabled: false//this.usuarioActual
        },
        [Validators.required]
      ),
      artista: new FormControl(
        {
          value: this.albumActual ? this.albumActual.artista : '',
          disabled: false//this.usuarioActual
        },
        [Validators.required]
      ),
      recopilatorio: new FormControl(
        {
          value: this.albumActual ? this.albumActual.recopilatorio : false,
          disabled: false//this.usuarioActual
        },
        [Validators.required]
      ),
      productor: new FormControl(
        {
          value: this.albumActual ? this.albumActual.productor : '',
          disabled: false//this.usuarioActual
        },
        [Validators.required]
      ),
      anio: new FormControl(
        {
          value: this.albumActual ? this.albumActual.anio : '',
          disabled: false//this.usuarioActual
        },
        [Validators.required]
      ),

    });

  }
}
