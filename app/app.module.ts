import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Rutas
import { app_routing } from "./app.routes";

//Forms
import {FormsModule } from '@angular/forms';

//ANGULAR GOOGLE MAPS
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { HeaderComponent } from './home/header/header.component';
import { CuerpoComponent } from './home/cuerpo/cuerpo.component';

import { PageBootstrapComponent } from './page-bootstrap/page-bootstrap.component';
import { GrillasComponent } from './page-bootstrap/grillas/grillas.component';
import { FooterComponent } from './page-bootstrap/footer/footer.component';
import { AngularComponent } from './angular/angular.component';
import { ResaltarDirective } from './angular/directives/resaltar.directive';
import { ContarClicksDirective } from './angular/directives/contar-clicks.directive';
import { OcticonDirective } from './angular/directives/opticon';
import { DetalleComponent } from './angular/detalle/detalle.component';
import { LugaresComponent } from './angular/lugares/lugares.component';
import { ContactoComponent } from './angular/contacto/contacto.component';
import { LugaresService } from './angular/services/lugares.service';
import { CrearComponent } from './angular/crear/crear.component';
/* Firebase*/
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    //DIRECTIVE
    ResaltarDirective,
    ContarClicksDirective,
    OcticonDirective,
    HeaderComponent,
    CuerpoComponent,
    PageBootstrapComponent,
    HomeComponent,
    GrillasComponent,
    FooterComponent,
    AngularComponent,
    DetalleComponent,
    LugaresComponent,
    ContactoComponent,
    CrearComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    app_routing,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDhDxmnj_xsmJFSSv5baPAzIeontcIZsnk'
    }),
    //FIREBASE
    AngularFireModule.initializeApp(environment.firebase, 'proyect001-1842a'),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    //HTTP CLIENT GEOCODING
    HttpClientModule
  ],
  providers: [LugaresService],
  bootstrap: [AppComponent]
})

export class AppModule {}



