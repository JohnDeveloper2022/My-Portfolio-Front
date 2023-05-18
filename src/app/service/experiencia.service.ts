import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../components/experiencia/experiencia';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  url:string= environment.apiURL + "experiencias";

  constructor(private http: HttpClient) { }

  //traer experiencias
  public getAll():Observable<Experiencia[]> {
    return this.http.get<Experiencia[]>(this.url);
  }

  //ver experiencia
  public get(id:number):Observable<Experiencia> {
    return this.http.get<Experiencia>(this.url+'/'+id);
  }

  //crear experiencia
  public create(experiencia:Experiencia):Observable<Experiencia> {
    return this.http.post<Experiencia>(this.url, experiencia);
  }

  //editar experiencia
  public edit(experiencia:Experiencia):Observable<Experiencia> {
    return this.http.put<Experiencia>(this.url, experiencia);
  }

  //borrar experiencia
  public delete(id:number):Observable<Experiencia> {
    return this.http.delete<Experiencia>(this.url+'/'+id);
  }
}
