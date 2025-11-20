import { Injectable } from "@angular/core";
import {
  ToastController,
  ToastOptions,
  Toast,
  LoadingController,
  LoadingOptions,
  // Events,
  // NavController
} from "ionic-angular";
/*
  Generated class for the MessagesServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

@Injectable()
export class MessagesServiceProvider {
  toast: Toast;
  opts: ToastOptions;
  loader: any;
  CustomloadOpts: LoadingOptions;
  loadOpts: LoadingOptions;
  isLoaderVisible: boolean = false;
  notifId: number = 0;
  static displayLog: boolean = true;
  private static notificationId: number = 0;
  constructor(
    private t: ToastController,
    private loadingController: LoadingController
  ) {
    this.opts = {
      message: "This is a default message.",
      duration: 700,
      position: "top"
    };
    this.loadOpts = {
      content: "Loading...",
      showBackdrop: true
    };

    this.CustomloadOpts = {
      content: "<h2>Updating Question Database.</h2> <Br> Download time will depend on your internet speed. Please Wait...",
      showBackdrop: true
    };

    this.notifId = MessagesServiceProvider.notificationId;
    MessagesServiceProvider.notificationId++;

  }

  showToast(msg: string, callback?: any, cssClass?: string) {
    this.opts.message = msg;
    if (cssClass) {
      this.opts.cssClass = cssClass;
    }
    this.toast = this.t.create(this.opts);
    this.toast.present();
    if (callback) {
      this.toast.onDidDismiss(callback);
    }
  }

  showLoader(msg?: string, callback?: any) {
    if (msg) {
      this.loadOpts.content = msg;
    }
    this.loader = this.loadingController.create(this.loadOpts);
    this.isLoaderVisible = true;
    this.loader.present();
    if (callback) {
      this.loader.onDidDismiss(callback);
    }
  }

  hideLoader() {
    if (this.loader) {
      this.isLoaderVisible = false;
      this.loader.dismissAll();
    }
  }
  showLoaderCustom(msg?: string, callback?: any) {
    if (msg) {
      this.CustomloadOpts.content = msg;
    }
    this.loader = this.loadingController.create(this.CustomloadOpts);
    this.isLoaderVisible = true;
    this.loader.present();
    if (callback) {
      this.loader.onDidDismiss(callback);
    }
  }

  
  /**
   * For development. Displays all the messages in web console if ENV is set to dev.
   * @param args - all the arguments that needs to de displayed in web console.
   */
  public log(...args: any[]) {
    if (MessagesServiceProvider.displayLog) {
      for (var i = 0, arg; (arg = args[i]); i++) {
      }
    }
  }

  /**
   * For displaying local notification on receiving notification from server
   * @param data - data that was sent from server to be used for handling the appropriate action
   * @param success - Optional. Success callback if any.
   * @param error - Optional. Error callback if any.
   */
  showNotification(data: any, success?: any, error?: any) {
    data.id = new Date().getTime();
    data.icon = "res://icon";
    data.trigger = { at: new Date(new Date().getTime() + 3600) };
    delete data.eventName;
  }

  /**
   * For handling notification click
   * @param data - data to be used for appropriate action inside application.
   */
  async handleNotificationClick(data: any, isPush = false) {
    this.log("notification click data = ", data);
    if (isPush == true && !!data) {
      this.viewNotificationPage(data);
    }
  }

  private viewNotificationPage(data) {
    this.log("View button");
  }
}
