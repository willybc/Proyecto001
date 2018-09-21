import { Component, OnInit } from '@angular/core';
import { LugaresService } from '../services/lugares.service';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html',
  styleUrls: ['./lugares.component.css']
})
export class LugaresComponent {

  tittle ='Angular';
  lat:number= -34.5632236;
  lng:number = -58.4569978;

  lugares = null;
  constructor(private lugaresService: LugaresService) { 
    lugaresService.getLugares()
    .valueChanges().subscribe(lugares =>{
      console.log(lugares)
      this.lugares = lugares;
    });
  }
}
