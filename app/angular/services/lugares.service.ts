import { Injectable } from "@angular/core";
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable()
export class LugaresService{
    lugares:any = [
        {id:'1', plan:'pagado' ,cercania: 1, distancia: 10, active: true, nombre:'Florencia la Gardenia', descripcion:''},
        {id:'2', plan:'gratuito' ,cercania: 2, distancia: 10, active: false, nombre:'Donas la pasadita', descripcion:''},
        {id:'3', plan:'gratuito' ,cercania: 2, distancia: 10, active: true, nombre:'Veterinaria de Juanita', descripcion:''},
        {id:'4', plan:'gratuito' ,cercania: 3, distancia: 10, active: true, nombre:'Starbucks', descripcion:''},
        {id:'5', plan:'gratuito' ,cercania: 3, distancia: 10, active: false, nombre:'McDonals', descripcion:''},
        {id:'6', plan:'pagado' ,cercania: 3, distancia: 10, active: true, nombre:'Burger King', descripcion:''},
      ];

    constructor(public afDB: AngularFirestore){}

    public getLugares(){
        return this.afDB.collection('lugares/');
    }

    public buscarLugar(id){
        return this.lugares.filter((lugar) => { return lugar.id == id})[0] || null;
      }

    public guardarLugar(lugar){
        console.log(lugar);
        this.afDB.collection('lugares').doc('/' + lugar.id ).set(lugar);  

    }
}