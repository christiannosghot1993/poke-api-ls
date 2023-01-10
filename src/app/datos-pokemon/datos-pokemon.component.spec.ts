import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosPokemonComponent } from './datos-pokemon.component';

describe('DatosPokemonComponent', () => {
  let component: DatosPokemonComponent;
  let fixture: ComponentFixture<DatosPokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatosPokemonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatosPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
