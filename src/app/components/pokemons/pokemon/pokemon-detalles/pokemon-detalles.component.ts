import { Component, OnInit,Input } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { PokemonsApiService  } from '../../../../services/pokemons-api.service';
import { Observable,forkJoin } from 'rxjs';

@Component({
  selector: 'app-pokemon-detalles',
  templateUrl: './pokemon-detalles.component.html',
  styleUrls: ['./pokemon-detalles.component.css']
})
export class PokemonDetallesComponent implements OnInit {
  private pokemon = { nombre: null, altura: null, peso: null, imagen: null };
  public pokemonId;

  @Input() indice:any;
  constructor(private _route:ActivatedRoute,private pokemonSvc: PokemonsApiService) {
    this.pokemonId =this._route.snapshot.paramMap.get('id')
   console.log(this._route.snapshot.paramMap.get('id'))
   /*  console.log(name) */
  }
  // df:any =this._route.snapshot.paramMap.get('id')
  // pokemon:Observable<any>
 
  pokemonH: Observable<any>
  nombrepokemon: Observable<any>
  ngOnInit() {
 
    this.getPokemonH(this.pokemonId);
    this.getNamePokemon(this.pokemonId);
    // this.getPokemon(this._route.snapshot.paramMap.get('id'));
  }

/*   getPokemonForm(){
    this.pokemonForm = this.pokemonSvc.getPokemonForm(this.pokemonId)


  } */
  getPokemonH(pokemonId){
    this.pokemonH = this.pokemonSvc.getPokemonH(this.pokemonId);
  //   const h = () =>{
  //     for(let r in this.pokemonH ){
  //       this.pokemonH[r]
  //   }
  // }

  }
  getNamePokemon(pokemonId){
    this.nombrepokemon = this.pokemonSvc.getNamePokemon(this.pokemonId);
  }

  // getPokemon(d:any){
  //   this.pokemon = this.pokemonSvc.getPokemon(d)
  // }

}
