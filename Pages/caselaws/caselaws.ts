import { Component } from '@angular/core';
import { NavController, NavParams } from "ionic-angular";
import { ExamNotificationDetailPage } from "../exam-notification-detail/exam-notification-detail";
import { Storage } from '@ionic/storage';
import { MessagesServiceProvider } from "../../services/messages.service";
import { BookmarkServiceProvider } from "../../services/bookmark.service";
import { LoginPage } from "../login/login";

@Component({
  selector: 'page-caselaws',
  templateUrl: 'caselaws.html',
})
export class CaselawsPage {
    misc: string = "cases";
    cases:any;
    public caselawData: any = [];
  
   
  constructor(
    
    public navCtrl: NavController,
    public navParams: NavParams,
    private storage: Storage,
    public notificationService: BookmarkServiceProvider,
    public messages: MessagesServiceProvider
    ) 
    {
      this.getcaselawData();
  }


  goToExamDetail(val) {
    this.navCtrl.push(ExamNotificationDetailPage, { data: val });
  }


  getcaselawData() {
    this.messages.showLoader();
    this.notificationService.getCaselaws().subscribe(
      (response: any) => {
        this.messages.hideLoader();
        if (!response.error) {
          this.caselawData = response;
       //   console.log(this.caselawData)
        }
      },
      err => {
        if(err.status == 401){
          if (
            this.storage.remove("userInfo") ||
            this.storage.remove("name") ||
            this.storage.remove("email") ||
            this.storage.remove("role")
          ) {
            this.storage.remove("userInfo");
            this.storage.remove("name");
            this.storage.remove("email");
            this.storage.remove("role");
            this.storage.remove("isSubscribed");
          }
          this.messages.showToast("Force Logout due to multiple device login.",undefined, "toast-danger");
          this.navCtrl.setRoot(LoginPage);
        }
        this.messages.hideLoader();
      }
    );
  }

 
}