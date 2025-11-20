import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { NavController, NavParams } from 'ionic-angular';
import { CategoryServiceProvider } from '../../services/category.service';
import { MessagesServiceProvider } from '../../services/messages.service';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-history',
  templateUrl: 'history.html',
})
export class HistoryPage {

  testResultData: any = [];
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public messages: MessagesServiceProvider,
    private storage: Storage,
    public categoryService: CategoryServiceProvider) {
  }

  ionViewDidLoad() {
  }

  ionViewWillEnter() {
    this.getTestResultData();
  }

  ucDateTransform(value) {
    if (value) {
      if (value.toString().indexOf(' ') === -1) {
        value = value + ' 00:00:00';
      }
      const temp = value.toString().replace(/ /g, 'T');
      let today = new Date(temp);
      let dd:any = today.getDate();
      let mm:any = today.getMonth() + 1; //January is 0!
  
      let yyyy = today.getFullYear();
      if (dd < 10) {
        dd = '0' + dd;
      }
      if (mm < 10) {
        mm = '0' + mm;
      }
      return  dd + '/' + mm + '/' + yyyy;
    } else {
      return null;
    }
  }

  getTestResultData() {
    this.messages.showLoader();
    this.categoryService.getResult().subscribe(
      (response: any) => {
        this.messages.hideLoader();
        if (!response.error) {
          this.testResultData = response;
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
