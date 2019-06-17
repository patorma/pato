import { TestBed } from '@angular/core/testing';

import { PokemonDetallesService } from './pokemon-detalles.service';

describe('PokemonDetallesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PokemonDetallesService = TestBed.get(PokemonDetallesService);
    expect(service).toBeTruthy();
  });
});
