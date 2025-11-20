import { Component, ViewChild } from "@angular/core";
import { Storage } from '@ionic/storage';
import { NavController, NavParams, Content } from "ionic-angular";
import { QuizPage } from "../quiz/quiz";
import { CategoryServiceProvider } from "../../services/category.service";
import { MessagesServiceProvider } from "../../services/messages.service";
import { FlashCardPage } from "../flash-card/flash-card";
import { LoginPage } from "../login/login";
import { AlertServiceProvider } from "../../services/alerts.service";
import { SubscriptionPage } from "../subscription/subscription";
import {
  HttpClient,
  HttpHeaders
} from "@angular/common/http";
// import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

@Component({
  selector: "page-test",
  templateUrl: "test.html"
})
export class TestPage {
  @ViewChild(Content) content: Content;
  public catData: any;
  slides: any;
  date:any = Date();
  currentdateUNIX: number;
  sevendaysUNIX:number =604800;
  expirationdateUNIX:number;
  questiondata1: any;
  questiondata: any;
  questionsavedata:string = 'questiondata'
  datestored:any = 'expirationdateUNIX'
  subscriptionTestList: Array<any>;
  practiseTestList: Array<any>;
  isSelectedPractiseTest;
  selectedTab: any = 'first';
  isSelectedCategory: any;
  categoryTestList: Array<any>;
  topicTestList: Array<any>;
  isSelectedTopicTest: Array<any>;
 
  categoryTestData: any;
  catTopicTestDataindex: any;
  catTopicsData: any;
  catTopicTestData: any;
  isActiveCategory = 0;
  isActiveCategoryTopic = 0;
  practiseTestData: any;
  isSubscribed: boolean = false;
  constructor(public navCtrl: NavController,
 //   private sqlite: SQLite,
    public http: HttpClient,
    public navParams: NavParams,
    private storage: Storage,
    public alertService: AlertServiceProvider,
    public messages: MessagesServiceProvider,
    public categoryService: CategoryServiceProvider) {
    this.storage.get("isSubscribed").then((val) => {
      this.isSubscribed = val == 1 ? true : false;
    });
    this.catData = navParams.get("data") ? navParams.get("data") : "";
    this.loadSlides();
    this.checkExpiration();
    this.downloadquestiondata();

  }

  ionViewDidLoad() {
  }

  ionViewWillEnter() {
   
   
  //  this.sqldb();
    this.secondsToHms(120);
  }

  loadSlides() {
    
    this.slides = [
      {
        id: "first",
        title: "Subject Wise"
      },
      { 
        id: "second",
        title: "Previous Year"
      }
    ];
  }

  secondsToHms(d) {
    d = Number(d);
    let h = Math.floor(d / 3600);
    let m = Math.floor((d % 3600) / 60);
    let s = Math.floor((d % 3600) % 60);
  }
       //
       // sqldb()
       //{
       // this.sqlite.create({
       //   name: 'data.db',
       //   location: 'default'
       // //  createFromLocation: 1
       // })
       //   .then((db: SQLiteObject) => {
       // 
       // 
       //     db.executeSql('create table danceMoves(name VARCHAR(32))', [])
       //       .then(() => console.log('Executed SQL'))
       //       .catch(e => console.log(e));
       // 
       // 
       //   })
       //   .catch(e => console.log(e));
       // }



   checkExpiration(){ 
    //check if past expiration date
    this.currentdateUNIX = Date.parse(this.date)/1000;
    this.storage.get(this.questionsavedata).then((keyvalue) => {
      if(keyvalue!=null || keyvalue!=undefined){
        this.storage.get(this.datestored).then((datevalue) => {
        if(datevalue<this.currentdateUNIX){
       this.storage.remove(this.questionsavedata);
      this.downloadquestiondata();
      }
    });
      }
    });
   }



  downloadquestiondata() {
      this.storage.get(this.questionsavedata).then((keyvalue) => {
    //    if(keyvalue==null || keyvalue==undefined || updaterequired == 1){       make an api to sent the update required value
      if(keyvalue==null || keyvalue==undefined){
      this.messages.showLoaderCustom();
      this.expirationdateUNIX = Date.parse(this.date)/1000+604800;
      this.storage.set(this.datestored, this.expirationdateUNIX);
    //  console.log(this.expirationdateUNIX)
    //  console.log('Attempting data GET')
     this.categoryService.getCategories().subscribe(
       (response: any) => {
         // this.http.get('assets/data.json').subscribe
         // (response => {
     //     console.log('data recieved, Saving')
     //     console.log(response)
          this.questiondata = response;
          this.storage.set(this.questionsavedata, this.questiondata)
          .then(
                   (data) => { 
             //        console.log('Going to load data function after saving')
                     this.messages.hideLoader();
                     this.loadData();
                   });
            },
            err => {
          if (err.status == 401) {
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
            this.messages.showToast("Force Logout due to multiple device login.", undefined, "toast-danger");
            this.navCtrl.setRoot(LoginPage);
          }
          this.messages.hideLoader();
        }
        ); 
      }
      else{
        this.loadData();
      }
          
      });
      
    } 

      loadData(){
       
        this.storage.get(this.questionsavedata).then((val) => {
        if(val!=null && val!=undefined){
          this.questiondata = val;       
        //  console.log('data loaded')
           
            if (!val.error) {
              this.categoryTestData = this.questiondata.data;
              this.practiseTestData = this.questiondata.previous;
              this.catTopicsData = [];
              if (this.categoryTestData.length > 0 && this.categoryTestData[0].topics.length > 0) {
                this.categoryTestData[0].topics.forEach(element => {
                  this.catTopicsData.push(element)
                });
              }
              if (this.categoryTestData.length > 0 && this.categoryTestData[0].topics.length > 0 && this.catTopicsData[0].tests.length > 0) {
                this.catTopicTestData = this.catTopicsData[0].tests;
              }
    
              this.isSelectedPractiseTest = this.practiseTestData[0];
              this.content.resize();
            }
        }
        else{
      //    console.log('data was not present')
        }
      },
      err => {
        if (err.status == 401) {
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
          this.messages.showToast("Force Logout due to multiple device login.", undefined, "toast-danger");
          this.navCtrl.setRoot(LoginPage);
        }
        this.messages.hideLoader();
      }
      );
        }



 // getCategoryTestData() {
 //   this.messages.showLoader();
 //   this.categoryService.getCategories().subscribe(
 //     (response: any) => {
 //       console.log(response)
 //       this.messages.hideLoader();
 //       if (!response.error) {
 //         this.categoryTestData = response.data;
 //         this.practiseTestData = response.previous;
 //         this.catTopicsData = [];
 //         if (this.categoryTestData.length > 0 && this.categoryTestData[0].topics.length > 0) {
 //           this.categoryTestData[0].topics.forEach(element => {
 //             this.catTopicsData.push(element)
 //           });
 //         }
 //         if (this.categoryTestData.length > 0 && this.categoryTestData[0].topics.length > 0 && this.catTopicsData[0].tests.length > 0) {
 //           this.catTopicTestData = this.catTopicsData[0].tests;
 //         }
//
 //         this.isSelectedPractiseTest = this.practiseTestData[0];
 //         this.content.resize();
 //       }
 //     },
 //     err => {
 //       if (err.status == 401) {
 //         if (
 //           this.storage.remove("userInfo") ||
 //           this.storage.remove("name") ||
 //           this.storage.remove("email") ||
 //           this.storage.remove("role")
 //         ) {
 //           this.storage.remove("userInfo");
 //           this.storage.remove("name");
 //           this.storage.remove("email");
 //           this.storage.remove("role");
 //           this.storage.remove("isSubscribed");
 //         }
 //         this.messages.showToast("Force Logout due to multiple device login.", undefined, "toast-danger");
 //         this.navCtrl.setRoot(LoginPage);
 //       }
 //       this.messages.hideLoader();
 //     }
 //   );
 // }

  getSelectedgetTopicTest(val) {
    this.isSelectedTopicTest = this.topicTestList.find(x => x.id == val);
  }

  /**
   * Get Selected Category Topics and Topic Test
   */
  getSelectedCatTopicTest(val) {
    this.catTopicsData = [];
    this.isActiveCategory = val;
    this.isActiveCategoryTopic = 0;
    if (this.categoryTestData.length > 0 && this.categoryTestData[val].topics.length > 0) {
      this.categoryTestData[val].topics.forEach(element => {
        this.catTopicsData.push(element)
      });
    }
    if (this.categoryTestData.length > 0 && this.categoryTestData[0].topics.length > 0 && this.catTopicsData[0].tests.length > 0) {
      this.catTopicTestData = this.catTopicsData[0].tests;
    }
  }

  

  getSelectedCatTopic(val) {
    this.catTopicTestData = [];
     if (val == 'ALL') {
       this.isActiveCategoryTopic = val;
       if (this.categoryTestData.length > 0 && this.categoryTestData[this.isActiveCategory].topics.length > 0) {
         this.categoryTestData[this.isActiveCategory].topics.forEach(element => {
           if (element.tests.length > 0) {
             var i;
           for (i = 0; i < element.tests.length; i++) {
        //     console.log(i)
             this.catTopicTestData.push(element.tests[i]);
           }
           }
         });
       }
     } else {
      this.isActiveCategoryTopic = val;
      this.catTopicTestData = this.catTopicsData[val].tests;
    }
  }

 

  goToStartFreeTest(data?: any) {
    
    if (data.questions.length > 0) {
      if (this.catData.title == 'Flash card') {
        this.navCtrl.push(FlashCardPage, { test: data });
      } else {
      //  console.log({test: data})
        this.navCtrl.push(QuizPage, { test: data });
      }
    } else {
      this.messages.showToast("No question yet.", undefined, "toast-danger");
    }
  }

  goUnlockTest() {
     this.alertService
     .showConfirmAlert(
       '',
       'You need to subscribe to play all tests. <br><br>',
       false,
       'Subscribe',
       'Close'
     )
     .then(
       res => {
         this.navCtrl.push(SubscriptionPage);
       },
       err => {
       }
     );
  }

  
}
