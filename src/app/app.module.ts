import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NewComponentComponent } from './new-component/new-component.component';
import {TodoListComponent} from './todoList/todoList.component';
import {TodoItemComponent} from './todoList/todoItem/todoItem.component';
import {FormsModule} from '@angular/forms';
import {DataService} from '../data.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {UsersService} from './services/users.service';
import { AddItemComponent } from './todoList/add-item/add-item.component';

@NgModule({
  declarations: [
    AppComponent,
    NewComponentComponent,
    TodoListComponent,
    TodoItemComponent,
    AddItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [DataService, UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
