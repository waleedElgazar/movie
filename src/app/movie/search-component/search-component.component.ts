import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../Movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-search-component',
  templateUrl: './search-component.component.html',
  styleUrls: ['./search-component.component.css']
})
export class SearchComponentComponent{
  @Input() newItem = '';
  constructor(private MovieService:MovieService){}
 
  getMovie(title:string){
    console.log(title)
    console.log(this.MovieService.getMovieWithTitle(title));
    return this.MovieService.getMovieWithTitle(title);
  }
}
