import { Component, ViewChild } from '@angular/core';
import { Storage } from '@ionic/storage';
import { NavController, NavParams, Content, ModalOptions, ModalController } from 'ionic-angular';
import { MessagesServiceProvider } from '../../services/messages.service';
import { CategoryServiceProvider } from '../../services/category.service';
import { GenerateQuizPage } from '../generate-quiz/generate-quiz';
import { GenerateCatgeoryListPage } from '../generate-catgeory-list/generate-catgeory-list';
import { GenerateTestModalPage } from '../generate-test-modal/generate-test-modal';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-generate-test-list',
  templateUrl: 'generate-test-list.html',
})
export class GenerateTestListPage {
  @ViewChild(Content) content: Content;
  public generatedHistoryData: any = [];
  limit: number = 10;
  offset: number = 0;
  totalItems: number;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private storage: Storage,
    public modalCtrl: ModalController,
    public messages: MessagesServiceProvider,
    public categoryService: CategoryServiceProvider
  ) {
  }

  ionViewDidLoad() {
    this.getGeneratedTestData();
  }

  goToStartTest(data:any){
    if(JSON.parse(data.questions).length > 0){
      this.navCtrl.push(GenerateQuizPage, { test: data });
    }
  }

  generateTestResultModal(val) {
    const modalOptions: ModalOptions = {
      enableBackdropDismiss: false
    };
    let generateTestModal = this.modalCtrl.create(GenerateTestModalPage,
      { data: val },
      modalOptions);
    generateTestModal.onDidDismiss(data => {
    });
    generateTestModal.present();
  }

  getGeneratedTestData(infiniteScroll?) {
    this.messages.showLoader();
    let params =
      "?offset=" +
      this.offset +
      "&limit=" +
      this.limit;
      this.categoryService.getGeneratedTestHistory(params).subscribe(
      (response: any) => {
        this.messages.hideLoader();
        this.generatedHistoryData = response;
        this.totalItems = this.generatedHistoryData.length;
        if (infiniteScroll) {
          infiniteScroll.complete();
        }
        this.content.resize();
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

  loadMore(infiniteScroll) {
    if (this.totalItems > this.limit) {
      this.offset += this.limit;
      setTimeout(() => {
        this.getGeneratedTestData(infiniteScroll);
        if (this.offset >= this.totalItems) {
          infiniteScroll.enable(false);
        }
      }, 100);
    } else {
      infiniteScroll.enable(false);
    }
  }

  generateTestRemove(val) {
    let params =
      "/" + val;
      this.categoryService.getGeneratedTestRemove(params).subscribe(
      (response: any) => {
        this.messages.showToast("Test delete successfull",undefined,"toast-success");
        this.getGeneratedTestData();
      },
      err => {
        this.messages.hideLoader();
        this.messages.showToast(err.error.message, undefined, "toast-danger");
      }
    );
  }

  generateNewTest(){
    this.navCtrl.push(GenerateCatgeoryListPage);
  }

  onPlayTest(data){
    this.navCtrl.push(GenerateQuizPage, { test: data });
  }
}
