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

  constructor(private loginService:LoginService, private router:Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
  }

  login() {
    this.loginService.getUser(this.usuario).subscribe({
      next: (data) => this.router.navigate(['/edicion']),
      error: (e) => alert('Por favor ingrese sus datos correctamente'),
      complete: () => alert('Usuario logueado con éxito')
    });
  }

  volver(): void {
    this.router.navigate(['']);
  }

}
