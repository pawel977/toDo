import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ToDoListComponent } from './mainView/to-do-list/to-do-list.component';
import {HttpClientModule} from '@angular/common/http';
import {ToDoService} from './services/to-do.service';
import { ToDoItemComponent } from './mainView/to-do-list/to-do-item/to-do-item.component';
import {FormsModule} from '@angular/forms';
import { ToDoItemEditComponent } from './mainView/to-do-list/to-do-item-edit/to-do-item-edit.component';
import { ToDoItemDetailsComponent } from './mainView/to-do-list/to-do-item-details/to-do-item-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ToDoListComponent,
    ToDoItemComponent,
    ToDoItemEditComponent,
    ToDoItemDetailsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ToDoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
