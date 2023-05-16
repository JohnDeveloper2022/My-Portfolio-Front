import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EducacionService } from 'src/app/service/educacion.service';
import { Educacion } from './educacion';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  yearList:number[] = [];

  educacion:Educacion = new Educacion();
  estudios:Educacion[];
  user:boolean = false;

  constructor(private educacionService:EducacionService, private router:Router, private activatedRoute:ActivatedRoute, private usuarioService:UsuarioService) {

    for (let i = 1930; i <= 2023; i++) {
      this.yearList.push(i);
    }

    this.educacion.persona_id = 1;
  }

  ngOnInit(): void {
    this.user = this.usuarioService.getSession();
    this.educacionService.getAll().subscribe(
      edu => this.estudios=edu
    );

    this.cargaForm();
  }

  cargaForm():void {
    this.activatedRoute.params.subscribe(
      enlace=>{
        let id=enlace['id'];
        if(id){
          this.educacionService.get(id).subscribe(
            e=>this.educacion=e
          );
        }
      }
    );
  }

  createEdu():void{
    console.log(this.educacion.id);
    this.educacionService.create(this.educacion).subscribe(
      res=> this.router.navigate(['/estudios']).then(
        (dir) => window.location.reload()
      )
    );
  }

  updateEdu():void{
    this.educacionService.edit(this.educacion).subscribe(
      res=> this.router.navigate(['/estudios']).then(
        (dir) => window.location.reload() 
      )
    );
  }

  deleteEdu(educacion:Educacion):void{
    this.educacionService.delete(educacion.id).subscribe(data => {
      this.educacionService.getAll().subscribe(
        res => this.router.navigate(['/estudios']).then(
          (dir) => window.location.reload()
        )
      )
    });
  }

  clear() {
    this.router.navigate(['/estudios']);
  }

}
