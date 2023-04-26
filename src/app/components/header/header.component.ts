import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';
import { Usuario } from 'src/app/usuario';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  logoArgPro = 'assets/images/logo_ArgPro.png'
  coverImage = 'assets/images/cover.jpg'
  miniCover = 'assets/images/version_control.svg'

  usuario:Usuario;
  userLogueado:boolean = false;

  constructor(private loginService:LoginService, private router:Router, private activatedRoute:ActivatedRoute) { }
 

  ngOnInit(): void {
    
    if(this.loginService.getUser(this.usuario)) {
      this.userLogueado = true;
    } else {
      this.userLogueado = false;
    }
  }

  userLogout() {
    localStorage.removeItem('usuario');
    this.router.navigate(['']);
  }
}
