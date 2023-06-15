import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyecto } from '../components/proyectos/proyecto';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  url:string= "http://localhost:8081/proyectos";

  constructor(private http: HttpClient) { }

  //traer proyectos
  public getAll():Observable<Proyecto[]> {
    return this.http.get<Proyecto[]>(this.url);
  }

  //ver proyecto
  public get(id:number):Observable<Proyecto> {
    return this.http.get<Proyecto>(this.url+'/'+id);
  }

  //crear proyecto
  public create(proyecto:Proyecto):Observable<Proyecto> {
    return this.http.post<Proyecto>(this.url, proyecto);
  }

  //editar proyecto
  public edit(proyecto:Proyecto):Observable<Proyecto> {
    return this.http.put<Proyecto>(this.url, proyecto);
  }

  //eliminar proyecto
  public delete(id:number):Observable<Proyecto> {
    return this.http.delete<Proyecto>(this.url+'/'+id);
  }
}
