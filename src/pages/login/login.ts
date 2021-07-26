import { Component, ContentChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, LoadingController, AlertController, ToastController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { api_base_url, api_user, api_pass, sender_id, oneSignalAppId, sc_code } from '../../config';
import { SoapService } from '../soap.service';
import { Storage } from '@ionic/storage';
import { OneSignal } from '@ionic-native/onesignal';

// import { api_base_url } from '../../config';
// import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  providers: [SoapService],
  templateUrl: 'login.html',
})
export class LoginPage {
  formLogin: FormGroup;
  public isValid: boolean = true;
  loginDataResponse: any;
  public errorMessage: string;
  public responData: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public platform: Platform,
    public formBuilder: FormBuilder,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public storage: Storage,
    public toastCtrl: ToastController,
    public soapService: SoapService,
    public oneSignal: OneSignal
  ) {
    this.formLogin = formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      swipe: [false, Validators.requiredTrue]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  doLogin() {
    if (!this.formLogin.valid) {
      this.isValid = false;
      this.errorMessage = ' *Username dan Password harus diisi';
    } else {
      let loading = this.loadingCtrl.create({
        spinner: 'dots',
        content: "Mohon Tunggu...",
        cssClass: 'transparent',
        dismissOnPageChange: true
      });
      loading.present();
      this.soapService
        .post(api_base_url, 'eoffice_login', {
          fStream: JSON.stringify(
            {
              usernameEDI: api_user,
              passwordEDI: api_pass,
              username: this.formLogin.controls.username.value,
              password: this.formLogin.controls.password.value
            }
          )
        })
        .then(result => {

          this.responData = JSON.parse(String(result));
          console.log(this.responData);
          if (this.responData['rcmsg'] == "SUCCESS") {

            if (this.responData['data']['login_status'] == '404 Not Found') {
              this.isValid = false;
              this.errorMessage = ' *Username atau Password Salah';
              loading.dismiss();
            } else if (this.responData['data'] == undefined) {
              this.isValid = false;
              this.errorMessage = ' *Username atau Password Salah';
              loading.dismiss();
            } else if (this.responData['data']['login_status'] == 'AP NOT ALLOWED') {
              this.isValid = false;
              this.errorMessage = ' *Login Hanya Untuk Pusat dan Cabang';
              loading.dismiss();
            }
            else {
              this.isValid = true;                          
              this.storage.set('userdataTPK', this.responData);

              if (this.platform.is('cordova')) {
                this.registerOneSignal(loading);
                loading.dismiss();
                this.navCtrl.setRoot('Home3Page');
              } else {
                loading.dismiss();
                this.navCtrl.setRoot('Home3Page');
              }
            }
          } else if (this.responData['rcmsg'] == "User not found") {
            this.isValid = false;
            this.errorMessage = ' *Username Anda Tidak Terdaftar di IVO';
            loading.dismiss();
          } else {
            this.isValid = false;
            this.errorMessage = ' *Username atau Password Salah';
            loading.dismiss();
          }
        })
        .catch(error => {
          this.isValid = false;
          this.errorMessage = ' *Login Gagal, Periksa Koneksi Internet Anda';
          loading.dismiss();
        });
    }
  }

  registerOneSignal(loading) {
    this.oneSignal.startInit(oneSignalAppId, sender_id);

    var notificationOpenedCallback = function (jsonData) {
    };

    this.oneSignal.getIds().then((id) => {
      this.soapService
        .post(api_base_url, 'eoffice_regis_notif_user', {
          fStream: JSON.stringify(
            {
              id_user: this.responData['data']['IDUSER'],
              nipp: this.responData['data']['NIPP'],
              player_ids: id.userId,
              usernameEDI: api_user,
              passwordEDI: api_pass
            }
          )
        }).then(result => {
          this.responData = JSON.parse(String(result));
          loading.dismiss();
          this.navCtrl.setRoot('Home3Page');

        }).catch(error => {
          this.errorMessage = ' *Login Gagal, Silahkan Coba Kembali.';
          loading.dismiss();
        });
    });
    this.oneSignal.endInit();
  }

  disableButton() {
    if (this.formLogin.valid == false) {
      return true;
    } else {
      return false;
    }
  }


}
