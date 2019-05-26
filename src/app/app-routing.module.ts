import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ToDoListComponent} from './mainView/to-do-list/to-do-list.component';
import {ToDoItemDetailsComponent} from './mainView/to-do-list/to-do-item-details/to-do-item-details.component';

const routes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: 'ToDoList'},
    {path: 'ToDoList', component: ToDoListComponent, children: [
        {path: ':id', component: ToDoItemDetailsComponent}
      ]},
    {path: '**', redirectTo: 'ToDoListComponent'}
  ]
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
