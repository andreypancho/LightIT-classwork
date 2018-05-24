import { Component } from '@angular/core';
import {UsersService} from './services/users.service';
import {UserModel} from './models/user.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular';
  showFirstBlock = true;

  constructor(private userService: UsersService){}
  changeFirstBlock(){
     return this.showFirstBlock = !this.showFirstBlock;
  }

  public users: UserModel[] = [];

  public ngOnInit() {
    this.userService.getUserList().subscribe((res: UserModel[]) => {
      this.users = res;
      console.log(this.users);
    });
  }



  public birthday = new Date(1988, 10, 15);
}
