import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieComponentComponent } from './movie-component/movie-component.component';
import { SearchComponentComponent } from './search-component/search-component.component';



@NgModule({
  declarations: [
    SearchComponentComponent,
    MovieComponentComponent
  ],
  exports:[
    SearchComponentComponent,
    MovieComponentComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MovieModule { }
