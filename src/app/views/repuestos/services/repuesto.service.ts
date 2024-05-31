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
}