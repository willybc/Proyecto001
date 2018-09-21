import { Component, OnInit } from '@angular/core';
import { LugaresService } from '../services/lugares.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {
  lugar:any = {};

  constructor(private lugaresService: LugaresService) {}

  guardarLugar(){
    var direccion = this.lugar.calle + ',' + this.lugar.ciudad + ',' + this.lugar.pais

    this.lugaresService.obtenerGeoData(direccion).subscribe((result:any) => {
      console.log(result);
      this.lugar.lat = result.json().results[0].geometry.location.lat;
      this.lugar.lng = 0;

      this.lugar.id = Date.now();
      this.lugaresService.guardarLugar(this.lugar);
      alert('Negocio guardado con exito!');
      this.lugar = {};
    });
  }
  ngOnInit() {}
}
