import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarInspeccionComponent } from './listar-inspeccion.component';

describe('ListarInspeccionComponent', () => {
  let component: ListarInspeccionComponent;
  let fixture: ComponentFixture<ListarInspeccionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarInspeccionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarInspeccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
