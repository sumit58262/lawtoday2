import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { NavController, NavParams } from 'ionic-angular';
import { MessagesServiceProvider } from '../../services/messages.service';
import { CategoryServiceProvider } from '../../services/category.service';
import { GenerateQuestionsPage } from '../generate-questions/generate-questions';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-generate-catgeory-list',
  templateUrl: 'generate-catgeory-list.html',
})
export class GenerateCatgeoryListPage {
  checkedItems: any;
  categoryTestData: any = [];
  questionsavedata:string = 'questiondata'
  selectedCategoryData: any[];
  constructor(
    public navCtrl: NavController,
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
  
    this.storage.get(this.questionsavedata).then((val:any) => {
      if(val!=null && val!=undefined){
      //  console.log('data loaded')
        if (!val.error) {
          let result: any = val.data;
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
            if(this.selectedCategoryData.length > 0){
              if(this.selectedCategoryData.filter((value) => value.id == v.id).length > 0){

              }else{
                this.selectedCategoryData.push(v);
              }
            }
            else{
              this.selectedCategoryData.push(v);
            }
          }
        });
      }
    });

    if (this.selectedCategoryData.length > 0) {
      this.navCtrl.push(GenerateQuestionsPage,{data: this.selectedCategoryData});
    } else {
      this.messages.showToast("please select atleast one category or type", undefined, "toast-danger");
    }
  }
}
