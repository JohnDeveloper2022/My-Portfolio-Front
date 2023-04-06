import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SkillService } from 'src/app/service/skill.service';
import { Skill } from './skill';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skill:Skill = new Skill();
  skills:Skill[];

  constructor(private skillService:SkillService, private router:Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.skillService.getAll().subscribe(
      skl=> this.skills = skl
    );

    this.cargaForm();
  }

  cargaForm(): void {
    this.activatedRoute.params.subscribe(
      enlace=>{
        let id=enlace['id'];
        if(id){
          this.skillService.get(id).subscribe(
            skl=> this.skill=skl
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
        response=> this.skills=response
      )
    );
  }

}
