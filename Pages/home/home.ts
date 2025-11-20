import { Component } from "@angular/core";
import { Storage } from "@ionic/storage";
import { NavController, MenuController, Platform, Events } from "ionic-angular";
import { NetworkService } from "../../services/network.service";
import { MessagesServiceProvider } from "../../services/messages.service";
import { CategoryTestTypePage } from "../category-test-type/category-test-type";
import { CategoryServiceProvider } from "../../services/category.service";
import { BookmarkPage } from "../bookmark/bookmark";
import { HistoryPage } from "../history/history";
import { TestPage } from "../test/test";
import { MaximsPage } from "../maxims/maxims";
import { CaselawsPage } from "../caselaws/caselaws";
import { LeaderboardPage } from "../leaderboard/leaderboard";
import { AuthServiceProvider } from '../../services/auth-service';
// import { AnonymousSubject } from "rxjs/Subject";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  products: Array<any>;
  categoryList: Array<any>;
  categoryTotalItem: number = 0;
  activityList: Array<any>;
 
  myvalues: any;
  myinterval: any;
  
  public topicList: any = [];
 topicsavedata:string = 'topicdata'
  public isConnected: boolean = true;
  userId: any;
  
  

  constructor(
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    public platform: Platform,
    public events: Events,
    public auth: AuthServiceProvider,
    private store: Storage,
    public networkService: NetworkService,
    public messages: MessagesServiceProvider,
    public categoryService: CategoryServiceProvider
  ) {
    this.menuCtrl.enable(true);
    this.menuCtrl.swipeEnable(true);
     
    this.platform.ready().then(() => {
      events.subscribe("menu:opened", () => { });
      events.subscribe("menu:closed", () => { });
  })
}

  ionViewWillEnter() {
    this.menuCtrl.enable(true);
    this.menuCtrl.swipeEnable(true);
    this.checkNetworkConnection();
    this.getCategoryData();
    this.getActivityData();
    
    this.store.get("userDetails").then(val => {
      if (val != null && val != "") {
        this.userId = val.id;
      }
    });
  
  }

 
      

  /**
   * GET CATEGORIES
   */
  getCategoryData() {
    this.categoryList = [
      {
        id: '1',
        img: 'assets/images/cat/cat-01.png',
        title: 'Judicial Services',
        page: CategoryTestTypePage
      },
      {
        id: '2',
        img: 'assets/images/cat/cat-02.png',
        title: 'Tests',
        page: TestPage
      },
   // {
   //   id: '3',
   //   img: 'assets/images/cat/cat-01.png',
   //   title: 'Legal Maxims & Syllabus',
   //   page: MaximsPage
   // },
   // {
   //   id: '4',
   //   img: 'assets/images/cat/cat-02.png',
   //   title: 'Case Laws',
   //   page: CaselawsPage
   // }
      
    ];
  }

  /**
   * GET ACTIVITY
   */
  getActivityData() {
    this.activityList = [
      {
        id: '1',
        img: 'assets/images/cat/history.png',
        title: 'Test History',
        page: HistoryPage
      },
      // {
      //   id:'2',
      //   img:'assets/images/cat/pending.png',
      //   title:'Pending Task',
      //   page:null
      // },
      {
        id: '3',
        img: 'assets/images/cat/bookmark.png',
        title: 'Bookmarks',
        page: BookmarkPage
      }
    ];
    let l = Math.floor(Math.random()*999999);
    let p = 'guestuser'+l+'@lawtoday.co.in';
    // console.log(p)
  }
  /**
   * CHECK NETWORK CONNECTION
   */
  checkNetworkConnection() {
    this.isConnected = this.networkService.isOnline();
    
  }

 //* This is to kick person on multiple session on home screen * /  
 // getUserData() {
 //
 //  this.auth.getUserDetail().subscribe(
 //    (response: any) => {
 //     
 //    },
 //    err => {
 //      if(err.status == 401){
 //        if (
 //          this.store.remove("userInfo") ||
 //          this.store.remove("name") ||
 //          this.store.remove("email") ||
 //          this.store.remove("role")
 //        ) {
 //          this.store.remove("userInfo");
 //          this.store.remove("name");
 //          this.store.remove("email");
 //          this.store.remove("role");
 //          this.store.remove("isSubscribed");
 //        }
 //        this.messages.showToast("Force Logout due to multiple device login.",undefined, "toast-danger");
 //        this.navCtrl.setRoot(LoginPage);
 //      }
 //      this.messages.hideLoader();
 //    }
 //  );
 // }
  
  goToPage(val) {
    if (val != null) {
      this.navCtrl.push(val);
    }
  }

  goToPageleaderboard() {
   
      this.navCtrl.push(LeaderboardPage);
  
  }
  

}
