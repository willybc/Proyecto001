import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CuerpoComponent } from './cuerpo/cuerpo.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CuerpoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {}



