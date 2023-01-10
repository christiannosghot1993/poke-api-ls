import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaSeleccionPokemonComponent } from './pagina-seleccion-pokemon.component';

describe('PaginaSeleccionPokemonComponent', () => {
  let component: PaginaSeleccionPokemonComponent;
  let fixture: ComponentFixture<PaginaSeleccionPokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaSeleccionPokemonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaSeleccionPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
