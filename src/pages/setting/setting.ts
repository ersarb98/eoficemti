import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, App, LoadingController, Platform } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { api_user, api_pass, api_base_url } from '../../config';
import { OneSignal } from '@ionic-native/onesignal';
import { SoapService } from '../soap.service';
/**
 * Generated class for the SettingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-setting',
  providers: [SoapService],
  templateUrl: 'setting.html',
})
export class SettingPage {
  userdataTPK: any;
  isLoading: Boolean = true;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public storage: Storage,
    public alertCtrl: AlertController,
    public app: App,
    public oneSignal: OneSignal,
    public soapService: SoapService,
    public loadingCtrl: LoadingController,
    public platform: Platform

  ) {
  }

  ionViewDidEnter() {
    this.isLoading = true;
    // let loading = this.loadingCtrl.create({
    //   spinner: 'dots',
    //   content: "Mohon tunggu...",
    //   cssClass: 'transparent', 
    //   dismissOnPageChange: true
    // });
    // loading.present();
    this.storage.get('userdataTPK').then(val => {      
      this.newSession(val);
    });
  }

  notEmpty(val) {
    if (typeof val != "undefined") {
      return true;
    } else {
      return false;
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingPage');
  }

  newSession(val) {

    this.soapService
      .post(api_base_url, 'eoffice_get_user_data', {
        fStream: JSON.stringify(
          {
            usernameEDI: api_user,
            passwordEDI: api_pass,
            username: val['data']['NIPP'],
          }
        )
      }).then(result => {
        let responData = JSON.parse(String(result));
        if (responData['rcmsg'] == "SUCCESS") {
          if (responData['data']['login_status'] == '404 Not Found') {
          } else if (responData['data'] == undefined) {
          } else if (responData['data']['login_status'] == 'AP NOT ALLOWED') {
          }
          else {
            this.userdataTPK = responData;
            this.storage.set('userdataTPK', responData).then(() => {
            });
          }
        } else {
        }
        // loading.dismiss();
        this.isLoading = false;
      })
      .catch(error => {
        // loading.dismiss();
        this.isLoading = false;
      });
  }

  goToUpdate(type) {
    this.navCtrl.push("UpdateUserdataPage", {
      "updateType": type,
      "userdataTPK": this.userdataTPK
    });
  }

}
