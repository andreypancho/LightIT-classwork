import { Component, OnInit } from '@angular/core';
import {AuthServices} from '../core/AuthService.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent implements OnInit {
    username = '';
    email = '';
    password1 = '';
    password2 = '';


  constructor(private authService: AuthServices) {
  }

  ngOnInit() {
  }

  public onSubmit(username, email, password1, password2) {
    return this.authService.pushRegUser(username, email, password1, password2);
  }
}
