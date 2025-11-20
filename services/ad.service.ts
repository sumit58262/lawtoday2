import { Injectable } from '@angular/core';

declare let cordova: any;

@Injectable()
export class AdServiceProvider {
    constructor( ) {
    }

    
    loadinterstitial(){
           console.log('Trying to load ad');
           var AppLovinMAX = cordova.require('cordova-plugin-applovin-max.AppLovinMAX');
           var   SDK_KEY = "sfUxrKWswuTZyoROt4dW0ZvHF0L-HNuo5D53g_B-F_ElMslQyHADTHnS1pzos0VyCrhSkEu7fOwBAfVVpZ2PLw";
           // Disable buttons until SDK is initialized
         //  (<HTMLInputElement> document.getElementById("med_debugger_button")).disabled = true;
         //  (<HTMLInputElement> document.getElementById("bannerAdButton")).disabled = true;
       
       
       
           // 3rd-party plugins are loaded now
           AppLovinMAX.setVerboseLogging(true);
           AppLovinMAX.initialize(SDK_KEY, function (configuration) {
           //    (<HTMLInputElement> document.getElementById("mediationDebuggerButton")).disabled = false;
     
     
           var   INTER_AD_UNIT_ID  = '5d45e033ee55a97d';
           if (AppLovinMAX.isInterstitialReady(INTER_AD_UNIT_ID)) {
             AppLovinMAX.showInterstitial(INTER_AD_UNIT_ID);
             console.log("showing_interstitial")
     
         } else {
           console.log("loading_interstitial")
           AppLovinMAX.loadInterstitial(INTER_AD_UNIT_ID);    }
     
           window.addEventListener('OnInterstitialLoadedEvent', function (adInfo) {
             console.log("loaded_interstitial")
             AppLovinMAX.showInterstitial(INTER_AD_UNIT_ID);
         });
     
         window.addEventListener('OnInterstitialLoadFailedEvent', function (adInfo) {
           console.log("load_failed_interstitial")
     
         });
         window.addEventListener('OnInterstitialClickedEvent', function (adInfo) {});
         window.addEventListener('OnInterstitialDisplayedEvent', function (adInfo) {});
         window.addEventListener('OnInterstitialAdFailedToDisplayEvent', function (adInfo) {
            
         });
         window.addEventListener('OnInterstitialHiddenEvent', function (adInfo) {
            
        });
    });
    }
    


//       loadMrec(){
//           // this.plt.ready().then(() => {
//              console.log('Trying to load ad');
//              var AppLovinMAX = cordova.require('cordova-plugin-applovin-max.AppLovinMAX');
//              var   SDK_KEY = "sfUxrKWswuTZyoROt4dW0ZvHF0L-HNuo5D53g_B-F_ElMslQyHADTHnS1pzos0VyCrhSkEu7fOwBAfVVpZ2PLw";
//              // Disable buttons until SDK is initialized
//            //  (<HTMLInputElement> document.getElementById("med_debugger_button")).disabled = true;
//            //  (<HTMLInputElement> document.getElementById("bannerAdButton")).disabled = true;
//          
//          
//          
//              // 3rd-party plugins are loaded now
//              AppLovinMAX.setVerboseLogging(true);
//              AppLovinMAX.initialize(SDK_KEY, function (configuration) {
//              //    (<HTMLInputElement> document.getElementById("mediationDebuggerButton")).disabled = false;
//        
//        
//          /////MREC AD COde
//         var   MREC_AD_UNIT_ID = '5d45e033ee55a97d';
//
//
//        window.addEventListener('onMRecAdLoadedEvent', function (adInfo) {
//          console.log("MREc_loaded");
//         AppLovinMAX.showMRec(MREC_AD_UNIT_ID);
//     });
//     window.addEventListener('onMRecAdLoadFailedEvent', function (adInfo) {
//       console.log("MREC_load_failed");
//     });
//     window.addEventListener('onMRecAdClickedEvent', function (adInfo) {});
//     window.addEventListener('onMRecAdCollapsedEvent', function (adInfo) {});
//     window.addEventListener('onMRecAdExpandedEvent', function (adInfo) {});
//    
//     // Banners are automatically sized to 320x50 on phones and 728x90 on tablets
//     // You may use the utility method `AppLovinMAX.isTablet()` to help with view sizing adjustments
//     AppLovinMAX.createMRec(MREC_AD_UNIT_ID, AppLovinMAX.AdViewPosition.CENTERED);
//
//     AppLovinMAX.setMRecBackgroundColor(MREC_AD_UNIT_ID, '#000000');
//
//   });
//    
// }

    loadbanner(){
    // this.plt.ready().then(() => {
       console.log('Trying to load ad');
       var AppLovinMAX = cordova.require('cordova-plugin-applovin-max.AppLovinMAX');
       var   SDK_KEY = "sfUxrKWswuTZyoROt4dW0ZvHF0L-HNuo5D53g_B-F_ElMslQyHADTHnS1pzos0VyCrhSkEu7fOwBAfVVpZ2PLw";
       // Disable buttons until SDK is initialized
     //  (<HTMLInputElement> document.getElementById("med_debugger_button")).disabled = true;
     //  (<HTMLInputElement> document.getElementById("bannerAdButton")).disabled = true;
   
   
   
       // 3rd-party plugins are loaded now
       AppLovinMAX.setVerboseLogging(true);
       AppLovinMAX.initialize(SDK_KEY, function (configuration) {
       //    (<HTMLInputElement> document.getElementById("mediationDebuggerButton")).disabled = false;
 
     /// Banner Ad Code
     
         var BANNER_AD_UNIT_ID = '3b324b689e9ed99b';

         window.addEventListener('OnBannerAdLoadedEvent', function (adInfo) {
           console.log("banner_loaded")
           AppLovinMAX.showBanner(BANNER_AD_UNIT_ID);
       });
       window.addEventListener('OnBannerAdLoadFailedEvent', function (adInfo) {
         console.log("banner_load_failed")
      
       });
       window.addEventListener('OnBannerAdClickedEvent', function (adInfo) {
        console.log("banner_clicked")

       });
       window.addEventListener('OnBannerAdCollapsedEvent', function (adInfo) {
        console.log("banner_collapsed")

       });
       window.addEventListener('OnBannerAdExpandedEvent', function (adInfo) {
        console.log("banner_expanded")

       });
      
       // Banners are automatically sized to 320x50 on phones and 728x90 on tablets
       // You may use the utility method `AppLovinMAX.isTablet()` to help with view sizing adjustments
       AppLovinMAX.createBanner(BANNER_AD_UNIT_ID, AppLovinMAX.AdViewPosition.BOTTOM_CENTER);

       // Set background or background color for banners to be fully functional
       // In this case we are setting it to black - PLEASE USE HEX STRINGS ONLY
       AppLovinMAX.setBannerBackgroundColor(BANNER_AD_UNIT_ID, '#000000');

    });
     
  }

    loadrewarded(){
    // this.plt.ready().then(() => {
       console.log('Trying to load ad');
       var AppLovinMAX = cordova.require('cordova-plugin-applovin-max.AppLovinMAX');
       var   SDK_KEY = "sfUxrKWswuTZyoROt4dW0ZvHF0L-HNuo5D53g_B-F_ElMslQyHADTHnS1pzos0VyCrhSkEu7fOwBAfVVpZ2PLw";
       // Disable buttons until SDK is initialized
     //  (<HTMLInputElement> document.getElementById("med_debugger_button")).disabled = true;
     //  (<HTMLInputElement> document.getElementById("bannerAdButton")).disabled = true;
   
   
   
       // 3rd-party plugins are loaded now
       AppLovinMAX.setVerboseLogging(true);
       AppLovinMAX.initialize(SDK_KEY, function (configuration) {
       //    (<HTMLInputElement> document.getElementById("mediationDebuggerButton")).disabled = false;
 
     ////REWARDED AD CODE
     
      var REWARDED_AD_UNIT_ID = 'a83249fd0db19dd3';
      AppLovinMAX.showRewardedAd(REWARDED_AD_UNIT_ID);
      if (AppLovinMAX.isRewardedAdReady(REWARDED_AD_UNIT_ID)) {
        AppLovinMAX.showRewardedAd(REWARDED_AD_UNIT_ID);
      } else {
       AppLovinMAX.loadRewardedAd(REWARDED_AD_UNIT_ID);
      }
      window.addEventListener('OnRewardedAdLoadedEvent', function (adInfo) {
      console.log("rewarded_loaded")
      });
      
      window.addEventListener('OnRewardedAdLoadFailedEvent', function (adInfo) {
        console.log("rewarded_load_failed")
      
      });
      window.addEventListener('OnRewardedAdClickedEvent', function (adInfo) {
        console.log("rewarded_clicked")
      });
      window.addEventListener('OnRewardedAdDisplayedEvent', function (adInfo) {
        console.log("rewarded_displayed")

      });
      window.addEventListener('OnRewardedAdAdFailedToDisplayEvent', function (adInfo) {
      
      });
      window.addEventListener('OnRewardedAdHiddenEvent', function (adInfo) {
        console.log("rewarded_Hidden")

      });
      window.addEventListener('OnRewardedAdReceivedRewardEvent', function (adInfo) {
        console.log("get_reward")
      });
     
      
 
    });
     
}

}