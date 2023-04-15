import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  logoArgPro = 'assets/images/logo_ArgPro.png'
  coverImage = 'assets/images/cover.jpg'
  miniCover = 'assets/images/version_control.svg'

  constructor(private service: PersonaService) { }

  ngOnInit(): void {
    /*this.service.getAll().subscribe(data => {
      console.log(data);
    });*/
  }

}
