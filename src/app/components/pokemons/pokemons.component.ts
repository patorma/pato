import { Component, OnInit } from '@angular/core';
import { PokemonsApiService } from '../../services/pokemons-api.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {
  // inyectamos el service
  constructor(private pokemonSvc: PokemonsApiService) { }
  allPokemons: Observable<any>;
  // pokemon: Observable<any>
  ngOnInit() {
    // aqui se llama al metodo para obtener pokemons
    this.getPokemons();
  }

  getPokemons() {
    this.allPokemons = this.pokemonSvc.getAllPokemons();
  }



}
