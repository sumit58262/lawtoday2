import { Component, ViewChild, NgZone } from "@angular/core";
import { Nav, Platform, Events, NavController } from "ionic-angular";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { SocialSharing } from '@ionic-native/social-sharing';
import { Storage } from '@ionic/storage';
import { HomePage } from "../pages/home/home";
import { LoginPage } from "../pages/login/login";
import { ContactPage } from "../pages/contact/contact";
 import { CategoryTestTypePage } from "../pages/category-test-type/category-test-type";
import { AboutPage } from "../pages/about/about";
import { PrivacyPage } from "../pages/privacy/privacy";
import { TermsPage } from "../pages/terms/terms";
import { InstructionsPage } from "../pages/instructions/instructions";
import { MessagesServiceProvider } from "../services/messages.service";
import { AuthServiceProvider } from "../services/auth-service";
import { ProfilePage } from "../pages/profile/profile";
import { LeaderboardPage } from "../pages/leaderboard/leaderboard";
import { SubscriptionPage } from "../pages/subscription/subscription";

@Component({
  templateUrl: "app.html"
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any;

  menuPages: Array<{
   
    title: string;
    component?: any;
    icon: string;
    index?: boolean;
    url?: string;
    is_social?: boolean;
    is_active?: boolean;
  }>;
  guestform: any;
  currentUser: string;
  myProfile: any;
  public isLogin: boolean = false;
  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public events: Events,
    private ngZone: NgZone,
  
    public auth: AuthServiceProvider,
    private messages: MessagesServiceProvider,
    private socialSharing: SocialSharing,
    private store: Storage
  ) {
   // this.onLoginasguest()
    this.initializeApp();
    this.menuPages = [
      {
        title: "Home",
        component: HomePage,
        icon: "assets/images/menu/home.png",
        url: "",
        is_social: false,
        index: true
      },
     {
       title: "Subscribe/Buy",
       component: SubscriptionPage,
       icon: "assets/images/menu/subscription.png",
       url: "",
       is_social: false,
       index: false
     },
      {
        title: "Leaderboard",
       component: LeaderboardPage,
        icon: "assets/images/menu/leader.png",
       url: "",
      is_social: false,
       index: false
     },
  {
    title: "Profile",
    component: ProfilePage,
    icon: "assets/images/menu/profile.png",
    url: "",
    is_social: false,
    index: false
  },
      {
        title: "About",
        component: AboutPage,
        icon: "assets/images/menu/about.png",
        url: "",
        is_social: false,
        index: false
      },
      {
        title: "Share",
        component: "",
        icon: "assets/images/menu/social_share.png",
        url: "",
        is_social: true,
        index: false
      },
    // {
    //   title: "Rate",
    //   component: "",
    //   icon: "assets/images/menu/rate.png",
    //   url: "https://play.google.com/store/apps/details?id=com.skp.lawtoday",
    //   is_social: false,
    //   index: false
    // },
      
    // {
    //   title: "Instructions",
    //   component: InstructionsPage,
    //   icon: "assets/images/menu/instructions.png",
    //   url: "",
    //   is_social: false,
    //   index: false
    // },
      {
        title: "Contact",
        component: ContactPage,
        icon: "assets/images/menu/contact.png",
        url: "",
        is_social: false,
        index: false
      },
      {
        title: "Terms Of Service",
        component: TermsPage,
        icon: "assets/images/menu/terms.png",
        url: "",
        is_social: false,
        index: false
      },
      {
        title: "Privacy and Policy",
        component: PrivacyPage,
        icon: "assets/images/menu/privacy.png",
        url: "",
        is_social: false,
        index: false
      }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
     
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.loadProfile();
      this.store.get('email')
        .then(val => {
          this.currentUser = val;
        });
      this.store.get("userInfo").then((val) => {
        if (val) {
        //  console.log('Value Found')
          this.rootPage = HomePage;
        } else {
       //   console.log('Value Not Found')
          this.rootPage = LoginPage;
        }
      });
    });
  }

 //nLoginasguest() {
 // this.store.get("userInfo").then((val) => {
 //   if (val) {
 //     console.log('Value Found in Guest Login')
 //   } else {
 //     console.log('Trying to log in as guest')
 //     this.messages.showLoader();
 //     this.guestform = 
 //       {
 //           "email": "guestuser2@gmail.com",
 //           "password": "123456789",
 //       };
 //       let l = Math.floor(Math.random()*999999);
 //       let p = 'guestuser'+l+'@lawtoday.co.in';
 //       this.guestform.email = p;
 //       console.log(this.guestform)
 //  this.auth.loginasguest(this.guestform).subscribe(
 //    (data: any) => {
 //     this.rootPage = HomePage;
 //     this.messages.showToast("Welcome! Login Successfull", undefined, "toast-success");
 //      console.log(data)
 //      this.messages.hideLoader();
 //    },
 //    err => {
 //      console.log(err)
 //      this.messages.hideLoader();
 //   }
 //  );
 //   }
 // });
 //  
 //}
  

  loadProfile() {
    this.store.get('email')
    .then(val => {
      this.currentUser = val;
    });
    this.store.get('profile')
      .then(data => {
        this.myProfile = data;
      });
  }
  menuClosed() {
    //code to execute when menu has closed
    this.ngZone.run(() => {
      this.loadProfile();
    });
    this.events.publish("menu:closed", "");
  }
  menuOpened() {
    //code to execute when menu ha opened
    this.ngZone.run(() => {
      this.loadProfile();
    });
    this.events.publish("menu:opened", "");
  }

  openPage(page) {
    if (page.index) {
      this.nav.setRoot(page.component);
    } else {
      if (page.url) {
        window.open(page.url, "_system");
      } else if (page.is_social) {
        this.shareInfo();
      } else {
        if (page.component) {
          this.nav.push(page.component);
        } 
      }
    }
  }

  shareInfo() {
    this.socialSharing
      .share("Download Law Today: No.1 app for judiciary preparations", "Law today is an online quiz app to help you prepare for Preliminary Objective test of Judicial Servies Examination with a question bank of 10,000+ questions and all previous year question papers. ", "", "https://play.google.com/store/apps/details?id=com.skp.lawtoday")
      .then(() => {
      })
      .catch(() => {
      });
  }

  logout() {
    this.auth.logout().subscribe(
      (data: any) => {
        this.messages.hideLoader();
        this.messages.showToast("User logout successful", undefined, "toast-success");
        this.nav.setRoot(LoginPage);
      },
      err => {
        this.messages.hideLoader();
      }
    );
  }
}
