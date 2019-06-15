import { TestBed } from '@angular/core/testing';

import { PokemonsApiService } from './pokemons-api.service';

describe('PokemonsApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PokemonsApiService = TestBed.get(PokemonsApiService);
    expect(service).toBeTruthy();
  });
});
