import { Component, OnInit,Input } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import { PokemonDetallesService  } from '../pokemon-detalles.service'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pokemon-detalles',
  templateUrl: './pokemon-detalles.component.html',
  styleUrls: ['./pokemon-detalles.component.css']
})
export class PokemonDetallesComponent implements OnInit {

  @Input() name: any;
  constructor(private _route:ActivatedRoute,private pokemonSvc:PokemonDetallesService ) {

   console.log(this._route.snapshot.paramMap.get('id'))
    console.log(name)
  }
  df:any =this._route.snapshot.paramMap.get('id')
  pokemon:Observable<any>

  ngOnInit() {
    // this.getPokemon(this._route.snapshot.paramMap.get('id'));
  }

  // getPokemon(d:any){
  //   this.pokemon = this.pokemonSvc.getPokemon(d)
  // }

}
