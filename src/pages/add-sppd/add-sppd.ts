import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController, LoadingController, AlertController } from 'ionic-angular';
import { DatePicker } from '@ionic-native/date-picker';
import { Platform } from 'ionic-angular';
import { DatePipe, TitleCasePipe } from '@angular/common';
import { SoapService } from '../soap.service';
import { api_base_url, api_user, api_pass, oneSignalAppId, sender_id, url_upload_sppd } from '../../config';
import { Storage } from '@ionic/storage';
// import { dashCaseToCamelCase } from '@angular/compiler/src/util';
import { OneSignal } from '@ionic-native/onesignal';

import { FilePath } from '@ionic-native/file-path';
import { File } from '@ionic-native/file';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { FileChooser } from '@ionic-native/file-chooser';
import { Camera, CameraOptions } from '@ionic-native/camera';

import { InAppBrowser, InAppBrowserOptions } from "@ionic-native/in-app-browser";

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

  penanggungJawab: any;
  dataPenanggungJawab: any;
  searchResultPenanggungJawabList: Array<any> = [];
  showResultPenanggungJawab: Boolean = false;

  private win: any = window;
  imageURI: any = "";
  imageShow: any = "assets/imgs/logo/camera.png";
  fileDocPath: any;
  fileName: any;
  fileType: any;
  imageFileName: any;

  imageURI2: any = "";
  imageShow2: any = "assets/imgs/logo/camera.png";
  fileDocPath2: any;
  fileName2: any;
  fileType2: any;
  imageFileName2: any;

  isLoading: boolean = false;
  dataSPPD: any;

  isJamuanRapat: any;
  showJamuan: boolean = false;

  isRuangRapat: any;
  showRuangRapat: boolean = false;

  showLaundry: boolean = false;
  lamaSPPD: number = 0;

  klasifikasiPerjalananDinas: any = '';
  kotaAsal: any = '';
  kotaTujuan: any = '';
  proyek: any = '';
  angkutan: any = '';
  maksudDinas: any = '';
  namaHotel: any = '';

  ruangRapat: any = '';
  tipeRuangRapat: any = '';

  jamuanRapat: any = '';
  konsumsiJamuanRapat: any = '';

  laundry: any = '';
  screeningCovid: any = '';

  actionType: any = ''
  message: any = '';
  messageDetail: any;
  attachmentList: any;

  attachmentPermintaan: any = '';
  attachmentRuangRapat: any = '';
  deleteAttachmentList: any = [];
  id_surat: any = '';

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
    public camera: Camera,
    public inAppBrowser: InAppBrowser
  ) {
    oneSignal.startInit(oneSignalAppId, sender_id);
    oneSignal.endInit();

    this.actionType = this.navParams.get('actionType');
    this.message = this.navParams.get("message");
    console.log(this.actionType);


    if (this.actionType == 'add') {
      this.pemeriksaList.push({ value: '' });
      this.pesertaJabatanList.push({ value: '' });
      this.pesertaPekerjaList.push({ value: '' });
      this.pesertaEksternalList.push({ value: '', jabatan: '', golongan: '' });
    }




    this.tglPengajuan = new Date();
    this.tglPengajuan = this.datePipe.transform(this.tglPengajuan, 'dd/MM/yyyy');

    this.storage.get('userdataTPK').then(val => {
      this.userdataTPK = val;
      this.getDataSPPD();
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddSppdPage');
  }

  toggleJamuanRapat() {
    this.showJamuan = !this.showJamuan;
  }

  toggleRuangRapat() {
    this.showRuangRapat = !this.showRuangRapat;
  }

  getDataSPPD() {
    this.isLoading = true;
    let loading = this.loadingCtrl.create({
      spinner: 'dots',
      content: "Mendapatkan data SPPD...",
      cssClass: 'transparent',
      dismissOnPageChange: true
    });
    loading.present();

    this.soapService
      .post(api_base_url, 'eoffice_data_sppd', {
        fStream: JSON.stringify(
          {
            "usernameEDI": api_user,
            "passwordEDI": api_pass,
            "id_user": this.userdataTPK['data']['IDUSER'],
            "nipp": this.userdataTPK['data']['NIPP']
          }
        )
      }).then(result => {
        var responData = JSON.parse(String(result));

        if (responData['rcmsg'] == "SUCCESS") {
          this.dataSPPD = responData['data'];
          console.log(this.dataSPPD);
          if (this.actionType == 'edit') {
            this.getDetail(loading);
          } else {
            loading.dismiss();
            this.isLoading = false;
          }

        } else {
          let toast = this.toastCtrl.create({
            message: 'Mohon Maaf Sedang Terjadi Kesalahan, Coba Beberapa Saat Lagi.',
            duration: 3000,
            position: 'bottom'
          });
          toast.present();
          loading.dismiss();
          this.isLoading = false;
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
        loading.dismiss();
        this.isLoading = false;
      });
  }

  getDetail(loader) {
    this.soapService
      .post(api_base_url, "eoffice_viewmail", {
        fStream: JSON.stringify({
          usernameEDI: api_user,
          passwordEDI: api_pass,
          nipp: this.userdataTPK['data']['NIPP'],
          linkSurat: this.message["Location"],
          from_modul: "sppd",
        }),
      })
      .then((result) => {
        var responData = JSON.parse(String(result));
        console.log(responData);

        if (responData["rcmsg"] == "SUCCESS") {
          this.messageDetail = responData["data"];
          console.log(this.messageDetail);

          var tglMulaiSplit = this.messageDetail["Agenda"]["Tanggal Mulai"].split("-");
          var tglSelesaiSplit = this.messageDetail["Agenda"]["Tanggal Akhir"].split("-");
          console.log(tglMulaiSplit);
          var dateMulai = new Date(tglMulaiSplit[2],(tglMulaiSplit[1] != '0') ? parseInt(tglMulaiSplit[1])-1 : tglMulaiSplit[1], tglMulaiSplit[0]);

          var dateSelesai = new Date(tglSelesaiSplit[2], (tglSelesaiSplit[1] != '0') ? parseInt(tglSelesaiSplit[1])-1 : tglSelesaiSplit[1], tglSelesaiSplit[0]);
          console.log(dateMulai);

          this.tanggalMulai = this.datePipe.transform(dateMulai, "dd/MM/yyyy");
          this.tanggalSelesai = this.datePipe.transform(dateSelesai, "dd/MM/yyyy");
          this.klasifikasiPerjalananDinas = this.messageDetail['Agenda']['klasifikasi_sppd'];
          this.kotaAsal = this.messageDetail['Agenda']['kota_asal'];
          this.kotaTujuan = this.messageDetail['Agenda']['kota_tujuan'];
          this.perihal = this.messageDetail['Perihal'];
          this.proyek = this.messageDetail['Agenda']['id_projek'];
          this.angkutan = this.messageDetail['Agenda']['angkutan'];
          this.maksudDinas = this.messageDetail['Agenda']['maksud_sppd'];
          this.namaHotel = this.messageDetail['Agenda']['nama_hotel'];

          this.ruangRapat = this.messageDetail['Agenda']['nm_ruang_rapat'];
          this.tipeRuangRapat = this.messageDetail['Agenda']['tipe_ruang_rapat'];

          if (this.ruangRapat != null || this.ruangRapat != '') {
            this.isRuangRapat = 'Membutuhkan Ruang Rapat';
            this.showRuangRapat = true;
          }

          this.jamuanRapat = this.messageDetail['Agenda']['jamuan_rapat'];
          this.konsumsiJamuanRapat = this.messageDetail['Agenda']['konsumsi_jamuan_rapat'];

          if (this.jamuanRapat != null || this.jamuanRapat != '') {
            this.isJamuanRapat = 'Membutuhkan Jamuan Rapat';
            this.showJamuan = true;
          }

          this.laundry = this.messageDetail['Agenda']['is_laundry'];
          if (this.laundry != null || this.laundry != '') {
            this.showLaundry = true;
          }
          this.screeningCovid = this.messageDetail['Agenda']['is_antigen_pcr'];
          this.lampiran = this.messageDetail['Lampiran'];

          if (this.messageDetail['Prioritas'] == 'Normal') {
            this.prioritas = '0';
          } else if (this.messageDetail['Prioritas'] == 'Penting') {
            this.prioritas = '1';
          } else if (this.messageDetail['Prioritas'] == 'Mendesak') {
            this.prioritas = '2';
          }

          if (this.messageDetail['Klasifikasi'] == 'Biasa') {
            this.klasifikasi = '0';
          } else if (this.messageDetail['Klasifikasi'] == 'Rahasia') {
            this.klasifikasi = '1';
          }

          this.komentar = this.messageDetail['SPPD_komentar'];

          if (this.messageDetail['SPPD_pemeriksa'].length > 0) {
            for (var i = 0; i < this.messageDetail['SPPD_pemeriksa'].length; i++) {
              this.pemeriksaList.push({
                'value': this.messageDetail['SPPD_pemeriksa'][i]['value'],
                'ID_USER': this.messageDetail['SPPD_pemeriksa'][i]['ID_USER'],
                'NIPP': this.messageDetail['SPPD_pemeriksa'][i]['NIPP'],
                'NAMA': this.messageDetail['SPPD_pemeriksa'][i]['NAMA'],
                'NM_JABATAN': this.messageDetail['SPPD_pemeriksa'][i]['NM_JABATAN'],
                'ID_JABATAN': this.messageDetail['SPPD_pemeriksa'][i]['ID_JABATAN'],
                'ID_CABANG': this.messageDetail['SPPD_pemeriksa'][i]['ID_CABANG'],
                'NAMA_CABANG': this.messageDetail['SPPD_pemeriksa'][i]['NAMA_CABANG'],
              });
            }
          }

          this.dataPenanggungJawab = {
            "ID_USER": this.messageDetail['SPPD_penanggungjawab']['ID_USER'],
            "NIPP": this.messageDetail['SPPD_penanggungjawab']['NIPP'],
            "NAMA": this.messageDetail['SPPD_penanggungjawab']['NAMA'],
            "NM_JABATAN": this.messageDetail['SPPD_penanggungjawab']['NM_JABATAN'],
            "ID_JABATAN": this.messageDetail['SPPD_penanggungjawab']['ID_JABATAN'],
            "JABATANCABANG": this.messageDetail['SPPD_penanggungjawab']['JABATANCABANG']
          };

          this.penanggungJawab = this.dataPenanggungJawab['NAMA'] + ' | ' + this.dataPenanggungJawab['NM_JABATAN'];

          this.pengirim = {
            "ID_USER": this.messageDetail['Pengirim']['id_user'],
            "NIPP": this.messageDetail['Pengirim']['NIPP'],
            "NAMA": this.messageDetail['Pengirim']['Nama'],
            "NM_JABATAN": this.messageDetail['Pengirim']['Nama Jabatan'],
            "ID_JABATAN": this.messageDetail['Pengirim']['Id Jabatan'],
            "BAWAHAN": this.messageDetail['Pengirim']['Divisi'],
            "ATASAN": this.messageDetail['Pengirim']['Cab or Dir']
          };
          this.jabatanPengirim = this.messageDetail['Pengirim']['Nama Jabatan'];

          this.getPesertaSPPD(this.messageDetail["ID Surat"], loader);
          this.id_surat = atob(this.messageDetail["ID Surat"]);

          // this.linkSurat = this.messageDetail["Link Surat Asli"];
          if (this.messageDetail['SPPD_attachment'].length > 0) {
            this.attachmentPermintaan = this.messageDetail["SPPD_attachment"][0]['url'];
          }
          if (this.messageDetail['SPPD_attachment'].length > 1) {
           this.attachmentRuangRapat = this.messageDetail["SPPD_attachment"][1]['url'];
          }
         
          loader.dismiss();
          this.isLoading = false;
        } else {
          let toast = this.toastCtrl.create({
            message: "Mohon Maaf Sedang Terjadi Kesalahan, Coba Beberapa Saat Lagi.",
            duration: 3000,
            position: "bottom",
          });
          toast.present();
          loader.dismiss();
          this.isLoading = false;
        }
      })
      .catch((error) => {
        console.log(error);
        let toast = this.toastCtrl.create({
          message: "Terjadi Masalah Koneksi, Silahkan Coba Kembali (1).",
          duration: 3000,
          position: "bottom",
        });
        toast.present();
        loader.dismiss();
        this.isLoading = false;
      });
  }

  downloadAttach(data, type) {

    let alert = this.alertCtrl.create({
      title: 'Attachment',
      subTitle: this.subStrAttachment(data),
      cssClass: 'alert',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            //console.log('Cancel clicked');
          }
        },
        {
          text: 'Buka',
          handler: () => {
            const options: InAppBrowserOptions = {
              zoom: "no",
            };
            const browser = this.inAppBrowser.create(data, "_system", options);
          }
        },
        {
          text: 'Hapus',
          handler: () => {
            if (type == 'permintaan') {
              this.attachmentPermintaan = '';
              this.deleteAttachmentList.push({
                "url": this.messageDetail["SPPD_attachment"][0]['url'],
                "id_file": this.messageDetail["SPPD_attachment"][0]['id_file'],
                "id_surat": this.messageDetail["SPPD_attachment"][0]['id_surat']
              })
            } else if (type == 'rapat') {
              this.attachmentRuangRapat = '';
              this.deleteAttachmentList.push({
                "url": this.messageDetail["SPPD_attachment"][1]['url'],
                "id_file": this.messageDetail["SPPD_attachment"][1]['id_file'],
                "id_surat": this.messageDetail["SPPD_attachment"][1]['id_surat']
              })
            }

            console.log(this.deleteAttachmentList);
          }
        }
      ]
    });
    alert.present();
  }

  subStrAttachment(data) {
    var str = data;
    var n = str.lastIndexOf("/");
    return str.substring(n + 1);
  }

  getPesertaSPPD(idSurat, loader) {
    this.soapService
      .post(api_base_url, "eoffice_sppd_peserta", {
        fStream: JSON.stringify({
          usernameEDI: api_user,
          passwordEDI: api_pass,
          id_surat: atob(idSurat),
        }),
      })
      .then((result) => {
        let responData = JSON.parse(String(result));
        console.log(responData);
        if (responData["rcmsg"] == "SUCCESS") {
          if (responData["data"]["PESERTA_JABATAN"].length > 0) {
            for (var i = 0; i < responData["data"]["PESERTA_JABATAN"].length; i++) {
              // this.pesertaSppdList.push(responData["data"]["PESERTA_JABATAN"][i]);
              this.pesertaJabatanList.push({
                'value': responData["data"]["PESERTA_JABATAN"][i]['value'],
                'ID_USER': '',
                'NIPP': '',
                'NAMA': '',
                'NM_JABATAN': responData["data"]["PESERTA_JABATAN"][i]['NAMA'],
                'ID_JABATAN': responData["data"]["PESERTA_JABATAN"][i]['ID_JABATAN'],
                'ID_CABANG': '',
                'KD_PARA': '',
                'NAMA_CABANG': ''
              });
            }
          } else {
            this.pesertaJabatanList.push({ value: '' });
          }

          if (responData["data"]["PESERTA_PEGAWAI"].length > 0) {
            for (var i = 0; i < responData["data"]["PESERTA_PEGAWAI"].length; i++) {
              // console.log(responData["data"][i]["PESERTA_PEGAWAI"]['value']);
              // this.pesertaSppdList.push(responData["data"]["PESERTA_PEGAWAI"][i]);
              this.pesertaPekerjaList.push({
                'value': responData["data"]["PESERTA_PEGAWAI"][i]['value'],
                'ID_USER': responData["data"]["PESERTA_PEGAWAI"][i]['ID_USER'],
                'NIPP': responData["data"]["PESERTA_PEGAWAI"][i]['NIPP'],
                'NAMA': responData["data"]["PESERTA_PEGAWAI"][i]['NAMA'],
                'NM_JABATAN': responData["data"]["PESERTA_PEGAWAI"][i]['NAMA_JABATAN'],
                'ID_JABATAN': responData["data"]["PESERTA_PEGAWAI"][i]['ID_JABATAN'],
                'ID_CABANG': '',
                'KD_PARA': '',
                'NAMA_CABANG': '',
              })
            }
          } else {
            this.pesertaPekerjaList.push({ value: '' });
          }



          if (responData["data"]["PESERTA_NON_PEGAWAI"].length > 0) {
            for (var i = 0; i < responData["data"]["PESERTA_NON_PEGAWAI"].length; i++) {
              // this.pesertaSppdList.push(responData["data"]["PESERTA_NON_PEGAWAI"][i]);
              this.pesertaEksternalList.push(
                {
                  value: responData["data"]["PESERTA_NON_PEGAWAI"][i]['value'],
                  jabatan: responData["data"]["PESERTA_NON_PEGAWAI"][i]['JABATAN'],
                  golongan: responData["data"]["PESERTA_NON_PEGAWAI"][i]['GOLONGAN']
                }
              );
            }
          } else {
            this.pesertaEksternalList.push({ value: '', jabatan: '', golongan: '' });
          }

          // if (responData['data']['SCAN_SPPD'].length > 0) {
          //   for (var i = 0; i < responData['data']['SCAN_SPPD'].length; i++) {
          //     this.attrScanSppd.push( responData['data']['SCAN_SPPD'][i]);
          //   }
          // }
          console.log(this.pesertaPekerjaList);
          loader.dismiss();
        } else {
          let toast = this.toastCtrl.create({
            message: "Mohon Maaf Sedang Terjadi Kesalahan, Coba Beberapa Saat Lagi.",
            duration: 3000,
            position: "bottom",
          });
          toast.present();
          loader.dismiss();
        }
      })
      .catch((error) => {
        // console.log(error);
        let toast = this.toastCtrl.create({
          message: "Terjadi Masalah Koneksi, Silahkan Coba Kembali.",
          duration: 3000,
          position: "bottom",
        });
        toast.present();
        loader.dismiss();
      });
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

          var date1Split = this.tanggalMulai.split('/');
          var date2Split = this.tanggalSelesai.split('/');
          var date1 = new Date(date1Split[2], (date1Split[1] != '0') ? parseInt(date1Split[1])-1 : date1Split[1], date1Split[0]);
          var date2 = new Date(date2Split[2], (date2Split[1] != '0') ? parseInt(date2Split[1])-1 : date2Split[1], date2Split[0]);
          var Difference_In_Time = date2.getTime() - date1.getTime();
          var lamaSPPD = Difference_In_Time / (1000 * 3600 * 24);
          console.log('lama sppd : ' + lamaSPPD);
          if (lamaSPPD > 3) {
            this.showLaundry = true;
            this.laundry = '';
          } else {
            this.showLaundry = false;
            this.laundry = 'Tidak';
          }
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
    let loading = this.loadingCtrl.create({
      spinner: 'dots',
      content: "Memeriksa data peserta...",
      cssClass: 'transparent',
      dismissOnPageChange: true
    });
    loading.present();

    this.soapService
        .post(api_base_url, 'eoffice_validasi_peserta_sppd', {
          fStream: JSON.stringify(
            {
              "usernameEDI": api_user,
              "passwordEDI": api_pass,
              "id_user": pesertaPekerjaSearchResult['ID_USER'],
              "nipp": pesertaPekerjaSearchResult['NIPP'],
              "tgl_mulai": this.tanggalMulai,
              "tgl_akhir": this.tanggalSelesai,
            }

          )
        }).then(result => {
          var responData = JSON.parse(String(result));
          console.log(responData);
          this.pesertaPekerjaindex = i;
          if (responData['rcmsg'] == "SUCCESS") {
            var jumLaporan = parseInt(responData['data']['JUMLAH_SPPD_ASLI']) - parseInt(responData['data']['JUMLAH_SPPD_LAPORAN']);
            if (parseInt(responData['data']['JUMLAH_CUTI']) > 0) {
              let toast = this.toastCtrl.create({
                message: 'Pegawai ' + pesertaPekerjaSearchResult['NAMA'] + ' Tidak bisa diundang dikarenakan sedang cuti pada range tanggal tersebut.',
                duration: 3000,
                position: 'bottom'
              });
              toast.present();
              this.pesertaPekerjaList[this.pesertaPekerjaindex]['value'] = '';
            } else if (parseInt(responData['data']['JUMLAH_SPPD']) > 0 ) {
              let toast = this.toastCtrl.create({
                message: 'Pegawai '+  pesertaPekerjaSearchResult['NAMA'] +' sedang dinas pada range tanggal tersebut.',
                duration: 3000,
                position: 'bottom'
              });
              toast.present();
              this.pesertaPekerjaList[this.pesertaPekerjaindex]['value'] = '';
             
            } else if (jumLaporan > 3 ) {
              let toast = this.toastCtrl.create({
                message: 'Pegawai ' + pesertaPekerjaSearchResult['NAMA'] + ' ini memiliki ' + jumLaporan + ' perjalanan dinas yang belum di laporkan.',
                duration: 3000,
                position: 'bottom'
              });
              toast.present();
              this.pesertaPekerjaList[this.pesertaPekerjaindex]['value'] = '';
            } else {
              
              // this.pesertaPekerjaList[this.pesertaPekerjaindex]['value'] = pesertaPekerjaSearchResult['NM_JABATAN'] + " | " + pesertaPekerjaSearchResult['NM_JABATAN'];
              this.pesertaPekerjaList[this.pesertaPekerjaindex]['value'] = pesertaPekerjaSearchResult['NAMA'];
              this.pesertaPekerjaList[this.pesertaPekerjaindex]['ID_USER'] = pesertaPekerjaSearchResult['ID_USER'];
              this.pesertaPekerjaList[this.pesertaPekerjaindex]['NIPP'] = pesertaPekerjaSearchResult['NIPP'];
              this.pesertaPekerjaList[this.pesertaPekerjaindex]['NAMA'] = pesertaPekerjaSearchResult['NAMA'];
              this.pesertaPekerjaList[this.pesertaPekerjaindex]['NM_JABATAN'] = pesertaPekerjaSearchResult['NM_JABATAN'];
              this.pesertaPekerjaList[this.pesertaPekerjaindex]['ID_JABATAN'] = pesertaPekerjaSearchResult['ID_JABATAN'];
              this.pesertaPekerjaList[this.pesertaPekerjaindex]['ID_CABANG'] = pesertaPekerjaSearchResult['ID_CABANG'];
              this.pesertaPekerjaList[this.pesertaPekerjaindex]['KD_PARA'] = pesertaPekerjaSearchResult['KD_PARA'];
              this.pesertaPekerjaList[this.pesertaPekerjaindex]['NAMA_CABANG'] = pesertaPekerjaSearchResult['NAMA_CABANG'];
              
              //console.log(this.pesertaPekerjaList);
            }
            this.pesertaPekerjashowResult = false;
            loading.dismiss();
          } else {
            let toast = this.toastCtrl.create({
              message: 'Mohon Maaf Sedang Terjadi Kesalahan, Coba Beberapa Saat Lagi.',
              duration: 3000,
              position: 'bottom'
            });
            toast.present();
            loading.dismiss();
          }
        })
        .catch(error => {
          console.log(error);
          let toast = this.toastCtrl.create({
            message: 'Terjadi Masalah Koneksi, Silahkan Coba Kembali.',
            duration: 3000,
            position: 'bottom'
          });
          toast.present();
          loading.dismiss();
        });
  }

  addPesertaEksternal() {
    //console.log('clicked');
    this.pesertaEksternalList.push({ value: '', jabatan: '', golongan: '' });
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

  getPenanggungJawab() {
    if (this.penanggungJawab == '') {
      this.showResultPenanggungJawab = false;
    } else {
      this.soapService
        .post(api_base_url, 'eoffice_get_penanggungjawab_sppd', {
          fStream: JSON.stringify(
            {
              "usernameEDI": api_user,
              "passwordEDI": api_pass,
              "search": this.penanggungJawab,
              "id_jabatan": this.userdataTPK['data']['IDJABATAN'],
              "atas": "1",
              "bawah": "10"
            }
          )
        }).then(result => {
          var responData = JSON.parse(String(result));
          //console.log(responData);

          if (responData['rcmsg'] == "SUCCESS") {
            this.searchResultPenanggungJawabList = [];
            this.searchResultPenanggungJawabList = responData['data'];
            this.showResultPenanggungJawab = true;
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
          this.showResultPenanggungJawab = false;
        });
    }
  }

  setPenanggungJawab(data) {
    this.dataPenanggungJawab = data;
    this.penanggungJawab = data['NAMA'] + ' | ' + data['NM_JABATAN'];
    
    // console.log(this.pengirim);
    this.showResultPenanggungJawab = false;
  }

  submit(submitType) {
    // console.log(this.konsumsiJamuanRapat.toString());
    // console.log(this.konsumsiJamuanRapat);
    // console.log(this.pesertaEksternalList);
    var err = [];
    if (this.klasifikasiPerjalananDinas == '' || this.klasifikasiPerjalananDinas == null) {
      err.push("Klasifikasi Perjalanan Dinas");
    }
    if (this.kotaAsal == '' || this.kotaAsal == null) {
      err.push("Kota Asal");
    }
    if (this.kotaTujuan == '' || this.kotaTujuan == null) {
      err.push("Kota Tujuan");
    }
    // if (this.proyek == '' || this.proyek == null) {
    //   err.push("Proyek");
    // }
    if (this.angkutan == '' || this.angkutan == null) {
      err.push("Angkutan yang Digunakan");
    }
    if (this.maksudDinas == '' || this.maksudDinas == null) {
      err.push("Maksud Perjalanan Dinas");
    }
    if (this.namaHotel == '' || this.namaHotel == null) {
      err.push("Nama Hotel");
    }

    if (this.showRuangRapat == true) {
      if (this.ruangRapat == '' || this.ruangRapat == null) {
        err.push("Ruang Rapat");
      }
      if (this.tipeRuangRapat == '' || this.tipeRuangRapat == null) {
        err.push("Tipe Ruang Rapat");
      }
    }

    if (this.showJamuan == true) {
      if (this.jamuanRapat == '' || this.jamuanRapat == null) {
        err.push("Jamuan Rapat");
      }
      if (this.konsumsiJamuanRapat == '' || this.konsumsiJamuanRapat == null) {
        err.push("Konsumsi Jamuan Rapat");
      }
    }

    if (this.showLaundry == true) {
      if (this.laundry == '' || this.laundry == null) {
        err.push("Laundry");
      }
    }

    if (this.screeningCovid == '' || this.screeningCovid == null) {
      err.push("Screening Antigen/PCR");
    }

    if (this.penanggungJawab == null || this.penanggungJawab == '') {
      err.push('Penanggung Jawab');
    }

    // if (this.actionType == 'add' || (this.actionType == 'edit' && this.attachmentPermintaan == null)) {
    //   if ((this.imageURI == null || this.imageURI == '') && (this.fileName == null || this.fileName == '')) {
    //     err.push("Form Permintaan SPPD");
    //   }
    // }

    if (this.pengirim == null) {
      err.push("Pengirim");
    }
    if (this.tanggalMulai == '' || this.tanggalMulai == null) {
      err.push("Tanggal Mulai");
    }
    if (this.tanggalSelesai == '' || this.tanggalSelesai == null) {
      err.push("Tanggal Selesai");
    }
    // if (this.lokasi == '' || this.lokasi == null) {
    //   err.push("Lokasi");
    // }
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

    if (
      (this.pesertaJabatanList.length == 1 && this.pesertaJabatanList[0]['value'] == '')
      && (this.pesertaPekerjaList.length == 1 && this.pesertaPekerjaList[0]['value'] == '')
      && (this.pesertaEksternalList.length == 1 && (this.pesertaEksternalList[0]['value'] == '' || this.pesertaEksternalList[0]['jabatan'] == '' || this.pesertaEksternalList[0]['golongan'] == ''))) {
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

      if (this.pesertaPekerjaList.length > 1) {
        for (var i = 0; i < this.pesertaPekerjaList.length; i++) {
          if (this.pesertaPekerjaList[i]['value'] == '') {
            err.push('Peserta Pekerja');
            break;
          }
        }
      }

      if (this.pesertaEksternalList.length > 1) {
        for (var i = 0; i < this.pesertaEksternalList.length; i++) {
          if (this.pesertaEksternalList[i]['value'] == '' || this.pesertaEksternalList[i]['jabatan'] == '' || this.pesertaEksternalList[i]['golongan'] == '') {
            err.push('Peserta Eksternal');
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

      console.log(JSON.stringify(
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
          "peserta_eksternal": (this.pesertaEksternalList[0]['value'] != '') ? this.pesertaEksternalList : [],
          "klasifikasi_sppd": this.klasifikasiPerjalananDinas,
          "kota_asal": this.kotaAsal,
          "kota_tujuan": this.kotaTujuan,
          "proyek": this.proyek,
          "angkutan": this.angkutan,
          "maksud_sppd": this.maksudDinas,
          "nama_hotel": this.namaHotel,
          "ruang_rapat": this.ruangRapat,
          "tipe_ruang_rapat": this.tipeRuangRapat,
          "jamuan": this.jamuanRapat,
          "Konsumsi_jamuan": this.konsumsiJamuanRapat,
          "laundry": this.laundry,
          "screening_covid": this.screeningCovid,
          "penanggungjawab": this.dataPenanggungJawab,
          "id_surat": this.id_surat
        }
      ));


      var action = '';
      var alertText = '';
      var alertType = '';

      if (submitType == 'simpan') {
        if (this.actionType == 'add') {
          action = 'eoffice_simpan_sppd';
        } else if (this.actionType == 'edit') {
          action = 'eoffice_edit_simpan_sppd';
        }
        alertType = 'Simpan';
        alertText = 'Anda yakin ingin menyimpan SPPD?';
      } else if (submitType == 'kirim') {
        if (this.actionType == 'add') {
          action = 'eoffice_add_sppd';
        } else if (this.actionType == 'edit') {
          action = 'eoffice_edit_sppd';
        }
        alertType = 'Pengajuan';
        alertText = 'Anda yakin ingin mengajukan SPPD?';
      }

      let alert = this.alertCtrl.create({
        subTitle: alertText,
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
                content: "Memproses pengajuan SPPD, mohon tunggu...",
                cssClass: 'transparent',
                dismissOnPageChange: true
              });
              loading.present();
              this.soapService
                .post(api_base_url, action, {
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
                      "peserta_eksternal": (this.pesertaEksternalList[0]['value'] != '') ? this.pesertaEksternalList : [],
                      "klasifikasi_sppd": this.klasifikasiPerjalananDinas,
                      "kota_asal": this.kotaAsal,
                      "kota_tujuan": this.kotaTujuan,
                      "proyek": this.proyek,
                      "angkutan": this.angkutan,
                      "maksud_sppd": this.maksudDinas,
                      "nama_hotel": this.namaHotel,
                      "ruang_rapat": this.ruangRapat,
                      "tipe_ruang_rapat": this.tipeRuangRapat,
                      "jamuan": this.jamuanRapat,
                      "Konsumsi_jamuan": this.konsumsiJamuanRapat,
                      "laundry": this.laundry,
                      "screening_covid": this.screeningCovid,
                      "penanggungjawab": this.dataPenanggungJawab,
                      "id_surat": this.id_surat
                    }
                  )
                })
                .then(result => {
                  let responData = JSON.parse(String(result));
                  //console.log(responData);

                  if (responData['rcmsg'] == "SUCCESS") {
                    if (this.deleteAttachmentList.length > 0) {
                      this.deleteAttachment();
                    }
                    if (this.fileType != null) {
                      if ((this.imageURI != '' || this.fileName != null) && (this.imageURI2 != '' || this.fileName2 != null)) {
                        this.upload(responData['data']['ID_SURAT'], loading, alertType);
                      }  else if ((this.imageURI == '' || this.fileName == null) && (this.imageURI2 != '' || this.fileName2 != null)) {
                        this.upload2(responData['data']['ID_SURAT'], loading, alertType);
                      } else if ((this.imageURI != '' || this.fileName != null) && (this.imageURI2 == '' || this.fileName2 == null)) {
                        this.upload(responData['data']['ID_SURAT'], loading, alertType);
                      }
                      else {
                        let toast = this.toastCtrl.create({
                          message: alertType + ' SPPD Berhasil.',
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
                        message: alertType + ' SPPD Berhasil.',
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
                      message: alertType + " SPPD Gagal, silahkan coba kembali.",
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

  deleteAttachment() {
    this.soapService
      .post(api_base_url, 'eoffice_delete_attachment_sppd', {
        fStream: JSON.stringify(
          {
            "usernameEDI": api_user,
            "passwordEDI": api_pass,
            "id_surat": this.id_surat,
            "attachment": this.deleteAttachmentList
          }
        )
      })
      .then(result => {
        let responData = JSON.parse(String(result));
        console.log(responData);
      })
      .catch(error => {
        console.log(error);
      });
  }

  openChooser(type) {
    this.fileChooser.open()
      .then(uri => {
        // console.log(uri);
        if (type == '1') {
          this.fileDocPath = uri;
          this.fileName = uri.substr(uri.lastIndexOf('/') + 1);
          this.fileName = this.fileName.substr(10);
          this.fileName = this.fileName.replace(/%20/g, " ");
        } else if (type == '2') {
          this.fileDocPath2 = uri;
          this.fileName2 = uri.substr(uri.lastIndexOf('/') + 1);
          this.fileName2 = this.fileName.substr(10);
          this.fileName2 = this.fileName.replace(/%20/g, " ");
        }

        console.log(this.fileName);
        console.log(this.fileName2);
      })
      .catch(e => {
        // console.log(e)
      });
  }

  takeImage(sourceType: number, type) {
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
      if (type == '1') {
        this.imageShow = this.win.Ionic.WebView.convertFileSrc(imageData);
        this.imageURI = imageData;
        URI = this.imageURI;
      } else if (type == '2') {
        this.imageShow2 = this.win.Ionic.WebView.convertFileSrc(imageData);
        this.imageURI2 = imageData;
        URI = this.imageURI2;
      }


      if (this.platform.is('android') && sourceType === this.camera.PictureSourceType.PHOTOLIBRARY) {
        this.filepath.resolveNativePath(URI)
          .then(filePath => {
            let correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
            let currentName = imageData.substring(imageData.lastIndexOf('/') + 1, imageData.lastIndexOf('?'));
            this.copyFileToLocalDir(correctPath, currentName, this.createFileName(type), type);
          });
      } else {
        var currentName = imageData.substr(imageData.lastIndexOf('/') + 1);
        var correctPath = imageData.substr(0, imageData.lastIndexOf('/') + 1);
        this.copyFileToLocalDir(correctPath, currentName, this.createFileName(type), type);
      }
      console.log(URI);
    }, (err) => {
      console.log(err);
    });
  }

  private copyFileToLocalDir(namePath, currentName, filename, type) {
    this.file.copyFile(namePath, currentName, this.file.dataDirectory, filename).then(success => {
      if (type == '1') {
        this.imageFileName = filename;
      } else if (type == '2') {
        this.imageFileName2 = filename;
      }

      console.log(this.imageFileName);
    }, error => {
      console.log('Error while storing file: ' + error);
    });
  }

  private createFileName(type) {
    var newFileName = '';
    if (type == '1') {
      if (this.fileType == 'gambar') {
        var d = new Date(), n = d.getTime();
        newFileName = n + "_SPPD.jpg";
      } else {
        // console.log('error disini');
      }
    } else if (type == '2') {
      if (this.fileType2 == 'gambar') {
        var d = new Date(), n = d.getTime();
        newFileName = n + "_konsumsi.jpg";
      } else {
        // console.log('error disini');
      }
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

  upload(idSurat, loader, alertType) {
    // console.log(this.fileDocPath);
    if (this.fileType == 'file') {
      const fileTransfer: FileTransferObject = this.transfer.create();
      var options = {
        fileKey: "file",
        fileName: this.fileName,
        chunkedMode: false,
        mimeType: "multipart/form-data",
        params: { id_surat: idSurat, type: '1' }
      };

      fileTransfer.upload(
        this.fileDocPath,
        url_upload_sppd, options)
        .then((data) => {
          // console.log(JSON.stringify(data));
          // console.log(" Uploaded Successfully");    
          if (data['responseCode'] == 200) {
            var responData = JSON.parse(String(data['response']));
            // console.log(responData);

            if (responData['rcmsg'] == 'SUCCESS') {

              if ((this.imageURI2 != '') || (this.fileName2 != null)) {
                this.upload2(idSurat, loader, alertType);
              } else {
                let toast = this.toastCtrl.create({
                  message: alertType + ' SPPD Berhasil.',
                  duration: 3000,
                  position: 'bottom'
                });
                toast.present();
                loader.dismiss();
                this.viewCtrl.dismiss({ isSuccess: true });
              }
            } else {
              if ((this.imageURI2 != '') || (this.fileName2 != null)) {
                this.upload2(idSurat, loader, alertType);
              } else {
                let toast = this.toastCtrl.create({
                  message: alertType + " SPPD Berhasil, namun file attachment gagal diupload, silahkan hubungi admin.",
                  duration: 3000,
                  position: 'bottom'
                });
                toast.present();
                loader.dismiss();
                this.viewCtrl.dismiss({ isSuccess: true });
              }

            }
          } else {
            if ((this.imageURI2 != '') || (this.fileName2 != null)) {
              this.upload2(idSurat, loader, alertType);
            } else {
              let toast = this.toastCtrl.create({
                message: alertType + " SPPD Berhasil, namun file attachment gagal diupload, silahkan hubungi admin.",
                duration: 3000,
                position: 'bottom'
              });
              toast.present();
              loader.dismiss();
              this.viewCtrl.dismiss({ isSuccess: true });
            }

          }

        }, (err) => {
          // console.log("masuk sini");
          // console.log(err);
          let toast = this.toastCtrl.create({
            message: alertType + " SPPD Berhasil, namun file attachment gagal diupload, silahkan hubungi admin.",
            duration: 3000,
            position: 'bottom'
          });
          if ((this.imageURI2 != '') || (this.fileName2 != null)) {
            this.upload2(idSurat, loader, alertType);
          } else {
            toast.present();
            loader.dismiss();
            this.viewCtrl.dismiss({ isSuccess: true });
          }

          // this.presentToast(err);
        });
    } else if (this.fileType == 'gambar') {
      console.log(this.imageFileName);
      console.log("image file path : " + this.pathForImage(this.imageFileName));
      const fileTransfer: FileTransferObject = this.transfer.create();

      var options = {
        fileKey: "file",
        fileName: this.fileName,
        chunkedMode: false,
        mimeType: "multipart/form-data",
        params: { id_surat: idSurat, type: '1' }
      };

      fileTransfer.upload(
        this.pathForImage(this.imageFileName),
        url_upload_sppd, options)
        .then((data) => {
          if (data['responseCode'] == 200) {

            var responData = JSON.parse(String(data['response']));
            console.log(responData);

            if (responData['rcmsg'] == 'SUCCESS') {
              if ((this.imageURI2 != '') || (this.fileName2 != null)) {
                this.upload2(idSurat, loader, alertType);
              } else {
                let toast = this.toastCtrl.create({
                  message: alertType + ' SPPD Berhasil.',
                  duration: 3000,
                  position: 'bottom'
                });
                toast.present();
                loader.dismiss();
                this.viewCtrl.dismiss({ isSuccess: true });
              }

            } else {
              if ((this.imageURI2 != '') || (this.fileName2 != null)) {
                this.upload2(idSurat, loader, alertType);
              } else {
                let toast = this.toastCtrl.create({
                  message: alertType + " SPPD Berhasil, namun file attachment gagal diupload, silahkan hubungi admin.",
                  duration: 3000,
                  position: 'bottom'
                });
                toast.present();
                loader.dismiss();
                this.viewCtrl.dismiss({ isSuccess: true });
              }
            }
          } else {
            if ((this.imageURI2 != '') || (this.fileName2 != null)) {
              this.upload2(idSurat, loader, alertType);
            } else {
              let toast = this.toastCtrl.create({
                message: alertType + " SPPD Berhasil, namun file attachment gagal diupload, silahkan hubungi admin.",
                duration: 3000,
                position: 'bottom'
              });
              toast.present();
              loader.dismiss();
              this.viewCtrl.dismiss({ isSuccess: true });
            }
          }
        }, (err) => {
          // console.log("masuk sini");
          // console.log(err);
          let toast = this.toastCtrl.create({
            message: alertType + " SPPD Berhasil, namun file attachment gagal diupload, silahkan hubungi admin.",
            duration: 3000,
            position: 'bottom'
          });

          if ((this.imageURI2 != '') || (this.fileName2 != null)) {
            this.upload2(idSurat, loader, alertType);
          } else {
            toast.present();
            loader.dismiss();
            this.viewCtrl.dismiss({ isSuccess: true });
          }
        });
    }
  }

  upload2(idSurat, loader, alertType) {
    // console.log(this.fileDocPath);
    if (this.fileType2 == 'file') {
      const fileTransfer: FileTransferObject = this.transfer.create();
      var options = {
        fileKey: "file",
        fileName: this.fileName2,
        chunkedMode: false,
        mimeType: "multipart/form-data",
        params: { id_surat: idSurat, type: '2' }
      };

      fileTransfer.upload(
        this.fileDocPath2,
        url_upload_sppd, options)
        .then((data) => {
          // console.log(JSON.stringify(data));
          // console.log(" Uploaded Successfully");    
          if (data['responseCode'] == 200) {
            var responData = JSON.parse(String(data['response']));
            // console.log(responData);

            if (responData['rcmsg'] == 'SUCCESS') {

              let toast = this.toastCtrl.create({
                message: alertType + ' SPPD Berhasil.',
                duration: 3000,
                position: 'bottom'
              });
              toast.present();
              loader.dismiss();
              this.viewCtrl.dismiss({ isSuccess: true });
            } else {
              let toast = this.toastCtrl.create({
                message: alertType +  " SPPD Berhasil, namun file attachment Permintaan Ruang Rapat dan Konsumsi gagal diupload, silahkan hubungi admin.",
                duration: 3000,
                position: 'bottom'
              });
              toast.present();
              loader.dismiss();
              this.viewCtrl.dismiss({ isSuccess: true });
            }
          } else {
            let toast = this.toastCtrl.create({
              message: alertType +  " SPPD Berhasil, namun file attachment Permintaan Ruang Rapat dan Konsumsi gagal diupload, silahkan hubungi admin.",
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
            message: alertType +  " SPPD Berhasil, namun file attachment Permintaan Ruang Rapat dan Konsumsi gagal diupload, silahkan hubungi admin.",
            duration: 3000,
            position: 'bottom'
          });
          toast.present();
          loader.dismiss();
          this.viewCtrl.dismiss({ isSuccess: true });
          // this.presentToast(err);
        });
    } else if (this.fileType2 == 'gambar') {
      // console.log(this.imageFileName);
      // console.log("image file path : " + this.pathForImage(this.imageFileName));
      const fileTransfer: FileTransferObject = this.transfer.create();

      var options = {
        fileKey: "file",
        fileName: this.fileName2,
        chunkedMode: false,
        mimeType: "multipart/form-data",
        params: { id_surat: idSurat, type: '2' }
      };

      fileTransfer.upload(
        this.pathForImage(this.imageFileName2),
        url_upload_sppd, options)
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
                message: alertType +  " SPPD Berhasil, namun file attachment Permintaan Ruang Rapat dan Konsumsi gagal diupload, silahkan hubungi admin.",
                duration: 3000,
                position: 'bottom'
              });
              toast.present();
              loader.dismiss();
              this.viewCtrl.dismiss({ isSuccess: true });
            }
          } else {
            let toast = this.toastCtrl.create({
              message: alertType +  " SPPD Berhasil, namun file attachment Permintaan Ruang Rapat dan Konsumsi gagal diupload, silahkan hubungi admin.",
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
            message: alertType +  " SPPD Berhasil, namun file attachment Permintaan Ruang Rapat dan Konsumsi gagal diupload, silahkan hubungi admin.",
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
            heading: {
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

