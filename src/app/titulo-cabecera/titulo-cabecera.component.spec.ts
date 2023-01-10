import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TituloCabeceraComponent } from './titulo-cabecera.component';

describe('TituloCabeceraComponent', () => {
  let component: TituloCabeceraComponent;
  let fixture: ComponentFixture<TituloCabeceraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TituloCabeceraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TituloCabeceraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
