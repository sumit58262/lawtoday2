import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-generate-test-modal',
  templateUrl: 'generate-test-modal.html',
})
export class GenerateTestModalPage {
  public testData: any = [];
  public totalQuestion;
  constructor(
    public navParams: NavParams,
    public viewCtrl: ViewController
  ) {
    this.testData = this.navParams.get('data') ? this.navParams.get('data') : '';
    this.totalQuestion = JSON.parse(this.testData.questions).length;
  }

  ionViewDidLoad() {
  }

  ucDateTransform(value) {
    if (value) {
      if (value.toString().indexOf(' ') === -1) {
        value = value + ' 00:00:00';
      }
      const temp = value.toString().replace(/ /g, 'T');
      let today = new Date(temp);
      let dd:any = today.getDate();
      let mm:any = today.getMonth() + 1; //January is 0!
  
      let yyyy = today.getFullYear();
      if (dd < 10) {
        dd = '0' + dd;
      }
      if (mm < 10) {
        mm = '0' + mm;
      }
      return  dd + '/' + mm + '/' + yyyy;
    } else {
      return null;
    }
  }

  dismiss(val?: any) {
    this.viewCtrl.dismiss(val);
  }

}
