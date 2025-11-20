import { Component, ViewChild } from "@angular/core";
import { NavController, NavParams, Content, ModalController, ModalOptions  } from "ionic-angular";
import { AlertServiceProvider } from "../../services/alerts.service";
import { FormBuilder, FormGroup, FormArray, FormControl } from "@angular/forms";
// import { visitValue } from "@angular/compiler/src/util";
import { ReportmodalPage } from "../reportmodal/reportmodal";
import { BookmarkServiceProvider } from "../../services/bookmark.service";
import { MessagesServiceProvider } from "../../services/messages.service";
import { QuestionAttemptedModalPage } from "../question-attempted/question-attempted";

/**
 * Generated class for the QuizPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: "page-bookmark-play",
  templateUrl: "bookmark-play.html"
})
export class BookmarkPlayPage {
  @ViewChild(Content) content: Content;
  public questionData: any = [];
  public questionsData: any = [];
  public selectedQuestion: any;
  public selectedQuestionVal;
  public selectMultipleAnswer = [];
  public questionItems: any = {};
  public index = 0;
  public questionForm: FormGroup;
  public requestArray = [];
  public selectedAnswer;
  public requestAssessment = {
    result: "",
    data: []
  };
  public result = [];
  public selectedChecked: any;
  constructor(
    public navCtrl: NavController,
    public alertService: AlertServiceProvider,
    public bookmarkService: BookmarkServiceProvider,
    public messages: MessagesServiceProvider,
    public formBuilder: FormBuilder,
    public navParams: NavParams,
    public modalCtrl: ModalController
  ) {
    this.questionData = navParams.get("bookmarkQuestions") ? navParams.get("bookmarkQuestions") : "";
    this.questionForm = this.formBuilder.group({
      option: formBuilder.array([]),
      answer_text: [""]
    });
    this.getAssessmentData();
  }

  ionViewDidLoad() {
  }

  /**
   * Get Assessment Data
   * @param id
   */
  getAssessmentData() {
    this.loadQuestion(0);
  }

  /**
   * Load Question by Index
   * @param i
   */
  loadQuestion(i) {
    if (i < this.questionData.length) {
      this.questionItems = this.questionData[i].question;
      const option = <FormArray>this.questionForm.controls.option;
      this.getSelectedAnswer(this.questionItems);   
      this.clearFormArray(option);
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
          this.messages.showToast("Successfull reported", undefined, "toast-success");
        }
      });
      reportModal.present();
    }
  }

  /**
   * Submit Answer
   */
  onAnswer() {
    if (this.index < this.questionData.length) {
      let res = this.getResult(this.questionForm.value.option);
      this.processResult(res);
    }
  }

  onCompleted() {
    this.navCtrl.pop();
  }

  getSelectedAnswer(val) {
    if (this.result.length > 0 && val) {
      let selectedRes = this.result.find(x => x.question_id == val.id);
      if (selectedRes && selectedRes != -1) {
        this.selectedChecked = selectedRes.id;
      }
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
     //   console.log (data);
        this.index = data - 2 ;
          let res = this.getResult(this.questionForm.value.option);
          this.processResult(res);
        
        }

    });
    attemptmodal.present();
  
}

  loadPreviousQuestion() {
    if (this.index > 0) {
      this.index = this.index - 1;
      this.loadQuestion(this.index);
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
      if (this.result.length > 0 && res) {
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
