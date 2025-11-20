import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookmarkServiceProvider } from '../../services/bookmark.service';
import { QuizPage } from "../quiz/quiz";

@Component({
  selector: 'page-reportmodal',
  templateUrl: 'reportmodal.html',
})
export class ReportmodalPage {
  reportForm: FormGroup;
  question:any;
  isFormSubmitted: boolean = false;
  constructor(public navCtrl: NavController, 
    public formBuilder: FormBuilder,
    public navParams: NavParams, 
    public viewCtrl: ViewController,
    public bookmarkService: BookmarkServiceProvider
    ) {
    this.question = navParams.get('question')? navParams.get('question'): '';
    this.reportForm = this.formBuilder.group({
      question_id: [
        this.question.id? this.question.id:'',
        Validators.compose([
          Validators.required
        ])
      ],
      message: [
        "",
        Validators.compose([
          Validators.required
        ])
      ]
    });
  }

  ionViewDidLoad() {
  }

  remove_linebreaks(str) {
    return str.replace(/\\r\\n/g, "");
  }

  /**
   * Report Form Submit
   */
  onReport() {
    this.isFormSubmitted = true;
    if (this.reportForm.valid) {
      this.bookmarkService.AddReport(this.reportForm.value).subscribe(
        (data: any) => {
          this.dismiss(true);
        },
        err => {
        }
      );
    }
  }

  isFieldValid(fieldValue: string) {
    if (fieldValue) {
      return true;
    }
    return false;
  }

  dismiss(val?:any) {
    this.viewCtrl.dismiss(val);
  }
}
