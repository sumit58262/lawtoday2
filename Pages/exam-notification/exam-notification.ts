import { Component } from "@angular/core";
import { Storage } from '@ionic/storage';
import { NavController, NavParams } from "ionic-angular";
import { ExamNotificationDetailPage } from "../exam-notification-detail/exam-notification-detail";
import { MessagesServiceProvider } from "../../services/messages.service";
import { BookmarkServiceProvider } from "../../services/bookmark.service";
import { LoginPage } from "../login/login";

@Component({
  selector: "page-exam-notification",
  templateUrl: "exam-notification.html"
})
export class ExamNotificationPage {
  public notificationData: any = [];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private storage: Storage,
    public notificationService: BookmarkServiceProvider,
    public messages: MessagesServiceProvider,
  ) {
    this.getNotificationData();
  }

  ionViewDidLoad() {
  }

  getNotificationData() {
    this.messages.showLoader();
    this.notificationService.getNotifications().subscribe(
      (response: any) => {
        this.messages.hideLoader();
        if (!response.error) {
          this.notificationData = response;
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

  goToExamDetail(val) {
    this.navCtrl.push(ExamNotificationDetailPage, { data: val });
  }
}
