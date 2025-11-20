import { Component } from "@angular/core";
import { Storage } from '@ionic/storage';
import { NavController, NavParams } from "ionic-angular";
import { TestPage } from "../test/test";
import { ExamNotificationPage } from "../exam-notification/exam-notification";
import { MaximsPage } from "../maxims/maxims";
import { GenerateTestListPage } from "../generate-test-list/generate-test-list";
import { AlertServiceProvider } from "../../services/alerts.service";
import { SubscriptionPage } from "../subscription/subscription";

@Component({
  selector: "page-category-test-type",
  templateUrl: "category-test-type.html"
})
export class CategoryTestTypePage {
  categoryTestTypeList: Array<any>;
  catData: any;
  isSubscribed:boolean = false;
  constructor(public navCtrl: NavController, 
    private storage: Storage,
    public alertService: AlertServiceProvider, 
    public navParams: NavParams) {
    this.storage.get("isSubscribed").then((val) => {
      this.isSubscribed = val == 1? true: false;
    });
    this.catData = navParams.get("data") ? navParams.get("data") : "";
  }

  ionViewDidLoad() {
  }

  ionViewWillEnter() {
    this.getCategoryTestTypeData();
  }
  /**
   * GET CATEGORY TEST TYPE
   */
  getCategoryTestTypeData() {
    this.categoryTestTypeList = [
      {
        id: 1,
        icon: "ios-clipboard",
        title: "Tests"
      },
      {
        id: 2,
        icon: "ios-construct",
        title: "Mock Exam Creator"
      },
      {
        id: 3,
        icon: "ios-notifications",
        title: "Exam Notifications"
      },
       {
         id: 4,
         icon: "ios-book",
         title: "Syllabus"
       },
       {
        id: 5,
        icon: "ios-list",
        title: "Legal Maxims"
      }
    ];
  }

  goToTestPage(id) {
    switch (id) {
      case 5:
        let val1 = {
          title: 'maxims'
        };
        this.navCtrl.push(MaximsPage, { data: val1 });
        break;
        case 4:
          let val2 = {
            title: 'syllabus'
          };
          this.navCtrl.push(MaximsPage, { data: val2 });
          break;
      case 3:
        this.navCtrl.push(ExamNotificationPage);
        break;
      case 2:
          this.navCtrl.push(GenerateTestListPage);
          break;
      default:
        let val = {
          title: this.catData.title
        };
        this.navCtrl.push(TestPage, { data: val });
        break;
    }
  }

  goUnlockTest() {
    this.alertService
    .showConfirmAlert(
      '',
      'This is a Premium Feature.  <br><br>  Please subscribe to access and Self create mock exams.', 
    
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
