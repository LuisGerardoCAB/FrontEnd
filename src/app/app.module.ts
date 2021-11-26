import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarComponent } from './Producto/listar/listar.component';
import { AddComponent } from './Producto/add/add.component';
import { EditComponent } from './Producto/edit/edit.component';
import { ListarInspeccionComponent } from './Inspeccion/listar-inspeccion/listar-inspeccion.component';
import { AddInspeccionComponent } from './Inspeccion/add-inspeccion/add-inspeccion.component';
import { EditInspeccionComponent } from './Inspeccion/edit-inspeccion/edit-inspeccion.component';
import { FilterPipe } from './pipes/filter.pipe';
import { DataTablesModule } from 'angular-datatables';

import { ServiceService } from './Service/service.service';

@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    AddComponent,
    EditComponent,
    ListarInspeccionComponent,
    AddInspeccionComponent,
    EditInspeccionComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    DataTablesModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
