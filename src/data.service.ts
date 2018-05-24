import Todo from './todo.interface';
import {Subject} from 'rxjs';

export class DataService{
  private _data: Todo[] = [
    {title: 'Todo 1'},
    {title: 'Todo 2'},
    {title: 'Todo 3'}
    ];

  getData(){
    return this._data;
  }
  addData(title: string){
    this._data.push({title});
    this.subject.next(<Todo>{title});
  }

  private subject = new Subject<Todo>();

  public getNewTodo(){
    return this.subject.asObservable();
  }
}
