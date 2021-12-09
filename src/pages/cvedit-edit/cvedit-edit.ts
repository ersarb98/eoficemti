import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, AlertController, Platform, ToastController, LoadingController } from 'ionic-angular';
import { DatePicker } from "@ionic-native/date-picker";
import { DatePipe } from "@angular/common";

import { FilePath } from '@ionic-native/file-path';
import { File } from '@ionic-native/file';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { FileChooser } from '@ionic-native/file-chooser';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { url_upload_att_cv,url_download_att_cv } from '../../config';
import { InAppBrowser, InAppBrowserOptions } from "@ionic-native/in-app-browser";

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

  noDarurat: any = '';
  namaDarurat: any = '';
  hubunganDarurat: any = '';

  tingkatPendidikan: any = '';
  namaSekolah: any = '';
  jurusan: any = '';
  tahunLulus: any = '';

  jabatanPekerjaan: any = '';
  namaPerusahaan: any = '';
  lamaKerja: any = '';
  prestasi: any = '';

  posisiJabatan: any = '';
  noSK: any = '';
  tglMulaiJab: any = '';
  tglAkhirJab: any = '';
  lamaJabatan: any = '';

  tglMCU: any = '';
  levelKesehatan: any = '';

  //file Data Kesehatan
  private win: any = window;
  imageURI: any = "";
  imageShow: any = "assets/imgs/logo/camera.png";
  fileDocPath: any;
  fileName: any;
  fileType: any;
  imageFileName: any;

  //file Data Pelatihan - sertifikat
  imageURI2: any = "";
  imageShow2: any = "assets/imgs/logo/camera.png";
  fileDocPath2: any;
  fileName2: any;
  fileType2: any;
  imageFileName2: any;

  //file Data Pelatihan - evaluasi 1
  imageURI3: any = "";
  imageShow3: any = "assets/imgs/logo/camera.png";
  fileDocPath3: any;
  fileName3: any;
  fileType3: any;
  imageFileName3: any;

  //file Data Pelatihan - evaluasi 2
  imageURI4: any = "";
  imageShow4: any = "assets/imgs/logo/camera.png";
  fileDocPath4: any;
  fileName4: any;
  fileType4: any;
  imageFileName4: any;

  namaKeluarga: any = '';
  tglLahirKeluarga: any = '';
  hubKeluarga: any = '';
  nikKeluarga = '';

  deskripsiReward: any = '';
  tahunReward: any = '';
  jenisReward: any = '';
  instansiReward: any = '';

  nilaiKerjaTahunan: any = '';
  kategoriPerformansi: any = '';
  tahunPerformansi: any = '';

  namaPelatihan: any = '';
  tahunPelatihan: any = '';
  namaPenyelenggara: any = '';
  evaluasi1: any = '';
  evaluasi2: any = '';
  hargaPelatihan: any = '';
  lokasiPelatihan: any = '';
  tglPelatihan: any = '';
  ketPelatihan: any = '';

  namaFileSertifikat: any = '';
  namaFileEvaluasi1: any = '';
  namaFileEvaluasi2: any = '';

  data:any;



  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public datePipe: DatePipe,
    public datePicker: DatePicker,
    public viewCtrl: ViewController,
    public alertCtrl: AlertController,
    public transfer: FileTransfer,
    public fileChooser: FileChooser,
    public filepath: FilePath,
    public file: File,
    public camera: Camera,
    public platform: Platform,
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController,
    public inAppBrowser: InAppBrowser
  ) {
    let kat = navParams.get('kat');
    this.data = navParams.get('data');
    console.log(kat);
    console.log(this.data);

    if (kat == 'panggilandarurat' && this.data != null) {
      this.noDarurat = this.data['NO_DARURAT'];
      this.namaDarurat = this.data['NAMA'];
      this.hubunganDarurat = this.data['STATUS_HUBUNGAN'];
    }
    if (kat == 'pendidikanformal' && this.data != null) {
      this.tingkatPendidikan = this.data['TINGKAT_PEND'];
      this.namaSekolah = this.data['NAMA_INSTANSI'];
      this.jurusan = this.data['JURUSAN'];
      this.tahunLulus = this.data['TAHUN_LULUS'];
    }
    if (kat == 'pekerjaan' && this.data != null) {
      this.jabatanPekerjaan = this.data['JABATAN'];
      this.namaPerusahaan = this.data['NAMA_PERUSAHAAN'];
      this.lamaKerja = this.data['LAMA_KERJA'];
      this.prestasi = this.data['PRESTASI'];
    }
    if(kat == 'assigmenthistory' && this.data != null) {
      this.posisiJabatan = this.data['POSISI_JABATAN'];
      this.noSK = this.data['NO_SK'];
      this.tglMulaiJab = this.data['TGL_MULAI_JABATAN'];
      this.tglAkhirJab = this.data['TGL_AKHIR_JABATAN'];
      this.lamaJabatan = this.data['LAMA_JABATAN'];
    }
    if (kat == 'kesehatan' && this.data != null) {
      this.tglMCU = this.data['TGL_MCU'];
      this.levelKesehatan = this.data['LEVEL_KESEHATAN'];
    }
    if (kat == 'identitaskeluarga'&& this.data != null) {
      this.namaKeluarga = this.data['NAMA'];
      this.tglLahirKeluarga = this.data['TGL_LAHIR'];
      this.hubKeluarga = this.data['HUBUNGAN'];
      this.nikKeluarga = this.data['NIK'];
    }
    if(kat == 'rewardpunish' && this.data != null) {
      this.deskripsiReward  = this.data['DESKRIPSI'];
      this.tahunReward = this.data['TAHUN'];
      this.jenisReward = this.data['JENIS'];
      this.instansiReward = this.data['INSTANSI_YANG_MENGELUARKAN'];
    }
    if(kat == 'performa'&& this.data != null) {
      this.nilaiKerjaTahunan = this.data['NILAI_KINERJA_TAHUNAN'];
      this.kategoriPerformansi = this.data['KATEGORI'];
      this.tahunPerformansi = this.data['TAHUN'];
    }


  }

  ionViewDidLoad() {
    this.kat = this.navParams.get('kat');
  }

  checkFocus(data) {
    this.showDatePicker(data);
  }

  submit(type) {
    if (type == 'emergency') {
      var err = [];
      if (this.noDarurat == '' || this.noDarurat == null) {
        err.push("Nomor Darurat");
      }

      if (this.namaDarurat == '' || this.namaDarurat == null) {
        err.push("Nama Darurat");
      }

      if (this.hubunganDarurat == '' || this.hubunganDarurat == null) {
        err.push("Hubungan Darurat");
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
        this.viewCtrl.dismiss({
          data: {
            "ID_INFO": (this.data != null ) ? this.data['ID_INFO'] : '0',
            "NO_DARURAT": this.noDarurat,
            "NAMA": this.namaDarurat,
            "STATUS_HUBUNGAN": this.hubunganDarurat,
            "IS_DELETED": (this.data != null ) ? '3' : '2'
          }
        });
      }
    } else if (type == 'pend_formal') {
      var err = [];
      if (this.tingkatPendidikan == '' || this.tingkatPendidikan == null) {
        err.push("Tingkat Pendidikan");
      }
      if (this.namaSekolah == '' || this.namaSekolah == null) {
        err.push("Nama Sekolah");
      }
      if (this.jurusan == '' || this.jurusan == null) {
        err.push("Jurusan");
      }
      if (this.tahunLulus == '' || this.tahunLulus == null) {
        err.push("Tahun Lulus");
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
        this.viewCtrl.dismiss({
          data: {
            "ID_RIWAYAT_PEND": (this.data != null ) ? this.data['ID_RIWAYAT_PEND'] : '0',
            "TINGKAT_PEND": this.tingkatPendidikan,
            "NAMA_INSTANSI": this.namaSekolah,
            "JURUSAN": this.jurusan,
            "TAHUN_LULUS": this.tahunLulus,
            "IS_DELETED": (this.data != null ) ? '3' : '2'
          }
        });
      }
    } else if (type == 'pekerjaan') {
      var err = [];
      if (this.jabatanPekerjaan == '' || this.jabatanPekerjaan == null) {
        err.push("Jabatan Pekerjaan");
      }
      if (this.namaPerusahaan == '' || this.namaPerusahaan == null) {
        err.push("Nama Perusahaan");
      }
      if (this.lamaKerja == '' || this.lamaKerja == null) {
        err.push("Lama Kerja");
      }
      if (this.prestasi == '' || this.prestasi == null) {
        err.push("Prestasi");
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
        this.viewCtrl.dismiss({
          data: {
            "ID_RIWAYAT_PEKERJAAN": (this.data != null ) ? this.data['ID_RIWAYAT_PEKERJAAN'] : '0',
            "JABATAN": this.jabatanPekerjaan,
            "NAMA_PERUSAHAAN": this.namaPerusahaan,
            "LAMA_KERJA": this.lamaKerja,
            "PRESTASI": this.prestasi,
            "IS_DELETED": (this.data != null ) ? '3' : '2'
          }
        });
      }
    } else if (type == 'assigmenthistory') {
      var err = [];
      if (this.posisiJabatan == '' || this.posisiJabatan == null) {
        err.push("Posisi Jabatan");
      }
      if (this.noSK == '' || this.noSK == null) {
        err.push("No SK");
      }
      if (this.tglMulaiJab == '' || this.tglMulaiJab == null) {
        err.push("Tanggal Mulai");
      }
      if (this.tglAkhirJab == '' || this.tglAkhirJab == null) {
        err.push("Tanggal Akhir");
      }
      if (this.lamaJabatan == '' || this.lamaJabatan == null) {
        err.push("Lama Jabatan");
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
        this.viewCtrl.dismiss({
          data: {
            "POSISI_JABATAN": this.posisiJabatan,
            "NO_SK": this.noSK,
            "TGL_MULAI_JABATAN": this.tglMulaiJab,
            "TGL_AKHIR_JABATAN": this.tglAkhirJab,
            "LAMA_JABATAN": this.lamaJabatan,
            'ID_ASSIGNMENT': (this.data != null ) ? this.data['ID_ASSIGNMENT'] : '0',
            "IS_DELETED": (this.data != null ) ? '3' : '2'
          }
        });
      }
    } else if (type == 'kesehatan') {
      var err = [];
      if (this.tglMCU == '' || this.tglMCU == null) {
        err.push("Tanggal MCU");
      }
      if (this.levelKesehatan == '' || this.levelKesehatan == null) {
        err.push("Level Kesehatan");
      }

      if (this.data == null) {
        if ((this.imageURI == null || this.imageURI == '') && (this.fileName == null || this.fileName == '')) {
          err.push("File Hasil MCU");
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
        if ((this.imageURI == null || this.imageURI == '') && (this.fileName == null || this.fileName == '')) {
          this.viewCtrl.dismiss({
            data: {
              "TGL_MCU": this.tglMCU,
              "LEVEL_KESEHATAN": this.levelKesehatan,
              "UPLOAD_HASIL_MCU": (this.data != null ) ? this.data['UPLOAD_HASIL_MCU'] : '',
              "ID_RIWAYAT_KESEHATAN": (this.data != null ) ? this.data['ID_RIWAYAT_KESEHATAN'] : '0',
              "IS_DELETED": (this.data != null ) ? '3' : '2'
            }
          });
        } else {
          this.upload('kesehatan');
        }
          
        
      }
    } else if (type == 'identitaskeluarga') {
      var err = [];
      if (this.namaKeluarga == '' || this.namaKeluarga == null) {
        err.push("Nama Keluarga");
      }
      if (this.tglLahirKeluarga == '' || this.tglLahirKeluarga == null) {
        err.push("Tanggal Lahir");
      }
      if (this.hubKeluarga == '' || this.hubKeluarga == null) {
        err.push("Hubungan Keluarga");
      }
      if (this.nikKeluarga == '' || this.nikKeluarga == null) {
        err.push("NIK Keluarga");
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
        this.viewCtrl.dismiss({
          data: {
            "NAMA": this.namaKeluarga,
            "TGL_LAHIR": this.tglLahirKeluarga,
            "HUBUNGAN": this.hubKeluarga,
            "NIK": this.nikKeluarga,
            "TGL_NIKAH": null,
            'ID_IDENTITAS': (this.data != null ) ? this.data['ID_IDENTITAS'] : '0',
            "IS_DELETED": (this.data != null ) ? '3' : '2'
          }
        });
      }
    } else if (type == 'rewardpunish') {
      var err = [];
      if (this.deskripsiReward == '' || this.deskripsiReward == null) {
        err.push("Deskripsi");
      }
      if (this.tahunReward == '' || this.tahunReward == null) {
        err.push("Tanggal");
      }
      if (this.jenisReward == '' || this.jenisReward == null) {
        err.push("Jenis");
      }
      if (this.instansiReward == '' || this.instansiReward == null) {
        err.push("Instansi");
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
        this.viewCtrl.dismiss({
          data: {
            "DESKRIPSI": this.deskripsiReward,
            "TAHUN": this.tahunReward,
            "JENIS": this.jenisReward,
            "INSTANSI_YANG_MENGELUARKAN": this.instansiReward,
            "ID_PENGHUK": (this.data != null ) ? this.data['ID_PENGHUK'] :'0',
            "IS_DELETED": (this.data != null ) ? '3' : '2'
          }
        });
      }
    } else if (type == 'performa') {
      var err = [];
      if (this.nilaiKerjaTahunan == '' || this.nilaiKerjaTahunan == null) {
        err.push("Nilai Kerja Tahunan");
      }
      if (this.kategoriPerformansi == '' || this.kategoriPerformansi == null) {
        err.push("Kategori");
      }
      if (this.tahunPerformansi == '' || this.tahunPerformansi == null) {
        err.push("Tahun");
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
        this.viewCtrl.dismiss({
          data: {
            "NILAI_KINERJA_TAHUNAN": this.nilaiKerjaTahunan,
            "KATEGORI": this.kategoriPerformansi,
            "TAHUN": this.tahunPerformansi,
            "ID_RIWAYAT_PERFORMA": (this.data != null ) ? this.data['ID_RIWAYAT_PERFORMA'] : '0',
            "IS_DELETED": (this.data != null ) ? '3' : '2'
          }
        });
      }
    } else if (type == 'pelatihan') {
      var err = [];
      if (this.hargaPelatihan == '' || this.hargaPelatihan == null) {
        err.push("Harga Pelatihan");
      }
      if (this.lokasiPelatihan == '' || this.lokasiPelatihan == null) {
        err.push("Lokasi");
      }
      if (this.tglPelatihan == '' || this.tglPelatihan == null) {
        err.push("Tanggal Pelatihan");
      }
      if (this.namaPelatihan == '' || this.namaPelatihan == null) {
        err.push("Nama Pelatihan");
      }
      if (this.tahunPelatihan == '' || this.tahunPelatihan == null) {
        err.push("tahun Pelatihan");
      }
      if (this.namaPenyelenggara == '' || this.namaPenyelenggara == null) {
        err.push("Nama Penyelenggara");
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
        let loading = this.loadingCtrl.create({
          spinner: 'dots',
          content: "Menambahkan Data...",
          cssClass: 'transparent',
          dismissOnPageChange: true
        });
        loading.present();

        if (
          ((this.imageURI2 == null || this.imageURI2 == '') && (this.fileName2 == null || this.fileName2 == ''))
          && ((this.imageURI3 == null || this.imageURI3 == '') && (this.fileName3 == null || this.fileName3 == ''))
          && ((this.imageURI4 == null || this.imageURI4 == '') && (this.fileName4 == null || this.fileName4 == ''))
        ) {
          this.viewCtrl.dismiss({
            data: {
              "NAMA_PELATIHAN": this.namaPelatihan,
              "TAHUN_PELATIHAN": this.tahunPelatihan,
              "NAMA_PENYELENGGARA": this.namaPenyelenggara,
              "UPLOAD_BUKTI_SERTIFIKAT": this.namaFileSertifikat,
              "EVALUASI1": this.evaluasi1,
              "UPLOAD_DOK_EVAL1": this.namaFileEvaluasi1,
              "EVALUASI2": this.evaluasi2,
              "UPLOAD_DOK_EVAL2": this.namaFileEvaluasi2,
              "HARGA_PELATIHAN": this.hargaPelatihan,
              "LOKASI": this.lokasiPelatihan,
              "TGL_PELATIHAN": this.tglPelatihan,
              "KETERANGAN": this.ketPelatihan,
              "ID_RIWAYAT_PELATIHAN": '0',
              "IS_DELETED": (this.data != null ) ? '3' : '2'
            }
          });
          loading.dismiss();
        } else if (
          ((this.imageURI2 != null && this.imageURI2 != '') || (this.fileName2 != null && this.fileName2 != ''))
        ) {
          this.uploadSertifikat(loading);
        } else if (
          ((this.imageURI3 != null && this.imageURI3 != '') || (this.fileName3 != null && this.fileName3 != ''))
        ) {
          this.uploadEvaluasi1(loading);
        } else if (
          ((this.imageURI4 != null && this.imageURI4 != '') || (this.fileName4 != null && this.fileName4 != ''))
        ) {
          this.uploadEvaluasi2(loading);
        }
      }
    }

  }

  cancel() {
    this.viewCtrl.dismiss();
  }

  showDatePicker(type: number) {

    var myDate;
    myDate = new Date();

    if (type == 1 && (this.tglMulaiJab != null && this.tglMulaiJab != '')) {
      var dateSplit = this.tglMulaiJab.split("/");
      myDate = new Date(dateSplit[2], (dateSplit[1] != '0') ? parseInt(dateSplit[1]) - 1 : dateSplit[1], dateSplit[0]);
    }
    if (type == 2 && (this.tglAkhirJab != null && this.tglAkhirJab != '')) {
      var dateSplit = this.tglAkhirJab.split("/");
      myDate = new Date(dateSplit[2], (dateSplit[1] != '0') ? parseInt(dateSplit[1]) - 1 : dateSplit[1], dateSplit[0]);
    }
    if (type == 3 && (this.tglMCU != null && this.tglMCU != '')) {
      var dateSplit = this.tglMCU.split("/");
      myDate = new Date(dateSplit[2], (dateSplit[1] != '0') ? parseInt(dateSplit[1]) - 1 : dateSplit[1], dateSplit[0]);
    }
    if (type == 4 && (this.tglLahirKeluarga != null && this.tglLahirKeluarga != '')) {
      var dateSplit = this.tglLahirKeluarga.split("/");
      myDate = new Date(dateSplit[2], (dateSplit[1] != '0') ? parseInt(dateSplit[1]) - 1 : dateSplit[1], dateSplit[0]);
    } 
    if (type == 5 && (this.tglPelatihan != null && this.tglPelatihan != '')) {
      var dateSplit = this.tglPelatihan.split("/");
      myDate = new Date(dateSplit[2], (dateSplit[1] != '0') ? parseInt(dateSplit[1]) - 1 : dateSplit[1], dateSplit[0]);
    }
    // if (type == 3 && (this.tmtJabatan != null && this.tmtJabatan != '')) {
    //   var dateSplit = this.tmtJabatan.split("/");
    //   myDate = new Date(dateSplit[2],dateSplit[1], dateSplit[0]);
    // }
    // if (type == 4 && (this.tmtKelasJabatan != null && this.tmtKelasJabatan != '')) {
    //   var dateSplit = this.tmtKelasJabatan.split("/");
    //   myDate = new Date(dateSplit[2],dateSplit[1], dateSplit[0]);
    // }
    // if (type == 5 && (this.tmtGolongan != null && this.tmtGolongan != '')) {
    //   var dateSplit = this.tmtGolongan.split("/");
    //   myDate = new Date(dateSplit[2],dateSplit[1], dateSplit[0]);
    // }
    // if (type == 6 && (this.tglMasukPPI != null && this.tglMasukPPI != '')) {
    //   var dateSplit = this.tglMasukPPI.split("/");
    //   myDate = new Date(dateSplit[2],dateSplit[1], dateSplit[0]);
    // }
    // if (type == 7 && (this.tglLahir != null && this.tglLahir != '')) {
    //   var dateSplit = this.tglLahir.split("/");
    //   myDate = new Date(dateSplit[2],dateSplit[1], dateSplit[0]);
    // }
    // if (type == 8 && (this.tglLahir != null && this.tglLahir != '')) {
    //   var dateSplit = this.tglLahir.split("/");
    //   myDate = new Date(dateSplit[2],dateSplit[1], dateSplit[0]);
    // }

    this.datePicker.show({
      date: myDate,
      mode: 'date',
      // minDate: this.platform.is('ios') ? new Date() : (new Date()).valueOf(),
      androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_LIGHT
    }).then(date => {
      if (type == 1) {
        this.tglMulaiJab = this.datePipe.transform(date, 'dd/MM/yyyy');
      }
      if (type == 2) {
        this.tglAkhirJab = this.datePipe.transform(date, 'dd/MM/yyyy');
        if (this.tglMulaiJab != '' || this.tglMulaiJab != null) {
          var tglMulaiSplit = this.tglMulaiJab.split('/');
          var tglAkhirSplit = this.tglAkhirJab.split('/');
          var tglMulaiDate = new Date(tglMulaiSplit[2], (tglMulaiSplit[1] != '0') ? parseInt(tglMulaiSplit[1]) - 1 : tglMulaiSplit[1], tglMulaiSplit[0]);
          var tglAkhirDate = new Date(tglAkhirSplit[2], (tglAkhirSplit[1] != '0') ? parseInt(tglAkhirSplit[1]) - 1 : tglAkhirSplit[1], tglAkhirSplit[0]);

          if (tglMulaiDate > tglAkhirDate) {
            this.lamaJabatan = '';
          } else {
            this.lamaJabatan = this.getCountDate(this.tglMulaiJab, this.tglAkhirJab);
          }
        } else {
          this.lamaJabatan = '';
        }
      }
      if (type == 3) {
        this.tglMCU = this.datePipe.transform(date, 'dd/MM/yyyy');
      }
      if (type == 4) {
        this.tglLahirKeluarga = this.datePipe.transform(date, 'dd/MM/yyyy');
      }
      if (type == 5) {
        this.tglPelatihan = this.datePipe.transform(date, 'dd/MM/yyyy');
      }
      // if (type == 6) {
      //   this.tglMasukPPI = this.datePipe.transform(date, 'dd/MM/yyyy');
      // }
      // if (type == 7) {
      //   this.tglLahir = this.datePipe.transform(date, 'dd/MM/yyyy');
      // }
      // if (type == 8) {
      //   this.tglLahir = this.datePipe.transform(date, 'dd/MM/yyyy');
      // }
    },
      err => console.log('Error occurred while getting date: ', err)
    );
  }

  getCountDate(startDate, endDate) {
    var endDateSplit = endDate.split('/');
    var today = new Date(endDateSplit[2], (endDateSplit[1] != '0') ? parseInt(endDateSplit[1]) - 1 : endDateSplit[1], endDateSplit[0]);

    var yearNow = today.getFullYear();
    var monthNow = today.getMonth();
    var dateNow = today.getDate();

    var startDateSplit = startDate.split('/');
    var dob = new Date(startDateSplit[2], (endDateSplit[1] != '0') ? parseInt(endDateSplit[1]) - 1 : endDateSplit[1], startDateSplit[0]);

    var yearDob = dob.getFullYear();
    var monthDob = dob.getMonth();
    var dateDob = dob.getDate();
    var ageString = "";
    var yearString = "";
    var monthString = "";
    var dayString = "";


    var yearAge = yearNow - yearDob;

    if (monthNow >= monthDob)
      var monthAge = monthNow - monthDob;
    else {
      yearAge--;
      var monthAge = 12 + monthNow - monthDob;
    }

    if (dateNow >= dateDob)
      var dateAge = dateNow - dateDob;
    else {
      monthAge--;
      var dateAge = 31 + dateNow - dateDob;

      if (monthAge < 0) {
        monthAge = 11;
        yearAge--;
      }
    }

    var age = {
      years: yearAge,
      months: monthAge,
      days: dateAge
    };

    if (age.years > 1) yearString = " Tahun";
    else yearString = " Tahun";
    if (age.months > 1) monthString = " Bulan";
    else monthString = " Bulan";
    if (age.days > 1) dayString = " Hari";
    else dayString = " Hari";


    if ((age.years > 0) && (age.months > 0) && (age.days > 0))
      ageString = age.years + yearString + " " + age.months + monthString + " " + age.days + dayString;
    else if ((age.years == 0) && (age.months == 0) && (age.days > 0))
      ageString = age.days + dayString;
    else if ((age.years > 0) && (age.months == 0) && (age.days == 0))
      ageString = age.years + yearString;
    else if ((age.years > 0) && (age.months > 0) && (age.days == 0))
      ageString = age.years + yearString + " " + age.months + monthString;
    else if ((age.years == 0) && (age.months > 0) && (age.days > 0))
      ageString = age.months + monthString + " " + age.days + dayString;
    else if ((age.years > 0) && (age.months == 0) && (age.days > 0))
      ageString = age.years + yearString + " " + age.days + dayString;
    else if ((age.years == 0) && (age.months > 0) && (age.days == 0))
      ageString = age.months + monthString;
    else ageString = "Oops! Could not calculate age!";

    return ageString;
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
      }
      else if (type == '2') {
        this.imageShow2 = this.win.Ionic.WebView.convertFileSrc(imageData);
        this.imageURI2 = imageData;
        URI = this.imageURI2;
      }
      else if (type == '3') {
        this.imageShow3 = this.win.Ionic.WebView.convertFileSrc(imageData);
        this.imageURI3 = imageData;
        URI = this.imageURI3;
      }
      else if (type == '4') {
        this.imageShow4 = this.win.Ionic.WebView.convertFileSrc(imageData);
        this.imageURI4 = imageData;
        URI = this.imageURI4;
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
      }
      else if (type == '2') {
        this.imageFileName2 = filename;
      }
      else if (type == '3') {
        this.imageFileName3 = filename;
      }
      else if (type == '4') {
        this.imageFileName4 = filename;
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
    }
    else if (type == '2') {
      if (this.fileType2 == 'gambar') {
        var d = new Date(), n = d.getTime();
        newFileName = n + "_konsumsi.jpg";
      } else {
        // console.log('error disini');
      }
    }
    else if (type == '3') {
      if (this.fileType3 == 'gambar') {
        var d = new Date(), n = d.getTime();
        newFileName = n + "_konsumsi.jpg";
      } else {
        // console.log('error disini');
      }
    }
    else if (type == '4') {
      if (this.fileType4 == 'gambar') {
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

  openChooser(type) {
    this.fileChooser.open()
      .then(uri => {
        // console.log(uri);
        if (type == '1') {
          this.fileDocPath = uri;
          this.fileName = uri.substr(uri.lastIndexOf('/') + 1);
          this.fileName = this.fileName.substr(10);
          this.fileName = this.fileName.replace(/%20/g, " ");
        }
        else if (type == '2') {
          this.fileDocPath2 = uri;
          this.fileName2 = uri.substr(uri.lastIndexOf('/') + 1);
          this.fileName2 = this.fileName.substr(10);
          this.fileName2 = this.fileName.replace(/%20/g, " ");
        }
        else if (type == '3') {
          this.fileDocPath3 = uri;
          this.fileName3 = uri.substr(uri.lastIndexOf('/') + 1);
          this.fileName3 = this.fileName.substr(10);
          this.fileName3 = this.fileName.replace(/%20/g, " ");
        }
        else if (type == '4') {
          this.fileDocPath4 = uri;
          this.fileName4 = uri.substr(uri.lastIndexOf('/') + 1);
          this.fileName4 = this.fileName.substr(10);
          this.fileName4 = this.fileName.replace(/%20/g, " ");
        }

        console.log(this.fileName);
        // console.log(this.fileName2);
      })
      .catch(e => {
        // console.log(e)
      });
  }

  upload(type) {
    // console.log(this.fileDocPath);
    let loading = this.loadingCtrl.create({
      spinner: 'dots',
      content: "Menambahkan Data...",
      cssClass: 'transparent',
      dismissOnPageChange: true
    });
    loading.present();

    var myfileName;
    var myPathImage = '';
    var myFileDocPath;
    var myFileType = '';
    var myData;

    if (type == 'kesehatan') {
      myfileName = this.fileName
      myPathImage = this.pathForImage(this.imageFileName);
      myFileDocPath = this.fileDocPath;
      myFileType = this.fileType;
      myData = {
        "TGL_MCU": this.tglMCU,
        "LEVEL_KESEHATAN": this.levelKesehatan,
        "UPLOAD_HASIL_MCU": '',
        "ID_RIWAYAT_KESEHATAN": (this.data != null ) ? this.data['ID_RIWAYAT_KESEHATAN'] : '0',
        "IS_DELETED": (this.data != null ) ? '3' : '2'
      }
    }

    if (myFileType == 'file') {
      const fileTransfer: FileTransferObject = this.transfer.create();
      var options = {
        fileKey: "file",
        fileName: myfileName,
        chunkedMode: false,
        mimeType: "multipart/form-data",
        params: {}
      };

      fileTransfer.upload(
        myFileDocPath,
        url_upload_att_cv, options)
        .then((data) => {
          // console.log(JSON.stringify(data));
          // console.log(" Uploaded Successfully");    
          if (data['responseCode'] == 200) {
            var responData = JSON.parse(String(data['response']));
            // console.log(responData);

            if (responData['rcmsg'] == 'SUCCESS') {
              if (type == 'kesehatan') {
                myData['UPLOAD_HASIL_MCU'] = responData['data'];
              }

              this.viewCtrl.dismiss({
                data: myData
              });

            } else {
              let toast = this.toastCtrl.create({
                message: "file attachment gagal diupload, silahkan hubungi admin.",
                duration: 3000,
                position: 'bottom'
              });
              toast.present();
            }

          } else {
            let toast = this.toastCtrl.create({
              message: "file attachment gagal diupload, silahkan hubungi admin.",
              duration: 3000,
              position: 'bottom'
            });
            toast.present();
          }
          loading.dismiss();

        }, (err) => {
          let toast = this.toastCtrl.create({
            message: "file attachment gagal diupload, silahkan hubungi admin.",
            duration: 3000,
            position: 'bottom'
          });
          toast.present();
          loading.dismiss();
        });
    } else if (myFileType == 'gambar') {
      const fileTransfer: FileTransferObject = this.transfer.create();

      var options = {
        fileKey: "file",
        fileName: myfileName,
        chunkedMode: false,
        mimeType: "multipart/form-data",
        params: {}
      };

      fileTransfer.upload(
        myPathImage,
        url_upload_att_cv, options)
        .then((data) => {
          if (data['responseCode'] == 200) {

            var responData = JSON.parse(String(data['response']));
            console.log(responData);

            if (responData['rcmsg'] == 'SUCCESS') {
              if (type == 'kesehatan') {
                myData['UPLOAD_HASIL_MCU'] = responData['data'];
              }

              this.viewCtrl.dismiss({
                data: myData
              });

            } else {
              let toast = this.toastCtrl.create({
                message: "file attachment gagal diupload, silahkan hubungi admin.",
                duration: 3000,
                position: 'bottom'
              });
              toast.present();
            }
          } else {
            let toast = this.toastCtrl.create({
              message: "file attachment gagal diupload, silahkan hubungi admin.",
              duration: 3000,
              position: 'bottom'
            });
            toast.present();
          }
          loading.dismiss();
        }, (err) => {
          let toast = this.toastCtrl.create({
            message: "file attachment gagal diupload, silahkan hubungi admin.",
            duration: 3000,
            position: 'bottom'
          });
          toast.present();
          loading.dismiss();
        });
    }
  }

  uploadSertifikat(loader) {
    var myfileName = this.fileName2;
    var myPathImage = this.pathForImage(this.imageFileName2);
    var myFileDocPath = this.fileDocPath2;
    var myFileType = this.fileType2;

    if (myFileType == 'file') {
      const fileTransfer: FileTransferObject = this.transfer.create();
      var options = {
        fileKey: "file",
        fileName: myfileName,
        chunkedMode: false,
        mimeType: "multipart/form-data",
        params: {}
      };

      fileTransfer.upload(
        myFileDocPath,
        url_upload_att_cv, options)
        .then((data) => {
          // console.log(JSON.stringify(data));
          // console.log(" Uploaded Successfully");    
          if (data['responseCode'] == 200) {
            var responData = JSON.parse(String(data['response']));
            console.log(responData);

            if (responData['rcmsg'] == 'SUCCESS') {
              this.namaFileSertifikat = responData['data'];
              if (
                (((this.imageURI3 != null && this.imageURI3 != '') || (this.fileName3 != null && this.fileName3 != '')) && (this.namaFileEvaluasi1 == null || this.namaFileEvaluasi1 == ''))
              ) {
                this.uploadEvaluasi1(loader);
              } else if (
                (((this.imageURI4 != null && this.imageURI4 != '') || (this.fileName4 != null && this.fileName4 != '')) && (this.namaFileEvaluasi2 == null || this.namaFileEvaluasi2 == ''))
              ) {
                this.uploadEvaluasi2(loader);
              } else {
                this.viewCtrl.dismiss({
                  data: {
                    "NAMA_PELATIHAN": this.namaPelatihan,
                    "TAHUN_PELATIHAN": this.tahunPelatihan,
                    "NAMA_PENYELENGGARA": this.namaPenyelenggara,
                    "UPLOAD_BUKTI_SERTIFIKAT": this.namaFileSertifikat,
                    "EVALUASI1": this.evaluasi1,
                    "UPLOAD_DOK_EVAL1": this.namaFileEvaluasi1,
                    "EVALUASI2": this.evaluasi2,
                    "UPLOAD_DOK_EVAL2": this.namaFileEvaluasi2,
                    "HARGA_PELATIHAN": this.hargaPelatihan,
                    "LOKASI": this.lokasiPelatihan,
                    "TGL_PELATIHAN": this.tglPelatihan,
                    "KETERANGAN": this.ketPelatihan,
                    "ID_RIWAYAT_PELATIHAN": '0',
                    "IS_DELETED": (this.data != null ) ? '3' : '2'
                  }
                });
                loader.dismiss();
              }

            } else {
              let toast = this.toastCtrl.create({
                message: "file attachment gagal diupload, silahkan hubungi admin.",
                duration: 3000,
                position: 'bottom'
              });
              toast.present();
              loader.dismiss();
            }

          } else {
            let toast = this.toastCtrl.create({
              message: "file attachment gagal diupload, silahkan hubungi admin.",
              duration: 3000,
              position: 'bottom'
            });
            toast.present();
            loader.dismiss();
          }

        }, (err) => {
          let toast = this.toastCtrl.create({
            message: "file attachment gagal diupload, silahkan hubungi admin.",
            duration: 3000,
            position: 'bottom'
          });
          toast.present();
          loader.dismiss();
        });
    } else if (myFileType == 'gambar') {
      const fileTransfer: FileTransferObject = this.transfer.create();

      var options = {
        fileKey: "file",
        fileName: myfileName,
        chunkedMode: false,
        mimeType: "multipart/form-data",
        params: {}
      };

      fileTransfer.upload(
        myPathImage,
        url_upload_att_cv, options)
        .then((data) => {
          if (data['responseCode'] == 200) {

            var responData = JSON.parse(String(data['response']));
            console.log(responData);

            if (responData['rcmsg'] == 'SUCCESS') {
              this.namaFileSertifikat = responData['data'];
              if (
                (((this.imageURI3 != null && this.imageURI3 != '') || (this.fileName3 != null && this.fileName3 != '')) && (this.namaFileEvaluasi1 == null || this.namaFileEvaluasi1 == ''))
              ) {
                this.uploadEvaluasi1(loader);
              } else if (
                (((this.imageURI4 != null && this.imageURI4 != '') || (this.fileName4 != null && this.fileName4 != '')) && (this.namaFileEvaluasi2 == null || this.namaFileEvaluasi2 == ''))
              ) {
                this.uploadEvaluasi2(loader);
              } else {
                this.viewCtrl.dismiss({
                  data: {
                    "NAMA_PELATIHAN": this.namaPelatihan,
                    "TAHUN_PELATIHAN": this.tahunPelatihan,
                    "NAMA_PENYELENGGARA": this.namaPenyelenggara,
                    "UPLOAD_BUKTI_SERTIFIKAT": this.namaFileSertifikat,
                    "EVALUASI1": this.evaluasi1,
                    "UPLOAD_DOK_EVAL1": this.namaFileEvaluasi1,
                    "EVALUASI2": this.evaluasi2,
                    "UPLOAD_DOK_EVAL2": this.namaFileEvaluasi2,
                    "HARGA_PELATIHAN": this.hargaPelatihan,
                    "LOKASI": this.lokasiPelatihan,
                    "TGL_PELATIHAN": this.tglPelatihan,
                    "KETERANGAN": this.ketPelatihan,
                    "ID_RIWAYAT_PELATIHAN": '0',
                    "IS_DELETED": (this.data != null ) ? '3' : '2'
                  }
                });
                loader.dismiss();
              }
            } else {
              let toast = this.toastCtrl.create({
                message: "file attachment gagal diupload, silahkan hubungi admin.",
                duration: 3000,
                position: 'bottom'
              });
              toast.present();
              loader.dismiss();
            }
          } else {
            let toast = this.toastCtrl.create({
              message: "file attachment gagal diupload, silahkan hubungi admin.",
              duration: 3000,
              position: 'bottom'
            });
            toast.present();
            loader.dismiss();
          }
          
        }, (err) => {
          let toast = this.toastCtrl.create({
            message: "file attachment gagal diupload, silahkan hubungi admin.",
            duration: 3000,
            position: 'bottom'
          });
          toast.present();
          loader.dismiss();
        });
    }
  }

  uploadEvaluasi1(loader) {
    var myfileName = this.fileName3;
    var myPathImage = this.pathForImage(this.imageFileName3);
    var myFileDocPath = this.fileDocPath3;
    var myFileType = this.fileType3;

    if (myFileType == 'file') {
      const fileTransfer: FileTransferObject = this.transfer.create();
      var options = {
        fileKey: "file",
        fileName: myfileName,
        chunkedMode: false,
        mimeType: "multipart/form-data",
        params: {}
      };

      fileTransfer.upload(
        myFileDocPath,
        url_upload_att_cv, options)
        .then((data) => {
          // console.log(JSON.stringify(data));
          // console.log(" Uploaded Successfully");    
          if (data['responseCode'] == 200) {
            var responData = JSON.parse(String(data['response']));
            console.log(responData);

            if (responData['rcmsg'] == 'SUCCESS') {
              this.namaFileEvaluasi1 = responData['data'];
              if (
                (((this.imageURI2 != null && this.imageURI2 != '') || (this.fileName2 != null && this.fileName2 != '')) && (this.namaFileSertifikat == null || this.namaFileSertifikat == ''))
              ) {
                this.uploadSertifikat(loader);
              } else if (
                (((this.imageURI4 != null && this.imageURI4 != '') || (this.fileName4 != null && this.fileName4 != '')) && (this.namaFileEvaluasi2 == null || this.namaFileEvaluasi2 == ''))
              ) {
                this.uploadEvaluasi2(loader);
              } else {
                this.viewCtrl.dismiss({
                  data: {
                    "NAMA_PELATIHAN": this.namaPelatihan,
                    "TAHUN_PELATIHAN": this.tahunPelatihan,
                    "NAMA_PENYELENGGARA": this.namaPenyelenggara,
                    "UPLOAD_BUKTI_SERTIFIKAT": this.namaFileSertifikat,
                    "EVALUASI1": this.evaluasi1,
                    "UPLOAD_DOK_EVAL1": this.namaFileEvaluasi1,
                    "EVALUASI2": this.evaluasi2,
                    "UPLOAD_DOK_EVAL2": this.namaFileEvaluasi2,
                    "HARGA_PELATIHAN": this.hargaPelatihan,
                    "LOKASI": this.lokasiPelatihan,
                    "TGL_PELATIHAN": this.tglPelatihan,
                    "KETERANGAN": this.ketPelatihan,
                    "ID_RIWAYAT_PELATIHAN": '0',
                    "IS_DELETED": (this.data != null ) ? '3' : '2'
                  }
                });
                loader.dismiss();
              }

            } else {
              let toast = this.toastCtrl.create({
                message: "file attachment gagal diupload, silahkan hubungi admin.",
                duration: 3000,
                position: 'bottom'
              });
              toast.present();
              loader.dismiss();
            }

          } else {
            let toast = this.toastCtrl.create({
              message: "file attachment gagal diupload, silahkan hubungi admin.",
              duration: 3000,
              position: 'bottom'
            });
            toast.present();
            loader.dismiss();
          }
          

        }, (err) => {
          let toast = this.toastCtrl.create({
            message: "file attachment gagal diupload, silahkan hubungi admin.",
            duration: 3000,
            position: 'bottom'
          });
          toast.present();
          loader.dismiss();
        });
    } else if (myFileType == 'gambar') {
      const fileTransfer: FileTransferObject = this.transfer.create();

      var options = {
        fileKey: "file",
        fileName: myfileName,
        chunkedMode: false,
        mimeType: "multipart/form-data",
        params: {}
      };

      fileTransfer.upload(
        myPathImage,
        url_upload_att_cv, options)
        .then((data) => {
          if (data['responseCode'] == 200) {

            var responData = JSON.parse(String(data['response']));
            console.log(responData);

            if (responData['rcmsg'] == 'SUCCESS') {
              this.namaFileEvaluasi1 = responData['data'];
              if (
                (((this.imageURI2 != null && this.imageURI2 != '') || (this.fileName2 != null && this.fileName2 != '')) && (this.namaFileSertifikat == null || this.namaFileSertifikat == ''))
              ) {
                this.uploadSertifikat(loader);
              } else if (
                (((this.imageURI4 != null && this.imageURI4 != '') || (this.fileName4 != null && this.fileName4 != '')) && (this.namaFileEvaluasi2 == null || this.namaFileEvaluasi2 == ''))
              ) {
                this.uploadEvaluasi2(loader);
              } else {
                this.viewCtrl.dismiss({
                  data: {
                    "NAMA_PELATIHAN": this.namaPelatihan,
                    "TAHUN_PELATIHAN": this.tahunPelatihan,
                    "NAMA_PENYELENGGARA": this.namaPenyelenggara,
                    "UPLOAD_BUKTI_SERTIFIKAT": this.namaFileSertifikat,
                    "EVALUASI1": this.evaluasi1,
                    "UPLOAD_DOK_EVAL1": this.namaFileEvaluasi1,
                    "EVALUASI2": this.evaluasi2,
                    "UPLOAD_DOK_EVAL2": this.namaFileEvaluasi2,
                    "HARGA_PELATIHAN": this.hargaPelatihan,
                    "LOKASI": this.lokasiPelatihan,
                    "TGL_PELATIHAN": this.tglPelatihan,
                    "KETERANGAN": this.ketPelatihan,
                    "ID_RIWAYAT_PELATIHAN": '0',
                    "IS_DELETED": (this.data != null ) ? '3' : '2'
                  }
                });
                loader.dismiss();
              }

            } else {
              let toast = this.toastCtrl.create({
                message: "file attachment gagal diupload, silahkan hubungi admin.",
                duration: 3000,
                position: 'bottom'
              });
              toast.present();
              loader.dismiss();
            }
          } else {
            let toast = this.toastCtrl.create({
              message: "file attachment gagal diupload, silahkan hubungi admin.",
              duration: 3000,
              position: 'bottom'
            });
            toast.present();
            loader.dismiss();
          }
          
        }, (err) => {
          let toast = this.toastCtrl.create({
            message: "file attachment gagal diupload, silahkan hubungi admin.",
            duration: 3000,
            position: 'bottom'
          });
          toast.present();
          loader.dismiss();
        });
    }
  }

  uploadEvaluasi2(loader) {
    var myfileName = this.fileName4;
    var myPathImage = this.pathForImage(this.imageFileName4);
    var myFileDocPath = this.fileDocPath4;
    var myFileType = this.fileType4;

    if (myFileType == 'file') {
      const fileTransfer: FileTransferObject = this.transfer.create();
      var options = {
        fileKey: "file",
        fileName: myfileName,
        chunkedMode: false,
        mimeType: "multipart/form-data",
        params: {}
      };

      fileTransfer.upload(
        myFileDocPath,
        url_upload_att_cv, options)
        .then((data) => {
          // console.log(JSON.stringify(data));
          // console.log(" Uploaded Successfully");    
          if (data['responseCode'] == 200) {
            var responData = JSON.parse(String(data['response']));
            console.log(responData);

            if (responData['rcmsg'] == 'SUCCESS') {
              this.namaFileEvaluasi2 = responData['data'];
              if (
                (((this.imageURI3 != null && this.imageURI3 != '') || (this.fileName3 != null && this.fileName3 != '')) && (this.namaFileEvaluasi1 == null || this.namaFileEvaluasi1 == ''))
              ) {
                this.uploadEvaluasi1(loader);
              } else if (
                (((this.imageURI2 != null && this.imageURI2 != '') || (this.fileName2 != null && this.fileName2 != '')) && (this.namaFileSertifikat == null || this.namaFileSertifikat == ''))
              ) {
                this.uploadSertifikat(loader);
              } else {
                this.viewCtrl.dismiss({
                  data: {
                    "NAMA_PELATIHAN": this.namaPelatihan,
                    "TAHUN_PELATIHAN": this.tahunPelatihan,
                    "NAMA_PENYELENGGARA": this.namaPenyelenggara,
                    "UPLOAD_BUKTI_SERTIFIKAT": this.namaFileSertifikat,
                    "EVALUASI1": this.evaluasi1,
                    "UPLOAD_DOK_EVAL1": this.namaFileEvaluasi1,
                    "EVALUASI2": this.evaluasi2,
                    "UPLOAD_DOK_EVAL2": this.namaFileEvaluasi2,
                    "HARGA_PELATIHAN": this.hargaPelatihan,
                    "LOKASI": this.lokasiPelatihan,
                    "TGL_PELATIHAN": this.tglPelatihan,
                    "KETERANGAN": this.ketPelatihan,
                    "ID_RIWAYAT_PELATIHAN": '0',
                    "IS_DELETED": (this.data != null ) ? '3' : '2'
                  }
                });
                loader.dismiss();
              }

            } else {
              let toast = this.toastCtrl.create({
                message: "file attachment gagal diupload, silahkan hubungi admin.",
                duration: 3000,
                position: 'bottom'
              });
              toast.present();
            }

          } else {
            let toast = this.toastCtrl.create({
              message: "file attachment gagal diupload, silahkan hubungi admin.",
              duration: 3000,
              position: 'bottom'
            });
            toast.present();
          }
          loader.dismiss();

        }, (err) => {
          let toast = this.toastCtrl.create({
            message: "file attachment gagal diupload, silahkan hubungi admin.",
            duration: 3000,
            position: 'bottom'
          });
          toast.present();
          loader.dismiss();
        });
    } else if (myFileType == 'gambar') {
      const fileTransfer: FileTransferObject = this.transfer.create();

      var options = {
        fileKey: "file",
        fileName: myfileName,
        chunkedMode: false,
        mimeType: "multipart/form-data",
        params: {}
      };

      fileTransfer.upload(
        myPathImage,
        url_upload_att_cv, options)
        .then((data) => {
          if (data['responseCode'] == 200) {

            var responData = JSON.parse(String(data['response']));
            console.log(responData);

            if (responData['rcmsg'] == 'SUCCESS') {
              this.namaFileEvaluasi2 = responData['data'];
              if (
                (((this.imageURI3 != null && this.imageURI3 != '') || (this.fileName3 != null && this.fileName3 != '')) && (this.namaFileEvaluasi1 == null || this.namaFileEvaluasi1 == ''))
              ) {
                this.uploadEvaluasi1(loader);
              } else if (
                (((this.imageURI2 != null && this.imageURI2 != '') || (this.fileName2 != null && this.fileName2 != '')) && (this.namaFileSertifikat == null || this.namaFileSertifikat == ''))
              ) {
                this.uploadSertifikat(loader);
              } else {
                this.viewCtrl.dismiss({
                  data: {
                    "NAMA_PELATIHAN": this.namaPelatihan,
                    "TAHUN_PELATIHAN": this.tahunPelatihan,
                    "NAMA_PENYELENGGARA": this.namaPenyelenggara,
                    "UPLOAD_BUKTI_SERTIFIKAT": this.namaFileSertifikat,
                    "EVALUASI1": this.evaluasi1,
                    "UPLOAD_DOK_EVAL1": this.namaFileEvaluasi1,
                    "EVALUASI2": this.evaluasi2,
                    "UPLOAD_DOK_EVAL2": this.namaFileEvaluasi2,
                    "HARGA_PELATIHAN": this.hargaPelatihan,
                    "LOKASI": this.lokasiPelatihan,
                    "TGL_PELATIHAN": this.tglPelatihan,
                    "KETERANGAN": this.ketPelatihan,
                    "ID_RIWAYAT_PELATIHAN": '0',
                    "IS_DELETED": (this.data != null ) ? '3' : '2'
                  }
                });
                loader.dismiss();
              }

            } else {
              let toast = this.toastCtrl.create({
                message: "file attachment gagal diupload, silahkan hubungi admin.",
                duration: 3000,
                position: 'bottom'
              });
              toast.present();
              loader.dismiss();
            }
          } else {
            let toast = this.toastCtrl.create({
              message: "file attachment gagal diupload, silahkan hubungi admin.",
              duration: 3000,
              position: 'bottom'
            });
            toast.present();
            loader.dismiss();
          }
         
        }, (err) => {
          let toast = this.toastCtrl.create({
            message: "file attachment gagal diupload, silahkan hubungi admin.",
            duration: 3000,
            position: 'bottom'
          });
          toast.present();
          loader.dismiss();
        });
    }
  }


  downloadAtt(data) {
    const options: InAppBrowserOptions = {
      zoom: "no",
    };
    const browser = this.inAppBrowser.create(url_download_att_cv + data, "_system", options);
  }
}
