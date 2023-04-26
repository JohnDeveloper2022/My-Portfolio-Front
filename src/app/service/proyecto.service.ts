import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyecto } from '../components/proyectos/proyecto';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  constructor(private http: HttpClient) { }

  //traer proyectos
  public getAll():Observable<Proyecto[]> {
    return this.http.get<Proyecto[]>('http://localhost:8080/mostrar/proyectos');
  }

  //ver proyecto
  public get(id:number):Observable<Proyecto> {
    return this.http.get<Proyecto>('http://localhost:8080/ver/proyecto/' + id);
  }

  //crear proyecto
  public create(proyecto:Proyecto):Observable<Proyecto> {
    return this.http.post<Proyecto>('http://localhost:8080/new/proyecto', proyecto);
  }

  //editar proyecto
  public edit(proyecto:Proyecto):Observable<Proyecto> {
    return this.http.put<Proyecto>('http://localhost:8080/editar/proyecto', proyecto);
  }

  //eliminar proyecto
  public delete(id:number):Observable<Proyecto> {
    return this.http.delete<Proyecto>('http://localhost:8080/delete/proyecto/' + id);
  }
}
