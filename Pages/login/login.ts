import { Component } from "@angular/core";
import {
  NavController,
  NavParams,
  Platform,
  MenuController
} from "ionic-angular";
import {
  FormBuilder,
  FormGroup,
  Validators,
} from "@angular/forms";
import { MessagesServiceProvider } from "../../services/messages.service";
import { Regex } from "../../constants/regex";
import { HomePage } from "../home/home";
import { SignupPage } from "../signup/signup";
import { ForgotPasswordPage } from "../forgot-password/forgot-password";
import { AuthServiceProvider } from "../../services/auth-service";
import { AdServiceProvider } from "../../services/ad.service";
import { PrivacyPage } from "../../pages/privacy/privacy";
import { TermsPage } from "../../pages/terms/terms";



@Component({
  selector: "page-login",
  templateUrl: "login.html"
})
export class LoginPage {
  forgotPassword: any = ForgotPasswordPage;
  homePage: any = HomePage;
  signupPage: any = SignupPage;
  passwordType: string = "password";
  passwordIcon: string = "eye-off";
  isFormSubmitted: boolean = false;
  isPlatformValue: any;
  loginForm: FormGroup;
  nativeStorage: any;
  auth_type = "";
  loginData: any = {};
  public deviceToken: string = "";
  public deviceName: string = "";
   
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public plt: Platform,
    public formBuilder: FormBuilder,
    public auth: AuthServiceProvider,
    public ad: AdServiceProvider,
    public menuCtrl: MenuController,
    private messages: MessagesServiceProvider
  ) {

    this.loginForm = this.formBuilder.group({
      email: [
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern(Regex.Email),
          Validators.maxLength(100)
        ])
      ],
      password: [
        "",
        Validators.compose([
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(20)
        ])
      ]
    });
  }

  /**
   * Check Platform Type
   */
  isPlatformType() {
    if (this.plt.is("android")) {
      this.isPlatformValue = 1;
    }
    else if (this.plt.is("ios")) {
      this.isPlatformValue = 2;
    } else {
      this.isPlatformValue = 0;
    }
  }
  ionViewWillEnter() {    
    this.menuCtrl.enable(false);
    this.menuCtrl.swipeEnable(false);
    this.ad.loadrewarded();

  }
  ionViewDidLoad() {
    this.isFormSubmitted = false;
    this.loginForm
      .get("email")
      .setValidators(
        Validators.compose([
          Validators.required,
          Validators.pattern(Regex.Email),
          Validators.maxLength(100)
        ])
      );
    this.loginForm
      .get("password")
      .setValidators(
        Validators.compose([
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(20)
        ])
      );


  }

  /**
   * Hide Show Password
   */
  hideShowPassword() {
    this.passwordType = this.passwordType === "text" ? "password" : "text";
    this.passwordIcon = this.passwordIcon === "eye-off" ? "eye" : "eye-off";
  }


  
  /**
   * Login
   */
  onLogin() {
    this.isFormSubmitted = true;
    if (this.loginForm.valid) {
      this.messages.showLoader();
     // console.log('Form:', this.loginForm.value)
     // console.log('Formvalue:', this.loginForm.value)
      this.auth.login(this.loginForm.value).subscribe(
        (data: any) => {
     //     console.log(data)
          this.messages.hideLoader();
          if (!data.error) {
            this.navCtrl.setRoot(HomePage);
            this.messages.showToast("Welcome! Login Successfull", undefined, "toast-success");
          } else {
            this.messages.showToast("Invalid email address or password.",undefined, "toast-danger");
          }
        },
        err => {
      //    console.log(err)
          this.messages.hideLoader();
          this.messages.showToast(err.error.errors[Object.keys(err.error.errors)[0]].join(', '),undefined, "toast-danger");
        }
      );
    }
  }

  goToPrivacy() {
   
    
    this.navCtrl.push(PrivacyPage);
}

goToTos() {
  this.navCtrl.push(TermsPage);
  

}


  isFieldValid(fieldValue: string) {
    if (fieldValue) {
      return true;
    }
    return false;
  }


  

}
