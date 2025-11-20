import { Component } from '@angular/core';
import { NavController, LoadingController  } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';
import { BASE_URL } from '../../constants/config';

@Component({
  selector: 'page-instructions',
  templateUrl: 'instructions.html'
})
export class InstructionsPage {

  loader;
  safeWebUrl: any;
  constructor(public navCtrl: NavController, private l: LoadingController, private s: DomSanitizer) {
    this.showLoader()
    this.safeWebUrl = this.s.bypassSecurityTrustResourceUrl(`${BASE_URL}instructions`);
  }

  removeLoading(){
    this.loader.dismiss();
  }

  showLoader(){
    this.loader = this.l.create();
    this.loader.present();
  }

}
