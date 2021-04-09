import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import {Observer} from 'rxjs';
import {LogininfoModule} from '../modules/logininfo/logininfo.module';
import {Observable} from 'rxjs/internal/observable';
import {HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
log:LogininfoModule;
http:HttpClient;
url:string='http://localhost:49597/api/RegisterAPI';
httpOptions={headers : new HttpHeaders({
  'Content-Type':'application/json'
})
}
  constructor(http:HttpClient) {
    this.http =http;
   }

   Login(name:string,pwd:string):Observable<string>{
    return this.http.get<string>(this.url+"/"+"Login"+"/"+name+"/"+pwd);
  }

}
