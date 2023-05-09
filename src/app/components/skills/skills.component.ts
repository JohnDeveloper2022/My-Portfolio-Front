import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SkillService } from 'src/app/service/skill.service';
import { Skill } from './skill';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  nivelSkill:string[];

  skill:Skill = new Skill();
  skills:Skill[];
  user:boolean = false; 

  constructor(private skillService:SkillService, private router:Router, private activatedRoute:ActivatedRoute, private usuarioService:UsuarioService) {
    
    this.nivelSkill = ['Principiante', 'Básico', 'Intermedio', 'Intermedio alto', 'Avanzado', 'Experto'];
  }

  ngOnInit(): void {
    this.user = this.usuarioService.getSession();
    this.skillService.getAll().subscribe(
      sk=> this.skills = sk
    );
    this.cargaForm();
  }

  cargaForm(): void {
    this.activatedRoute.params.subscribe(
      enlace=> {
        let id=enlace['id'];
        if(id) {
          this.skillService.get(id).subscribe(
            sk=>this.skill=sk 
          );
        }
      }
    );
  }

  createSkill(): void {
    this.skillService.create(this.skill).subscribe(
      res=> this.router.navigate([''])
    );
  }

  updateSkill(): void {
    this.skillService.edit(this.skill).subscribe(
      res=> this.router.navigate([''])
    );
  }

  deleteSkill(skill:Skill): void {
    this.skillService.delete(skill.id).subscribe(
      res=> this.skillService.getAll().subscribe(
        response=> this.skills = response
      )
    );
  }

  retornarNivelSk(nivel:string) {
    switch (nivel) {
      case 'Principiante':
        nivel = 'measure-1';
        break;
      case 'Básico':
        nivel = 'measure-2';
        break;
      case 'Intermedio':
        nivel = 'measure-3';
        break;
      case 'Intermedio alto':
        nivel = 'measure-4';
        break;
      case 'Avanzado':
        nivel = 'measure-5';
        break;
      case 'Experto':
        nivel = 'measure-6';
        break;  
    }
    return nivel;
  }

}
