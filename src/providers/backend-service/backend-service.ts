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

  public urlService: string = "http://dlnxwas0.intranet.osde:10580/urgmobile/webservices/NotificacionesMobileServices";

  constructor(public http: HttpClient, private http2: HTTP) {
    console.log('Hello BackendServiceProvider Provider');
  }

  loguearEnBackend(memento) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("login", this.urlService, false);
    xmlhttp.onreadystatechange = () => {
      if (xmlhttp.readyState == 4) {
        if (xmlhttp.status == 200) {
          console.log(xmlhttp.responseXML);
        }
      }
    }
    xmlhttp.setRequestHeader('Content-Type', 'text/xml');
        xmlhttp.send();
    //return this.http.post(this.urlService, { memento: memento });
  }

}
