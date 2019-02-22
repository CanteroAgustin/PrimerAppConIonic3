import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {PaginaUnoPage} from '../pagina-uno/pagina-uno'
import {FormBuilder, FormGroup, Validators} from '@angular/forms'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  myForm: FormGroup;

  constructor(public navCtrl: NavController, public formBuilder: FormBuilder) {
    this.myForm = this.createMyForm();
  }

  irAPaginaUno(){
    this.navCtrl.push(PaginaUnoPage);
  }

  private createMyForm(){
    return this.formBuilder.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      dateBirth: ['', Validators.required],
      passwordRetry: this.formBuilder.group({
        password: ['', Validators.required],
        passwordConfirmation: ['', Validators.required]
      }),
      gender: ['', Validators.required],
    });
  }

  saveData(){
    console.log(this.myForm.value);
  }
}
