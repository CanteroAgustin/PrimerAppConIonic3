import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { PaginaUnoPage } from '../pagina-uno/pagina-uno'
import { Network } from '@ionic-native/network';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private toast: ToastController, private network: Network) {
  }

  displayNetworkOffLine() {
    this.toast.create({
      message: `No hay conexion a internet.`,
      duration: 3000,
    }).present();
  }

  irAPaginaUno() {

    if (this.network.type !== this.network.Connection.NONE) {
      this.navCtrl.push(PaginaUnoPage);
    } else {
      this.displayNetworkOffLine();
    }

  }
}
