import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaRecomendacionComponent } from './tarjeta-recomendacion.component';

describe('TarjetaRecomendacionComponent', () => {
  let component: TarjetaRecomendacionComponent;
  let fixture: ComponentFixture<TarjetaRecomendacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarjetaRecomendacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TarjetaRecomendacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
