import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class GeneralServiceService {

  constructor(private http: HttpClient) { }
  post(endPnt, payload): Observable<any>{
    return this.http.post(environment.baseUrl + endPnt, payload)
  }

  get(endPnt): Observable<any>{
    return this.http.get(environment.baseUrl + endPnt)
  }
}
