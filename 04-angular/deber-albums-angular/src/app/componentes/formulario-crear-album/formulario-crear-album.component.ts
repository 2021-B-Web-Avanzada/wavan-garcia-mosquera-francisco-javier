import {Component, OnInit} from '@angular/core';
import {AlbumAActualizarInterface} from "../../servicios/http/interfaces/album-interfaz";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {AlbumService} from "../../servicios/http/album/album.service";

@Component({
  selector: 'app-formulario-crear-album',
  templateUrl: './formulario-crear-album.component.html',
  styleUrls: ['./formulario-crear-album.component.scss']
})
export class FormularioCrearAlbumComponent implements OnInit {

  formGroup!: FormGroup;
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
    private readonly albumService: AlbumService,
    private readonly formBuilder: FormBuilder,
  ) {
  }

  ngOnInit(): void {
    this.prepararFormulario()
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
      artista: new FormControl(
        {
          value: '',
          disabled: false//this.usuarioActual
        },
        [Validators.required]
      ),
      recopilatorio: new FormControl(
        {
          value: false,
          disabled: false//this.usuarioActual
        },
        [Validators.required]
      ),
      productor: new FormControl(
        {
          value: '',
          disabled: false//this.usuarioActual
        },
        [Validators.required]
      ),
      anio: new FormControl(
        {
          value: '',
          disabled: false
        },
        [Validators.required]
      ),

    });

  }

  crearAlbum() {
    console.log(this.prepararObjeto())
    const valoresNuevos = this.prepararObjeto();
    const crear$ = this.albumService
      .crear(
        valoresNuevos
      );
    crear$
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
