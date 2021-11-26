import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ServiceService} from '../../Service/service.service';
import { Inspeccion } from '../../Modelo/Inspeccion';

@Component({
  selector: 'app-edit-inspeccion',
  templateUrl: './edit-inspeccion.component.html',
  styleUrls: ['./edit-inspeccion.component.css']
})
export class EditInspeccionComponent implements OnInit {

  inspeccion: Inspeccion = new Inspeccion();

  constructor(private router: Router, private service: ServiceService) { }

  ngOnInit() {
    this.EditarI();
  }

  EditarI() {
    let id = localStorage.getItem('id');
    this.service.getInspeccionId(+id)
      .subscribe(data => {
        this.inspeccion = data;
      });
  }

  ActualizarInspeccion(insp: Inspeccion) {
    this.service.updateInspeccion(insp)
      .subscribe(data => {
        this.inspeccion = data;
        alert('Se actualizo con exito...!!!');
        this.router.navigate(['listarI']);
      });

  }

}
