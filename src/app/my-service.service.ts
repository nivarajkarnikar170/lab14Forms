import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class MyServiceService {

  constructor(private http: Http) { }

  getUser(){
    console.log("dd");
    return this.http.get("http://jsonplaceholder.typicode.com/users/1");

  }
  getPost(){
    return this.http.get("http://jsonplaceholder.typicode.com/posts?userId=1");
  }

}
