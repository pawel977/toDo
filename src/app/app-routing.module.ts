import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ToDoListComponent} from './mainView/to-do-list/to-do-list.component';

const routes: Routes = [
    {path: '', component: ToDoListComponent},
    {path: '', pathMatch: 'full', redirectTo: 'ToDoListComponent'},
    {path: '**', redirectTo: 'ToDoListComponent'}
  ]
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
