import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { Inspeccion } from 'src/app/Modelo/Inspeccion';

@Component({
  selector: 'app-add-inspeccion',
  templateUrl: './add-inspeccion.component.html',
  styleUrls: ['./add-inspeccion.component.css']
})
export class AddInspeccionComponent implements OnInit {

  inspecciones: Inspeccion = new Inspeccion();

  constructor(private router: Router, private service: ServiceService) { }

  ngOnInit() {
  }

  GuardarInspeccion(){
    this.service.createInspeccion(this.inspecciones)
      .subscribe(data => {
        alert( 'Se Agrego con Exito...!!!' );
        this.router.navigate(['listar']);
      });
  }

}
