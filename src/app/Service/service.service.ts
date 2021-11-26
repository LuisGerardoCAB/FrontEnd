import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Productos } from '../Modelo/Productos';
import { Inspeccion } from '../Modelo/Inspeccion';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) {  }

  Url =  'http://localhost:8080/api/producto';
  Url2 = 'http://localhost:8080/api/inspeccion';

  getProductos() {
    return this.http.get<Productos[]>(this.Url + '/');
  }
  createProducto(producto: Productos) {
    return this.http.post<Productos>(this.Url + '/', producto);
  }
  getProductoId(id: number) {
    return this.http.get<Productos>(this.Url + '/' + id);
  }
  updateProducto(producto: Productos) {
    return this.http.put<Productos>(this.Url + '/' + producto.id, producto);
  }
  deleteProducto(producto: Productos) {
    return this.http.delete<Productos>(this.Url + '/' + producto.id);
  }

  getInspecciones() {
    return this.http.get<Inspeccion[]>(this.Url2 + '/');
  }
  createInspeccion(inspeccioness: Inspeccion) {
    return this.http.post<Inspeccion>(this.Url2 + '/', inspeccioness);
  }
  getInspeccionId(id: number) {
    return this.http.get<Inspeccion>(this.Url2 + '/' + id);
  }
  updateInspeccion(inspeccioness: Inspeccion) {
    return this.http.put<Inspeccion>(this.Url2 + '/' + inspeccioness.id, inspeccioness);
  }
  deleteInspeccion(inspeccioness: Inspeccion) {
    return this.http.delete<Inspeccion>(this.Url2 + '/' + inspeccioness.id);
  }

}
