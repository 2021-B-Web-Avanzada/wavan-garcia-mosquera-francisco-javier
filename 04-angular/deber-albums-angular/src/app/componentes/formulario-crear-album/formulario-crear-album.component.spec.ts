import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioCrearAlbumComponent } from './formulario-crear-album.component';

describe('FormularioCrearAlbumComponent', () => {
  let component: FormularioCrearAlbumComponent;
  let fixture: ComponentFixture<FormularioCrearAlbumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioCrearAlbumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioCrearAlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
