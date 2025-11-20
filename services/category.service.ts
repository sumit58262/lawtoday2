import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Storage } from "@ionic/storage";
import 'rxjs/add/operator/map';

import { WebServiceProvider } from './web-service';
import { CONFIG } from '../constants/config';
import { AuthServiceProvider } from './auth-service';

@Injectable()
export class CategoryServiceProvider {

    constructor(private webservice: WebServiceProvider,
        private store: Storage,
        public authServiceProvide: AuthServiceProvider) {
    }
   
   
    public getCategories(params: any = '') {
        return new Observable((observer) => {
            this.store.get("userInfo").then((val) => {
              
                if (val) {
                    
                    WebServiceProvider.headers['Authorization'] = 'Bearer ' + val.token;
                   
                    this.webservice.callAPI(CONFIG.API_GET_CATEGORIES_URL, {}, params)
                        .subscribe((res: any) => {
                            
                            observer.next(res);
                            observer.complete();
                        },
                            (err) => {
                                observer.error(err);
                       //         console.log(err)
                                observer.complete();
                            });
                }
            });
        });
    }

    public getTopics(params: any = '') {
        return new Observable((observer) => {
            this.store.get("userInfo").then((val) => {
                if (val) {
                    WebServiceProvider.headers['Authorization'] = 'Bearer ' + val.token;
                    this.webservice.callAPI(CONFIG.API_GET_TOPICS_URL, {}, params)
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

    
    public generateTest(data:any,params: any = '') {
        return new Observable((observer) => {
            this.store.get("userInfo").then((val) => {
                if (val) {
                    WebServiceProvider.headers['Authorization'] = 'Bearer ' + val.token;
                    this.webservice.callAPI(CONFIG.API_GENERATE_TEST_URL, data, params)
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

    public saveResult(data:any,params: any = '') {
        return new Observable((observer) => {
            this.store.get("userInfo").then((val) => {
                if (val) {
                    WebServiceProvider.headers['Authorization'] = 'Bearer ' + val.token;
                    this.webservice.callAPI(CONFIG.API_SAVE_TEST_RESULT_URL, data, params)
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


    public success(data:any,params: any = '') {
        return new Observable((observer) => {
            this.store.get("userInfo").then((val) => {
                if (val) {
                    WebServiceProvider.headers['Authorization'] = 'Bearer ' + val.token;
                    this.webservice.callAPI(CONFIG.API_PAYMENT_SUCCESS_URL, data, params)
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

    public getscore(params: any = '') {
        return new Observable((observer) => {
            this.store.get("userInfo").then((val) => {
                if (val) {
                    WebServiceProvider.headers['Authorization'] = 'Bearer ' + val.token;
                    this.webservice.callAPI(CONFIG.API_GET_SAVED_SCORE_URL, {}, params)
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

    public saveScore(data:any,params: any = '') {
        return new Observable((observer) => {
            this.store.get("userInfo").then((val) => {
                if (val) {
                    WebServiceProvider.headers['Authorization'] = 'Bearer ' + val.token;
                    this.webservice.callAPI(CONFIG.API_SAVE_TEST_SCORE_URL, data, params)
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

    public saveGenerateTestResult(data:any,params: any) {
        return new Observable((observer) => {
            this.store.get("userInfo").then((val) => {
                if (val) {
                    WebServiceProvider.headers['Authorization'] = 'Bearer ' + val.token;
                    this.webservice.callAPI(CONFIG.API_SAVE_GENERATE_TEST_RESULT_URL, data, params)
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


    public getResult(params: any = '') {
        return new Observable((observer) => {
            this.store.get("userInfo").then((val) => {
                if (val) {
                    WebServiceProvider.headers['Authorization'] = 'Bearer ' + val.token;
                    this.webservice.callAPI(CONFIG.API_GET_TEST_HISTORY_URL, {}, params)
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

    public getGeneratedTestHistory(params: any = '') {
        return new Observable((observer) => {
            this.store.get("userInfo").then((val) => {
                if (val) {
                    WebServiceProvider.headers['Authorization'] = 'Bearer ' + val.token;
                    this.webservice.callAPI(CONFIG.API_GET_GENERATED_TEST_HISTORY_URL, {}, params)
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

    public getGeneratedTestRemove(params: any = '') {
        return new Observable((observer) => {
            this.store.get("userInfo").then((val) => {
                if (val) {
                    WebServiceProvider.headers['Authorization'] = 'Bearer ' + val.token;
                    this.webservice.callAPI(CONFIG.API_GENERATE_TEST_DELETE_URL, {}, params)
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
