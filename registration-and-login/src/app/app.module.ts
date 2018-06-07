import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import {AuthService} from './core/AuthService.service';
import {HTTP_INTERCEPTORS, } from '@angular/common/http';
import {AuthInterceptor} from './core/AuthInterceptor';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [AuthService, {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
