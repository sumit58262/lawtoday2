import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { LoginPage } from "../login/login";
import { Regex } from "../../constants/regex";
import { MessagesServiceProvider } from "../../services/messages.service";
import { ChangePasswordPage } from "../change-password/change-password";
import { AuthServiceProvider } from "../../services/auth-service";

@Component({
  selector: "page-forgot-password",
  templateUrl: "forgot-password.html"
})
export class ForgotPasswordPage {
  loginpage: any = LoginPage;
  changepasswordpage = ChangePasswordPage;
  forgotPassForm: FormGroup;
  otpForm: FormGroup;
  isFormSubmitted: boolean = false;
  isOtpFormSubmitted: boolean = false;
  isForgotPassForm: boolean = true;
  isOtpForm: boolean = false;
  isPlatformValue: any;
  userIdentity: string;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private auth: AuthServiceProvider,
    private messages: MessagesServiceProvider,
    public formBuilder: FormBuilder
  ) {
    this.forgotPassForm = this.formBuilder.group({
      email: [
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern(Regex.Email),
          Validators.maxLength(100)
        ])
      ]
    });
    this.otpForm = this.formBuilder.group({
      otp: ["", Validators.compose([Validators.required])],
      email: [""]
    });
  }

  ionViewDidLoad() {
  }

  isFieldValid(fieldValue: string) {
    if (fieldValue) {
      return true;
    }
    return false;
  }

  onForgotSubmit() {
    this.isFormSubmitted = true;
    if (this.forgotPassForm.valid) {
      this.messages.showLoader();
      this.userIdentity = this.forgotPassForm.value.email;
      this.auth.SendOtp(this.forgotPassForm.value).subscribe(
        (data: any) => {
          this.messages.hideLoader();
         
          if (!data.error) {
            this.messages.showToast(data.message, undefined, "toast-success");
            this.isForgotPassForm = false;
            this.isOtpForm = true;
          } else {
              this.messages.showToast(
              data.error.message,
              undefined,
              "toast-danger"
            );
          }
        },
        err => {
          this.messages.hideLoader();
          
         // this.messages.showToast(err.error.errors[Object.keys(err.error.errors)[0]].join(', '), undefined, "toast-danger");
        }
      );
    } else {
      this.messages.hideLoader();
    }
  }

  onOtpFormSubmit() {
    this.isOtpFormSubmitted = true;
    if (this.otpForm.valid) {
      this.messages.showLoader();
      this.otpForm.value.email = this.userIdentity;
      this.auth.VerifyOtp(this.otpForm.value).subscribe(
        (data: any) => {
          this.messages.hideLoader();
          this.messages.showToast(data.message, undefined, "toast-success");
          this.isForgotPassForm = false;
          this.isOtpForm = true;
          this.navCtrl.pop();
          this.navCtrl.push(this.changepasswordpage, {
            user_identity: this.userIdentity
          });
        },
        err => {
          this.messages.hideLoader();
          this.messages.showToast('Please enter correct OTP', undefined, "toast-danger");
        });
    } else {
      this.messages.hideLoader();
    }
  }
}
