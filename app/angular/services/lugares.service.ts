import { Injectable } from "@angular/core";
import { AngularFirestore } from '@angular/fire/firestore';
import { HttpClient } from '@angular/common/http';

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

    constructor(public afDB:AngularFirestore, private http: HttpClient){}

    public getLugares(){
        return this.afDB.collection('lugares/');
    }

    public buscarLugar(id){
        return this.lugares.filter((lugar) => { return lugar.id == id})[0] || null;
      }

    public guardarLugar(lugar){
        console.log(lugar);
        this.afDB.doc('lugares/' + lugar.id).set(lugar);  
      //this.afDB.collection('lugares').doc('/' + lugar.id ).set(lugar);  
    }

    public obtenerGeoData(direccion){
        return this.http.get('http://maps.google.com/maps/api/geocode/json?address='+direccion);
    }
}