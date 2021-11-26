import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../../Service/service.service';
import { Productos } from '../../Modelo/Productos';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  productos: Productos = new Productos();

  constructor(private router: Router, private service: ServiceService) { }

  ngOnInit() {
  }

  GuardarProducto(){
    this.service.createProducto(this.productos)
      .subscribe(data => {
        alert( 'Se Agrego con Exito...!!!' );
        this.router.navigate(['listar']);
      });
  }


}
