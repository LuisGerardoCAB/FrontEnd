import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../../Service/service.service';
import { Productos } from '../../Modelo/Productos';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})

export class ListarComponent implements OnInit {

  product: Productos[];
  filterPost = '';

  constructor(private service: ServiceService, private router: Router) { }

  ngOnInit() {
    this.service.getProductos().subscribe(data => { this.product = data; });
  }

  EditarProducto(prod: Productos): void {
    localStorage.setItem('id', prod.id.toString());
    this.router.navigate(['editP']);
  }

}
