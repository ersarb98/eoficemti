import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DatePicker } from "@ionic-native/date-picker";
import { DatePipe } from "@angular/common";

/**
 * Generated class for the CveditEditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cvedit-edit',
  templateUrl: 'cvedit-edit.html',
})
export class CveditEditPage {
  kat: any;
  startDate: any = "";
  endDate: any = "";

  constructor(public navCtrl: NavController, public navParams: NavParams, public datePipe: DatePipe,
    public datePicker: DatePicker,) {
    let kat = navParams.get('kat');
    console.log(kat);
  }

  ionViewDidLoad() {
    this.kat = this.navParams.get('kat');
  }

  showDatePicker(type: number) {
    this.datePicker
      .show({
        date: new Date(),
        mode: "date",
        maxDate: new Date().valueOf(),
        androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_LIGHT,
      })
      .then(
        (date) => {
          if (type == 1) {
            this.startDate = this.datePipe.transform(date, "dd-MM-yyyy");
          } else if (type == 2) {
            this.endDate = this.datePipe.transform(date, "dd-MM-yyyy");
          }
        },
        (err) => console.log("Error occurred while getting date: ", err)
      );
  }
  checkFocus(data) {
    this.showDatePicker(data);
  }

}
