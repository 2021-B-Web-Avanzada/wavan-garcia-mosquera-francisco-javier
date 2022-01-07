import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonSeccionComponent } from './boton-seccion.component';

describe('BotonSeccionComponent', () => {
  let component: BotonSeccionComponent;
  let fixture: ComponentFixture<BotonSeccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotonSeccionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BotonSeccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
