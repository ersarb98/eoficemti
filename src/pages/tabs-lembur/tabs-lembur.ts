import { Component } from "@angular/core";
import { IonicPage, NavController, ViewController } from "ionic-angular";
import { LemburBawahanPage } from "../lembur-bawahan/lembur-bawahan";
import { LemburPage } from "../lembur/lembur";

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
  lemburPersonalRoot = "LemburPage";
  lemburBawahanRoot = "LemburBawahanPage";
  data: any;
  constructor(public navCtrl: NavController, public viewCtrl: ViewController) {
    this.data = {
      viewCtrl: this.viewCtrl,
    };
  }
}
