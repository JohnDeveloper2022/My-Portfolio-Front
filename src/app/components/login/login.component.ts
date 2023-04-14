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

  constructor(private loginService:LoginService, private router:Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
  }

  userLogin() {
    this.loginService.getUser(this.usuario).subscribe(data=> {
      this.router.navigate([''])
    });
    window.alert("Por favor ingrese un usuario y contraseña correcto")
  }

}
