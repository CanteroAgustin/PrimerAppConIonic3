import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HTTP } from '@ionic-native/http';

/*
  Generated class for the BackendServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BackendServiceProvider {

  public urlService: string = "http://172.70.70.5:8080/urgmobile/loginAction.do";

  constructor(public http: HttpClient, private http2: HTTP) {
    console.log('Hello BackendServiceProvider Provider');
  }

  loguearEnBackend(memento) {
    
    var data = {
      memento: memento
    };
    
    return this.http2.post(this.urlService,data,{});
  }

}
