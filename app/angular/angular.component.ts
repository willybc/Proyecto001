import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.css']
})
export class AngularComponent implements OnInit {

  tittle ='Angular';
  lugares:any = [
    {id:'1', plan:'pagado' ,cercania: 1, distancia: 10, active: true, nombre:'Florencia la Gardenia'},
    {id:'2', plan:'gratuito' ,cercania: 2, distancia: 10, active: false, nombre:'Donas la pasadita'},
    {id:'3', plan:'gratuito' ,cercania: 2, distancia: 10, active: true, nombre:'Veterinaria de Juanita'},
    {id:'4', plan:'gratuito' ,cercania: 3, distancia: 10, active: true, nombre:'Starbucks'},
    {id:'5', plan:'gratuito' ,cercania: 3, distancia: 10, active: false, nombre:'McDonals'},
    {id:'6', plan:'pagado' ,cercania: 3, distancia: 10, active: true, nombre:'Burger King'},
  ];

  lat:number= -34.5632236;
  lng:number = -58.4569978;

  constructor() { }

  ngOnInit() {
  }

}
