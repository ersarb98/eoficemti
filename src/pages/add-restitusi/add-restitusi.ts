import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController, LoadingController, AlertController, ModalController } from 'ionic-angular';
import { DatePicker } from '@ionic-native/date-picker';
import { Platform } from 'ionic-angular';
import { DatePipe } from '@angular/common';
import { SoapService } from '../soap.service';
import { api_base_url, api_user, api_pass, oneSignalAppId, sender_id } from '../../config';
import { Storage } from '@ionic/storage';
import { OneSignal } from '@ionic-native/onesignal';

/**
 * Generated class for the AddRestitusiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-restitusi',
  providers: [SoapService],
  templateUrl: 'add-restitusi.html',
})
export class AddRestitusiPage {
  userdataTPK: any;
  tglPengajuan: any;
  jenisRestitusi: any = 'kesehatan';
  jenisRestitusiLama:any;
  dataList = []


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
    oneSignal.startInit(oneSignalAppId, sender_id);
    oneSignal.endInit();

    this.tglPengajuan = new Date();
    this.tglPengajuan = this.datePipe.transform(this.tglPengajuan, 'dd/MM/yyyy');

    this.storage.get('userdataTPK').then(val => {
      this.userdataTPK = val;
    });

  }

  cancel() {
    this.viewCtrl.dismiss();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddRestitusiPage');
  }

  addNota(param, index) {
    //console.log(index);
    let modal = this.modalCtrl.create("AddNotaRestitusiPage", {
      dataPasien: param
    }, {
      enableBackdropDismiss: true,
      showBackdrop: true,
      // cssClass:'my-modal2' 
    });
    modal.present();

    modal.onDidDismiss(res => {
      //console.log(res);
      if (res['data'] != null) {
        if (index == null) {
          //console.log('tambah baru');
          this.dataList.push({
            tglNota: res['data']['tglNota'],
            namaPasien: res['data']['namaPasien'],
            statusKeluarga: res['data']['statusKeluarga'],
            biayaDokter: res['data']['biayaDokter'],
            biayaObat: res['data']['biayaObat'],
            biayaTindakan: res['data']['biayaTindakan'],
            biayaPerawatan: res['data']['biayaPerawatan'],
            biayaAdministrasi: res['data']['biayaAdministrasi'],
            biayaKacamata: res['data']['biayaKacamata'],
            biayaLain: res['data']['biayaLain']
          });
        } else {
          //console.log('edit');
          this.dataList[index]['tglNota'] = res['data']['tglNota'],
            this.dataList[index]['namaPasien'] = res['data']['namaPasien'],
            this.dataList[index]['statusKeluarga'] = res['data']['statusKeluarga'],
            this.dataList[index]['biayaDokter'] = res['data']['biayaDokter'],
            this.dataList[index]['biayaObat'] = res['data']['biayaObat'],
            this.dataList[index]['biayaTindakan'] = res['data']['biayaTindakan'],
            this.dataList[index]['biayaPerawatan'] = res['data']['biayaPerawatan'],
            this.dataList[index]['biayaAdministrasi'] = res['data']['biayaAdministrasi'],
            this.dataList[index]['biayaKacamata'] = res['data']['biayaKacamata'],
            this.dataList[index]['biayaLain'] = res['data']['biayaLain']
        }
      }
      //console.log(this.dataList);
    });
  }

  delete(index) {  
    this.presentConfirm('del','Apakah anda yakin ingin menghapus nota ini ?',index);
  }

  presentConfirm(type, msg, index) {
    let alert = this.alertCtrl.create({
      subTitle: msg,
      cssClass: 'alert',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            //console.log('Cancel clicked');
            if (type == 'clean') {              
              if (this.jenisRestitusiLama == 'kesehatan') {
                this.jenisRestitusi = 'kacamata';
              } else if (this.jenisRestitusiLama == 'kacamata') {
                this.jenisRestitusi = 'kesehatan';
              }
            }            
          }
        },
        {
          text: 'Ya',
          handler: () => {
            //console.log('Buy clicked');
            if (type == 'clean') {
              this.dataList = [];
            }
            if (type == 'del') {
              this.dataList.splice(index, 1);
            }
          }
        }
      ]
    });
    alert.present();
  }

  onChangeJenis(event) {

    // console.log(event);
    // this.jenisRestitusiLama = this.jenisRestitusi;
    // if (this.dataList.length > 0) {
    //   this.presentConfirm('clean','Mengganti tipe pengajuan akan menghapus nota yang sudah diinput, apakah anda yakin ?','');
    // } 
    this.dataList = [];
  }

}
