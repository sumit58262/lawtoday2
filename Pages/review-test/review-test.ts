import { Component, ViewChild } from "@angular/core";
import { NavController, NavParams, Content, ModalOptions, ModalController } from "ionic-angular";
import { ReportmodalPage } from "../reportmodal/reportmodal";
import { MessagesServiceProvider } from "../../services/messages.service";
import { BookmarkServiceProvider } from "../../services/bookmark.service";
import { QuestionAttemptedModalPage } from "../question-attempted/question-attempted";

@Component({
  selector: "page-review-test",
  templateUrl: "review-test.html"
})
export class ReviewTestPage {
  @ViewChild(Content) content: Content;
  public questionData: any = [];
  public test: any = {};
  public questionsData: any = [];
  public questionItems: any = {};
  public selectedAnswer: any = {};
  public index = 0;
  public answerData: any;
  public bookmarkData = [];
  public selectedBookmark: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public bookmarkService: BookmarkServiceProvider,
    public messages: MessagesServiceProvider,
    public modalCtrl: ModalController
  ) {
    this.test = navParams.get("data") ? navParams.get("data") : "";
    if (this.test) {
      this.questionData = this.test.questions;
      this.answerData = this.test.answers;
      this.loadQuestion(0);
    }
  }

  ionViewDidLoad() {
  }

  getSelectedAnswer(val) {
    if (this.answerData.length > 0 && val) {
      let selectedRes = this.answerData.find(x => x.question_id == val.id);
      if (selectedRes && selectedRes != -1) {
        this.selectedAnswer = selectedRes;
      }
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
        if(data){
          this.messages.showToast("Successfull reported", undefined, "toast-success");
        }
      });
      reportModal.present();
    }
  }

  getBookmarkData() {
    this.messages.showLoader();
    this.bookmarkService.getBookmarks().subscribe(
      (response: any) => {
        this.messages.hideLoader();
        if (!response.error) {
          this.bookmarkData = response;
        }
      },
      err => {
        this.messages.hideLoader();
      }
    );
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
  
  remove_linebreaks(str) {
    return str.replace(/\\r\\n/g, "");
  }
  /**
   * Load Question by Index
   * @param i
   */
  loadQuestion(i) {
    if (i < this.questionData.length) {
      this.questionItems = this.questionData[i].question;
      this.getSelectedAnswer(this.questionItems);
    }
  }

  onQuestionAttempted() {
   
    const modalOptions: ModalOptions = {
      cssClass: "uc-report-modal",
      enableBackdropDismiss: false
    };
    let rs = {
      questions: this.questionData,
      answers: this.answerData
    }

    let attemptmodal = this.modalCtrl.create(QuestionAttemptedModalPage, { data: rs }, modalOptions);
    attemptmodal.onDidDismiss(data => {
      if (data) {
     //   console.log (data);
        this.index = data - 1 ;
        this.loadQuestion(this.index);
        
        }

    });
    attemptmodal.present();
  
}

  onPrev() {
    if (this.index > 0) {
      this.index = this.index - 1;
      this.loadQuestion(this.index);
    }
  }
  /**
   * Submit Answer
   */
  onNext() {
    if (this.index < this.questionData.length) {
      this.index = this.index + 1;
      this.loadQuestion(this.index);
    }
  }

  onCompleted() {
    this.navCtrl.pop();
  }
}
