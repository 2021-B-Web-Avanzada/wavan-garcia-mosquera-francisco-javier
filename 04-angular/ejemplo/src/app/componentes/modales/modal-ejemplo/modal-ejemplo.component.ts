import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RutaUsuarioPerfilComponent } from 'src/app/rutas/ruta-usuario-perfil/ruta-usuario-perfil.component';

@Component({
  selector: 'app-modal-ejemplo',
  templateUrl: './modal-ejemplo.component.html',
  styleUrls: ['./modal-ejemplo.component.scss']
})
export class ModalEjemploComponent implements OnInit {

  constructor(
    //decorador para que nos lleguen datos
    @Inject(MAT_DIALOG_DATA)
    public data:any,
    public dialogRef: MatDialogRef<RutaUsuarioPerfilComponent>,
  ) { }

  cerrarDialogo(){
    this.dialogRef.close({nombre:'Francisco'});
  }
  ngOnInit(): void {
  }

}
