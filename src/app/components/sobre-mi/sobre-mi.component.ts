import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/service/persona.service';
import { Persona } from './persona';

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.css']
})
export class SobreMiComponent implements OnInit {

  personas:Persona[];

  fotoPerfil = 'assets/images/foto_cv.png'

  constructor(private personaService:PersonaService) { }

  ngOnInit(): void {
    this.personaService.getAll().subscribe( 
      per => this.personas=per
    );
  }

}
