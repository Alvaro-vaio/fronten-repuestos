import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonDirective, CardBodyComponent, CardComponent, CardFooterComponent, CardHeaderComponent, ColComponent, FormControlDirective, FormDirective, FormLabelDirective, RowComponent, TableActiveDirective, TableColorDirective, TableDirective, TextColorDirective } from '@coreui/angular';
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
  constructor(private RepuestoService: repuestoService){
    this.verRepuesto();
  }
  verRepuesto(){
    this.RepuestoService.getTodoLosRepuestos().subscribe({
      next :(respuesta) =>{
        console.log(respuesta);
        this.listaRepuesto = respuesta;
      },
      error:(error) => {
        console.log(error);
      }
    })
  }

}
