import{HttpClient} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { repuestoModel } from "../models/repuesto.model";
@Injectable({
    providedIn:'root'
})
export class repuestoService {
    private API_URL = 'http://localhost:4000/repuestos'
    constructor(private http: HttpClient){

    }
    getTodoLosRepuestos (): Observable<repuestoModel[]>{
        return this.http.get<repuestoModel[]>(`${this.API_URL}/verRepuesto`);
    }
    agregarRepuesto(repuesto: repuestoModel) : Observable<repuestoModel> {
        return this.http.post<repuestoModel>(`${this.API_URL}/ingresar`, repuesto);
      }
      editarRepuesto(repuesto: repuestoModel) : Observable<repuestoModel> {
        return this.http.put<repuestoModel>(`${this.API_URL}/editar/${repuesto._id}`, repuesto);
      }
    
      eliminarRepuesto(idRepuesto : string) : Observable<repuestoModel> {
        console.log(idRepuesto);
        // return this.http.delete<RecetaModel>(`${this.API_URL}/eliminar/${idReceta}`);
        return this.http.delete<repuestoModel>(this.API_URL+'/eliminar/'+idRepuesto);
    
      }
}