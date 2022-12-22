import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieComponentComponent } from './movie/movie-component/movie-component.component';
import { MovieModule } from "./movie/movie.module";
import { SearchComponentComponent } from './movie/search-component/search-component.component';

@NgModule({
    declarations: [
        AppComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MovieModule,
    ]
})
export class AppModule { }
