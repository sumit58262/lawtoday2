import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, ModalOptions } from 'ionic-angular';
import { MessagesServiceProvider } from '../../services/messages.service';
import { CategoryServiceProvider } from '../../services/category.service';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import { GenerateQuizPage } from '../generate-quiz/generate-quiz';

@Component({
  selector: 'page-generate-questions',
  templateUrl: 'generate-questions.html',
})
export class GenerateQuestionsPage {
  checkedItems: any;
  generateData: any = [];
  selectedTopicData: any = [];
  public topicList: any = [];
  public generateForm: FormGroup;
  isFormSubmitted: boolean = false;
  isQuestionCount: boolean = false;
  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    public messages: MessagesServiceProvider,
    public categoryService: CategoryServiceProvider,
    public _formBuilder: FormBuilder,
    public navParams: NavParams,
  ) {
    this.generateData = this.navParams.get('data') ? this.navParams.get('data') : '';
    this.generateForm = this._formBuilder.group({
      name: [
        "",
        Validators.compose([
          Validators.required
        ])
      ],
      data: this._formBuilder.array([
      ]),
    });
    let control = <FormArray>this.generateForm.controls['data'];
    this.selectedTopicData = [];
    this.generateData.forEach(item => {
      if (item.isChecked == true) {
        if (item.topics.filter((value) => value.isChecked == true).length > 0) {
          item.topics.forEach(el => {
            if (el.isChecked == true) {
              this.selectedTopicData.push(el);
              control.push(this.createData(el, 2));
            }
          });
        }
        else {
          this.selectedTopicData.push(item);
          control.push(this.createData(item, 1));
        }
      } else {
        item.topics.forEach(el => {
          if (el.isChecked == true) {
            this.selectedTopicData.push(el);
            control.push(this.createData(el, 2));
          }
        });
      }
    });
  }

  ionViewDidLoad() {
  }

  createData(val, type) {
    return new FormGroup({
      id: new FormControl(val.id, Validators.required),
      type: new FormControl(type, Validators.required),
      question_count: new FormControl('', Validators.required)
    })
  }
  isFieldValid(fieldValue: string) {
    if (fieldValue) {
      return true;
    }
    return false;
  }

  onFormSubmit() {
    this.isFormSubmitted = true;
    if (this.generateForm.valid) {
      this.messages.showLoader();
      let formdata: any = {
        name: this.generateForm.value.name,
        data: JSON.stringify(this.generateForm.value.data)
      }
      this.categoryService.generateTest(formdata).subscribe(
        (data: any) => {
          this.messages.hideLoader();
          this.navCtrl.popToRoot();
          if (JSON.parse(data.questions).length > 0) {
            this.navCtrl.push(GenerateQuizPage, { test: data });
          }
        },
        err => {
          this.messages.hideLoader();
        }
      );
    } else {
      if (this.generateForm.value.name == '') {
        this.messages.showToast("Test name is required", undefined, "toast-danger");
      } else if (this.generateForm.value.data) {
        this.generateForm.value.data.forEach((v, i) => {
          if (v.question_count == '') {
            this.isQuestionCount = true;
          } else {
            this.isQuestionCount = false;
          }
        });
        if (this.isQuestionCount) {
          this.messages.showToast("Question count is required", undefined, "toast-danger");
        }
      }
    }
  }
}
