import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  constructor(private route: ActivatedRoute) {
      console.log(this.route.snapshot.params['id']);
      console.log(this.route.snapshot.queryParams);
      console.log(this.route.snapshot.queryParams['view']);
      console.log(this.route.snapshot.queryParams['google']);
   }

  ngOnInit() {
  }

}
