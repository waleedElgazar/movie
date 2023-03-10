import { Injectable } from '@angular/core';
import { Movie } from './Movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  movies:Movie[]=[];

  getMovies(){
    this.movies[0]=new Movie("john wick 1","action",.5,1998,"../assets/download1.jfif");
    this.movies[1]=new Movie("john wick 2","action",3.5,1998,"../assets/download2.jfif");
    this.movies[2]=new Movie("fast and furios","acton",1.5,1998,"../assets/download.jfif");
    this.sort()
    return this.movies;
  }

  getMovieWithTitle(title:string){
    // var movieFounded :Movie;
    // for (const movie of this.movies) {
    //   if(movie.title==title){
    //     movieFounded = movie;
    //     this.movies=[];
    //     this.movies.push(movieFounded);
    //     return this.movies;
    //   }
    // }
    return this.movies.find(m=>m.title==title);
  }
  sort(){
  this.movies.sort((a,b)=>(a.rate)>b.rate?-1:1);
  }
}
