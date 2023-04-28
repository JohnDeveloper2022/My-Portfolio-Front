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
  userLogueado:boolean;
  niveles:string[];

  idioma:Idioma = new Idioma();
  idiomas:Idioma[];

  constructor(private idiomaService:IdiomaService, private loginService:LoginService, private router:Router, private activatedRoute:ActivatedRoute) { 
    
    this.niveles = ['Básico', 'Intermedio', 'Avanzado', 'Nativo'];

  }

  ngOnInit(): void {
    this.idiomaService.getAll().subscribe(
      idiom=> this.idiomas=idiom
    );
    this.cargaForm();
  }

  mostrar() {
    if(this.userLogueado = true) {
      this.router.navigate(['/edicion'])
    } else {
      this.router.navigate([''])
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

  retornarNivel(nivel: string){
    switch(nivel)
    {
      case 'Básico':
        nivel = 'bar-1';
      break;
      case 'Intermedio':
        nivel = 'bar-2';
      break;
      case 'Avanzado':
        nivel = 'bar-3';
      break;
      case 'Nativo':
        nivel = 'bar-4';
      break;
    }
    return nivel;
  }
}
