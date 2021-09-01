import { catchError } from 'rxjs/operators';
import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { LivrasionInformation } from '@shared/entities/livrasioninformation';


@Injectable({
  providedIn: 'root'
})

export class ServiceService {
   headers = new HttpHeaders()
    .append(
      'Content-Type',
      'application/json'
    );

  //url = `http://httpbin.org/post`; // to test

  constructor(private http: HttpClient /*, @Inject('BASE_URL') private url = `http://localhost:99/order/verifyInfo`*/) { }

  url = `http://localhost:99/order/verifyInfo`; // real url

  sendData(Data: any ):Observable <any>{
    
    return this.http.post<any>(
               this.url, Data, { headers:this.headers }
      ).pipe(
        catchError(this.errorHandle)
      )
  }

  errorHandle(error :HttpErrorResponse){
    return throwError(error.message)

  }

}
