import { Component, OnInit } from '@angular/core';
import { Idioma } from './idioma';
import { IdiomaService } from 'src/app/service/idioma.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';
import { Usuario } from 'src/app/usuario';
import { UsuarioService } from 'src/app/service/usuario.service';

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
  user:boolean = false;

  constructor(private idiomaService:IdiomaService, private loginService:LoginService, private router:Router, private activatedRoute:ActivatedRoute, private usuarioService:UsuarioService) { 
    
    this.niveles = ['Básico', 'Intermedio', 'Avanzado', 'Nativo'];

    this.idioma.persona_id = 1; 
  }

  ngOnInit(): void {
    this.user = this.usuarioService.getSession();
    this.idiomaService.getAll().subscribe(
      idiom=> this.idiomas=idiom
    );
    this.cargaForm();
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
      res=> this.router.navigate(['/idiomas']).then(
        (dir) => window.location.reload()
      )
    );
  }

  updateIdiom(): void {
    this.idiomaService.edit(this.idioma).subscribe(
      res=> this.router.navigate(['/idiomas']).then(
        (dir) => window.location.reload()
      )
    );
  }

  deleteIdiom(idioma:Idioma): void {
    this.idiomaService.delete(idioma.id).subscribe(data => { 
      this.idiomaService.getAll().subscribe(
        res => this.router.navigate(['/idiomas']).then(
          (dir) => window.location.reload()
        )
      )
    });
  }

  clear() {
    this.router.navigate(['/idiomas']);
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
