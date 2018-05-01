import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-pagina2',
  templateUrl: 'pagina2.html',
})
export class Pagina2Page {

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    private alertCtrl: AlertController) {
  }

  ir_pagina3() {
    this.navCtrl.push("mi-pagina3");
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad");
  }

  ionViewWillEnter() {
    console.log("ionViewWillEnter");
  }

  ionViewDidEnter() {
    console.log("ionViewDidEnter");
  }

  ionViewWillLeave() {
    console.log("ionViewWillLeave");
  }

  ionViewDidLeave() {
    console.log("ionViewDidLeave");
  }

  ionViewWillUnload() {
    console.log("ionViewWillUnload");
  }

  //Controla el INGRESO
  ionViewCanEnter() {

    let promesa = new Promise((resolve, reject) => {
      let confirm = this.alertCtrl.create({
        title: '¿Seguro?',
        message: 'Esta seguro desea entrar?',
        buttons: [
          {
            text: 'Cancelar',
            handler: () => resolve(false)
          },
          {
            text: 'Aceptar',
            handler: () => resolve(true)
          }
        ]
      });
      confirm.present();
    });

    return promesa;
    /*console.log("ionViewCanEnter");
    let numero = Math.round(Math.random() * 10);
    console.log(numero);
    if (numero >= 3) { return true } else { return false };*/
  }

  //Controla la SALIDA
  ionViewCanLeave() {
    console.log("ionViewCanLeave");
    console.log("Espera 2 segundos para salir");

    //Loading
    let loader = this.loadingCtrl.create({
      content: "Espere por favor..."
    });
    loader.present();

    let promesa = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(true)

        loader.dismiss();
      }, 2000);
    });
    return promesa;
  }

  presentLoading() {
    content: "Espere por favor..."
    let loader = this.loadingCtrl.create({
    });
    loader.present();
  }
}
