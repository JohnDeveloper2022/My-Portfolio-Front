import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EducacionService } from 'src/app/service/educacion.service';
import { Educacion } from './educacion';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  educacion:Educacion = new Educacion();
  estudios:Educacion[];

  constructor(private educacionService:EducacionService, private router:Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.educacionService.getAll().subscribe(
      edu => this.estudios=edu
    );
  }

  create():void{
    console.log(this.educacion);
    this.educacionService.create(this.educacion).subscribe(
      res=>this.router.navigate(['/estudios'])
    );
  }

  update():void{
    this.educacionService.edit(this.educacion).subscribe(
      res=>this.router.navigate(['/estudios'])
    );
  }

  delete(educacion:Educacion):void{
    this.educacionService.delete(educacion.id).subscribe(
      res=>this.educacionService.getAll().subscribe(
        response=>this.estudios=response
      )
    );
  }

}
