import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Rutas
import { app_routing } from "./app.routes";


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { HeaderComponent } from './home/header/header.component';
import { CuerpoComponent } from './home/cuerpo/cuerpo.component';

import { PageBootstrapComponent } from './page-bootstrap/page-bootstrap.component';
import { GrillasComponent } from './page-bootstrap/grillas/grillas.component';
import { FooterComponent } from './page-bootstrap/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CuerpoComponent,
    PageBootstrapComponent,
    HomeComponent,
    GrillasComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    app_routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {}



