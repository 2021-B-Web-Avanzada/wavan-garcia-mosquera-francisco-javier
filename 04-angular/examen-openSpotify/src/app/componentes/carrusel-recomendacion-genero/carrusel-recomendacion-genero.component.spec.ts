import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarruselRecomendacionGeneroComponent } from './carrusel-recomendacion-genero.component';

describe('CarruselRecomendacionGeneroComponent', () => {
  let component: CarruselRecomendacionGeneroComponent;
  let fixture: ComponentFixture<CarruselRecomendacionGeneroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarruselRecomendacionGeneroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarruselRecomendacionGeneroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
