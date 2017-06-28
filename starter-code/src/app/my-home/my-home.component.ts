import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CinemaService } from '../services/cinema.service';

@Component({
  selector: 'app-my-home',
  templateUrl: './my-home.component.html',
  styleUrls: ['./my-home.component.css'],
  providers: [ CinemaService ]
})
export class MyHomeComponent implements OnInit {
  movies : Array<Object>

  constructor( 
    private router: Router,
    private contactService: CinemaService
  ) { }

  ngOnInit() {
    this.movies = this.contactService.getMovies();
  }

}
