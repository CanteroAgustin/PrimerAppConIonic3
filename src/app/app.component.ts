import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { AlertController } from 'ionic-angular';
import { Network } from '@ionic-native/network';
import { ToastController } from 'ionic-angular';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, private toast: ToastController, private network: Network, splashScreen: SplashScreen, public alertController: AlertController) {
    platform.ready().then(() => {
      this.network.onConnect().subscribe(data => {
        console.log(data);
        this.displayNetworkOnLine();
      }, error => console.error(error));
  
      this.network.onDisconnect().subscribe(data => {
        console.log(data);
        this.displayNetworkOffLine();
      }, error => console.error(error));
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  displayNetworkOffLine() {
    this.toast.create({
      message: `No hay conexion a internet.`,
      duration: 3000,
    }).present();
  }

  displayNetworkOnLine() {
    let networkType = this.network.type;
    this.toast.create({
      message: `Estas conectado a: ${networkType}`,
      duration: 3000,
    }).present();
  }
}

