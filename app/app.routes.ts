
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from "./home/home.component";
import { AngularComponent } from "./angular/angular.component";
import { PageBootstrapComponent } from "./page-bootstrap/page-bootstrap.component";
import { GrillasComponent } from "./page-bootstrap/grillas/grillas.component";
import { DetalleComponent } from './angular/detalle/detalle.component';



const app_routes: Routes = [

	{ path: 'home', component: HomeComponent},
	{ path: 'angular', component: AngularComponent},
	{ path: 'bootstrap', component: PageBootstrapComponent},
	{ path: 'grillas', component: GrillasComponent},
	{ path: 'detalle/:id', component : DetalleComponent}
	{ path: '**', pathMatch: 'full', redirectTo: ''},
	
];

export const app_routing = RouterModule.forRoot(app_routes);