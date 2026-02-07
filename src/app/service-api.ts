import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class ServiceApi {
  apiUrl = environment.apiUrl;
  private http = inject(HttpClient);
  // constructor(private http: HttpClient) {} // this is the old way to inject the httpClient service

  getProduct(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getProductById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  updatePost(id: number, post: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, post);
  }
}
