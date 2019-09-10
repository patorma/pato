import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  //como no hay interface usaremos any
  @Input() pokemon: any
  @Input() indice:any
  constructor() { }

  ngOnInit() {
  }

}
