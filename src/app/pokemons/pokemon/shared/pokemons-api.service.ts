import { Injectable } from '@angular/core';
import {HttpClient} from  '@angular/common/http'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PokemonsApiService {
  DATO = '?limit=25'
  URL_API = `https://pokeapi.co/api/v2/pokemon/`;
  URL_API2 = `https://pokeapi.co/api/v2/pokemon/`;
  constructor(private http:HttpClient) { }

  getAllPokemons() : Observable<any>{
    return this.http.get<any>(this.URL_API+this.DATO)
    .pipe(map((data:any) => data.results))
  }
  getPokemon(id:any):Observable<any>{
    return this.http.get<any>(`${this.URL_API}${id}`)
    .pipe(map((data:any) => data.types))
  }
}
