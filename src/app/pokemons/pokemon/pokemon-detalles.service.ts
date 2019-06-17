import { Injectable } from '@angular/core';
import {HttpClient} from  '@angular/common/http'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokemonDetallesService {
  URL_API2 = `https://pokeapi.co/api/v2/pokemon/`;

  constructor(private http:HttpClient) { }

  getPokemon(id:any):Observable<any>{
    return this.http.get<any>(`${this.URL_API2}${id}`)
    .pipe(map((data:any) => data.types))
  }

}
