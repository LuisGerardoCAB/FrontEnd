import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarComponent } from './Producto/listar/listar.component';
import { AddComponent } from './Producto/add/add.component';
import { EditComponent } from './Producto/edit/edit.component';
import { ListarInspeccionComponent } from './Inspeccion/listar-inspeccion/listar-inspeccion.component';
import { AddInspeccionComponent } from './Inspeccion/add-inspeccion/add-inspeccion.component';
import { EditInspeccionComponent } from './Inspeccion/edit-inspeccion/edit-inspeccion.component';

const routes: Routes = [
  { path: 'listarP', component: ListarComponent },
  { path: 'addP', component: AddComponent },
  { path: 'editP', component: EditComponent },
  { path: 'listarI', component: ListarInspeccionComponent },
  { path: 'addI', component: AddInspeccionComponent},
  { path: 'editI', component: EditInspeccionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
