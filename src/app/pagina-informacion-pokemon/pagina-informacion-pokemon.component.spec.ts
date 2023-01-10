import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaInformacionPokemonComponent } from './pagina-informacion-pokemon.component';

describe('PaginaInformacionPokemonComponent', () => {
  let component: PaginaInformacionPokemonComponent;
  let fixture: ComponentFixture<PaginaInformacionPokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaInformacionPokemonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaInformacionPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
