import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";
import { IonicSelectableModule } from 'ionic-selectable';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IonicStepperModule } from 'ionic-stepper';
import { BrMaskerModule } from 'brmasker-ionic-3';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';


import { Network } from "@ionic-native/network";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { IonicStorageModule } from "@ionic/storage";
import { HttpModule } from '@angular/http';
import { HttpClientModule } from "@angular/common/http";
import { SocialSharing } from '@ionic-native/social-sharing';
import { NetworkService } from "../services/network.service";
import { WebServiceProvider } from "../services/web-service";
import { AuthServiceProvider } from "../services/auth-service";
import { MessagesServiceProvider } from "../services/messages.service";
import { AlertServiceProvider } from "../services/alerts.service";
import { AdServiceProvider } from "../services/ad.service";

import { MyApp } from "./app.component";
import { HomePage } from "../pages/home/home";
import { LoginPage } from "../pages/login/login";
import { SettingsPage } from "../pages/settings/settings";
import { SignupPage } from "../pages/signup/signup";
import { ForgotPasswordPage } from "../pages/forgot-password/forgot-password";
import { ChangePasswordPage } from "../pages/change-password/change-password";
import { CategoryTestTypePage } from "../pages/category-test-type/category-test-type";
import { TestPage } from "../pages/test/test";
import { QuizPage } from "../pages/quiz/quiz";
import { ContactPage } from "../pages/contact/contact";
import { AboutPage } from "../pages/about/about";
import { PrivacyPage } from "../pages/privacy/privacy";
import { TermsPage } from "../pages/terms/terms";
import { InstructionsPage } from "../pages/instructions/instructions";
import { ExamNotificationPage } from "../pages/exam-notification/exam-notification";
import { BookmarkPage } from "../pages/bookmark/bookmark";
import { ProfilePage } from "../pages/profile/profile";
import { BookmarkServiceProvider } from "../services/bookmark.service";
import { CategoryServiceProvider } from "../services/category.service";
import { FlashCardPage } from "../pages/flash-card/flash-card";
import { MaximsPage } from "../pages/maxims/maxims";
import { CaselawsPage } from "../pages/caselaws/caselaws";
import { BookmarkPlayPage } from "../pages/bookmark-play/bookmark-play";
import { ReviewTestPage } from "../pages/review-test/review-test";
import { ReportmodalPage } from "../pages/reportmodal/reportmodal";
import { ShowcorrectmodalPage } from "../pages/showcorrectmodal/showcorrectmodal";
import { HistoryPage } from "../pages/history/history";
import { CatgeoryListPage } from "../pages/catgeory-list/catgeory-list";
import { TopicListPage } from "../pages/topic-list/topic-list";
import { GenerateTestModalPage } from "../pages/generate-test-modal/generate-test-modal";
import { GenerateQuizPage } from "../pages/generate-quiz/generate-quiz";
import { GenerateReviewTestPage } from "../pages/generate-review-test/generate-review-test";
import { GenerateTestListPage } from "../pages/generate-test-list/generate-test-list";
import { GenerateCatgeoryListPage } from "../pages/generate-catgeory-list/generate-catgeory-list";
import { GenerateQuestionsPage } from "../pages/generate-questions/generate-questions";
import { ExamNotificationDetailPage } from "../pages/exam-notification-detail/exam-notification-detail";
import { SubscriptionPage } from "../pages/subscription/subscription";
import { LeaderboardPage } from "../pages/leaderboard/leaderboard";
import { QuestionAttemptedModalPage } from "../pages/question-attempted/question-attempted";
import { VerifyemailPage } from "../pages/verifyemail/verifyemail";


@NgModule({
  declarations: [
    MyApp,
    
    HomePage,
    AboutPage,
    LoginPage,
    PrivacyPage,
    TermsPage,
    InstructionsPage,
    ExamNotificationPage,
    SettingsPage,
    ContactPage,
    SignupPage,
    ForgotPasswordPage,
    ChangePasswordPage,
    CategoryTestTypePage,
    VerifyemailPage,
    TestPage,
    QuizPage,
    LeaderboardPage,
    BookmarkPage,
    ProfilePage,
    FlashCardPage,
    MaximsPage,
    CaselawsPage,
    BookmarkPlayPage,
    ReviewTestPage,
    ReportmodalPage,
	 ShowcorrectmodalPage,
    HistoryPage,
    CatgeoryListPage,
    TopicListPage,
    GenerateTestModalPage,
    GenerateQuizPage,
    GenerateReviewTestPage,
    GenerateTestListPage,
    GenerateCatgeoryListPage,
    GenerateQuestionsPage,
    ExamNotificationDetailPage,
    SubscriptionPage,
    QuestionAttemptedModalPage
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    HttpClientModule,
    BrMaskerModule,
    IonicModule.forRoot(MyApp,{
      scrollAssist: true,
      autoFocusAssist: true
    }),
    IonicStorageModule.forRoot({
      name: "lawtoday_db",
      storeName: "lawtoday_db",
      driverOrder: ["indexeddb", "sqlite", "websql"]
    }),
    IonicSelectableModule,
    IonicStepperModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AboutPage,
    PrivacyPage,
    TermsPage,
    InstructionsPage,
    ExamNotificationPage,
    LoginPage,
    SettingsPage,
    ContactPage,
    VerifyemailPage,
    SignupPage,
    ForgotPasswordPage,
    ChangePasswordPage,
    CategoryTestTypePage,
    TestPage,
    QuizPage,
    LeaderboardPage,
    BookmarkPage,
    ProfilePage,
    MaximsPage,
    CaselawsPage,
    FlashCardPage,
    BookmarkPlayPage,
    ReviewTestPage,
    ReportmodalPage,
  	ShowcorrectmodalPage,
    HistoryPage,
    CatgeoryListPage,
    TopicListPage,
    GenerateTestModalPage,
    GenerateQuizPage,
    GenerateReviewTestPage,
    GenerateTestListPage,
    GenerateCatgeoryListPage,
    GenerateQuestionsPage,
    ExamNotificationDetailPage,
    SubscriptionPage,
    QuestionAttemptedModalPage
  ],
  providers: [
    InAppBrowser,
    SocialSharing,
    StatusBar,
    SQLite,
  
    SplashScreen,
    Network,
    NetworkService,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    MessagesServiceProvider,
    AlertServiceProvider,
    AdServiceProvider,
    WebServiceProvider,
    AuthServiceProvider,
    BookmarkServiceProvider,
    CategoryServiceProvider
  ]
})
export class AppModule {}
