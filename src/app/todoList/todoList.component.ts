import {Component} from '@angular/core';
import {TodoItemComponent} from './todoItem/todoItem.component';
import {DataService} from '../../data.service';
import Todo from '../../todo.interface';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todoList.component.html',
  styleUrls: ['./todoList.component.scss']
})

export class TodoListComponent{
  public todoList: Todo[];
  constructor(private dataService: DataService){
    this.todoList = this.dataService.getData();
    console.log(this.todoList);
  }

  public onChangeStatus(todoItem){
    console.log(todoItem);
  }

  ngOnInit() {
    this.dataService.getNewTodo().subscribe((data: Todo) => console.log(data));
  }
}
