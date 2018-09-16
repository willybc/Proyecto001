import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  lugares:any = [
    {id:'1', plan:'pagado' ,cercania: 1, distancia: 10, active: true, nombre:'Florencia la Gardenia' ,description:'Descripcion de este negocio , mas adelante tendremos mas informacion'},
    {id:'2', plan:'gratuito' ,cercania: 2, distancia: 10, active: false, nombre:'Donas la pasadita' ,description:'Descripcion de este negocio , mas adelante tendremos mas informacion'},
    {id:'3', plan:'gratuito' ,cercania: 2, distancia: 10, active: true, nombre:'Veterinaria de Juanita' ,description:'Descripcion de este negocio , mas adelante tendremos mas informacion'},
    {id:'4', plan:'gratuito' ,cercania: 3, distancia: 10, active: true, nombre:'Starbucks' ,description:'Descripcion de este negocio , mas adelante tendremos mas informacion'},
    {id:'5', plan:'gratuito' ,cercania: 3, distancia: 10, active: false, nombre:'McDonals' ,description:'Descripcion de este negocio , mas adelante tendremos mas informacion'},
    {id:'6', plan:'pagado' ,cercania: 3, distancia: 10, active: true, nombre:'Burger King' ,description:'Descripcion de este negocio , mas adelante tendremos mas informacion'},
  ];
  id = null;
  lugar:any = {};


  constructor(private route: ActivatedRoute) {
      console.log(this.route.snapshot.params['id']);
      console.log(this.route.snapshot.queryParams);
      console.log(this.route.snapshot.queryParams['view']);
      console.log(this.route.snapshot.queryParams['google']);
      this.id = this.route.snapshot.params['id'];
      this.lugar = this.buscarLugar();
      console.log(this.buscarLugar());
   }

   buscarLugar(){
     return this.lugares.filter((lugar) => { return lugar.id == this.id})[0] || null;
   }

  ngOnInit() {
  }

}
