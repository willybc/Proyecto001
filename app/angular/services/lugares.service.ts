import { Injectable } from "@angular/core";

@Injectable()
export class LugaresService{
    lugares:any = [
        {id:'1', plan:'pagado' ,cercania: 1, distancia: 10, active: true, nombre:'Florencia la Gardenia'},
        {id:'2', plan:'gratuito' ,cercania: 2, distancia: 10, active: false, nombre:'Donas la pasadita'},
        {id:'3', plan:'gratuito' ,cercania: 2, distancia: 10, active: true, nombre:'Veterinaria de Juanita'},
        {id:'4', plan:'gratuito' ,cercania: 3, distancia: 10, active: true, nombre:'Starbucks'},
        {id:'5', plan:'gratuito' ,cercania: 3, distancia: 10, active: false, nombre:'McDonals'},
        {id:'6', plan:'pagado' ,cercania: 3, distancia: 10, active: true, nombre:'Burger King'},
      ];
    public getLugares(){
        return this.lugares;
    }

    public buscarLugar(id){
        return this.lugares.filter((lugar) => { return lugar.id == id})[0] || null;
      }
}