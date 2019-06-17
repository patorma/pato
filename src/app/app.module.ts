import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule,MatCardModule, MatFormFieldModule } from '@angular/material';
import { PokemonComponent } from './pokemons/pokemon/pokemon.component';
import { PokemonsComponent } from './pokemons/pokemons.component';
import { HttpClientModule } from '@angular/common/http'
import { FlexLayoutModule } from '@angular/flex-layout';
import { PokemonDetallesComponent } from './pokemons/pokemon/pokemon-detalles/pokemon-detalles.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PokemonComponent,
    PokemonsComponent,
    PokemonDetallesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    HttpClientModule,
    MatFormFieldModule,
    MatCardModule,
    FlexLayoutModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
