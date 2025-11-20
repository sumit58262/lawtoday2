import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Regex } from '../../constants/regex';

/**
 * Generated class for the ContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage {
  isFormSubmitted: boolean = false;
  contactForm: FormGroup;
  constructor(public navCtrl: NavController,
    public formBuilder: FormBuilder,
    public navParams: NavParams) {
    this.contactForm = this.formBuilder.group({
      user_name: [
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern(Regex.AlphaNumberic),
          Validators.minLength(3),
          Validators.maxLength(30)
        ])
      ],
      user_mobile: [
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern(Regex.Number),
          Validators.minLength(10),
          Validators.maxLength(10)
        ])
      ]
    });
  }

  ionViewDidLoad() {
    this.isFormSubmitted = false;
    this.contactForm
      .get("user_name")
      .setValidators(
        Validators.compose([
          Validators.required,
          Validators.pattern(Regex.AlphaNumberic),
          Validators.minLength(3),
          Validators.maxLength(30)
        ])
      );
    this.contactForm
      .get("user_mobile")
      .setValidators(
        Validators.compose([
          Validators.required,
          Validators.pattern(Regex.Number),
          Validators.minLength(10),
          Validators.maxLength(10)
        ])
      );
  }

  numberOnly(event): boolean {
    const charCode = event.which ? event.which : event.keyCode;
    console.info(charCode);
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }

  onSignup() {
    this.isFormSubmitted = true;
  }
  isFieldValid(fieldValue: string) {
    if (fieldValue) {
      return true;
    }
    return false;
  }
}
