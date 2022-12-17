import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Movie } from '../Movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-component',
  templateUrl: './movie-component.component.html',
  styleUrls: ['./movie-component.component.css']
})
export class MovieComponentComponent implements OnInit{
  @Output() newItem = new EventEmitter<string>();
  movies:Movie[]=[]
  constructor(private MovieService:MovieService){

  }
  ngOnInit(): void {
    this.movies=this.MovieService.getMovies();
    console.log(this.movies)
  }

  getMovie(title:string){
    console.log(title)
    console.log(this.MovieService.getMovieWithTitle(title));
    return this.MovieService.getMovieWithTitle(title);
  }
}
