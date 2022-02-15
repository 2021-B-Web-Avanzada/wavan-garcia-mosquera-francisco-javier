import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioCrearCancionComponent } from './formulario-crear-cancion.component';

describe('FormularioCrearCancionComponent', () => {
  let component: FormularioCrearCancionComponent;
  let fixture: ComponentFixture<FormularioCrearCancionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioCrearCancionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioCrearCancionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
