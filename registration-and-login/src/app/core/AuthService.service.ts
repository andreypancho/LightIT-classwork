import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {

  };

  public pushRegUser(username, email, password1, password2) {
    return this.http.post('http://light-it-04.tk/api/registration/', {username, email, password1, password2});
  }
}
