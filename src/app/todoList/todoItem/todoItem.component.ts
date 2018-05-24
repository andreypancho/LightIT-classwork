import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgForm} from '@angular/forms';
import Todo from '../../../todo.interface';


@Component({
  selector: 'app-todo-item',
  templateUrl: './todoItem.component.html',
  styleUrls: ['todoItem.component.scss']
})

export class TodoItemComponent {
  @Input() todoItem: Todo;
  @Output() onChangeStatus = new EventEmitter<Todo>();
   test = '';
   test2 = '';
   onClick() {
       this.test2 = this.test;
       console.log(this.test2);
   }
   public toggleStatus(){
     this.onChangeStatus.emit(this.todoItem);
   }
}
