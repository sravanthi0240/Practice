import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { BaseComponent } from '../base/base.component';

@Injectable()
export class JwtInterceptor extends BaseComponent implements HttpInterceptor {

  constructor() {
    super();
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
   
    let authReq = request.clone({ setHeaders:{ Authorization: 'adfggggggggggggggggggggghbvvc'}})
    console.log('Authorization');
    // `${this.loginData.jwtToken}`
    
    return next.handle(authReq).pipe(
      catchError((err) =>{
        if(err.status === 401){
          if(err.error.message == 'Invalid login'){
            console.log('Unauthorized user');
          }
        }
        if(err.status == 417){
          console.log('Invalid login');
          
        }
        const error = err.error
        return throwError(error)
      }) )
  }
}
