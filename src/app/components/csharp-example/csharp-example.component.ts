import { Component, OnInit } from '@angular/core';
import { MarvelService, Language } from '../../services/marvel.service';

@Component({
  selector: 'app-csharp-example',
  templateUrl: './csharp-example.component.html',
  styleUrls: ['./csharp-example.component.css']
})
export class CsharpExampleComponent implements OnInit {
  csharpLanguage: Language | undefined;

  constructor(private marvelService: MarvelService) {}

  ngOnInit(): void {
  
  }
}