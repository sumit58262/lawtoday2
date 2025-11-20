import { Component } from "@angular/core";
import {
  NavController,
  NavParams
} from "ionic-angular";
import {
  FormGroup,
  FormBuilder,
  Validators,
  ValidatorFn,
  AbstractControl
} from "@angular/forms";
import { Storage } from "@ionic/storage";
import { MessagesServiceProvider } from "../../services/messages.service";
import { AuthServiceProvider } from "../../services/auth-service";
import { LoginPage } from "../login/login";

/**
 * Generated class for the ChangePasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// @IonicPage()
@Component({
  selector: "page-change-password",
  templateUrl: "change-password.html"
})
export class ChangePasswordPage {
  changePassForm: FormGroup;
  userid: any;
  isFormSubmitted: boolean = false;
  passwordType: string = "password";
  passwordIcon: string = "eye-off";
  userIdentity: string ="";
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private messages: MessagesServiceProvider,
    public auth: AuthServiceProvider,
    private store: Storage,
    public formBuilder: FormBuilder
  ) {

    this.userIdentity = this.navParams.get('user_identity') ? this.navParams.get('user_identity') : '';
    this.changePassForm = this.formBuilder.group({
      email: [''],
      password: [
        "",
        Validators.compose([
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(20)
        ])
      ],
      cpass: [
        "",
        Validators.compose([
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(20),
          this.equalto("password")
        ])
      ]
    });
  }

  ionViewDidLoad() {
    this.isFormSubmitted = false;
  }

  equalto(field_name): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      let input = control.value;
      let isValid = control.root.value[field_name] == input;
      if (!isValid) return { equalTo: { isValid } };
      else return null;
    };
  }

  /**
   * Hide Show Password
   */
  hideShowPassword() {
    this.passwordType = this.passwordType === "text" ? "password" : "text";
    this.passwordIcon = this.passwordIcon === "eye-off" ? "eye" : "eye-off";
  }

  isFieldValid(fieldValue: string) {
    if (fieldValue) {
      return true;
    }
    return false;
  }

  onSubmit() {
    this.isFormSubmitted = true;
    if (this.changePassForm.valid) {
      this.messages.showLoader();
      if(this.userIdentity){
        this.changePassForm.value.email = this.userIdentity;
        this.auth.resetPassword(this.changePassForm.value).subscribe(
          (data: any) => {
            this.messages.hideLoader();
            if (!data.error) {
              this.navCtrl.setRoot(LoginPage);
              this.messages.showToast("Password update successfull", undefined, "toast-success");
            } else {
              this.messages.showToast(data.error, undefined, "toast-danger");
            }
          },
          err => {
            this.messages.hideLoader();
            this.messages.showToast(err.error.errors[Object.keys(err.error.errors)[0]].join(', '),undefined, "toast-danger");
          }
        );
      }else{
        this.auth.ChangePassword(this.changePassForm.value).subscribe(
          (data: any) => {
            this.messages.hideLoader();
            if (!data.error) {
              this.navCtrl.pop();
              this.messages.showToast("Password update successfull", undefined, "toast-success");
            } else {
              this.messages.showToast(data.error, undefined, "toast-danger");
            }
          },
          err => {
            this.messages.hideLoader();
            this.messages.showToast(err.error.errors[Object.keys(err.error.errors)[0]].join(', '),undefined, "toast-danger");
          }
        );
      }
    }
  }
}
