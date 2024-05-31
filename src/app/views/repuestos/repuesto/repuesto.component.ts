import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonDirective, CardBodyComponent, CardComponent, CardHeaderComponent, ColComponent, FormControlDirective, FormDirective, FormLabelDirective, FormSelectDirective, RowComponent, TableActiveDirective, TableColorDirective, TableDirective, TextColorDirective } from '@coreui/angular';
import { DocsExampleComponent } from '@docs-components/public-api';
import {repuestoModel} from '../models/repuesto.model';
import {repuestoService} from '../services/repuesto.service';

@Component({
  selector: 'app-repuesto',
  standalone: true,
  imports: [RowComponent,ColComponent,CardComponent,CardHeaderComponent,CardBodyComponent,
    FormsModule,ReactiveFormsModule,FormDirective,FormLabelDirective,FormControlDirective,ButtonDirective,NgStyle,TextColorDirective,DocsExampleComponent,
    TableDirective, TableColorDirective, TableActiveDirective
  ],
  templateUrl: './repuesto.component.html',
  styleUrl: './repuesto.component.scss'
})
export class RepuestoComponent {
  listaRepuesto :  repuestoModel[] = [];

  RepuestoModel : repuestoModel = new repuestoModel();
  
  constructor(private RepuestoService: repuestoService){
    this.getRepuesto();
  }
  getRepuesto(){
    this.RepuestoService.getTodoLosRepuestos().subscribe({
      next : (respuesta) => {
          console.log(respuesta);
          this.listaRepuesto = respuesta;
      },
      error: (error) => {
        console.log(error);
      }
    })
  }

  guardarRepuesto(){
    console.log(this.RepuestoModel);
    if (this.RepuestoModel._id == '') {
      console.log("guardar", this.RepuestoModel);
      this.agregarRepuesto();
    } else {
      console.log("editar", this.RepuestoModel);
      this.editarRepuesto();
    }


  }
  agregarRepuesto(){
    this.RepuestoService.agregarRepuesto(this.RepuestoModel).subscribe({
      next : (respuesta) => {
          console.log("Se guardo exitosamente",respuesta);
          this.getRepuesto();
          this.RepuestoModel = new repuestoModel();
      },
      error: (error) => {
        console.log(error);
      }
    })
  }

  eliminarRepuesto(repuesto: repuestoModel){
    console.log("itema para eliminar", repuesto);
    this.RepuestoService.eliminarRepuesto(repuesto._id).subscribe({
      next : (respuesta) => {
          console.log("Se elimino exitosamente",respuesta);
          this.getRepuesto();
      },
      error: (error) => {
        console.log(error);
      }
    })
  }
  verRepuesto(repuesto: repuestoModel){
    this.RepuestoModel = repuesto;
  }

  editarRepuesto(){
    this.RepuestoService.editarRepuesto(this.RepuestoModel).subscribe({
      next : (respuesta) => {
          console.log("Se edito exitosamente",respuesta);
          this.getRepuesto();
          this.RepuestoModel = new repuestoModel();
      },
      error: (error) => {
        console.log(error);
      }
    })
  }

}