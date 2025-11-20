import { Injectable } from '@angular/core';
import { AlertController } from 'ionic-angular';

@Injectable()
export class AlertServiceProvider {
    public res: any;
    constructor(private alertCtrl: AlertController, ) {
    }

    showConfirmAlert(title?: string, msg?: string,backdrop?:boolean,btnyes?:string, btnno?:string){
        return new Promise((resolve, reject) => {
            const confirm = this.alertCtrl.create({
                title: title,
                message: msg,
                enableBackdropDismiss: backdrop,
                buttons: [
                    {
                        text: btnno ? btnno :'No',
                        handler: () => {
                            reject(false);
                        }
                    },
                    {
                        text: btnyes ? btnyes : 'Yes',
                        handler: () => {
                            resolve(true);
                        }
                    }
                ]
            });
            confirm.present();
        });
    }

    showAlert(title?: string, msg?: string, backdrop?:boolean) {
        return new Promise((resolve, reject) => {
            const alert = this.alertCtrl.create({
                title: title,
                message: msg,
                enableBackdropDismiss: backdrop,
                buttons: [
                    {
                        text: 'Ok',
                        handler: () => {
                            resolve(true);
                        }
                    }
                ]
            });
            alert.present();
        });
    }
}
