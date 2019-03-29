import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators'
import { HTTP } from '@ionic-native/http';

/*
  Generated class for the ExtranetServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ExtranetServiceProvider {

  url: string = "http://testextranet.osde.ar/OSDEExtranet/jsp/osde_template/helpers/login.jsp";

  constructor(/*public http: HttpClient,*/ private http2: HTTP) {
    console.log('Hello ExtranetServiceProvider Provider');
  }

  doLogin2(datos){
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });

    let uRLSearchParams: URLSearchParams = new URLSearchParams();
    uRLSearchParams.set("userName", datos.userName);
    uRLSearchParams.set("password", datos.password);
    uRLSearchParams.set("filial", datos.filial);
    uRLSearchParams.set("rand", datos.rand);
    uRLSearchParams.set("urlEntrada", datos.urlEntrada);

    return this.http2.post(this.url, datos, {responseType: 'text'});

  }


  doLogin(datos) {

    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });

    let uRLSearchParams: URLSearchParams = new URLSearchParams();
    uRLSearchParams.set("userName", datos.userName);
    uRLSearchParams.set("password", datos.password);
    uRLSearchParams.set("filial", datos.filial);
    uRLSearchParams.set("rand", datos.rand);
    uRLSearchParams.set("urlEntrada", datos.urlEntrada);

    return null//this.http.post(this.url, uRLSearchParams.toString(), { headers: headers, responseType: 'text', withCredentials: true });

  }

  getMemento(datos) {
    let url = "OSDEExtranet/jsp/osde_template/helpers/inicioSesion.jsp";
    let login = "8226308756f7d0592573f24aa409be54--666f72776172643b3d687474703a2f2f7465737465787472616e65742e6f7364652e61722f4f53444545787472616e65742f6a73702f6f7364655f74656d706c6174652f68656c706572732f6c6f67696e57656c636f6d652e6a73703b2a7573657249643b3d31393733373b2a746f6b656e3b3d35396664313530616362373837386266386530643535626234313066353731343b2a706173734d44353b3d38316463396264623532643034646332303033366462643833313365643035353b2a637569743b3d32373131373734373036343b2a";
    //return this.http.get(url, {responseType: 'text'});

    return this.http2.get(datos,{}, {});
  }
}
