import { Component, OnInit, Input } from '@angular/core';
import { PokemonsApiService } from '../../../services/pokemons-api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tipo',
  templateUrl: './tipo.component.html',
  styleUrls: ['./tipo.component.css']
})
export class TipoComponent implements OnInit {
  @Input() indice: number;
  @Input() tipo:any;

  constructor(/* private pokemonSvc: PokemonsApiService */) { }
 /*  tipoPokemon: Observable<any>; */

  ngOnInit() {
   /*  this.getPokemonForm(); */
   
  }
/* getPokemonForm(){
  this.tipoPokemon = this.pokemonSvc.getPokemonForm(this.indice);
  console.log(`aqui viendo ${this.indice}`);
} */
}
