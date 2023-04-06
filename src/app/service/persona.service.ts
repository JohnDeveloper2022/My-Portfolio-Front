import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../components/sobre-mi/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor(private http: HttpClient) { }

  //traer personas
  public getAll():Observable<Persona[]> {
    return this.http.get<Persona[]>('http://localhost:8080/traer/personas');
  }

  //ver persona
  public get(id:number):Observable<Persona> {
    return this.http.get<Persona>('http://localhost:8080/ver/persona/' + id);
  }

  //crear persona
  public create(persona:Persona):Observable<Persona> {
    return this.http.post<Persona>('http://localhost:8080/new/persona', persona);
  }

  //editar persona
  public edit(persona:Persona):Observable<Persona> {
    return this.http.put<Persona>('http://localhost:8080/edit/persona', persona);
  }

  //borrar persona
  public delete(id:number):Observable<Persona> {
    return this.http.delete<Persona>('http://localhost:8080/delete/persona/' + id);
  }
}

