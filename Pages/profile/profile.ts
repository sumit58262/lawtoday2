import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { NavController, NavParams, ModalOptions, ModalController } from 'ionic-angular';
import { MessagesServiceProvider } from '../../services/messages.service';
import { AuthServiceProvider } from '../../services/auth-service';
import { ChangePasswordPage } from '../change-password/change-password';
import { LoginPage } from '../login/login';
import { VerifyemailPage } from "../verifyemail/verifyemail";

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  ischangePicture: boolean = false;
  myProfile: any;
  public imgData = [
    {
      id: 1,
      url: 'assets/images/avatar/1.png'
    },
    {
      id: 2,
      url: 'assets/images/avatar/2.png'
    },
    {
      id: 3,
      url: 'assets/images/avatar/3.png'
    },
    {
      id: 4,
      url: 'assets/images/avatar/4.png'
    },
    {
      id: 5,
      url: 'assets/images/avatar/5.png'
    },
    {
      id: 6,
      url: 'assets/images/avatar/6.png'
    },
    {
      id: 7,
      url: 'assets/images/avatar/7.png'
    },
    {
      id: 8,
      url: 'assets/images/avatar/8.png'
    },
    {
      id: 9,
      url: 'assets/images/avatar/9.png'
    },
    {
      id: 10,
      url: 'assets/images/avatar/10.png'
    },
    {
      id: 11,
      url: 'assets/images/avatar/11.png'
    },
    {
      id: 12,
      url: 'assets/images/avatar/12.png'
    }
  ];
  public userData: any;
  public referralData: any;
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public messages: MessagesServiceProvider,
    public modalCtrl: ModalController,
    private storage: Storage,
    public auth: AuthServiceProvider) {
      this.storage.get('profile')
      .then(data => {
        this.myProfile = data;
      });
  }

  ionViewDidLoad() {
  }

  ionViewWillEnter() {
    this.getUserData();
    this.getReferralData();
  }

  changePicture(){
    this.ischangePicture = !this.ischangePicture;
  }
  setProfileImage(val) {
    this.storage.set('profile', val);
    this.myProfile = val;
    let data = {
      id: this.myProfile.id,
      url: this.myProfile.url
    }
       this.auth.SetAvatar(data).subscribe(
      (Response: any) => {
     //   console.log(Response)
      },
      err => {
    //    console.log(err)
      }
    );
  }

  getProfileImage() {
    this.storage.get('profile')
      .then(data => {
      });
  }

     
      getUserData() {
      this.messages.showLoader();
      this.auth.getUserDetail().subscribe(
        (response: any) => {
          this.messages.hideLoader();
          if (!response.error) {
            this.userData = response;
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


  getReferralData() {
    this.messages.showLoader();
    this.auth.getUserReferrals().subscribe(
      (response: any) => {
     //   console.log(response)
        if (!response.error) {
          this.referralData = response;
        }
      },
      err => {
    //    console.log(err)
      }
    );
  }

  goToverify() {
   
    this.navCtrl.push(VerifyemailPage);

}

  goToChangePassword() {
    this.navCtrl.push(ChangePasswordPage);
  }

}
