import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ToDoListComponent} from './mainView/to-do-list/to-do-list.component';
import {ToDoItemDetailsComponent} from './mainView/to-do-list/to-do-item-details/to-do-item-details.component';
import {ToDoItemEditComponent} from './mainView/to-do-list/to-do-item-edit/to-do-item-edit.component';

const routes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: 'ToDoList'},
    {path: 'ToDoList', component: ToDoListComponent, children: [
        {path: ':id', component: ToDoItemDetailsComponent},
        {path: ':id/edit', component: ToDoItemEditComponent}
      ]},
    {path: '**', redirectTo: 'ToDoListComponent'}
  ]
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
