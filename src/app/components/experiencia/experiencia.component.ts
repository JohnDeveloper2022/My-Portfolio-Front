import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExperienciaService } from 'src/app/service/experiencia.service';
import { Experiencia } from './experiencia';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  meses:string[];
  yearList:number[] = [];

  experiencia:Experiencia = new Experiencia();
  experiencias:Experiencia[];

  constructor(private experienciaService:ExperienciaService, private router:Router, private activatedRoute:ActivatedRoute) { 

    this.meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

    for (let i = 1930; i <= 2023; i++) {
      this.yearList.push(i);
    }
  }
  
  ngOnInit(): void {
    this.experienciaService.getAll().subscribe(
      exp => this.experiencias=exp
    );

    this.cargaForm();
  }

  cargaForm(): void {
    this.activatedRoute.params.subscribe(
      enlace=>{
        let id=enlace['id'];
        if(id){
          this.experienciaService.get(id).subscribe(
            exp=>this.experiencia=exp
          );
        }
      }
    );
  }

  createExp(): void {
    this.experienciaService.create(this.experiencia).subscribe(
      res=> this.router.navigate([''])
    );
  }

  updateExp(): void {
    this.experienciaService.edit(this.experiencia).subscribe(
      res=> this.router.navigate([''])
    );
  }

  deleteExp(experiencia:Experiencia): void {
    this.experienciaService.delete(experiencia.id).subscribe(
      res=> this.experienciaService.getAll().subscribe(
        response=> this.experiencias=response
      )
    );
  }

}
