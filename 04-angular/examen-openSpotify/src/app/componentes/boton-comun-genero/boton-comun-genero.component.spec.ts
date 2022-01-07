import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonComunGeneroComponent } from './boton-comun-genero.component';

describe('BotonComunGeneroComponent', () => {
  let component: BotonComunGeneroComponent;
  let fixture: ComponentFixture<BotonComunGeneroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotonComunGeneroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BotonComunGeneroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
