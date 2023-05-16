import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-porfolio',
  templateUrl: './porfolio.component.html'
})
export class PorfolioComponent implements OnInit {

  @Input() userLogueado: any;

  constructor() { }

  ngOnInit(): void {
  
  }
}
