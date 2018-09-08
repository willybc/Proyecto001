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


@NgModule({
  declarations: [
    AppComponent,
    //DIRECTIVE
    ResaltarDirective,
    ContarClicksDirective,
    HeaderComponent,
    CuerpoComponent,
    PageBootstrapComponent,
    HomeComponent,
    GrillasComponent,
    FooterComponent,
    AngularComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    app_routing,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDhDxmnj_xsmJFSSv5baPAzIeontcIZsnk'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {}



