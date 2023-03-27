import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../components/experiencia/experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  constructor(private http: HttpClient) { }

  //traer experiencias
  public getAll():Observable<Experiencia[]> {
    return this.http.get<Experiencia[]>('http://localhost:8080/traer/experiencias');
  }

  //ver experiencia
  public get(id:number):Observable<Experiencia> {
    return this.http.get<Experiencia>('http://localhost:8080/ver/experiencia/id');
  }

  //crear experiencia
  public create(experiencia:Experiencia):Observable<Experiencia> {
    return this.http.post<Experiencia>('http://localhost:8080/new/experiencia', experiencia);
  }

  //editar experiencia
  public edit(experiencia:Experiencia):Observable<Experiencia> {
    return this.http.put<Experiencia>('http://localhost:8080/editar/experiencia', experiencia);
  }

  //borrar experiencia
  public delete(id:number):Observable<Experiencia> {
    return this.http.delete<Experiencia>('http://localhost:8080/delete/experiencia/id');
  }
}
