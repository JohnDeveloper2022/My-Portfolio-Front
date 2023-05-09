import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';
import { UsuarioService } from 'src/app/service/usuario.service';
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
  userLogueado:boolean;
  user: boolean = false;

  constructor(private loginService:LoginService, private router:Router, private activatedRoute:ActivatedRoute, private usuarioService:UsuarioService) { }
 

  ngOnInit(): void {
    this.user = this.usuarioService.getSession();
  }

  activarEdicion(): void {
    this.router.navigate(['/login']);
  }

  desactivarEdicion(): void {
    this.loginService.logout();
  }

}
