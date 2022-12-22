import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Movie } from '../Movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-component',
  templateUrl: './movie-component.component.html',
  styleUrls: ['./movie-component.component.css']
})
export class MovieComponentComponent implements OnInit{
  @Input() newItemEvent = '';

  movies:Movie[]=[]
  moviesFounded:Movie[]=[]

  title = '';

  constructor(private MovieService:MovieService){

  }
  ngOnInit(): void {
    this.movies=this.MovieService.getMovies();
    console.log(this.movies);

  }


  getMovie(childName:string){
    this.moviesFounded=[]
    console.log("from parent "+JSON.stringify(this.MovieService.getMovieWithTitle(childName)));
    if(this.MovieService.getMovieWithTitle(childName)!=undefined){
      // @ts-ignore
      this.moviesFounded.push(this.MovieService.getMovieWithTitle(childName));

    }
    // this.MovieService.getMovieWithTitle(childName);
    this.movies=this.movies;
  }

}
