import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  movies = [
    "movie-1",
    "movie-2",
    "movie-3",
    "movie-4",
    "movie-5"
  ]

  fruits = [
    "fruit-1",
    "fruit-2",
    "fruit-3",
    "fruit-4"
  ]

  showMe = true;
}
