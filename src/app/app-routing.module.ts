import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarvelCharactersComponent } from './components/marvel-characters/marvel-characters.component';
import { CsharpExampleComponent } from './components/csharp-example/csharp-example.component';

const routes: Routes = [
  { path: '', component: MarvelCharactersComponent },
  { path: 'csharp-example', component: CsharpExampleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }