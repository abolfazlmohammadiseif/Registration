import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, tap, throwError } from "rxjs";
import { IPerson } from "../people/IPerson";

@Injectable({
  providedIn: 'root'
})

export class UserService {
  private productUrl = 'assets/api/products.json' //"http://localhost:2530/api/products"
  constructor(private http: HttpClient) {

  }
  getUsers(): Observable<IPerson[]> {
    return this.http.get<IPerson[]>(this.productUrl).pipe(
      tap(data => console.log('All', JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {

    console.log(error)
    return throwError(() => error)
  }

}
