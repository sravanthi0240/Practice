import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModelService {
  private url =  'https://reqres.in/api/users'

  constructor(private http: HttpClient) { }
  
  getData():Observable<any>{
    return this.http.get(this.url)
  }
}
