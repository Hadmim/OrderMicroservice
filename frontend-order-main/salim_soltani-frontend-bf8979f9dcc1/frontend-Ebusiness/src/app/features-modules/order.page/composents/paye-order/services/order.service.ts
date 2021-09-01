import { HttpClient, HttpHeaders,HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Test } from '@app/features-modules/order.page/DTO/test';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })

  export class TestService {

    private Url: string;


    constructor(private http: HttpClient) {


        this.Url = 'http://localhost:99/order/getInfo'; // your uri

    }

    //exemple function

    public getData(): Observable<Test> {  
       // let param={id:1};
        return this.http.get<Test>(this.Url,/*{params:param}*/);
      }

      public addAddress(id:number):Observable<Test>
      {
           
        return this.http.post<Test>(this.Url,id)
      }




  }