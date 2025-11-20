import { Component } from "@angular/core";
import { Storage } from '@ionic/storage';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidatorFn } from "@angular/forms";
import { NavController } from "ionic-angular";
import { LoginPage } from "../login/login";
import { Regex } from "../../constants/regex";
import { AuthServiceProvider } from "../../services/auth-service";
import { MessagesServiceProvider } from "../../services/messages.service";
import { PrivacyPage } from "../../pages/privacy/privacy";
import { TermsPage } from "../../pages/terms/terms";
// import { IonicSelectableComponent } from "ionic-selectable";

@Component({
  selector: "page-user",
  templateUrl: "signup.html"
})
export class SignupPage {
  isFormSubmitted: boolean = false;
  login: any = LoginPage;
  registerForm: FormGroup;
  selectCountryExt = '';
  ischangePicture: boolean = false;
  myProfile: any;
  avatar$:any;
  avatar:any;
  public imgData = [
    {
      id: 1,
      url: 'assets/images/avatar/1.png'
    },
    {
      id: 2,
      url: 'assets/images/avatar/2.png'
    },
    {
      id: 3,
      url: 'assets/images/avatar/3.png'
    },
    {
      id: 4,
      url: 'assets/images/avatar/4.png'
    },
    {
      id: 5,
      url: 'assets/images/avatar/5.png'
    },
    {
      id: 6,
      url: 'assets/images/avatar/6.png'
    },
    {
      id: 7,
      url: 'assets/images/avatar/7.png'
    },
    {
      id: 8,
      url: 'assets/images/avatar/8.png'
    },
    {
      id: 9,
      url: 'assets/images/avatar/9.png'
    },
    {
      id: 10,
      url: 'assets/images/avatar/10.png'
    },
    {
      id: 11,
      url: 'assets/images/avatar/11.png'
    },
    {
      id: 12,
      url: 'assets/images/avatar/12.png'
    }
  ];
  constructor(
    public navCtrl: NavController,
    public formBuilder: FormBuilder,
    public auth: AuthServiceProvider,
    private storage: Storage,
    private messages: MessagesServiceProvider
  ) {

    this.storage.get('profile')
    .then(data => {
      this.myProfile = data;
    });
    this.registerForm = this.formBuilder.group({
      profile_pic: [
        "image",
        Validators.compose([
          Validators.required,
          Validators.pattern(Regex.AlphaNumberic),
          Validators.minLength(3),
          Validators.maxLength(30)
        ])
      ],
      name: [
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern(Regex.AlphaNumberic),
          Validators.minLength(3),
          Validators.maxLength(30)
        ])
      ],
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
      ],
      password_confirmation: [
        "",
        Validators.compose([
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(20),
          this.equalto("password")
        ])
      ],
      phone_number: [
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern(Regex.Number),
          Validators.minLength(10),
          Validators.maxLength(10)
        ])
      ],
      referred_by: [
        "",
        Validators.compose([
          Validators.pattern(''),
          Validators.maxLength(100)
        ])
      ]
    });
  }

  changePicture(){
    this.ischangePicture = !this.ischangePicture;
  }
  setProfileImage(val) {
    this.storage.set('profile', val);
    this.myProfile = val;
    
  }

  getProfileImage() {
    this.storage.get('profile')
      .then(data => {
    return data;
      });
  }

  ionViewDidLoad() {
    this.isFormSubmitted = false;
    this.registerForm
      .get("name")
      .setValidators(
        Validators.compose([
          Validators.required,
          Validators.pattern(Regex.AlphaNumberic),
          Validators.minLength(3),
          Validators.maxLength(30)
        ])
      );
    this.registerForm
      .get("email")
      .setValidators(
        Validators.compose([
          Validators.required,
          Validators.pattern(Regex.Email),
          Validators.maxLength(100)
        ])
      );
    this.registerForm
      .get("password")
      .setValidators(
        Validators.compose([
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(20)
        ])
      );
    this.registerForm
      .get("password_confirmation")
      .setValidators(
        Validators.compose([
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(20),
          this.equalto("password")
        ])
      );
    this.registerForm
      .get("phone_number")
      .setValidators(
        Validators.compose([
          Validators.required,
          Validators.pattern(Regex.Number),
          Validators.minLength(10),
          Validators.maxLength(10)
        ])
      );
      this.registerForm
      .get("referred_by")
      .setValidators(
        Validators.compose([
          Validators.pattern(''),
          Validators.maxLength(100)
        ])
      );
  }

  equalto(field_name): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      let input = control.value;
      let isValid = control.root.value[field_name] == input;
      if (!isValid) return { equalTo: { isValid } };
      else return null;
    };
  }

  numberOnly(event): boolean {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }

  onSignup() {
    this.isFormSubmitted = true;
    if (this.registerForm.valid) {
         this.avatar$ =this.storage.get('profile');
         const self = this;
        this.avatar$.then(val => self.avatar = val);
      this.registerForm.value.profile_pic = this.myProfile.url;
   this.messages.showLoader();
   this.auth.register(this.registerForm.value).subscribe(
     (data: any) => {
     //  console.log(data)
       this.messages.hideLoader();
       this.messages.showToast("User registraion successfully", undefined, "toast-success");
       if (!data.error) {
         this.navCtrl.pop();
       }
     },
     err => {
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

  forgetPassword() { }
}
