import { Component, OnInit, Input } from '@angular/core';
import { NgwWowService } from 'ngx-wow';

@Component({
  selector: 'app-porfolio',
  templateUrl: './porfolio.component.html'
})
export class PorfolioComponent implements OnInit {

  @Input() userLogueado: any;

  constructor(private wowService:NgwWowService) { }

  ngOnInit(): void {
    this.wowService.init();
  }
}
