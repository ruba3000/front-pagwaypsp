import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DefautService {

  rootUrl: string = 'http://localhost:3000/';

  optionsToken: any = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    }),
    withCredentials: true,
  };

  options: any = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    }),
    // credentials: 'include',
  };

  optionsBalanco: any = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    }),
    credentials: 'include',
  };

  constructor(private http: HttpClient) { }

  public defaultGet(url: string): Observable<any> {
    return this.http.get<any>(this.rootUrl + url, this.options);
  }

  public getBalanco(url: string): Observable<any> {
    return this.http.get<any>(this.rootUrl + url, this.optionsBalanco);
  }

  public defaultDelete(url: string): Observable<any> {
    return this.http.delete<any>(url, this.options);
  }

  public defaultPut(url: string, body: any): Observable<any> {
    return this.http.put<any>(url, body, this.options);
  }

  public defaultPost(url: string, body: any): Observable<any> {
    return this.http.post<any>(this.rootUrl + url, body, this.options);
  }

  public postToken(url: string, body: any): Observable<any> {
    return this.http.post<any>(this.rootUrl + url, body, this.optionsToken);
  }
}
