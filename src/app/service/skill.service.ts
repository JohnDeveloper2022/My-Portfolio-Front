import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skill } from '../components/skills/skill';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  url:string= "http://localhost:8081/skills";

  constructor(private http: HttpClient) { }

  //traer skills
  public getAll():Observable<Skill[]> {
    return this.http.get<Skill[]>(this.url);
  }

  //ver skill
  public get(id:number):Observable<Skill> {
    return this.http.get<Skill>(this.url+'/'+id);
  }

  //crear skill
  public create(skill:Skill):Observable<Skill> {
    return this.http.post<Skill>(this.url, skill);
  }

  //editar skill
  public edit(skill:Skill):Observable<Skill> {
    return this.http.put<Skill>(this.url, skill);
  }

  //borrar skill
  public delete(id:number):Observable<Skill> {
    return this.http.delete<Skill>(this.url+'/'+id);
  }
}
