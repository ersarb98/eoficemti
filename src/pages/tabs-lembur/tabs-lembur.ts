import { Component } from "@angular/core";
import { IonicPage, NavController, ViewController, NavParams, ToastController, Events } from "ionic-angular";
import { LemburBawahanPage } from "../lembur-bawahan/lembur-bawahan";
import { LemburPage } from "../lembur/lembur";
import { Storage } from "@ionic/storage";

/**
 * Generated class for the TabsLemburPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-tabs-lembur",
  templateUrl: "tabs-lembur.html",
})
export class TabsLemburPage {
  userdataTPK: any;
  lemburPersonalRoot = "LemburPage";
  lemburBawahanRoot = "LemburBawahanPage";
  data: any;
  fromPage: any;
  constructor(public events: Events, public navCtrl: NavController, public viewCtrl: ViewController, public navParams: NavParams, public storage: Storage, public toastCtrl: ToastController) {
    this.data = {
      viewCtrl: this.viewCtrl,
    };
    this.fromPage = navParams.get("modul");

    events.subscribe("badges", (n) => {
      this.fromPage = this.fromPage - n;
    });
  }
}
