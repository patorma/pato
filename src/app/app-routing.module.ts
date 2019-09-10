import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonsComponent } from './components/pokemons/pokemons.component';
import { PokemonComponent } from './components/pokemons/pokemon/pokemon.component';
import {PokemonDetallesComponent} from './components/pokemons/pokemon/pokemon-detalles/pokemon-detalles.component'
const routes: Routes = [
{
  path: '', redirectTo: '/pokemons', pathMatch: 'full'
},
{// aca se crae la ruta pokemons de antes
  path: 'pokemons', component: PokemonsComponent

},
{ path: 'pokemon', component: PokemonComponent
},
{
  path: 'detallesPokemon/:id', component: PokemonDetallesComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
