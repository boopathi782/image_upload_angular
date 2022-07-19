import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders, } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError,tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( private http: HttpClient ) { }

  httpOptions = {
    headers: new HttpHeaders({
      /* 'Content-Type':  'application/json', */
      'authorization': 'Bearer asdibfiuasdfiuasdfniuasfnasiufbdsaiufbfiad sfjkdbsafj'
    })
  };

  fileupload(data:any): Observable<any> {
    return this.http.post<any>('http://localhost:3012/upload_profile', data, {headers:this.httpOptions.headers});
  }



}
