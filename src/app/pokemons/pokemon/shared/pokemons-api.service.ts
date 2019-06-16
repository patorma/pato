import { Injectable } from '@angular/core';
import {HttpClient} from  '@angular/common/http'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PokemonsApiService {

  URL_API = 'https://pokeapi.co/api/v2/pokemon/?limit=25';
  constructor(private http:HttpClient) { }

  getAllPokemons() : Observable<any>{
    return this.http.get<any>(this.URL_API)
    .pipe(map((data:any) => data.results))
  }
}
