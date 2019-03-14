import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserServiceProvider } from '../../providers/user-service/user-service';
import {PaginaDosPage} from '../pagina-dos/pagina-dos'

/**
 * Generated class for the PaginaUnoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pagina-uno',
  templateUrl: 'pagina-uno.html',
})
export class PaginaUnoPage {

  users: any[] = [];
  usuario:string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public userService: UserServiceProvider) {
    this.usuario = navParams.get('user');
  }

  ionViewDidLoad(){
    this.userService.getUsers()
    .subscribe(
      (data) => { // Success
        this.users = data['results'];
      },
      (error) =>{
        console.error(error);
      }
    )
  }

  showData(user){
    this.navCtrl.push(PaginaDosPage,{
      item:user
      });
  }
}
