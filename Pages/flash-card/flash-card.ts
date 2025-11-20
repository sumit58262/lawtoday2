import { Component, ViewChild } from "@angular/core";
import { NavController, NavParams, Content, ModalController, ModalOptions } from "ionic-angular";
import { ReportmodalPage } from "../reportmodal/reportmodal";
import { MessagesServiceProvider } from "../../services/messages.service";
import { QuestionAttemptedModalPage } from "../question-attempted/question-attempted";
import { AlertController } from 'ionic-angular';
/**
 * Generated class for the QuizPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: "page-flash-card",
  templateUrl: "flash-card.html"
})
export class FlashCardPage {
  @ViewChild(Content) content: Content;
  public questionData: any = [];
  public result = [];
  public test: any = {};
  public questions: any = {};
  public questionsData: any = [];
  public questionItems: any = {};
  public index = 0;
  constructor(
    private alertCtrl: AlertController,
    public navCtrl: NavController,
    public navParams: NavParams,
    public messages: MessagesServiceProvider,
    public modalCtrl: ModalController
  ) {
    this.test = navParams.get("test") ? navParams.get("test") : "";
    this.questionData = this.test.questions;
    this.loadQuestion(0);
  }

  ionViewDidLoad() {
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
      //  console.log (data);
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

  onCompleted(){
    this.navCtrl.pop();
  }
}
