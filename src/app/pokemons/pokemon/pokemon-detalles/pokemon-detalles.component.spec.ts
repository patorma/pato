import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonDetallesComponent } from './pokemon-detalles.component';

describe('PokemonDetallesComponent', () => {
  let component: PokemonDetallesComponent;
  let fixture: ComponentFixture<PokemonDetallesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonDetallesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
