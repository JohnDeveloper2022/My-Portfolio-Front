import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EducacionService } from 'src/app/service/educacion.service';
import { Educacion } from './educacion';

@Component({
  selector: 'app-form-educacion',
  templateUrl: './form-educacion.component.html',
  styleUrls: ['./form-educacion.component.css']
})
export class FormEducacionComponent implements OnInit {
  educacion:Educacion = new Educacion();
  titulo:string="Registro de Estudio";

  constructor(private educacionService:EducacionService, private router:Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.cargar();
  }

  cargar():void{
    this.activatedRoute.params.subscribe(
      e=>{
        let id=e['id'];
        if(id){
          this.educacionService.get(id).subscribe(
            es=>this.educacion=es
          )
        }
      }
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

  deleteEdu(id:number):void{
    console.log(id)
    this.educacionService.delete(id).subscribe(
        res=>this.router.navigate(['/estudios'])
    );
  }

}
