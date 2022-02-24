import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardComponent } from './board/board.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  { path: 'board', component: BoardComponent },
  { path: 'search', component: SearchComponent },
  { path: '**', redirectTo: 'board', pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }