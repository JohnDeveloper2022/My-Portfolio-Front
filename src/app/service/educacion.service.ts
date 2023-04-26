import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../components/educacion/educacion';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  constructor(private http: HttpClient) { }

  //traer estudios
  public getAll():Observable<Educacion[]> {
    return this.http.get<Educacion[]>('http://localhost:8080/traer/estudios');
  }

  //ver estudio
  public get(id:number):Observable<Educacion> {
    return this.http.get<Educacion>('http://localhost:8080/ver/estudio/' + id)
  }

  //crear estudio
  public create(educacion:Educacion):Observable<Educacion> {
    return this.http.post<Educacion>('http://localhost:8080/new/estudio', educacion)
  }

  //editar estudio
  public edit(educacion:Educacion):Observable<Educacion> {
    return this.http.put<Educacion>('http://localhost:8080/editar/estudio', educacion)
  }

  //eliminar estudio
  public delete(id:number):Observable<Educacion> {
    return this.http.delete<Educacion>('http://localhost:8080/delete/estudio/' + id)
  }
}
