import { Component } from '@angular/core';
import { NavController, NavParams } from "ionic-angular";
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { CategoryServiceProvider } from "../../services/category.service";
import { MessagesServiceProvider } from "../../services/messages.service";
import { LoginPage } from '../login/login';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-leaderboard',
  templateUrl: 'leaderboard.html',
})
export class LeaderboardPage {
    public misc: string = "leaderboard";
    public scores:any = [];
  constructor(
    public navCtrl: NavController,  
    private iab: InAppBrowser,
    private storage: Storage,
    public categoryService: CategoryServiceProvider,
    public messages: MessagesServiceProvider
    ) {
  this.displayboard();
    
  }

  displayboard(){
    this.messages.showLoader();
    this.categoryService.getscore().subscribe(
        (response: any) => {
          this.messages.hideLoader();
         this.scores = response;  
     //  console.log(response)
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
       //   console.log(err)
        }
      );
  }

  

}