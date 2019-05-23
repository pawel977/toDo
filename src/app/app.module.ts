import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ToDoListComponent } from './mainView/to-do-list/to-do-list.component';
import { ToDoItemComponent } from './mainView/to-do-list/to-do-item/to-do-item.component';
import { InProgressItemComponent } from './mainView/to-do-list/in-progress-item/in-progress-item.component';
import { DoneItemComponent } from './mainView/to-do-list/done-item/done-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ToDoListComponent,
    ToDoItemComponent,
    InProgressItemComponent,
    DoneItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
