import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../../Service/service.service';
import { Inspeccion } from '../../Modelo/Inspeccion';

@Component({
  selector: 'app-listar-inspeccion',
  templateUrl: './listar-inspeccion.component.html',
  styleUrls: ['./listar-inspeccion.component.css']
})
export class ListarInspeccionComponent implements OnInit {

  inspecciones: Inspeccion[];
  filterPostI = '';

  constructor(private service: ServiceService, private router: Router) { }

  ngOnInit() {
    this.service.getInspecciones().subscribe(data => { this.inspecciones = data; } );
  }

  EditarInspeccion(insp: Inspeccion): void {
    localStorage.setItem('id', insp.id.toString());
    this.router.navigate(['editI']);
  }

}
