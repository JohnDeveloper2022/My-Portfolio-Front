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

  nivelSkill:number[] = [];

  skill:Skill = new Skill();
  skills:Skill[];

  constructor(private skillService:SkillService, private router:Router, private activatedRoute:ActivatedRoute) {
    for( let i = 0; i <= 100; i++) {
      this.nivelSkill.push(i);
    }
  }

  ngOnInit(): void {
    this.skillService.getAll().subscribe(
      sk=> this.skills = sk
    );
  }

}
