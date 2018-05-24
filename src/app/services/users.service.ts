import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserModel} from '../models/user.model';
import {map} from 'rxjs/internal/operators';

@Injectable()
export class UsersService {
  constructor(private http: HttpClient){}

  getUsers(){
    return this.http.get('./assets/users.json');
  }

  public getUserList(){
    return this.http.get('./assets/users.json')
      .pipe(
        map(response => {
          let results: UserModel[] = [];
          response.data.forEach(item => results.push(new UserModel(item)));
          return results;
        })
      );
  }
}
