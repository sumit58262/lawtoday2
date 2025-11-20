import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, ModalOptions } from 'ionic-angular';
import { MessagesServiceProvider } from '../../services/messages.service';
// import { GenerateTestModalPage } from '../generate-test-modal/generate-test-modal';
import { CategoryServiceProvider } from '../../services/category.service';
// import { GenerateQuizPage } from '../generate-quiz/generate-quiz';

@Component({
  selector: 'page-topic-list',
  templateUrl: 'topic-list.html',
})
export class TopicListPage {
  checkedItems: any;
  topicData: any = [];
  selectedTopicData: any[];
  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    public messages: MessagesServiceProvider,
    public categoryService: CategoryServiceProvider,
    public navParams: NavParams) {
    let result: any = this.navParams.get('catIds') ? this.navParams.get('catIds') : '';
    if (result) {
      this.loadTopics(result);
    }
  }

  ionViewDidLoad() {
  }

  loadTopics(val?: any) {
    this.messages.showLoader();
    let params = "?ids=" + val;
    this.categoryService.getTopics(params).subscribe(
      (response: any) => {
        this.messages.hideLoader();
        let result: any = response;
        if (result) {
          this.topicData = result.map(function (el) {
            let o = Object.assign({}, el);
            o.isChecked = false;
            return o;
          });
        }
      },
      err => {
        this.messages.hideLoader();
      }
    );
  }

  getCheckedTopic() {
    this.selectedTopicData = [];
    this.topicData.forEach((v, i) => {
      if (v.isChecked == true) {
        this.selectedTopicData.push(v)
      }
    });
    if (this.selectedTopicData.length > 0) {
      this.generateTestModal(this.selectedTopicData);
    } else {
      this.messages.showToast("Topic is required", undefined, "toast-danger");
    }
  }

  generateTestModal(val) {
  }
}
