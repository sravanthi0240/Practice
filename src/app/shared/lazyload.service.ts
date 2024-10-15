import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LazyloadService {
   private apiUrl = 'https://jsonplaceholder.typicode.com/todos'

  constructor(private http: HttpClient) { }
  getItems(page: number): Observable<any[]> {
    return this.http.get<any>(this.apiUrl);
  }
}


// 'https://jsonplaceholder.typicode.com/todos'

//  'https://jsonplaceholder.typicode.com/users'