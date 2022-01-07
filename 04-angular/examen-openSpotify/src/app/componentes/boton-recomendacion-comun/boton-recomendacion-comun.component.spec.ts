import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonRecomendacionComunComponent } from './boton-recomendacion-comun.component';

describe('BotonRecomendacionComunComponent', () => {
  let component: BotonRecomendacionComunComponent;
  let fixture: ComponentFixture<BotonRecomendacionComunComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotonRecomendacionComunComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BotonRecomendacionComunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
