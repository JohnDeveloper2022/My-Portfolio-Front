import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Usuario } from '../usuario';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  constructor(private http:HttpClient, private router:Router) { }

  getUserLogin(usuario: Usuario): Observable<any> {
    return this.http.post('https://springboot-portfolio-a8df.onrender.com//usuario/login', usuario).pipe(map(user => {
      if(user) {
        localStorage.setItem('user', JSON.stringify(user));
      }     
      return user;
    }));
  }

  logout() {
    localStorage.removeItem('user');
    this.router.navigate(['/portfolio']);
    window.location.reload();
  }
}
