import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Idioma } from '../components/idiomas/idioma';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class IdiomaService {

  url:string= "http://localhost:8081/idiomas";

  constructor(private http: HttpClient) { }

  //traer idiomas
  public getAll():Observable<Idioma[]> {
    return this.http.get<Idioma[]>(this.url);
  }

  //ver idioma
  public get(id:number):Observable<Idioma> {
    return this.http.get<Idioma>(this.url+'/'+id);
  }
  
  //crear idioma
  public create(idioma:Idioma):Observable<Idioma> {
    return this.http.post<Idioma>(this.url, idioma);
  }

  //editar idioma
  public edit(idioma:Idioma):Observable<Idioma> {
    return this.http.put<Idioma>(this.url, idioma);
  }

  //borrar idioma
  public delete(id:number):Observable<Idioma> {
    return this.http.delete<Idioma>(this.url+'/'+id);
  }
}
