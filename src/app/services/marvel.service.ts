import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MarvelService {
  private apiUrl = 'https://api.example.com/marvel-characters'; // Reemplazar con la URL real de la API

  constructor(private http: HttpClient) {}

  getCharacters(): Observable<Character[]> {
    // Simulación de datos de personajes de Marvel
    const characters: Character[] = [
      { id: 1, name: 'Iron Man', imageUrl: 'https://ibm.com' },
      { id: 2, name: 'Captain America', imageUrl: 'https://ibm.com' },
      { id: 3, name: 'Thor', imageUrl: 'https://ibm.com' },
      { id: 4, name: 'Hulk', imageUrl: 'https://ibm.com' },
      { id: 5, name: 'Black Widow', imageUrl: 'https://ibm.com' },
      { id: 6, name: 'Hawkeye', imageUrl: 'https://ibm.com' },
      { id: 7, name: 'Spider-Man', imageUrl: 'https://ibm.com' }
    ];
    return of(characters);
  }

  getLanguages(): Observable<Language[]> {
    // Simulación de datos de lenguajes de programación
    const languages: Language[] = [
      { id: 1, name: 'JavaScript', creator: 'Brendan Eich', year: 1995, useCases: 'Web development, Server-side scripting', imageUrl: 'https://example.com/javascript.jpg', officialPage: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
      { id: 2, name: 'Python', creator: 'Guido van Rossum', year: 1991, useCases: 'Web development, Data science, Scripting', imageUrl: 'https://example.com/python.jpg', officialPage: 'https://www.python.org/' },
      { id: 3, name: 'Java', creator: 'James Gosling', year: 1995, useCases: 'Enterprise applications, Android development', imageUrl: 'https://example.com/java.jpg', officialPage: 'https://www.oracle.com/java/' },
      { id: 4, name: 'C#', creator: 'Microsoft', year: 2000, useCases: 'Enterprise applications, Game development', imageUrl: 'https://example.com/csharp.jpg', officialPage: 'https://docs.microsoft.com/en-us/dotnet/csharp/' },
      { id: 5, name: 'Ruby', creator: 'Yukihiro Matsumoto', year: 1995, useCases: 'Web development, Scripting', imageUrl: 'https://example.com/ruby.jpg', officialPage: 'https://www.ruby-lang.org/en/' },
      { id: 6, name: 'C', creator: 'Dennis Ritchie', year: 1972, useCases: 'System programming, Embedded systems', imageUrl: 'https://example.com/c.jpg', officialPage: 'https://en.cppreference.com/w/c' },
      { id: 7, name: 'C++', creator: 'Bjarne Stroustrup', year: 1985, useCases: 'System programming, Game development', imageUrl: 'https://example.com/cpp.jpg', officialPage: 'https://isocpp.org/' },
      { id: 8, name: 'Go', creator: 'Robert Griesemer, Rob Pike, Ken Thompson', year: 2009, useCases: 'System programming, Cloud services', imageUrl: 'https://example.com/go.jpg', officialPage: 'https://golang.org/' },
      { id: 9, name: 'Swift', creator: 'Apple Inc.', year: 2014, useCases: 'iOS development, macOS development', imageUrl: 'https://example.com/swift.jpg', officialPage: 'https://swift.org/' },
      { id: 10, name: 'Kotlin', creator: 'JetBrains', year: 2011, useCases: 'Android development, Web development', imageUrl: 'https://example.com/kotlin.jpg', officialPage: 'https://kotlinlang.org/' }
    ].sort((a, b) => a.year - b.year);
    return of(languages);
  }
}

export interface Character {
  id: number;
  name: string;
  imageUrl: string;
}

export interface Language {
  id: number;
  name: string;
  creator: string;
  year: number;
  useCases: string;
  imageUrl: string;
  officialPage: string;
}