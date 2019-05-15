import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.scss']
})
export class NotasComponent implements OnInit {

  nome:string = "Pablo";
  nota01:number = 5.3;
  nota02:number = 6.2;
  media = (this.nota01 + this.nota02) / 2;
  situacao = (this.media >= 6) ? true : false;

  constructor() { }

  ngOnInit() {}

}
