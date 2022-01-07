import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonRecomendacionInicialComponent } from './boton-recomendacion-inicial.component';

describe('BotonRecomendacionInicialComponent', () => {
  let component: BotonRecomendacionInicialComponent;
  let fixture: ComponentFixture<BotonRecomendacionInicialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotonRecomendacionInicialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BotonRecomendacionInicialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
