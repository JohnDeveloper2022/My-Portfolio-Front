import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../components/educacion/educacion';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  url:string= environment.apiURL + "estudios";

  constructor(private http: HttpClient) { }

  //traer estudios
  public getAll():Observable<Educacion[]> {
    return this.http.get<Educacion[]>(this.url);
  }

  //ver estudio
  public get(id:number):Observable<Educacion> {
    return this.http.get<Educacion>(this.url+'/'+id);
  }

  //crear estudio
  public create(educacion:Educacion):Observable<Educacion> {
    return this.http.post<Educacion>(this.url, educacion);
  }

  //editar estudio
  public edit(educacion:Educacion):Observable<Educacion> {
    return this.http.put<Educacion>(this.url, educacion);
  }

  //eliminar estudio
  public delete(id:number):Observable<Educacion> {
    return this.http.delete<Educacion>(this.url+'/'+id);
  }
}
