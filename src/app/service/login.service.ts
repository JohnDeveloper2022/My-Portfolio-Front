import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../usuario';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  getUser(usuario:Usuario):Observable<object> {
    return this.http.post('http://localhost:8080/usuario/login', usuario)
  }
}
