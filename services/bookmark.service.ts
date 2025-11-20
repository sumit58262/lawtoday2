import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Storage } from "@ionic/storage";
import 'rxjs/add/operator/map';

import { WebServiceProvider } from './web-service';
import { CONFIG } from '../constants/config';
import { AuthServiceProvider } from './auth-service';

@Injectable()
export class BookmarkServiceProvider {

    constructor(private webservice: WebServiceProvider,
        private store: Storage,
        public authServiceProvide: AuthServiceProvider) {
    }

    public AddBookmark(data: any, params?: any) {
        if (data.question_id === null) {
            return new Observable(observer => {
                observer.error({
                    message: "question id is missing",
                    status: 0
                });
                observer.complete();
            });
        } else {
            return new Observable(observer => {
                this.webservice
                    .callAPI(CONFIG.API_ADD_BOOKMARKS_URL, data, params)
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

    public AddReport(data: any, params?: any) {
        if (data.question_id === null && data.message === null) {
            return new Observable(observer => {
                observer.error({
                    message: "question id is missing",
                    status: 0
                });
                observer.complete();
            });
        } else {
            return new Observable(observer => {
                this.webservice
                    .callAPI(CONFIG.API_ADD_REPORT_URL, data, params)
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
    public getBookmarks(params: any = '') {
        return new Observable((observer) => {
            this.store.get("userInfo").then((val) => {
                if (val) {
                    WebServiceProvider.headers['Authorization'] = 'Bearer ' + val.token;
                    this.webservice.callAPI(CONFIG.API_GET_BOOKMARKS_URL, {}, params)
                        .subscribe((res: any) => {
                            observer.next(res);
                            observer.complete();
                        },
                            (err) => {
                                observer.error(err);
                                observer.complete();
                            });
                }
            });
        });
    }



 /**
   * Send Email Otp
   */
  SendemailOtp(params: any = '') {
    return new Observable((observer) => {
      this.store.get("userInfo").then((val) => {
          if (val) {
              WebServiceProvider.headers['Authorization'] = 'Bearer ' + val.token;
              this.webservice.callAPI(CONFIG.API_SENDEMAILOTP_URL, {}, [])
                  .subscribe((res: any) => {
                      observer.next(res);
                      observer.complete();
                  },
                      (err) => {
                          observer.error(err);
                          observer.complete();
                      });
          }
      });
  });
}


VerifyemailOtp(data: any) {
    if (data.otp === null) {
      return new Observable(observer => {
        observer.error({
          message: "Please fill all required fields.",
          status: 0
        });
        observer.complete();
      });
    } else {
      return new Observable(observer => {
        this.webservice.callAPI(CONFIG.API_VERIFYEMAILOTP_URL, data, []).subscribe(
          (res: any) => {
          //  console.log(res)
            observer.next(res);
            observer.complete();
          },
          err => {
        //    console.log(err)
            observer.error(err);
            observer.complete();
         
          }
        );
      });
    }
  }


    public getNotifications(params: any = '') {
        return new Observable((observer) => {
            this.store.get("userInfo").then((val) => {
                if (val) {
                    WebServiceProvider.headers['Authorization'] = 'Bearer ' + val.token;
                    this.webservice.callAPI(CONFIG.API_NOTIFICATIONS_URL, {}, params)
                        .subscribe((res: any) => {
                            observer.next(res);
                            observer.complete();
                        },
                            (err) => {
                                observer.error(err);
                                observer.complete();
                            });
                }
            });
        });
    }

    public getNotificationDetail(params: any = '') {
        return new Observable((observer) => {
            this.store.get("userInfo").then((val) => {
                if (val) {
                    WebServiceProvider.headers['Authorization'] = 'Bearer ' + val.token;
                    this.webservice.callAPI(CONFIG.API_NOTIFICATION_DETAIL_URL, {}, params)
                        .subscribe((res: any) => {
                            observer.next(res);
                            observer.complete();
                        },
                            (err) => {
                                observer.error(err);
                                observer.complete();
                            });
                }
            });
        });
    }

    public getCaselaws(params: any = '') {
        return new Observable((observer) => {
            this.store.get("userInfo").then((val) => {
                if (val) {
                    WebServiceProvider.headers['Authorization'] = 'Bearer ' + val.token;
                    this.webservice.callAPI(CONFIG.API_CASELAWS_URL, {}, params)
                        .subscribe((res: any) => {
                            observer.next(res);
                            observer.complete();
                        },
                            (err) => {
                                observer.error(err);
                                observer.complete();
                            });
                }
            });
        });
    }


}
