import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PaginaDosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-pagina-dos',
  templateUrl: 'pagina-dos.html',
})
export class PaginaDosPage {

user:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.user = navParams.get('item');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaginaDosPage');
  }

}
