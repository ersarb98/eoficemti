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

import { FilePath } from '@ionic-native/file-path';
import { File } from '@ionic-native/file';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { FileChooser } from '@ionic-native/file-chooser';
import { Camera, CameraOptions } from '@ionic-native/camera';

/**
 * Generated class for the AddSppdPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-sppd',
  providers: [SoapService],
  templateUrl: 'add-sppd.html',
})
export class AddSppdPage {
  userdataTPK: any;
  tglPengajuan: any;

  tanggalMulai: any = '';
  tanggalSelesai: any = '';
  startTglSelesai: any;

  lokasi: any = '';
  perihal: any = '';
  lampiran: any = '';
  prioritas: any = '0';
  klasifikasi: any = '0';
  komentar: any = '';


  firstDate: any;
  secondDate: any;

  pemeriksaList: any = [];
  pemeriksaSearchResultList: Array<any> = [];
  pemeriksaInputFocused: any;
  showResult: boolean = false;
  index: any;

  pesertaJabatanList: any = [];
  pesertaJabatanSearchResultList: Array<any> = [];
  pesertaJabatanInputFocused: any;
  pesertaJabatanshowResult: boolean = false;
  pesertaJabatanindex: any;

  pesertaPekerjaList: any = [];
  pesertaPekerjaSearchResultList: Array<any> = [];
  pesertaPekerjaInputFocused: any;
  pesertaPekerjashowResult: boolean = false;
  pesertaPekerjaindex: any;

  pesertaEksternalList: Array<any> = [];

  jabatanPengirim: any;
  pengirim: any;
  searchResultPengirimList: Array<any> = [];
  showResultPengirim: Boolean = false;

  private win: any = window;
  imageURI: any = "";
  imageShow: any = "assets/imgs/logo/camera.png";
  fileDocPath: any;
  fileName: any;
  fileType: any;
  imageFileName: any;


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
    public transfer: FileTransfer,
    public fileChooser: FileChooser,
    public filepath: FilePath,
    public file: File,
    public camera: Camera
  ) {
    oneSignal.startInit(oneSignalAppId, sender_id);
    oneSignal.endInit();   

    this.pemeriksaList.push({ value: '' });
    this.pesertaJabatanList.push({ value: '' });
    this.pesertaPekerjaList.push({ value: '' });
    this.pesertaEksternalList.push({ value: '' });

    this.tglPengajuan = new Date();
    this.tglPengajuan = this.datePipe.transform(this.tglPengajuan, 'dd/MM/yyyy');

    this.storage.get('userdataTPK').then(val => {
      this.userdataTPK = val;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddSppdPage');
  }

  showDatePicker(type: number) {

    var myDate;

    if (type == 1) {
      myDate = new Date();
      this.datePicker.show({
        date: myDate,
        mode: 'date',
        minDate: this.platform.is('ios') ? new Date() : (new Date()).valueOf(),
        androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_LIGHT
      }).then(date => {
        this.firstDate = date;
        this.tanggalMulai = this.datePipe.transform(date, 'dd/MM/yyyy');
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
          minDate: this.platform.is('ios') ? new Date() : (new Date()).valueOf(),
          androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_LIGHT
        }).then(date => {
          this.secondDate = date;
          this.tanggalSelesai = this.datePipe.transform(date, 'dd/MM/yyyy');
        },
          err => console.log('Error occurred while getting date: ', err)
        );
      }
    }
  }

  cancel() {
    this.viewCtrl.dismiss();
  }


  addPemeriksa() {
    //console.log('clicked');
    this.pemeriksaList.push({ value: '' });
  }

  removePemeriksa(i) {
    this.pemeriksaList.splice(i, 1);
  }

  checkFocus(i) {
    this.pemeriksaInputFocused = i;
    //console.log(this.pemeriksaInputFocused);
  }

  getPemeriksa(i, value) {
    if (this.pemeriksaList[i]['value'] == '') {
      this.showResult = false;
    } else {
      this.soapService
        .post(api_base_url, 'eoffice_get_pemeriksa_sppd', {
          fStream: JSON.stringify(
            {
              "usernameEDI": api_user,
              "passwordEDI": api_pass,
              "search": this.pemeriksaList[i]['value'],
              "id_jabatan": this.userdataTPK['data']['IDJABATAN'],
              "id_jab_pengirim": this.pengirim['ID_JABATAN'],
              "atas": "1",
              "bawah": "10"
            }
          )
        }).then(result => {
          var responData = JSON.parse(String(result));

          if (responData['rcmsg'] == "SUCCESS") {
            this.pemeriksaSearchResultList = [];
            this.pemeriksaSearchResultList = responData['data'];
            this.showResult = true;
            //console.log(this.pemeriksaSearchResultList);
          } else {
            let toast = this.toastCtrl.create({
              message: 'Mohon Maaf Sedang Terjadi Kesalahan, Coba Beberapa Saat Lagi.',
              duration: 3000,
              position: 'bottom'
            });
            toast.present();
            this.showResult = false;
          }
        })
        .catch(error => {
          //console.log(error);
          let toast = this.toastCtrl.create({
            message: 'Terjadi Masalah Koneksi, Silahkan Coba Kembali.',
            duration: 3000,
            position: 'bottom'
          });
          toast.present();
          this.showResult = false;
        });
    }
  }

  setPemeriksa(pemeriksaSearchResult, i) {
    this.index = i;
    this.pemeriksaList[this.index]['value'] = pemeriksaSearchResult['NAMA'] + " | " + pemeriksaSearchResult['NM_JABATAN'];
    this.pemeriksaList[this.index]['ID_USER'] = pemeriksaSearchResult['ID_USER'];
    this.pemeriksaList[this.index]['NIPP'] = pemeriksaSearchResult['NIPP'];
    this.pemeriksaList[this.index]['NAMA'] = pemeriksaSearchResult['NAMA']
    this.pemeriksaList[this.index]['NM_JABATAN'] = pemeriksaSearchResult['NM_JABATAN'];
    this.pemeriksaList[this.index]['ID_JABATAN'] = pemeriksaSearchResult['ID_JABATAN'];
    this.pemeriksaList[this.index]['ID_CABANG'] = pemeriksaSearchResult['ID_CABANG'];
    this.pemeriksaList[this.index]['NAMA_CABANG'] = pemeriksaSearchResult['NAMA_CABANG'];
    this.showResult = false;
    //console.log(this.pemeriksaList);
  }


  addPesertaJabatan() {
    //console.log('clicked');
    this.pesertaJabatanList.push({ value: '' });
  }

  removePesertaJabatan(i) {
    this.pesertaJabatanList.splice(i, 1);
  }

  checkFocusPesertaJabatan(i) {
    this.pesertaJabatanInputFocused = i;
    //console.log(this.pesertaJabatanInputFocused);
  }

  getPesertaJabatan(i, value) {
    //console.log(this.pesertaJabatanList[i]['value']);
    if (this.pesertaJabatanList[i]['value'] == '') {
      this.pesertaJabatanshowResult = false;
    } else {
      this.soapService
        .post(api_base_url, 'eoffice_get_peserta_sppd', {
          fStream: JSON.stringify(
            {
              "usernameEDI": api_user,
              "passwordEDI": api_pass,
              "search": this.pesertaJabatanList[i]['value'],
              "atas": "1",
              "bawah": "10",
              "id_cabang": this.userdataTPK['data']['IDCABANG'],
              "peserta_type": "jabatan"
            }

          )
        }).then(result => {
          var responData = JSON.parse(String(result));
          //console.log(responData);
          if (responData['rcmsg'] == "SUCCESS") {
            this.pesertaJabatanSearchResultList = [];
            this.pesertaJabatanSearchResultList = responData['data'];
            this.pesertaJabatanshowResult = true;
            //console.log(this.pesertaJabatanSearchResultList);
          } else {
            let toast = this.toastCtrl.create({
              message: 'Mohon Maaf Sedang Terjadi Kesalahan, Coba Beberapa Saat Lagi.',
              duration: 3000,
              position: 'bottom'
            });
            toast.present();
            this.pesertaJabatanshowResult = false;
          }
        })
        .catch(error => {
          //console.log(error);
          let toast = this.toastCtrl.create({
            message: 'Terjadi Masalah Koneksi, Silahkan Coba Kembali.',
            duration: 3000,
            position: 'bottom'
          });
          toast.present();
          this.pesertaJabatanshowResult = false;
        });
    }
  }

  setPesertaJabatan(pesertaJabatanSearchResult, i) {
    this.pesertaJabatanindex = i;
    this.pesertaJabatanList[this.pesertaJabatanindex]['value'] = pesertaJabatanSearchResult['NM_JABATAN'];
    this.pesertaJabatanList[this.pesertaJabatanindex]['ID_USER'] = pesertaJabatanSearchResult['ID_USER'];
    this.pesertaJabatanList[this.pesertaJabatanindex]['NIPP'] = pesertaJabatanSearchResult['NIPP'];
    this.pesertaJabatanList[this.pesertaJabatanindex]['NAMA'] = pesertaJabatanSearchResult['NAMA'];
    this.pesertaJabatanList[this.pesertaJabatanindex]['NM_JABATAN'] = pesertaJabatanSearchResult['NM_JABATAN'];
    this.pesertaJabatanList[this.pesertaJabatanindex]['ID_JABATAN'] = pesertaJabatanSearchResult['ID_JABATAN'];
    this.pesertaJabatanList[this.pesertaJabatanindex]['ID_CABANG'] = pesertaJabatanSearchResult['ID_CABANG'];
    this.pesertaJabatanList[this.pesertaJabatanindex]['KD_PARA'] = pesertaJabatanSearchResult['KD_PARA'];
    this.pesertaJabatanList[this.pesertaJabatanindex]['NAMA_CABANG'] = pesertaJabatanSearchResult['NAMA_CABANG'];
    this.pesertaJabatanshowResult = false;
    //console.log(this.pesertaJabatanList);
  }


  addPesertaPekerja() {
    //console.log('clicked');
    this.pesertaPekerjaList.push({ value: '' });
  }

  removePesertaPekerja(i) {
    this.pesertaPekerjaList.splice(i, 1);
  }

  checkFocusPesertaPekerja(i) {
    this.pesertaPekerjaInputFocused = i;
    //console.log(this.pesertaPekerjaInputFocused);
  }

  getPesertaPekerja(i, value) {
    //console.log(this.pesertaPekerjaList[i]['value']);
    if (this.pesertaPekerjaList[i]['value'] == '') {
      this.pesertaPekerjashowResult = false;
    } else {
      this.soapService
        .post(api_base_url, 'eoffice_get_peserta_sppd', {
          fStream: JSON.stringify(
            {
              "usernameEDI": api_user,
              "passwordEDI": api_pass,
              "search": this.pesertaPekerjaList[i]['value'],
              "atas": "1",
              "bawah": "10",
              "id_cabang": this.userdataTPK['data']['IDCABANG'],
              "peserta_type": "pekerja"
            }

          )
        }).then(result => {
          var responData = JSON.parse(String(result));
          //console.log(responData);
          if (responData['rcmsg'] == "SUCCESS") {
            this.pesertaPekerjaSearchResultList = [];
            this.pesertaPekerjaSearchResultList = responData['data'];
            this.pesertaPekerjashowResult = true;
            //console.log(this.pesertaPekerjaSearchResultList);
          } else {
            let toast = this.toastCtrl.create({
              message: 'Mohon Maaf Sedang Terjadi Kesalahan, Coba Beberapa Saat Lagi.',
              duration: 3000,
              position: 'bottom'
            });
            toast.present();
            this.pesertaPekerjashowResult = false;
          }
        })
        .catch(error => {
          //console.log(error);
          let toast = this.toastCtrl.create({
            message: 'Terjadi Masalah Koneksi, Silahkan Coba Kembali.',
            duration: 3000,
            position: 'bottom'
          });
          toast.present();
          this.pesertaPekerjashowResult = false;
        });
    }
  }

  setPesertaPekerja(pesertaPekerjaSearchResult, i) {
    this.pesertaPekerjaindex = i;
    this.pesertaPekerjaList[this.pesertaPekerjaindex]['value'] = pesertaPekerjaSearchResult['NM_JABATAN'] + " | " + pesertaPekerjaSearchResult['NM_JABATAN'];
    this.pesertaPekerjaList[this.pesertaPekerjaindex]['ID_USER'] = pesertaPekerjaSearchResult['ID_USER'];
    this.pesertaPekerjaList[this.pesertaPekerjaindex]['NIPP'] = pesertaPekerjaSearchResult['NIPP'];
    this.pesertaPekerjaList[this.pesertaPekerjaindex]['NAMA'] = pesertaPekerjaSearchResult['NAMA'];
    this.pesertaPekerjaList[this.pesertaPekerjaindex]['NM_JABATAN'] = pesertaPekerjaSearchResult['NM_JABATAN'];
    this.pesertaPekerjaList[this.pesertaPekerjaindex]['ID_JABATAN'] = pesertaPekerjaSearchResult['ID_JABATAN'];
    this.pesertaPekerjaList[this.pesertaPekerjaindex]['ID_CABANG'] = pesertaPekerjaSearchResult['ID_CABANG'];
    this.pesertaPekerjaList[this.pesertaPekerjaindex]['KD_PARA'] = pesertaPekerjaSearchResult['KD_PARA'];
    this.pesertaPekerjaList[this.pesertaPekerjaindex]['NAMA_CABANG'] = pesertaPekerjaSearchResult['NAMA_CABANG'];
    this.pesertaPekerjashowResult = false;
    //console.log(this.pesertaPekerjaList);
  }

  addPesertaEksternal() {
    //console.log('clicked');
    this.pesertaEksternalList.push({ value: '' });
  }

  removePesertaEksternal(i) {
    this.pesertaEksternalList.splice(i, 1);
  }


  getPengirim() {
    if (this.jabatanPengirim == '') {
      this.showResultPengirim = false;
    } else {
      this.soapService
        .post(api_base_url, 'eoffice_get_pengirim_sppd', {
          fStream: JSON.stringify(
            {
              "usernameEDI": api_user,
              "passwordEDI": api_pass,
              "search": this.jabatanPengirim,
              "id_jabatan": this.userdataTPK['data']['IDJABATAN'],
              "atas": "1",
              "bawah": "10"
            }
          )
        }).then(result => {
          var responData = JSON.parse(String(result));
          //console.log(responData);

          if (responData['rcmsg'] == "SUCCESS") {
            this.searchResultPengirimList = [];
            this.searchResultPengirimList = responData['data'];
            this.showResultPengirim = true;
          } else {
            let toast = this.toastCtrl.create({
              message: 'Mohon Maaf Sedang Terjadi Kesalahan, Coba Beberapa Saat Lagi.',
              duration: 3000,
              position: 'bottom'
            });
            toast.present();
          }
        })
        .catch(error => {
          //console.log(error);
          let toast = this.toastCtrl.create({
            message: 'Terjadi Masalah Koneksi, Silahkan Coba Kembali.',
            duration: 3000,
            position: 'bottom'
          });
          toast.present();
          this.showResultPengirim = false;
        });
    }
  }

  setPengirim(data) {
    this.pengirim = data;
    this.jabatanPengirim = data['NM_JABATAN'];
    // console.log(this.jabatanPengirim);
    // console.log(this.pengirim);
    this.showResultPengirim = false;
  }

  submit() {
    var err = [];
    if (this.pengirim == null) {
      err.push("Pengirim");
    }
    if (this.tanggalMulai == '' || this.tanggalMulai == null) {
      err.push("Tanggal Mulai");
    }
    if (this.tanggalSelesai == '' || this.tanggalSelesai == null) {
      err.push("Tanggal Selesai");
    }
    if (this.lokasi == '' || this.lokasi == null) {
      err.push("Lokasi");
    }
    if (this.perihal == '' || this.perihal == null) {
      err.push("Perihal");
    }
    // if (this.lampiran == '' || this.lampiran == null) {
    //   err.push("Lampiran");
    // }
    if (this.prioritas == '' || this.prioritas == null) {
      err.push("Prioritas");
    }
    if (this.klasifikasi == '' || this.klasifikasi == null) {
      err.push("Klasifikasi");
    }
    if (this.komentar == '' || this.komentar == null) {
      err.push("Komentar");
    }

    if (this.pemeriksaList.length > 1) {
      for (var i = 0; i < this.pemeriksaList.length; i++) {
        if (this.pemeriksaList[i]['value'] == '') {
          err.push('Pemeriksa');
          break;
        }
      }
    }

    if ((this.pesertaJabatanList.length == 1 && this.pesertaJabatanList[0]['value'] == '') && (this.pesertaPekerjaList.length == 1 && this.pesertaPekerjaList[0]['value'] == '') && (this.pesertaEksternalList.length == 1 && this.pesertaEksternalList[0]['value'] == '')) {
      err.push('Peserta SPPD');
    } else {
      if (this.pesertaJabatanList.length > 1) {
        for (var i = 0; i < this.pesertaJabatanList.length; i++) {
          if (this.pesertaJabatanList[i]['value'] == '') {
            err.push('Peserta Jabatan');
            break;
          }
        }
      }

      if (this.pesertaJabatanList.length > 1) {
        for (var i = 0; i < this.pesertaPekerjaList.length; i++) {
          if (this.pesertaPekerjaList[i]['value'] == '') {
            err.push('Peserta Pekerja');
            break;
          }
        }
      }

      if (this.pesertaJabatanList.length > 1) {
        for (var i = 0; i < this.pesertaEksternalList.length; i++) {
          if (this.pesertaEksternalList[i]['value'] == '') {
            err.push('Peserta Jabatan');
            break;
          }
        }
      }
    }

    var showErr = '';

    for (var i = 0; i < err.length; i++) {
      if (i == err.length - 1) {
        showErr = showErr + err[i];
      } else {
        showErr = showErr + err[i] + ', ';
      }
    }

    if (err.length > 0) {
      let alertError = this.alertCtrl.create({
        title: 'Peringatan',
        subTitle: 'Field ' + showErr + ' tidak boleh kosong !',
        cssClass: 'alert',
        buttons: [
          {
            text: 'TUTUP',
            role: 'cancel',
            handler: () => {
              //console.log('Cancel clicked');
            }
          }
        ]
      });
      alertError.present();
    } else {
      var eksternal = [];
      if (this.pesertaPekerjaList[0]['value'] != '') {
        for (var i = 0; i < this.pesertaEksternalList.length; i++) {
          eksternal.push(this.pesertaEksternalList[i]['value']);
        }
      }
      
      let alert = this.alertCtrl.create({
        subTitle: 'Anda yakin ingin mengajukan SPPD ?',
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

              let loading = this.loadingCtrl.create({
                spinner: 'dots',
                content: "Mengirim pengajuan SPPD, mohon tunggu...",
                cssClass: 'transparent',
                dismissOnPageChange: true
              });
              loading.present();
              this.soapService
                .post(api_base_url, 'eoffice_add_sppd', {
                  fStream: JSON.stringify(
                    {
                      "usernameEDI": api_user,
                      "passwordEDI": api_pass,
                      "nipp_pembuat": this.userdataTPK['data']['NIPP'],
                      "nama_pembuat": this.userdataTPK['data']['NAMA'],
                      "id_pembuat": this.userdataTPK['data']['IDUSER'],
                      "tgl_surat": this.tglPengajuan,
                      "tgl_mulai": this.tanggalMulai,
                      "tgl_selesai": this.tanggalSelesai,
                      "lokasi": this.lokasi,
                      "perihal": this.perihal,
                      "lampiran": this.lampiran,
                      "prioritas": this.prioritas,
                      "klasifikasi": this.klasifikasi,
                      "komentar": this.komentar,
                      "pengirim": this.pengirim,
                      "pemeriksa": (this.pemeriksaList[0]['value'] != '') ? this.pemeriksaList : [],
                      "peserta_jabatan": (this.pesertaJabatanList[0]['value'] != '') ? this.pesertaJabatanList : [],
                      "peserta_pekerja": (this.pesertaPekerjaList[0]['value'] != '') ? this.pesertaPekerjaList : [],
                      "peserta_eksternal": eksternal
                    }
                  )
                })
                .then(result => {
                  let responData = JSON.parse(String(result));
                  //console.log(responData);

                  if (responData['rcmsg'] == "SUCCESS") {
                    if (this.fileType != null) {
                      if ((this.imageURI != '') || (this.fileName != null)) {
                        this.upload(responData['data']['ID_SURAT'], loading);
                      } else {
                        let toast = this.toastCtrl.create({
                          message: 'Pengajuan SPPD Berhasil.',
                          duration: 3000,
                          position: 'bottom'
                        });
                        this.pushNotif();
                        toast.present();
                        loading.dismiss();
                        this.viewCtrl.dismiss({ isSuccess: true });
                      }
                    } else {
                      let toast = this.toastCtrl.create({
                        message: 'Pengajuan SPPD Berhasil.',
                        duration: 3000,
                        position: 'bottom'
                      });
                      this.pushNotif();
                      toast.present();
                      loading.dismiss();
                      this.viewCtrl.dismiss({ isSuccess: true });
                    }

                  } else {
                    let toast = this.toastCtrl.create({
                      message: "Gagal mengajukan SPPD, silahkan coba kembali.",
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
      alert.present();
    }
  }

  openChooser() {
    this.fileChooser.open()
      .then(uri => {
        // console.log(uri);
        this.fileDocPath = uri;
        this.fileName = uri.substr(uri.lastIndexOf('/') + 1);
        this.fileName = this.fileName.substr(10);
        this.fileName = this.fileName.replace(/%20/g, " ");
        // console.log(this.fileName);
      })
      .catch(e => {
        // console.log(e)
      });
  }

  takeImage(sourceType: number) {
    let mType = this.camera.MediaType.PICTURE;
    // console.log(mType);

    var options = {
      quality: 100,
      mediaType: mType,
      sourceType: sourceType,
      saveToPhotoAlbum: false,
      correctOrientation: true
    };

    this.camera.getPicture(options).then((imageData) => {
      let URI;
      this.imageShow = this.win.Ionic.WebView.convertFileSrc(imageData);
      this.imageURI = imageData;
      URI = this.imageURI;
      if (this.platform.is('android') && sourceType === this.camera.PictureSourceType.PHOTOLIBRARY) {
        this.filepath.resolveNativePath(URI)
          .then(filePath => {
            let correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
            let currentName = imageData.substring(imageData.lastIndexOf('/') + 1, imageData.lastIndexOf('?'));
            this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
          });
      } else {
        var currentName = imageData.substr(imageData.lastIndexOf('/') + 1);
        var correctPath = imageData.substr(0, imageData.lastIndexOf('/') + 1);
        this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
      }
      // console.log(URI);
    }, (err) => {
      // console.log(err);
    });
  }

  private copyFileToLocalDir(namePath, currentName, filename) {
    this.file.copyFile(namePath, currentName, this.file.dataDirectory, filename).then(success => {
      this.imageFileName = filename;
      // console.log(this.imageFileName);
    }, error => {
      // console.log('Error while storing file.');
    });
  }

  private createFileName() {
    if (this.fileType == 'gambar') {
      var d = new Date(), n = d.getTime(), newFileName = n + ".jpg";
    } else {
      // console.log('error disini');
    }
    // console.log(newFileName);
    return newFileName;
  }

  public pathForImage(img) {
    if (img === null) {
      return '';
    } else {
      return this.file.dataDirectory + img;
    }
  }

  upload(idSurat, loader) {
    // console.log(this.fileDocPath);
    if (this.fileType == 'file') {
      const fileTransfer: FileTransferObject = this.transfer.create();
      var options = {
        fileKey: "file",
        fileName: this.fileName,
        chunkedMode: false,
        mimeType: "multipart/form-data",
        params: { id_surat: idSurat }
      };

      fileTransfer.upload(
        this.fileDocPath,
        'http://103.234.195.187/e-office-itpk/api_itpk/f116_eoffice_upload_attachment_sppd.php', options)
        .then((data) => {
          // console.log(JSON.stringify(data));
          // console.log(" Uploaded Successfully");    
          if (data['responseCode'] == 200) {
            var responData = JSON.parse(String(data['response']));
            // console.log(responData);

            if (responData['rcmsg'] == 'SUCCESS') {

              let toast = this.toastCtrl.create({
                message: 'Pengajuan SPPD Berhasil.',
                duration: 3000,
                position: 'bottom'
              });
              toast.present();
              loader.dismiss();
              this.viewCtrl.dismiss({ isSuccess: true });
            } else {
              let toast = this.toastCtrl.create({
                message: "Pengajuan SPPD Berhasil, namun file attachment gagal diupload, silahkan hubungi admin.",
                duration: 3000,
                position: 'bottom'
              });
              toast.present();
              loader.dismiss();
              this.viewCtrl.dismiss({ isSuccess: true });
            }
          } else {
            let toast = this.toastCtrl.create({
              message: "Pengajuan SPPD Berhasil, namun file attachment gagal diupload, silahkan hubungi admin.",
              duration: 3000,
              position: 'bottom'
            });
            toast.present();
            loader.dismiss();
            this.viewCtrl.dismiss({ isSuccess: true });
          }

        }, (err) => {
          // console.log("masuk sini");
          // console.log(err);
          let toast = this.toastCtrl.create({
            message: "Pengajuan SPPD Berhasil, namun file attachment gagal diupload, silahkan hubungi admin.",
            duration: 3000,
            position: 'bottom'
          });
          toast.present();
          loader.dismiss();
          this.viewCtrl.dismiss({ isSuccess: true });
          // this.presentToast(err);
        });
    } else if (this.fileType == 'gambar') {
      // console.log(this.imageFileName);
      // console.log("image file path : " + this.pathForImage(this.imageFileName));
      const fileTransfer: FileTransferObject = this.transfer.create();

      var options = {
        fileKey: "file",
        fileName: this.fileName,
        chunkedMode: false,
        mimeType: "multipart/form-data",
        params: { id_surat: idSurat }
      };

      fileTransfer.upload(
        this.pathForImage(this.imageFileName),
        'http://103.234.195.187/e-office-itpk/api_itpk/f116_eoffice_upload_attachment_sppd.php', options)
        .then((data) => {
          if (data['responseCode'] == 200) {

            var responData = JSON.parse(String(data['response']));
            // console.log(responData);

            if (responData['rcmsg'] == 'SUCCESS') {

              let toast = this.toastCtrl.create({
                message: 'Pengajuan SPPD Berhasil.',
                duration: 3000,
                position: 'bottom'
              });
              toast.present();
              loader.dismiss();
              this.viewCtrl.dismiss({ isSuccess: true });
            } else {
              let toast = this.toastCtrl.create({
                message: "Pengajuan SPPD Berhasil, namun file attachment gagal diupload, silahkan hubungi admin.",
                duration: 3000,
                position: 'bottom'
              });
              toast.present();
              loader.dismiss();
              this.viewCtrl.dismiss({ isSuccess: true });
            }
          } else {
            let toast = this.toastCtrl.create({
              message: "Pengajuan SPPD Berhasil, namun file attachment gagal diupload, silahkan hubungi admin.",
              duration: 3000,
              position: 'bottom'
            });
            toast.present();
            loader.dismiss();
            this.viewCtrl.dismiss({ isSuccess: true });
          }
        }, (err) => {
          // console.log("masuk sini");
          // console.log(err);
          let toast = this.toastCtrl.create({
            message: "Pengajuan SPPD Berhasil, namun file attachment gagal diupload, silahkan hubungi admin.",
            duration: 3000,
            position: 'bottom'
          });
          toast.present();
          loader.dismiss();
          this.viewCtrl.dismiss({ isSuccess: true });
        });
    }
  }

  pushNotif() {
    var pemeriksaListFix = [];
    if (this.pemeriksaList.length > 1) {
      for (var i = 0; i < this.pemeriksaList.length; i++) {
        if (this.pemeriksaList[i]['value'] != '') {
          pemeriksaListFix.push(this.pemeriksaList[i]);
        }
      }
    }

    // console.log(pemeriksaListFix);

    var id_user = '';
    if (pemeriksaListFix.length > 0) {
      id_user = pemeriksaListFix['ID_USER'];
    } else {
      id_user = this.pengirim['ID_USER'];
    }

    this.soapService
      .post(api_base_url, 'eoffice_notif_imove', {
        fStream: JSON.stringify(
          {
            usernameEDI: api_user,
            passwordEDI: api_pass,
            id_user: [id_user],
            data: {
              "res": "InboxPage"
            },
            heading : {
              "en": "Pengajuan SPPD"
            },
            content: {
              "en": "Pengajuan SPPD dari " + this.userdataTPK['data']['NAMA'] + " membutuhkan persetujuan. \nPerihal : " + this.perihal
            },
          }
        )
      }).then(result => {
        let hasil = JSON.parse(String(result));
      }).catch(error => {
      });
  }


}

