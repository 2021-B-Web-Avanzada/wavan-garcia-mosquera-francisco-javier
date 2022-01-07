import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonRecomendacionGeneroComponent } from './boton-recomendacion-genero.component';

describe('BotonRecomendacionGeneroComponent', () => {
  let component: BotonRecomendacionGeneroComponent;
  let fixture: ComponentFixture<BotonRecomendacionGeneroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotonRecomendacionGeneroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BotonRecomendacionGeneroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
