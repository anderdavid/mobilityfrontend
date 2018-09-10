import { Injectable } from '@angular/core';
import {Usuario} from '../models/usuario';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  endpoint = 'http://192.168.1.141:8001/apiRestV1/';
  
  httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
    })
   };

	constructor(private http: HttpClient) { }

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

    console.error(error); 
    console.log(`${operation} failed: ${error.message}`);
    return of(result as T);
  };
}


  getUsers(): Observable<any> {
    console.log("getUsers()");

    return this.http.get(this.endpoint + 'usuario').pipe(
    map(this.extractData));
  }

  getUser(id): Observable<any> {
    console.log("getUser(id)");
    return this.http.get(this.endpoint + 'usuario/' + id).pipe(
    map(this.extractData));
  }

  addUser (User): Observable<any> {
    console.log("addUser (User)");
    console.log(User);

    return this.http.post<any>(this.endpoint + 'usuario', JSON.stringify(User), this.httpOptions).pipe(
    map(this.extractData),
    tap((User) => console.log(`added User w/ id=${User.id}`)),
    catchError(this.handleError<any>('addUser'))
    );
  }

  updateUser (id, User): Observable<any> {
    console.log("updateUser()");
    return this.http.put(this.endpoint + 'usuario/' + id, JSON.stringify(User), this.httpOptions).pipe(
      tap(_ => console.log(`updated User id=${id}`)),
      catchError(this.handleError<any>('updateUser'))
    );
  }

  deleteUser (id): Observable<any> {
    console.log("deleteUser (id)");
    return this.http.delete<any>(this.endpoint + 'usuario/' + id, this.httpOptions).pipe(
      map(this.extractData),
      tap(_ => console.log(`deleted User id=${id}`)),
      catchError(this.handleError<any>('deleteUser'))
    );
  }

}
