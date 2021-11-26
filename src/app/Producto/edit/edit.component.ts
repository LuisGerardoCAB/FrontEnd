import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ServiceService} from '../../Service/service.service';
import {Productos} from '../../Modelo/Productos';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  producto: Productos = new Productos();

  constructor(private router: Router, private service: ServiceService) { }

  ngOnInit() {
    this.EditarP();
  }

  EditarP() {
    let id = localStorage.getItem('id');
    this.service.getProductoId(+id)
      .subscribe(data => {
        this.producto = data;
      });
  }

  ActualizarProducto(prod: Productos) {
    this.service.updateProducto(prod)
      .subscribe(data => {
        this.producto = data;
        alert('Se actualizo con exito...!!!');
        this.router.navigate(['listarP']);
      });

  }

}
