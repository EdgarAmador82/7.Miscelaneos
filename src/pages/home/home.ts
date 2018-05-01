import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

import { Pagina2Page } from "../pagina2/pagina2";
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  pagina2 = Pagina2Page;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {
  }

/*
  showConfirm() {
    let confirm = this.alertCtrl.create({
      title: 'Use this lightsaber?',
      message: 'Do you agree to use this lightsaber to do good across the intergalactic galaxy?',
      buttons: [
        {
          text: 'Cancelar',
          handler: () => {
            console.log('Fieled to navigate');
          }
        },
        {
          text: 'Aceptar',
          handler: () => {
            console.log('Agree clicked');
            this.navCtrl.push(Pagina2Page);
          }
        }
      ]
    });
    confirm.present();
  }
*/

}
