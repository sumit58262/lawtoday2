import { Component } from '@angular/core';
import { NavController, LoadingController  } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';
import { BASE_URL } from '../../constants/config';

@Component({
  selector: 'page-privacy',
  templateUrl: 'privacy.html'
})
export class PrivacyPage {

  loader;
  safeWebUrl: any;
  constructor(public navCtrl: NavController, private l: LoadingController, private s: DomSanitizer) {
    this.showLoader()
    this.safeWebUrl = this.s.bypassSecurityTrustResourceUrl(`${BASE_URL}privacy-policy`);
  }

 

  showLoader(){
    this.loader = this.l.create();
    this.loader.present();
  }
  removeLoading(){
    this.loader.dismiss();
  }
}
