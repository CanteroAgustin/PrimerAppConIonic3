import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the ExtranetServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ExtranetServiceProvider {

  url: string = "/OSDEExtranet/jsp/osde_template/helpers/login.jsp";

  constructor(public http: HttpClient ) {
    console.log('Hello ExtranetServiceProvider Provider');
  }

  doLogin(datos): Observable<any> {
    let options = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        responseType: 'text'
      }
    };
    
    let uRLSearchParams: URLSearchParams = new URLSearchParams(); 
    uRLSearchParams.set("userName", "27117747064");
    uRLSearchParams.set("password", "81dc9bdb52d04dc20036dbd8313ed055");
    uRLSearchParams.set("filial", "");
    uRLSearchParams.set("rand", "3973");
    uRLSearchParams.set("urlEntrada", "http://testextranet.osde.ar/OSDEExtranet/jsp/multiempresas/osde/HomePublicaV2.jsp");

    return this.http.post(this.url, uRLSearchParams.toString(),options);
      
  }
  getMemento(datos) {
    let options = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    };
    return this.http.get(datos.url,options);
  }
}
