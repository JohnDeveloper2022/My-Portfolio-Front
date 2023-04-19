import { Component, OnInit } from '@angular/core';
import { Idioma } from './idioma';
import { IdiomaService } from 'src/app/service/idioma.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';
import { Usuario } from 'src/app/usuario';

@Component({
  selector: 'app-idiomas',
  templateUrl: './idiomas.component.html',
  styleUrls: ['./idiomas.component.css']
})
export class IdiomasComponent implements OnInit {

  usuario:Usuario = new Usuario();
  userLogueado:boolean = false;
  niveles:string[];

  idioma:Idioma = new Idioma();
  idiomas:Idioma[];

  constructor(private idiomaService:IdiomaService, private router:Router, private activatedRoute:ActivatedRoute,
    private loginService:LoginService) {

    this.niveles = ['Básico', 'Intermedio', 'Avanzado', 'Nativo'];

  }

  ngOnInit(): void {
    this.idiomaService.getAll().subscribe(
      idiom=> this.idiomas=idiom
    );
    this.cargaForm();
    
    if(this.loginService.getUser(this.usuario)) {
      this.userLogueado = true;
    } else {
      this.userLogueado = false;
    }
  }

  cargaForm(): void {
    this.activatedRoute.params.subscribe(
      enlace=>{
        let id=enlace['id'];
        if(id){
          this.idiomaService.get(id).subscribe(
            i=> this.idioma=i
          );
        }
      }
    );
  }

  createIdiom(): void {
    this.idiomaService.create(this.idioma).subscribe(
      res=> this.router.navigate([''])
    );
  }

  updateIdiom(): void {
    this.idiomaService.edit(this.idioma).subscribe(
      res=> this.router.navigate([''])
    );
  }

  deleteIdiom(idioma:Idioma): void {
    this.idiomaService.delete(idioma.id).subscribe(
      res=> this.idiomaService.getAll().subscribe(
        response=>this.idiomas=response
      )
    );
  }

}
