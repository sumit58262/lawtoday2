import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { QuizPage } from '../quiz/quiz';

@Component({
  selector: 'page-question-attempted',
  templateUrl: 'question-attempted.html',
})
export class QuestionAttemptedModalPage {
  question:any= [];
  attemtedData:any = [];
    constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    public viewCtrl: ViewController
    ) {
    let data = navParams.get('data')? navParams.get('data'): '';
    this.question = data.questions;
    this.attemtedData = data.answers;
  }

  ionViewDidLoad() {
  }

  isAttempted(val) {
    if (this.attemtedData.length > 0 && val) {
      let selectedRes = this.attemtedData.find(x => x.question_id == val);
      if (selectedRes && selectedRes != -1) {
        return true;
      }else{
        return false;
      }
    }
  }


  onGotoQuestion(i){
   
   // console.log(i)
    this.dismiss(i);

  }

  

  dismiss(val?:any) {
    this.viewCtrl.dismiss(val);
  }
}
