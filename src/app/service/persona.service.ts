import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor(private http: HttpClient) { }

  //traer personas
  public getAll():Observable<any[]> {
    return this.http.get<any[]>('http://localhost:8080/traer/personas');
  }

  //ver persona
  public get(id:number):Observable<any> {
    return this.http.get('http://localhost:8080/ver/persona/id')
  }

  //crear persona
  public create(per:any):Observable<any> {
    return this.http.post<any>('http://localhost:8080/new/persona', per)
  }

  //editar persona
  public edit(per:any):Observable<any> {
    return this.http.put<any>('http://localhost:8080/edit/persona', per)
  }

  //borrar persona
  public delete(id:number):Observable<any> {
    return this.http.delete<any>('http://localhost:8080/delete/id')
  }
}

