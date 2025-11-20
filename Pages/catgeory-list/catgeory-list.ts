import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { NavController, NavParams } from 'ionic-angular';
import { MessagesServiceProvider } from '../../services/messages.service';
import { CategoryServiceProvider } from '../../services/category.service';
import { TopicListPage } from '../topic-list/topic-list';
import { LoginPage } from '../login/login';
// import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

@Component({
  selector: 'page-catgeory-list',
  templateUrl: 'catgeory-list.html',
})
export class CatgeoryListPage {
  checkedItems: any;
  categoryTestData: any = [];
  selectedCategoryData: any[];
  constructor(
    public navCtrl: NavController,
    // private sqlite: SQLite,
    public navParams: NavParams,
    private storage: Storage,
    public messages: MessagesServiceProvider,
    public categoryService: CategoryServiceProvider
  ) {
    this.getCategoryTestData();
  }

  ionViewDidLoad() {
  }

  getCategoryTestData() {
    this.messages.showLoader();
    this.categoryService.getCategories().subscribe(
      (response: any) => {
       
        this.messages.hideLoader();
        if (!response.error) {
          let result: any = response.data;
          if (result) {
            this.categoryTestData = result.map(function (el) {
              el.topics = el.topics.map(function (e) {
                let t = Object.assign({}, e);
                t.isChecked = false;
                return t;
              });
              let o = Object.assign({}, el);
              o.isChecked = false;
              return o;
            });
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

  getCheckedCategory() {
    this.selectedCategoryData = [];
    this.categoryTestData.forEach((v, i) => {
      if (v.isChecked == true) {
        this.selectedCategoryData.push(v);
      } else {
        v.topics.forEach((t, i) => {
          if (t.isChecked == true) {
            this.selectedCategoryData.push(v);
          }
        });
      }
    });

    if (this.selectedCategoryData.length > 0) {
      this.navCtrl.push(TopicListPage,{data: this.selectedCategoryData});
    } else {
      this.messages.showToast("please select atleast one category or type", undefined, "toast-danger");
    }
  }
}
