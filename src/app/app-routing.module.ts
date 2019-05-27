import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ToDoListComponent} from './mainView/to-do-list/to-do-list.component';
import {ToDoItemDetailsComponent} from './mainView/to-do-list/to-do-item-details/to-do-item-details.component';
import {ToDoItemEditComponent} from './mainView/to-do-list/to-do-item-edit/to-do-item-edit.component';
import {ToDoItemCreateComponent} from './mainView/to-do-list/to-do-item-create/to-do-item-create.component';
import {HistoryComponent} from './history/history.component';

const routes: Routes = [
    {path: '', redirectTo: 'ToDoList', pathMatch: 'full'},
    {
      path: 'ToDoList', component: ToDoListComponent, children: [
        {path: 'new', component: ToDoItemCreateComponent},
        {path: ':id', component: ToDoItemDetailsComponent},
        {path: ':id/edit', component: ToDoItemEditComponent},
        {path: '**', redirectTo: ''}
      ]
    },
    {path: 'history', component: HistoryComponent},
    {path: '**', redirectTo: 'ToDoList'}
  ]
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
