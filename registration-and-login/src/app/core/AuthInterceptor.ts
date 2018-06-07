import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(){}

  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    const authHeader = `JWT ${localStorage.getItem('token')}`;

    if(localStorage.getItem('token')){
      const authReq = req.clone({headers: req.headers.set('Autorization', authHeader)});

      return next.handle(authReq);
    } else {
      return next.handle(req);
    }
  }
}
