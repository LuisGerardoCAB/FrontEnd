import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataTablesModule } from 'angular-datatables';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClient} from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';

  constructor(private router: Router, private http: HttpClient) { }

  ListarProducto() {
    this.router.navigate(["listarP"]);
  }

  NuevoProducto() {
    this.router.navigate(["addP"]);
  }

  ListarInspeccion() {
    this.router.navigate(["listarI"]);
  }

  NuevoInspeccion() {
    this.router.navigate(["addI"]);
  }

}
