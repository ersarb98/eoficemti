import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DatePicker } from '@ionic-native/date-picker';
import { Storage } from '@ionic/storage';
import { DatePipe } from '@angular/common';

/**
 * Generated class for the SearchTeamAbsenPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search-team-absen',
  templateUrl: 'search-team-absen.html',
})
export class SearchTeamAbsenPage {
  userdataTPK: any;
  tanggal:any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public storage: Storage,
    public datepipe: DatePipe,
    public datePicker: DatePicker
    ) {
      this.storage.get('userdataTPK').then(val => {
        this.userdataTPK = val;        
        console.log(this.userdataTPK);        
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchTeamAbsenPage');
  }


  doSearch() {
    this.navCtrl.push('AbsenTeamHadirkoePage', {
      "idUser": this.userdataTPK['data']['IDUSER'],
      "date": this.tanggal,
      "fromPage": "AbsenActivityPage"
    }).then(() => {
      this.navCtrl.remove(1, 2);
    });
  }

  showDatePicker(type:number) {
    this.datePicker.show({
      date: new Date(),    
      mode: 'date',    
      maxDate: new Date().valueOf(),  
      androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_LIGHT
    }).then(date => {        
          this.tanggal = this.datepipe.transform(date, 'dd-MM-yyyy');         
      },
      err => console.log('Error occurred while getting date: ', err)
    );
  }

}
