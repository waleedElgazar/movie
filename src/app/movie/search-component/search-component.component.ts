import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Movie } from '../Movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-search-component',
  templateUrl: './search-component.component.html',
  styleUrls: ['./search-component.component.css']
})
export class SearchComponentComponent{
  @Output()
  movieName = new EventEmitter<string>();

  constructor(private MovieService:MovieService){}

   sendToParent(movieValue: string){
     this.movieName.emit(movieValue);
   }

  getMovie(title:string){
    console.log(title)
    console.log(this.MovieService.getMovieWithTitle(title));
    return this.MovieService.getMovieWithTitle(title);
  }
}
