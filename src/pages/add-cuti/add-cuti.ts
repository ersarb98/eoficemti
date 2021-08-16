import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController, LoadingController, AlertController } from 'ionic-angular';
import { DatePicker } from '@ionic-native/date-picker';
import { Platform } from 'ionic-angular';
import { DatePipe } from '@angular/common';
import { SoapService } from '../soap.service';
import { api_base_url, api_user, api_pass, oneSignalAppId, sender_id } from '../../config';
import { Storage } from '@ionic/storage';
// import { dashCaseToCamelCase } from '@angular/compiler/src/util';
import { OneSignal } from '@ionic-native/onesignal';

/**
 * Generated class for the AddCutiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-cuti',
  providers: [SoapService],
  templateUrl: 'add-cuti.html',
})
export class AddCutiPage {
  userdataTPK: any;
  jenisPengajuan: any = '';
  tanggalMulai: any = '';
  jamMulai: any = '23';
  jamSelesai: any = '23';
  tanggalSelesai: any = '';
  alamat: any = '';
  alasan: any = '';
  errorMsg: any = '';
  jumHari:any = 0;
  jenisPengajuanList = [];
  selectValue:any = '';


  startTglSelesai: any;

  firstDate: any;
  secondDate: any;
  disable: Boolean = false;

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
    public alertCtrl: AlertController
  ) {
    oneSignal.startInit(oneSignalAppId, sender_id);
    oneSignal.endInit();

    this.storage.get('userdataTPK').then(val => {      
      this.userdataTPK = val;
    });

    this.getJenisCuti();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddCutiPage');
  }

  cancel() {
    this.viewCtrl.dismiss();
  }

  getJenisCuti() {
    let loading = this.loadingCtrl.create({
      spinner: 'dots',
      content: "Mengambil Data Jenis Cuti...",
      cssClass: 'transparent',
      dismissOnPageChange: true
    });
    loading.present();
    this.soapService
      .post(api_base_url, 'eoffice_jenis_cuti', {
        fStream: JSON.stringify(
          {
            usernameEDI: api_user,
            passwordEDI: api_pass,     
          }
        )
      })
      .then(result => {
        let responData = JSON.parse(String(result));        
        console.log(responData);
        if (responData['rcmsg'] == "SUCCESS") {
          this.jenisPengajuanList = responData['data'];
          loading.dismiss();          

        } else {
          let toast = this.toastCtrl.create({
            message: responData['rcmsg'],
            duration: 3000,
            position: 'bottom'
          });
          toast.present();
          loading.dismiss();
        }

      })
      .catch(error => {
        let toast = this.toastCtrl.create({
          message: 'Gagal mendapatkan hari, silahkan periksa koneksi internet anda.',
          duration: 3000,
          position: 'bottom'
        });
        toast.present();
        loading.dismiss();
      });
  }

  showDatePicker(type: number) {

    var myDate = new Date();
    var datePickerOption;
    datePickerOption = {
      date: myDate,
      mode: 'date',        
      androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_LIGHT
    };

    // if (this.jenisPengajuan == 'Cuti Sakit') {
    //   datePickerOption = {
    //     date: myDate,
    //     mode: 'date',        
    //     androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_LIGHT
    //   };
    // } else {
    //   datePickerOption = {
    //     date: myDate,
    //     mode: 'date',
    //     minDate: this.platform.is('ios') ? new Date() : (new Date()).valueOf(),
    //     androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_LIGHT
    //   };
    // }

    if (type == 1) {
      
      this.datePicker.show(datePickerOption).then(date => {
        this.firstDate = date;
        this.tanggalMulai = this.datePipe.transform(date, 'MM/dd/yyyy');
        this.startTglSelesai = date;
      },
        err => console.log('Error occurred while getting date: ', err)
      );
    } else if (type == 2) {
      if (this.tanggalMulai == '') {
        let toast = this.toastCtrl.create({
          message: 'tanggal mulai harus diisi dahulu.',
          duration: 3000,
          position: 'bottom'
        });
        toast.present();
      } else {
        myDate = new Date(this.startTglSelesai);        
        this.datePicker.show({
          date: myDate,
          mode: 'date',
          minDate: this.platform.is('ios') ? myDate : (myDate).valueOf(),
          androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_LIGHT
        }).then(date => {
          this.secondDate = date;
          this.tanggalSelesai = this.datePipe.transform(date, 'MM/dd/yyyy');
          this.getJumHari();
        },
          err => console.log('Error occurred while getting date: ', err)
        );
      }
    }
  }

  checkFocus(data) {
    this.showDatePicker(data);
  }

  getJumHari() {
    let loading = this.loadingCtrl.create({
      spinner: 'dots',
      content: "Mengambil Data Cuti...",
      cssClass: 'transparent',
      dismissOnPageChange: true
    });
    loading.present();
    this.soapService
      .post(api_base_url, 'eoffice_cuti_jumlah', {
        fStream: JSON.stringify(
          {
            usernameEDI: api_user,
            passwordEDI: api_pass,
            id_user: this.userdataTPK['data']['IDUSER'],            
            tgl_mulai: this.tanggalMulai,
            tgl_selesai: this.tanggalSelesai,            
          }
        )
      })
      .then(result => {
        let responData = JSON.parse(String(result));        
        //console.log(responData);
        if (responData['rcmsg'] == "SUCCESS") {
          this.jumHari = responData['data']['JUMLAH_HARI'];
          loading.dismiss();          

        } else {
          let toast = this.toastCtrl.create({
            message: responData['rcmsg'],
            duration: 3000,
            position: 'bottom'
          });
          toast.present();
          loading.dismiss();
        }

      })
      .catch(error => {
        let toast = this.toastCtrl.create({
          message: 'Gagal mendapatkan hari, silahkan periksa koneksi internet anda.',
          duration: 3000,
          position: 'bottom'
        });
        toast.present();
        loading.dismiss();
      });
  }

  doInsert() {
    let dataJenisPengajuan = this.jenisPengajuanList.filter(x => x.ID.includes(this.selectValue));
    console.log(dataJenisPengajuan[0]['JN_PENGAJUAN']);
    this.jenisPengajuan = dataJenisPengajuan[0]['JN_PENGAJUAN'];
    let validationForm;
    // if (this.jenisPengajuan == 'Cuti Tahunan') {
    //   validationForm = this.jenisPengajuan == '' || this.tanggalMulai == '' || this.tanggalSelesai == '' || this.jamMulai == '' || this.jamSelesai == '' || this.alamat == '' || this.alasan == '' || this.jumHari == '';
    // } else {
    //   validationForm = this.jenisPengajuan == '' || this.tanggalMulai == '' || this.tanggalSelesai == '' || this.jamMulai == '' || this.jamSelesai == '' || this.alamat == '' || this.alasan == '';
    // }
    validationForm = this.jenisPengajuan == '' || this.tanggalMulai == '' || this.tanggalSelesai == '' || this.jamMulai == '' || this.jamSelesai == '' || this.alamat == '' || this.alasan == '' || this.jumHari == '';

    if (validationForm) {
      this.errorMsg = '*mohon melengkapi seluruh input.';
    } else {    
      let alert = this.alertCtrl.create({
        subTitle: 'Anda yakin ingin mengajukan cuti ?',
        cssClass: 'alert',
        buttons: [
          {
            text: 'TIDAK',
            role: 'cancel',
            handler: () => {
              //console.log('Cancel clicked');
            }
          },
          {
            text: 'YA',
            handler: () => {
              // if (Date.parse(this.tanggalSelesai) <= Date.parse(this.tanggalMulai)) {

              // } else {
              //   let toast = this.toastCtrl.create({
              //     message: 'Tanggal Selesai tidak boleh kurang dari tanggal mulai.',
              //     duration: 3000,
              //     position: 'bottom'
              //   });
              //   toast.present();
              // }
              let loading = this.loadingCtrl.create({
                spinner: 'dots',
                content: "Mengubah Data...",
                cssClass: 'transparent',
                dismissOnPageChange: true
              });
              loading.present();
              this.soapService
                .post(api_base_url, 'eoffice_cuti_new', {
                  fStream: JSON.stringify(
                    {
                      usernameEDI: api_user,
                      passwordEDI: api_pass,
                      id_user: this.userdataTPK['data']['IDUSER'],
                      id_cabang: this.userdataTPK['data']['IDCABANG'],
                      jenis: this.jenisPengajuan,
                      tgl_mulai: this.tanggalMulai,
                      tgl_selesai: this.tanggalSelesai,
                      jam_mulai: this.jamMulai,
                      jam_selesai: this.jamSelesai,
                      alasan: this.alasan,
                      alasan_cuti_penting: this.alasan,
                      lokasi: this.alamat,
                      jumlah: this.jumHari,
                      sisa_cuti: this.userdataTPK['data']['SISA_CUTI']
                    }
                  )
                })
                .then(result => {
                  let responData = JSON.parse(String(result));                  

                  if (responData['rcmsg'] == "SUCCESS") {
                    let toast = this.toastCtrl.create({
                      message: 'Berhasil mengajukan cuti.',
                      duration: 3000,
                      position: 'bottom'
                    });
                    this.pushNotif();
                    toast.present();
                    loading.dismiss();
                    this.cancel();

                  } else {
                    let toast = this.toastCtrl.create({
                      message: responData['rcmsg'],
                      duration: 3000,
                      position: 'bottom'
                    });
                    toast.present();
                    loading.dismiss();
                  }

                })
                .catch(error => {
                  let toast = this.toastCtrl.create({
                    message: 'Input gagal, silahkan periksa koneksi internet anda.',
                    duration: 3000,
                    position: 'bottom'
                  });
                  toast.present();
                  loading.dismiss();
                });
            }
          }
        ]
      });

      if (parseInt(dataJenisPengajuan[0]['MAX_JUM_CUTI']) == 0) {
        if (this.jumHari >= parseInt(dataJenisPengajuan[0]['MIN_JUM_CUTI'])) {
          alert.present();
        } else {
          this.errorMsg = '*' + dataJenisPengajuan[0]['JN_PENGAJUAN'] + " minimal " + dataJenisPengajuan[0]['MIN_JUM_CUTI'] + " hari.";
        }
      } else {
        if (this.jumHari >= parseInt(dataJenisPengajuan[0]['MIN_JUM_CUTI'])  && this.jumHari <= parseInt(dataJenisPengajuan[0]['MAX_JUM_CUTI']) ) {
          alert.present();
        } else {
          this.errorMsg = '*' + dataJenisPengajuan[0]['JN_PENGAJUAN'] + " minimal " + dataJenisPengajuan[0]['MIN_JUM_CUTI'] + " hari dan maksimal " + dataJenisPengajuan[0]['MIN_JUM_CUTI'] + " hari.";
        }
      }
      
      
      // if (this.jenisPengajuan['JN_PENGAJUAN'] == this.jenisPengajuanList[]) {
      //   if (this.jumHari > 0 && this.jumHari <= 2) {
      //     alert.present();
      //   } else {
      //     this.errorMsg = '*' + this.alasan + " maksimal 2 hari";
      //   }
      // } 
      // else if (this.jenisPengajuan == 'Cuti Penting') {
      //   if (this.alasan == 'Keluarga sakit keras atau meninggal dunia' || this.alasan == 'Melangsungkan perkawinan yang pertama') {
      //     if (this.jumHari >= 2  && this.jumHari <= 7) {
      //       alert.present();
      //     } else {
      //       this.errorMsg = '*' + this.alasan + " minimal 2 hari dan maksimal 7 hari";
      //     }
      //   } else if (this.alasan == 'Mengurus harta warisan') {
      //     if (this.jumHari > 0  && this.jumHari <= 7) {
      //       alert.present();
      //     } else {
      //       this.errorMsg = '*' + this.alasan + " maksimal 7 hari";
      //     }
      //   }
      // } 
      // else {
      //   alert.present();
      // }
    }
  }

  pushNotif() {
    this.oneSignal.getIds().then((id) => {      
      this.soapService
        .post(api_base_url, 'eoffice_notif_imove', {
          fStream: JSON.stringify(
            {
              usernameEDI: api_user,
              passwordEDI: api_pass,
              id_user: [this.userdataTPK['data']['ID_USER_ATASAN']],
              data: {
                res: "InboxPage"
              },
              content: {
                "en": "Pengajuan cuti dari " + this.userdataTPK['data']['NAMA'] + " memerlukan persetujuan."
              },
              heading : {
                "en": "Pengajuan Cuti"
              }
            }
          )
        }).then(result => {
          let hasil = JSON.parse(String(result));          
        }).catch(error => {
          //console.log(error);
          this.navCtrl.pop();
        });
    });
  }


}
