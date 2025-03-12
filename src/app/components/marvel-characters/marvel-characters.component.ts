import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MarvelService, Language } from '../../services/marvel.service';

@Component({
  selector: 'app-marvel-characters',
  templateUrl: './marvel-characters.component.html',
  styleUrls: ['./marvel-characters.component.css']
})
export class MarvelCharactersComponent implements OnInit {
  languages: Language[] = [];

  constructor(private marvelService: MarvelService, private router: Router) {}

  ngOnInit(): void {
    this.marvelService.getLanguages().subscribe((data: Language[]) => {
      this.languages = data;
    });
  }

  onButtonClick(language: Language): void {
    console.log(`Button clicked for language: ${language.name}`);
    const trimmedName = language.name.trim();
    console.log(`Trimmed name: ${trimmedName}`);
    if (trimmedName === 'C#') {
      console.log(`Redirecting to 1 ${language.officialPage}`);
      this.router.navigate(['/csharp-example']);
    } else {
      console.log(`Redirecting to ${language.officialPage}`);
        window.location.href = language.officialPage;
    }
  }
}
