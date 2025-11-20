import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { LoginPage } from "../login/login";
import { Regex } from "../../constants/regex";
import { MessagesServiceProvider } from "../../services/messages.service";
import { ChangePasswordPage } from "../change-password/change-password";
import { BookmarkServiceProvider } from "../../services/bookmark.service";
import { AuthServiceProvider } from "../../services/auth-service";

@Component({
  selector: "page-verifyemail",
  templateUrl: "verifyemail.html"
})
export class VerifyemailPage {
  loginpage: any = LoginPage;
  changepasswordpage = ChangePasswordPage;
  forgotPassForm: FormGroup;
  otpForm: FormGroup;
  isFormSubmitted: boolean = true;
  isOtpFormSubmitted: boolean = true;
  isForgotPassForm: boolean = true;
  isOtpForm: boolean = true;
  isPlatformValue: any;
  userIdentity: string;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public bookmarkService: BookmarkServiceProvider,
    private messages: MessagesServiceProvider,
    public auth: AuthServiceProvider,
    public formBuilder: FormBuilder
  ) {
    this.onForgotSubmit();
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
   
      this.bookmarkService.SendemailOtp().subscribe(
        (data: any) => {
     //     console.log(data)
        },
        err => {
      //    console.log(err)
        }
      );
   
  }

 onOtpFormSubmit() {
   this.isOtpFormSubmitted = true;
   if (this.otpForm.valid) {
     this.messages.showLoader();
     this.bookmarkService.VerifyemailOtp(this.otpForm.value).subscribe(
       (data: any) => {
         this.messages.hideLoader();
         this.messages.showToast(data.message, undefined, "toast-success");
         this.navCtrl.pop();
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
