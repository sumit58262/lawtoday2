import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { NavController, NavParams } from 'ionic-angular';
// import { QuizPage } from '../quiz/quiz';
import { MessagesServiceProvider } from '../../services/messages.service';
import { BookmarkServiceProvider } from '../../services/bookmark.service';
import { BookmarkPlayPage } from '../bookmark-play/bookmark-play';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-bookmark',
  templateUrl: 'bookmark.html',
})
export class BookmarkPage {
  bookmarkData: any = [];
  hideMe;
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private storage: Storage,
    public messages: MessagesServiceProvider,
    public bookmarkService: BookmarkServiceProvider) {
  }

  ionViewDidLoad() {
  }

  ionViewWillEnter() {
    this.getBookmarkData();
  }

  remove_linebreaks(str) {
    return str.replace(/\\r\\n/g, "");
  }

  getBookmarkData() {
    this.messages.showLoader();
    this.bookmarkService.getBookmarks().subscribe(
      (response: any) => {
        this.messages.hideLoader();
        if (!response.error) {
          this.bookmarkData = response;
        }
      },
      err => {
        if(err.status == 401){
          if (
            this.storage.remove("userInfo") ||
            this.storage.remove("name") ||
            this.storage.remove("email") ||
            this.storage.remove("role")
          ) {
            this.storage.remove("userInfo");
            this.storage.remove("name");
            this.storage.remove("email");
            this.storage.remove("role");
            this.storage.remove("isSubscribed");
          }
          this.messages.showToast("Force Logout due to multiple device login.",undefined, "toast-danger");
          this.navCtrl.setRoot(LoginPage);
        }
        this.messages.hideLoader();
      }
    );
  }

  hide() {
   
    if(this.hideMe != true)
    {
      this.hideMe = true;
    }
    else {
      this.hideMe = false;
    }

  }

  deleteBookmarkData(val) {
    // this.messages.showLoader();
    let data = {
      question_id: val
    }
    this.bookmarkService.AddBookmark(data).subscribe(
      (response: any) => {
        // this.messages.hideLoader();
        if (!response.error) {
          this.messages.showToast("Delete bookmark question successfully", undefined, "toast-success");
          this.getBookmarkData();
        }
      },
      err => {
        // this.messages.hideLoader();
      }
    );
  }

  goToStartFreeTest() {
    this.navCtrl.push(BookmarkPlayPage, { bookmarkQuestions: this.bookmarkData });
  }
}
