import {Component, OnInit} from '@angular/core';
import {
  AuthService,
  GoogleLoginProvider
} from 'angular5-social-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private socialAuthService: AuthService) { }

  ngOnInit() {
  }

  public socialSignIn(socialPlatform: string) {
    let socialPlatformProvider;
    if(socialPlatform === 'google'){
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    }

    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        console.log(socialPlatform + ' sign in data : ' , userData);
        // Now sign-in with userData
      }
    );
  }

}
