import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import {LoginComponent} from './login/login.component';
import {AuthServices} from './core/AuthService.service';
import {HttpClientModule,} from '@angular/common/http';
import {AuthServiceConfig, GoogleLoginProvider, SocialLoginModule} from 'angular5-social-login';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SocialLoginModule,
  ],
  providers: [AuthServices, {
    provide: AuthServiceConfig,
    useFactory: getAuthServiceConfigs
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function getAuthServiceConfigs() {
  const config = new AuthServiceConfig(
    [
      {
        id: GoogleLoginProvider.PROVIDER_ID,
        provider: new GoogleLoginProvider('837694048230-keo53o03s8od9ee39boib7o6prp18fs5.apps.googleusercontent.com')
      },
    ]
);
  return config;
}
