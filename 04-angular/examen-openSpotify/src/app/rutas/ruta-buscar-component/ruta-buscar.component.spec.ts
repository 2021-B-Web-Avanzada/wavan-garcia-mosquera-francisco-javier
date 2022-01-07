import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaBuscarComponent } from './ruta-buscar.component';

describe('RutaBuscarComponentComponent', () => {
  let component: RutaBuscarComponent;
  let fixture: ComponentFixture<RutaBuscarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutaBuscarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaBuscarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
