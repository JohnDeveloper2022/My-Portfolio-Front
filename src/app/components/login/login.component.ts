import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';
import { Usuario } from 'src/app/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  submitted = false;
  usuario:Usuario = new Usuario();

  constructor(private loginService:LoginService, private router:Router, private activatedRoute:ActivatedRoute) {
  }
  

  ngOnInit(): void {
  }

  login(form:NgForm) {
    this.loginService.getUserLogin(this.usuario).subscribe({
      next: (data) => this.router.navigate(['/portfolio']),
      error: (e) => alert('Por favor ingrese sus datos correctamente'),
      complete: () => alert('Bienvenido a tu portfolio web, Johnny')
    });
  }

  volver(): void {
    this.router.navigate(['']);
  }

}
