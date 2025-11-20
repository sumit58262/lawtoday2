// import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Storage } from "@ionic/storage";
import { Events } from "ionic-angular";

import "rxjs/add/operator/map";

import { CONFIG } from "../constants/config";
import { WebServiceProvider } from "./web-service";
import { MessagesServiceProvider } from "./messages.service";

export class User {
  token: string;
  constructor(token: string) {
    this.token = token;
  }
}

/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthServiceProvider {
  static currentUser: User;
  static currentUserId: User;
  constructor(
    private webservice: WebServiceProvider,
    public messageService: MessagesServiceProvider,
    private store: Storage,
    private events: Events
  ) {
  }

  /**
   * Method to login with specific user details and store user info when user is authenticated.
   *
   * @param credentials - Object with email and password.
   */
  public login(credentials: any) {
    if (credentials.email === null || credentials.password === null) {
      return new Observable(observer => {
        observer.error({
          message: "Please fill all required fields.",
          status: 0
        });
        observer.complete();
      });
    } else {
      return new Observable(observer => {
        this.webservice
          .callAPI(CONFIG.API_LOGIN_URL, credentials, [])
          .subscribe(
            (res: any) => {
              WebServiceProvider.headers["Authorization"] =
                "Bearer " + res.token;
              AuthServiceProvider.currentUser = new User(
                res.access_token
              );
              this.store.set("userInfo", AuthServiceProvider.currentUser);
              this.store.set("email", credentials.email);
              this.store.set("isSubscribed", res.is_subscription);
              this.events.publish(
                "event:login",
                AuthServiceProvider.currentUser
              );
              observer.next(res);
              observer.complete();
            },
            err => {
              observer.next(err);
              observer.complete();
            }
          );
      });
    }
  }

  public loginasguest(credentials: any) {
   
      return new Observable(observer => {
        this.webservice
          .callAPI(CONFIG.API_GUESTLOGIN_URL, credentials, [])
          .subscribe(
            (res: any) => {
              WebServiceProvider.headers["Authorization"] =
                "Bearer " + res.token;
              AuthServiceProvider.currentUser = new User(
                res.access_token
              );
              this.store.set("userInfo", AuthServiceProvider.currentUser);
              this.store.set("email", credentials.email);
              this.store.set("isSubscribed", res.is_subscription);
              this.events.publish(
                "event:login",
                AuthServiceProvider.currentUser
              );
              observer.next(res);
              observer.complete();
            },
            err => {
              observer.next(err);
              observer.complete();
            }
          );
      });
    }
  

  public register(registerData: any) {
    if (
      registerData.name === null ||
      registerData.email === null ||
      registerData.password === null ||
      registerData.phone_number === null||
      registerData.referred_by === null
    ) {
      return new Observable(observer => {
        observer.error({
          message: "Please fill all required fields.",
          status: 0
        });
        observer.complete();
      });
    } else {
      return new Observable(observer => {
        this.webservice
        
          .callAPI(CONFIG.API_REGISTER_URL, registerData, [])
          .subscribe(
            
            (res: any) => {
           //   console.log(registerData)
           //   console.log(res)
              observer.next(res);
              observer.complete();
            },
            err => {
              observer.error(err);
              observer.complete();
            }
          );
      });
    }
  }

  public editProfile(editProfileData: any, params: any) {
    if (editProfileData.name === null || editProfileData.id === null) {
      return new Observable(observer => {
        observer.error({
          message: "Please fill all required fields.",
          status: 0
        });
        observer.complete();
      });
    } else {
      return new Observable(observer => {
        this.webservice
          .callAPI(CONFIG.API_UPDATE_USER_URL, editProfileData, params)
          .subscribe(
            (res: any) => {
              if (res.status) {
              }
              observer.next(res);
              observer.complete();
            },
            err => {
              observer.error(err);
              observer.complete();
            }
          );
      });
    }
  }

  public getUserDetail(params: any = "") {
    return new Observable(observer => {
     
      this.store.get("userInfo").then((val) => {
               if (val) {
          WebServiceProvider.headers["Authorization"] =
            "Bearer " + val.token;
          this.webservice.callAPI(CONFIG.API_GET_USER_URL, {}, params).subscribe(
            (res: any) => {
              observer.next(res);
              observer.complete();
            },
            err => {
              observer.error(err);
              observer.complete();
            }
          );
        }
      });
    });
  }

  public getUserReferrals(params: any = "") {
    return new Observable(observer => {
     
      this.store.get("userInfo").then((val) => {
               if (val) {
          WebServiceProvider.headers["Authorization"] =
            "Bearer " + val.token;
          this.webservice.callAPI(CONFIG.API_GET_USER_REFERRAL_URL, {}, params).subscribe(
            (res: any) => {
              observer.next(res);
              observer.complete();
            },
            err => {
              observer.error(err);
              observer.complete();
            }
          );
        }
      });
    });
  }

  // Get Subscription Data
  public getSubscriptionDetail(params: any = "") {
    return new Observable(observer => {
      this.store.get("userInfo").then((val) => {
        if (val) {
          WebServiceProvider.headers["Authorization"] =
            "Bearer " + val.token;
          this.webservice.callAPI(CONFIG.API_GET_SUBSCRIPTION_URL, {}, params).subscribe(
            (res: any) => {
              observer.next(res);
              observer.complete();
            },
            err => {
              observer.error(err);
              observer.complete();
            }
          );
        }
      });
    });
  }

  public getUserInfo(): User {
    return AuthServiceProvider.currentUser;
  }

  public setUserInfo() {
    this.store.set("userInfo", AuthServiceProvider.currentUser);
  }
z
  public logout(data?: any) {
    return new Observable(observer => {
              AuthServiceProvider.currentUser = null;
              AuthServiceProvider.currentUserId = null;
              if (
                this.store.remove("userInfo") ||
                this.store.remove("name") ||
                this.store.remove("email") ||
                this.store.remove("role")
              ) {
                this.store.remove("userInfo");
                this.store.remove("name");
                this.store.remove("email");
                this.store.remove("role");
                this.store.remove("isSubscribed");
              }
              this.events.publish("event:logout");
              observer.next();
              observer.complete();
    });

  }

  public isLoggedIn() {
    return new Observable(observer => {
      this.store
        .get("userInfo")
        .then(val => {
          if (val) {
            AuthServiceProvider.currentUser = val;
            WebServiceProvider.headers["Authorization"] = "Bearer " + val.token;
            this.webservice.callAPI(CONFIG.API_GET_USER_URL, {}, '/' + val.id).subscribe(
              (res: any) => {
                if (res.status) {
                  this.events.publish("event:login");
                }
                observer.next(res);
              },
              err => {
                AuthServiceProvider.currentUser = null;
                AuthServiceProvider.currentUserId = null;
                if (
                  this.store.remove("userInfo") ||
                  this.store.remove("name") ||
                  this.store.remove("email") ||
                  this.store.remove("role")
                ) {
                  this.store.remove("userInfo");
                  this.store.remove("name");
                  this.store.remove("email");
                  this.store.remove("role");
                }
                observer.error(err);
                observer.complete();
              }
            );
          } else {
            observer.next(null);
            observer.complete();
          }
        });
    });
  }

  public uploadDocuments(documentData: any) {
    if (!documentData) {
      return new Observable(observer => {
        observer.error({ message: "Please upload licence", status: 0 });
        observer.complete();
      });
    } else {
      return new Observable(observer => {
        this.webservice
          .callAPI(CONFIG.API_UPLOAD_DOCUMENTS_URL, documentData, [])
          .subscribe(
            (res: any) => {
              if (res.status) {
              }
              observer.next(res);
              observer.complete();
            },
            err => {
              observer.error(err);
              observer.complete();
            }
          );
      });
    }
  }

  /**
   * Send Otp
   */
  SendOtp(data: any) {
    if (data.email === null) {
      return new Observable(observer => {
        observer.error({
          message: "Please fill all required fields.",
          status: 0
        });
        observer.complete();
      });
    } else {
      return new Observable(observer => {
        this.webservice.callAPI(CONFIG.API_SENDOTP_URL, data, []).subscribe(
          (res: any) => {
            observer.next(res);
            observer.complete();
          },
          err => {
            observer.error(err);
            observer.complete();
          }
        );
      });
    }
  }


 

  public SetAvatar(data: any, params?: any) {
    if (data.question_id === null) {
        return new Observable(observer => {
            observer.error({
                message: "Please Select Avatar",
                status: 0
            });
            observer.complete();
        });
    } else {
        return new Observable(observer => {
            this.webservice
                .callAPI(CONFIG.API_UPDATE_PROFILE_PICTURE_URL, data, params)
                .subscribe(
                    (res: any) => {
                        if (res.status) {
                        }
                        observer.next(res);
                        observer.complete();
                    },
                    err => {
                        observer.error(err);
                        observer.complete();
                    }
                );
        });
    }
}

 

  /**
   * Send Otp
   */
  VerifyOtp(data: any) {
    if (data.email === null && data.otp === null) {
      return new Observable(observer => {
        observer.error({
          message: "Please fill all required fields.",
          status: 0
        });
        observer.complete();
      });
    } else {
      return new Observable(observer => {
        this.webservice.callAPI(CONFIG.API_VERIFYOTP_URL, data, []).subscribe(
          (res: any) => {
            observer.next(res);
            observer.complete();
          },
          err => {
            observer.error(err);
            observer.complete();
          }
        );
      });
    }
  }

  /**
   * change password
   */
  ChangePassword(data: any) {
    if (data.identity === null && data.password === null) {
      return new Observable(observer => {
        observer.error({
          message: "Please fill all required fields.",
          status: 0
        });
        observer.complete();
      });
    } else {
      return new Observable(observer => {
        this.webservice
          .callAPI(CONFIG.API_CHANGEPASSWORD_URL, data, [])
          .subscribe(
            (res: any) => {
              observer.next(res);
              observer.complete();
            },
            err => {
              observer.error(err);
              observer.complete();
            }
          );
      });
    }
  }

  /**
   * change password
   */
  resetPassword(data: any) {
    if (data.email === null && data.password === null) {
      return new Observable(observer => {
        observer.error({
          message: "Please fill all required fields.",
          status: 0
        });
        observer.complete();
      });
    } else {
      return new Observable(observer => {
        this.webservice
          .callAPI(CONFIG.API_RESET_PASSWORD_URL, data, [])
          .subscribe(
            (res: any) => {
              observer.next(res);
              observer.complete();
            },
            err => {
              observer.error(err);
              observer.complete();
            }
          );
      });
    }
  }
  
}
