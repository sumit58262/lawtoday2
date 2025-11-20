import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { MessagesServiceProvider } from '../../services/messages.service';
import { AuthServiceProvider } from '../../services/auth-service';
import { CategoryServiceProvider } from "../../services/category.service";
import { InAppBrowser, InAppBrowserOptions, InAppBrowserEvent } from '@ionic-native/in-app-browser';
import { BASE_URL } from '../../constants/config';
import { LoginPage } from '../login/login';


@Component({
  selector: 'page-subscription',
  templateUrl: 'subscription.html',
})
export class SubscriptionPage {

  public userData: any;
  public subscriptionData: any = [];
  paymentAmount: number = 333;
  currency: string = 'INR';
  currencyIcon: string = 'Rs.';
  razor_key = 'rzp_test_vw8QLtEcfkkaZB';
  cardDetails: any = {};
  constructor(
    public categoryService: CategoryServiceProvider,
    private iab: InAppBrowser,
    public navCtrl: NavController,
    public navParams: NavParams,
    public messages: MessagesServiceProvider,
    public modalCtrl: ModalController,
    private storage: Storage,
    public auth: AuthServiceProvider
  ) {
    this.getSubscriptionData();
  }

  ionViewDidLoad() {
  }

  getUserData() {
    this.auth.getUserDetail().subscribe(
      (response: any) => {
        if (!response.error) {
          this.userData = response;
        }
      },
      err => {
      }
    );
  }

  getSubscriptionData() {
    this.messages.showLoader();
    this.auth.getSubscriptionDetail().subscribe(
      (response: any) => {
        this.messages.hideLoader();
        if (!response.error) {
          this.getUserData();
          this.subscriptionData = response;
          if(this.subscriptionData.order){
            this.storage.set("isSubscribed", 1);
          }else{
            this.storage.set("isSubscribed", 0);
          }
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

  payByPayU(id, price) {
    let name = this.userData.name;
    let mobile = this.userData.phone_number;
    let email = this.userData.email;
	let appname = 'Law Today';
    let amt = price*100; 
  let url = 'https://lawtoday.co.in/razorpay/pay.php?amt=' + amt+ '&checkout=automatic' + '&appname=' + appname  + '&mobile=' + mobile + '&email=' + email;

    let options: InAppBrowserOptions = {
      location: 'no',//Or 'no' 
      hidden: 'no', //Or  'yes'
      clearcache: 'yes',
      clearsessioncache: 'yes',
      zoom: 'yes',//Android only ,shows browser zoom controls 
      hardwareback: 'no',
      mediaPlaybackRequiresUserAction: 'no',
      shouldPauseOnSuspend: 'no', //Android only 
      closebuttoncaption: 'Close', //iOS only
      disallowoverscroll: 'no', //iOS only 
      toolbar: 'yes', //iOS only 
      enableViewportScale: 'no', //iOS only 
      allowInlineMediaPlayback: 'no',//iOS only 
      presentationstyle: 'pagesheet',//iOS only 
      fullscreen: 'yes',//Windows only    
    };
    const browser: any = this.iab.create(url, '_system', options);
  
  } 

}


