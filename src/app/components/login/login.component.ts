import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';
import { Usuario } from 'src/app/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario:Usuario = new Usuario();
  userLogueado:boolean;
  data:any;
  constructor(private loginService:LoginService, private router:Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
  }

  async login() {
    try {
      if(this.usuario.username && this.usuario.password) {
        const data = await this.loginService.getUser(this.usuario);
        if(data) {
          alert('Usuario logueado con éxito');
          this.router.navigate(['/edicion']);
        }
        else {
          this.router.navigate(['/login']);
        }
      }
    } catch (error) {
      alert('Por favor ingrese sus datos correctamente');
      this.router.navigate(['/login']);
    }
  }

  volver(): void {
    this.router.navigate(['']);
  }

  /*this.loginService.getUser(this.usuario).subscribe(data=> { 
      this.router.navigate(['/edicion'])
    });
    if (this.userLogueado) {
      window.alert('Usuario logueado con éxito');
    }
    else {
      window.alert('Por favor ingrese sus datos correctamente');
    }*/

}
