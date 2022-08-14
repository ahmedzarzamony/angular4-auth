import { AuthHttp } from 'angular2-jwt';
import { Headers, Http, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class OrderService {

  constructor(private http: Http, private authHttp: AuthHttp) {
  }

  getOrders() { 
    //This way when you use normal http
    // let headers = new Headers();
    // let token = localStorage.getItem('token');
    // headers.append('Authorization', 'Bearer ' + token);
    // let options = new RequestOptions({ headers: headers});
    // return this.http.get('/api/orders', options)
    //   .map(response => response.json());

    //when you use AuthHttp, it's by default implement the past code
      return this.authHttp.get('/api/orders')
      .map(response => response.json());
  }
}
