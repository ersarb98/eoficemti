import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController, LoadingController, AlertController, ModalController } from 'ionic-angular';
import { DatePicker } from '@ionic-native/date-picker';
import { Platform } from 'ionic-angular';
import { DatePipe } from '@angular/common';
import { SoapService } from '../soap.service';
import { api_base_url, api_user, api_pass, oneSignalAppId, sender_id } from '../../config';
import { Storage } from '@ionic/storage';
import { OneSignal } from '@ionic-native/onesignal';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

/**
 * Generated class for the AddNotaRestitusiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-nota-restitusi',
  providers: [SoapService],
  templateUrl: 'add-nota-restitusi.html', 
})
export class AddNotaRestitusiPage {
  dataPasien:any;

  tglNota: any;
  namaPasien: any;
  statusKeluarga: any;
  biayaDokter: any;
  biayaObat: any;
  biayaTindakan: any;
  biayaPerawatan: any;
  biayaAdministrasi: any;
  biayaKacamata: any;
  biayaLain: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    private datePicker: DatePicker,
    public platform: Platform,
    public datePipe: DatePipe,
    public toastCtrl: ToastController,
    public soapService: SoapService,
    public storage: Storage,
    public loadingCtrl: LoadingController,
    public oneSignal: OneSignal,
    public alertCtrl: AlertController,
    public modalCtrl: ModalController
  ) {
    this.dataPasien = navParams.get('dataPasien');
    if (this.dataPasien != '') {
      this.tglNota = this.dataPasien['tglNota']
      this.namaPasien = this.dataPasien['namaPasien']
      this.statusKeluarga= this.dataPasien['statusKeluarga']
      this.biayaDokter= this.dataPasien['biayaDokter']
      this.biayaObat= this.dataPasien['biayaObat']
      this.biayaTindakan= this.dataPasien['biayaTindakan']
      this.biayaPerawatan= this.dataPasien['biayaPerawatan']
      this.biayaAdministrasi= this.dataPasien['biayaAdministrasi']
      this.biayaKacamata= this.dataPasien['biayaKacamata']
      this.biayaLain= this.dataPasien['biayaLain']
    }

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddNotaRestitusiPage');
  }

  showDatePicker() {
    this.datePicker.show({
      date: new Date(),
      mode: 'date',
      minDate: this.platform.is('ios') ? new Date() : (new Date()).valueOf(),
      androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_LIGHT
    }).then(date => {
      this.tglNota = this.datePipe.transform(date, 'dd/MM/yyyy');
    },
      err => console.log('Error occurred while getting date: ', err)
    );
  }

  submit() {
    var data = {
      tglNota : this.tglNota,
      namaPasien : this.namaPasien,
      statusKeluarga : this.statusKeluarga,
      biayaDokter: this.biayaDokter,
      biayaObat: this.biayaObat,
      biayaTindakan: this.biayaTindakan,
      biayaPerawatan: this.biayaPerawatan,
      biayaAdministrasi: this.biayaAdministrasi,
      biayaKacamata: this.biayaKacamata,
      biayaLain: this.biayaLain
    }

    this.viewCtrl.dismiss({
      'data' : data
    });


  }

  cancel() {
    this.viewCtrl.dismiss({
      'data' : null
    });
  }

}
