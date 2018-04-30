import { Injectable } from '@angular/core';
//plugins
import { Storage } from '@ionic/storage';

import { Platform } from "ionic-angular";

@Injectable()
export class AjustesProvider {

  Ajustes = {
    mostrar_tutorial: true
  }

  constructor(private platform: Platform,
    private _storage: Storage) {
  }

  cargar_storage() {

    let promesa = new Promise((resolve, reject) => {
      if (this.platform.is("cordova")) {//Dispositivo
        console.log("Inicializando Storage");
        this._storage.ready()
          .then(() => {
            console.log("Storage Listo");
            this._storage.get("ajustes")
              .then(valor => {
                if (valor) {
                  this.Ajustes = valor;
                }
                resolve();
              })
          })
      }
      else {//Escritorio
        if (localStorage.getItem("ajustes")) {
          this.Ajustes = JSON.parse(localStorage.getItem("ajustes"));
        }
        resolve();
      }
    });

    return promesa;
  }

  guardar_storage() {
    if (this.platform.is("cordova")) {//Dispositivo
      this._storage.ready()
        .then(() => {
          this._storage.set("ajustes", this.Ajustes);
        });
    }
    else {//Escritorio
      localStorage.setItem("ajustes", JSON.stringify(this.Ajustes));
    }
  }
}
