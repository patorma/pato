import { Component, OnInit, Input } from '@angular/core';
import { PokemonsApiService } from '../../../services/pokemons-api.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  //como no hay interface usaremos any
  @Input() pokemon: any
  @Input() indice:any
 
  @Input() tipo: any;
  constructor(private pokemonSvc: PokemonsApiService) { }
  tipoPokemon: Observable<any>;

  ngOnInit() {
    this.getPokemonForm(this.indice);
  }
  getPokemonForm(indice){
    this.tipoPokemon = this.pokemonSvc.getPokemonForm(this.indice);
  }

}
