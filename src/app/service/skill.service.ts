import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skill } from '../components/skills/skill';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  constructor(private http: HttpClient) { }

  //traer skills
  public getAll():Observable<Skill[]> {
    return this.http.get<Skill[]>('http://localhost:8080/traer/skills');
  }

  //ver skill
  public get(id:number):Observable<Skill> {
    return this.http.get<Skill>('http://localhost:8080/ver/skill/id');
  }

  //crear skill
  public create(skill:Skill):Observable<Skill> {
    return this.http.post<Skill>('http://localhost:8080/new/skill', skill);
  }

  //editar skill
  public edit(skill:Skill):Observable<Skill> {
    return this.http.put<Skill>('http://localhost:8080/editar/skill', skill);
  }

  //borrar skill
  public delete(id:number):Observable<Skill> {
    return this.http.delete<Skill>('http://localhost:8080/delete/skill/id');
  }
}
