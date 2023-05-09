import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/service/persona.service';
import { Persona } from './persona';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.css']
})
export class SobreMiComponent implements OnInit {

  persona:Persona = new Persona();
  personas:Persona[];
  user: boolean = false;

  fotoPerfil = 'assets/images/foto_cv.png'

  constructor(private personaService:PersonaService, private router:Router, private activatedRoute:ActivatedRoute, private usuarioService: UsuarioService) {

  }

  ngOnInit(): void {
    this.user = this.usuarioService.getSession();
    this.personaService.getAll().subscribe( 
      per => this.personas=per
    );
    this.cargaForm();
  }
 
  cargaForm(): void {
    this.activatedRoute.params.subscribe(
      enlace=>{
        let id=enlace['id'];
        if(id){
          this.personaService.get(id).subscribe(
            p=> this.persona=p
          );
        }
      }
    );
  }

  updatePersona(): void {
    this.personaService.edit(this.persona).subscribe(
      res=> this.router.navigate([''])
    );
  }

}
