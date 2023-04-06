import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/service/persona.service';
import { Persona } from './persona';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.css']
})
export class SobreMiComponent implements OnInit {

  usuario:Persona = new Persona();
  personas:Persona[];

  fotoPerfil = 'assets/images/foto_cv.png'

  constructor(private personaService:PersonaService, private router:Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.personaService.getAll().subscribe( 
      per => this.personas=per
    );
  }
  

  updateUser(): void {
    this.personaService.edit(this.usuario).subscribe(
      res=> this.router.navigate([''])
    );
  }

}
