import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CancionService} from "../../servicios/http/cancion/cancion.service";
import {CancionInterface} from "../../servicios/http/interfaces/cancion-interfaz";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-formulario-cancion',
  templateUrl: './formulario-cancion.component.html',
  styleUrls: ['./formulario-cancion.component.scss']
})
export class FormularioCancionComponent implements OnInit {

  idCancion = 0;
  cancionActual?: CancionInterface;
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
    private readonly cancionService: CancionService,
    private readonly formBuilder: FormBuilder,
  ) {
  }

  ngOnInit(): void {
    const parametrosRuta$ = this.activatedRoute.params;
    parametrosRuta$.subscribe(
      (parametrosRuta) => {
        console.log(parametrosRuta);
        this.idCancion = +parametrosRuta['idCancion'];
        this.buscarCancion(this.idCancion);
      },
      () => {
      },
      () => {
      }
    );
  }


  prepararObjeto(): CancionInterface {
    let cancion: CancionInterface = {
      titulo: this.formGroup?.get('titulo')?.value,
      duracion: this.formGroup?.get('duracion')?.value,
      explicito:  this.formGroup?.get('explicito')?.value,//boolean/undefined
      artistaSecundario: this.formGroup?.get('artistaSecundario')?.value
    };
    return cancion
  }

  actualizarCancion() {
    console.log("no",this.prepararObjeto())
    if (this.cancionActual) {
      const valoresAActualizar = this.prepararObjeto();
      const actualizar$ = this.cancionService
        .actualizar(
          this.idCancion,
          valoresAActualizar
        );
      actualizar$
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
  }

  guardar() {
    console.log('Guardar')
  }

  buscarCancion(id: number) {
    const buscarCancion$ = this.cancionService.buscarUno(id);
    buscarCancion$.subscribe(
      (data) => {
        this.cancionActual = data;
        this.prepararFormulario();
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
          value: this.cancionActual ? this.cancionActual.titulo : '',
          disabled: false//this.usuarioActual
        },
        [Validators.required]
      ),
      duracion: new FormControl(
        {
          value: this.cancionActual ? this.cancionActual.duracion : '',
          disabled: false//this.usuarioActual
        },
        [Validators.required]
      ),
      explicito: new FormControl(
        {
          value: this.cancionActual ? this.cancionActual.explicito : false,
          disabled: false//this.usuarioActual
        },
        [Validators.required]
      ),
      artistaSecundario: new FormControl(
        {
          value: this.cancionActual ? this.cancionActual.artistaSecundario : '',
          disabled: false//this.usuarioActual
        },
        [Validators.required]
      ),

    });

  }
}
