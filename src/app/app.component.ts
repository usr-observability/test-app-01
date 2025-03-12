import { Component, OnInit } from '@angular/core';
import { MarvelService, Character } from './services/marvel.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my-angular-app';
  characters: Character[] = [];

  constructor(private marvelService: MarvelService) {}

  ngOnInit(): void {
    this.marvelService.getCharacters().subscribe((data: Character[]) => {
      this.characters = data;
    });
  }
}