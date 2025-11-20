import { Component, ViewChild, OnInit, ChangeDetectorRef } from "@angular/core";
import { NavController, NavParams, Content, ModalController, ModalOptions } from "ionic-angular";
import { AlertServiceProvider } from "../../services/alerts.service";
import { FormBuilder, FormGroup, FormArray, FormControl } from "@angular/forms";
import { BookmarkServiceProvider } from "../../services/bookmark.service";
import { MessagesServiceProvider } from "../../services/messages.service";
import { ReviewTestPage } from "../review-test/review-test";
import { ReportmodalPage } from "../reportmodal/reportmodal";
import { Storage } from '@ionic/storage';
import { ShowcorrectmodalPage } from "../showcorrectmodal/showcorrectmodal";
import { CategoryServiceProvider } from "../../services/category.service";
import { QuestionAttemptedModalPage } from "../question-attempted/question-attempted";
import { AlertController } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser'

@Component({
  selector: "page-quiz",
  templateUrl: "quiz.html"
})
export class QuizPage implements OnInit {
  @ViewChild(Content) content: Content;
  public questionData: any = [];
  public test: any = {};
  public questionsData: any = [];
  public selectedQuestion: any;
  public selectedQuestionVal;
  public selectMultipleAnswer = [];
  public questionItems: any = {};
  public index = 0;
  public score: number ;
  public totalscore: any ;
  public savedata: any;
  scoresavedata : string = 'savedata';
  public correct: any;
  public incorrect: any;
  public toggleshowanswer;
  public questionForm: FormGroup;
  public requestArray = [];
  public selectedAnswer;
  public requestAssessment = {
    result: "",
    data: []
  };
  public result = [];
  public bookmarkData = [];
  public selectedBookmark: any;
  public selectedChecked: any;
  public quizStart: boolean = false;
  constructor(
    private storage: Storage,
    private alertCtrl: AlertController,
    public navCtrl: NavController,
    public alertService: AlertServiceProvider,
    public bookmarkService: BookmarkServiceProvider,
    public messages: MessagesServiceProvider,
    public categoryService: CategoryServiceProvider,
    private ref: ChangeDetectorRef,
    public formBuilder: FormBuilder,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    private sanitizer: DomSanitizer,
  ) {
    this.test = navParams.get("test") ? navParams.get("test") : "";
    this.questionData = this.test.questions;
    this.questionForm = this.formBuilder.group({
      option: formBuilder.array([]),
      answer_text: [""]
    });
    this.alertService
      .showAlert(
        "Start Quiz?",
        `Time to complete is ${this.test.duration} minutes`,
        false
      )
      .then(
        res => {
          this.getAssessmentData();
          this.quizStart = true;
        },
        err => {
          this.navCtrl.pop();
        }
      );
  }
  ngOnInit(): void {
    this.getBookmarkData();
  }
  ionViewDidLoad() {
  }

  /**
   * Get Assessment Data
   * @param id
   */
  getAssessmentData() {
    this.content.resize();
    this.loadQuestion(0);
  }

  getBookmarkData() {
  
    this.bookmarkService.getBookmarks().subscribe(
      (response: any) => {
      
        if (!response.error) {
          this.bookmarkData = response;
        }
      },
      err => {
       
      }
    );
  }

  Showanswer() {
   
    if(this.toggleshowanswer != true)
    {
      this.toggleshowanswer = true;
    }
    else {
      this.toggleshowanswer = false;
    }

  }

  addBookmark() {
    if (this.questionItems) {
      let data = {
        question_id: this.questionItems.id
      }
      this.selectedBookmark = this.questionItems.id;
      this.bookmarkService.AddBookmark(data).subscribe(
        (data: any) => {
          this.getBookmarkData();
          this.getSelectedBookmark(this.questionItems);
        },
        err => {
        }
      );
    }
  }

  getSelectedBookmark(val) {
    if (this.bookmarkData.length > 0 && val) {
      let selectedRes = this.bookmarkData.find(x => x.question_id == val.id);
      if (selectedRes && selectedRes != -1) {
        this.selectedBookmark = selectedRes.id;
      }
    }
  }

  /**
   * Load Question by Index
   * @param i
   */
  loadQuestion(i) {
    if (i < this.questionData.length) {
      this.questionItems = this.questionData[i].question;
      this.getSelectedBookmark(this.questionItems);
      const option = <FormArray>this.questionForm.controls.option;
      this.getSelectedAnswer(this.questionItems);
      this.clearFormArray(option);
    } else {
      this.onSaveCompleteTest(this.test.id, this.result, this.questionData.length, this.result.length, this.getTotalCorrect(this.result), this.getTotalInCorrect(this.result), this.countscore());
    }
  }

  remove_linebreaks(str) {
    return str.replace(/\\r\\n/g, "");
  }
  /**
   * Submit Answer
   */

  

  onAnswer() {
    if (this.index < this.questionData.length) {
      let res = this.getResult(this.questionForm.value.option);
      this.processResult(res);
      this.toggleshowanswer = false;
    }
  }

 
  loadPreviousQuestion() {
    if (this.index > 0) {
      this.index = this.index - 2;
      let res = this.getResult(this.questionForm.value.option);
      this.processResult(res);
      this.toggleshowanswer = false;
     
    }
  }
    
  
  presentReportModal() {
    if (this.questionItems) {
      const modalOptions: ModalOptions = {
        cssClass: "uc-report-modal",
        enableBackdropDismiss: false
      };
      let reportModal = this.modalCtrl.create(ReportmodalPage, { question: this.questionItems }, modalOptions);
      reportModal.onDidDismiss(data => {
        if (data) {
          this.messages.showToast("Successfull reported", 'undefined', "toast-success");
        }
      });
      reportModal.present();
    }
  }

// presentCorrectansModal() {
//   if (this.questionItems) {
//     const modalOptions: ModalOptions = {
//       cssClass: "uc-report-modal",
//       enableBackdropDismiss: false
//     };
//     let reportModal = this.modalCtrl.create(ShowcorrectmodalPage, { question: this.questionItems }, modalOptions);
//     reportModal.present();
//   }
// }

// onSaveCompleteTest() save completed test data on serve
// make it locally savable and update the test history page too so that it can read locally

  

  onCompleted() {
    this.navCtrl.pop();
  }

  onReviewTest() {
    let rs = {
      questions: this.questionData,
      answers: this.result
    }
    this.navCtrl.push(ReviewTestPage, { data: rs });
  }

  onReviewTestCorrect() {
    let rs = {
      questions: this.questionData,
      answers: this.result
    }
    this.navCtrl.push(ReviewTestPage, { data: rs });
  }

  onQuestionAttempted() {
   
      const modalOptions: ModalOptions = {
        cssClass: "uc-report-modal",
        enableBackdropDismiss: false
      };
      let rs = {
        questions: this.questionData,
        answers: this.result
      }

      let attemptmodal = this.modalCtrl.create(QuestionAttemptedModalPage, { data: rs }, modalOptions);
      attemptmodal.onDidDismiss(data => {
        if (data) {
       //   console.log (data);
          this.index = data - 2 ;
            let res = this.getResult(this.questionForm.value.option);
            this.processResult(res);
          
          }
          this.toggleshowanswer = false;
      });
      attemptmodal.present();
    
  }


  onQuestionAttempted1(){
    let rs = {
      questions: this.questionData,
      answers: this.result
    }
    this.navCtrl.push(QuestionAttemptedModalPage, { data: rs });
    
  }

  getSelectedAnswer(val) {
    if (this.result.length > 0 && val) {
      let selectedRes = this.result.find(x => x.question_id == val.id);
      if (selectedRes && selectedRes != -1) {
        this.selectedChecked = selectedRes.id;
      }
    }
  }


  functiontofindIndexByKeyValue(arraytosearch, key, valuetosearch) {
    for (var i = 0; i < arraytosearch.length; i++) {
      if (arraytosearch[i][key] == valuetosearch) {
        return i;
      }
    }
    return -1;
  }

  processResult(res) {
    if (this.index < this.questionData.length) {
      if (this.result.length >= 0 && res) {
        let resultIndex = this.functiontofindIndexByKeyValue(this.result, 'question_id', res.question_id);
        if (resultIndex != -1) {
          this.result[resultIndex] = res;
        } else {
          this.result.push(res);
        }
      } else {
        if (res) {
          this.result.push(res);
        }
      }
      this.questionForm.value.question_id = this.questionItems.id;
      this.requestArray.push(this.questionForm.value);
      this.index = this.index + 1;
      this.index = this.index > this.questionData.length ? this.questionData.length : this.index;
      this.loadQuestion(this.index);
    }
  }

 

  getTotalCorrect(val) {
     this.correct = val.filter(i => i.is_correct == 1).length;
    return this.correct;
  }
  getTotalInCorrect(val) {
    this.incorrect = val.filter(i => i.is_correct != 1).length;
    return this.incorrect;
    
  }

countscore(){
    let correct = Math.floor(this.correct * 4);
    let incorrect = Math.floor(this.incorrect * 1);
    let score = Math.floor(correct-incorrect);
    if(score>0){
    this.score = score;
  }else{
    this.score = 0;
  }
    
    return this.score;
}

onSaveCompleteTest(testval, responseval, totalval, attemtedval, correctval, incorrectval, savescore) {
 
 
  let data: any = {
    test_id: testval,
    response: JSON.stringify(responseval),
    attemted: attemtedval,
    total: totalval,
    correct: correctval,
    incorrect: incorrectval
  }
  let data1: any = {
    score1: savescore
   
  }
 this.messages.showLoader();
  this.categoryService.saveScore(data1).subscribe(
    (response: any) => {
   
    },
    err => {
      
    }
  );
   this.categoryService.saveResult(data).subscribe(
     (response: any) => {
      this.messages.hideLoader();
     },
     err => {
      this.messages.hideLoader();
     }
   );

}


  /**
   * Single Select Option
   * @param event
   */
  onSelect(event) {
    const option = <FormArray>this.questionForm.controls.option;
    this.clearFormArray(option);
    option.push(new FormControl(parseInt(event)));
    this.selectedQuestionVal = event;
  }

  /**
   * Clear Form Array Data
   */
  clearFormArray = (formArray: FormArray) => {
    while (formArray.length !== 0) {
      formArray.removeAt(0);
    }
  };

  /**
   * Get Final Result
   * @param answers
   */
  getResult(answers) {
    this.questionItems.answers.forEach(option => {
      if (answers.indexOf(option.id) >= 0) {
        this.selectedAnswer = option;
      }
    });
    return this.selectedAnswer;
  }




}