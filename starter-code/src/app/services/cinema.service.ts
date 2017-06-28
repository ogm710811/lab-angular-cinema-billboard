import { Injectable } from '@angular/core';

import movieList from '../model/sample-movies';
import * as _ from 'underscore';

@Injectable()
export class CinemaService {

  movies = movieList;

  constructor() { }

  // returns all movies from movieList 
  getMovies() : Array<Object> {
    return this.movies;
  }
  // returns a movie given its Id
  getMovie( movieId : number) : Object {
    return _.findWhere(this.movies, { id : movieId })
  } 

}
