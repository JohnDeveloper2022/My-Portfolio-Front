import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProyectoService } from 'src/app/service/proyecto.service';
import { Proyecto } from './proyecto';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  proyecto:Proyecto = new Proyecto();
  proyectos:Proyecto[];

  constructor(private proyectoService:ProyectoService, private router:Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.proyectoService.getAll().subscribe(
      pro=> this.proyectos = pro
    );
  }

  cargaForm(): void {
    this.activatedRoute.params.subscribe(
      enlace=>{
        let id = enlace['id'];
        if(id){
          this.proyectoService.get(id).subscribe(
            pro=> this.proyecto=pro
          );
        }
      }
    );
  }

  createPro(): void {
    this.proyectoService.create(this.proyecto).subscribe(
      res=> this.router.navigate([''])
    );
  }

  updatePro(): void {
    this.proyectoService.edit(this.proyecto).subscribe(
      res=> this.router.navigate([''])
    );
  }

  deletePro(proyecto:Proyecto): void {
    this.proyectoService.delete(proyecto.id).subscribe(
      res=> this.proyectoService.getAll().subscribe(
        response=> this.proyectos= response
      )
    );
  }

}
