import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Idioma } from '../components/idiomas/idioma';

@Injectable({
  providedIn: 'root'
})
export class IdiomaService {

  constructor(private http: HttpClient) { }

  //traer idiomas
  public getAll():Observable<Idioma[]> {
    return this.http.get<Idioma[]>('http://localhost:8080/traer/idiomas');
  }

  //ver idioma
  public get(id:number):Observable<Idioma> {
    return this.http.get<Idioma>('http://localhost:8080/ver/idioma/id');
  }
  
  //crear idioma
  public create(idioma:Idioma):Observable<Idioma> {
    return this.http.post<Idioma>('http://localhost:8080/new/idioma', idioma);
  }

  //editar idioma
  public edit(idioma:Idioma):Observable<Idioma> {
    return this.http.put<Idioma>('http://localhost:8080/editar/idioma', idioma);
  }

  //borrar idioma
  public delete(id:number):Observable<Idioma> {
    return this.http.delete<Idioma>('http://localhost:8080/delete/idioma/id');
  }
}
