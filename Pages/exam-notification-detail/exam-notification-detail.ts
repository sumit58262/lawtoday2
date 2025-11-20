import { Component } from "@angular/core";
import { NavController, NavParams, LoadingController } from "ionic-angular";
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { DomSanitizer } from '@angular/platform-browser'

@Component({
  selector: "page-exam-notification-detail",
  templateUrl: "exam-notification-detail.html"
})
export class ExamNotificationDetailPage {
  notificationData: any;
  constructor(
    private iab: InAppBrowser,
    public navCtrl: NavController,
    public navParams: NavParams,
    private sanitizer: DomSanitizer,
  ) {
    this.notificationData = this.navParams.get('data') ? this.navParams.get('data') : ''
  //  console.log(this.navParams.get('data'))
  }
  
  handleClick(event) {
    if (event.target.tagName == "A") { 
      this.iab.create(event.target.href, "_system");
      return false;
      
    }
  }


  
 // playVideoLocal() {
 //   this.videoPlayer.play('file:///android_asset/www/assets/SampleVideo.mp4').then(() => {
 //     console.log('video completed');
 //   }).catch(err => {
 //     console.log(err);
 //   });
 // }

  ionViewDidLoad() {
  }
}