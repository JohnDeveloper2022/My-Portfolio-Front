import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../components/sobre-mi/persona';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  url:string= environment.apiURL + "persona";

  constructor(private http: HttpClient) { }

  //traer personas
  public getAll():Observable<Persona[]> {
    return this.http.get<Persona[]>(this.url);
  }

  //ver persona
  public get(id:number):Observable<Persona> {
    return this.http.get<Persona>(this.url+'/'+id);
  }

  //crear persona
  public create(persona:Persona):Observable<Persona> {
    return this.http.post<Persona>(this.url, persona);
  }

  //editar persona
  public edit(persona:Persona):Observable<Persona> {
    return this.http.put<Persona>(this.url, persona);
  }

  //borrar persona
  public delete(id:number):Observable<Persona> {
    return this.http.delete<Persona>(this.url+'/'+id);
  }
}

