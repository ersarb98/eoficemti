import { Component, ViewChild } from "@angular/core";
import { Platform, Nav } from "ionic-angular";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { Storage } from "@ionic/storage";
import { OneSignal } from "@ionic-native/onesignal";
import { oneSignalAppId, sender_id } from "../config";

@Component({
  templateUrl: "app.html",
})
export class MyApp {
  rootPage: any;
  @ViewChild(Nav) nav: Nav;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public storage: Storage, public oneSignal: OneSignal) {
    platform.ready().then(() => {
      if (platform.is("android")) {
        statusBar.styleLightContent();
      } else {
        statusBar.styleDefault();
      }
      splashScreen.hide();

      storage.get("userdataTPK").then((val) => {
        if (val != null) {
          this.rootPage = "Home3Page";

          if (platform.is("cordova")) {
            this.oneSignal.startInit(oneSignalAppId, sender_id);
            this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.Notification);
            this.oneSignal.handleNotificationReceived().subscribe((data) => this.onPushReceived(data));
            this.oneSignal.handleNotificationOpened().subscribe((data) => {
              this.onPushOpened(data);
            });
            this.oneSignal.endInit();
          }
        } else {
          this.rootPage = "LoginPage";
        }
      });
    });
  }

  public onPushReceived(data) {
    //alert('Push recevied:' + JSON.stringify(data));
  }

  public onPushOpened(data) {
    //alert('Push recevied:' + JSON.stringify(data.notification.payload.additionalData));
    if (this.rootPage != "") {
      let state = data.notification.payload.additionalData.res;
      if (state == "IpcContactDetailPage") {
        let val = data.notification.payload.additionalData.data;
        this.nav.push(state, {
          data: val,
        });
      } else if (state == "InboxDetailPage") {
        let val = data.notification.payload.additionalData.nipp;
        // let userdata = data.notification.payload.additionalData.userdata;
        let messageData = data.notification.payload.additionalData.messageData;
        this.nav.push(state, {
          nipp: val,
          //"userdata": userdata,
          messageData: messageData,
        });
      } else if (state == "RencanaKerjaBawahanListPage") {
        let messageData = data.notification.payload.additionalData.p2buser;
        this.nav.push(state, {
          p2buser: messageData,
        });
      } else {
        this.nav.push(state);
      }
    } else {
      let state = data.notification.payload.additionalData.res;
      if (state == "IpcContactDetailPage") {
        let val = data.notification.payload.additionalData.data;
        this.nav.push(state, {
          data: val,
        });
      } else if (state == "InboxDetailPage") {
        let val = data.notification.payload.additionalData.nipp;
        // let userdata = data.notification.payload.additionalData.userdata;
        let messageData = data.notification.payload.additionalData.messageData;
        this.nav.push(state, {
          nipp: val,
          //"userdata": userdata,
          messageData: messageData,
        });
      } else if (state == "RencanaKerjaBawahanListPage") {
        let p2buser = data.notification.payload.additionalData.p2buser;
        this.nav.push(state, {
          p2buser: p2buser,
        });
      } else {
        this.nav.push(state);
      }
    }
  }
}
