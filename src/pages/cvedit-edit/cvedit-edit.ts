import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, AlertController, Platform, ToastController, LoadingController } from 'ionic-angular';
import { DatePicker } from "@ionic-native/date-picker";
import { DatePipe } from "@angular/common";

import { FilePath } from '@ionic-native/file-path';
import { File } from '@ionic-native/file';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { FileChooser } from '@ionic-native/file-chooser';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { url_upload_att_cv } from '../../config';

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
    public loadingCtrl: LoadingController
  ) {
    let kat = navParams.get('kat');
    console.log(kat);
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
            "NO_DARURAT": this.noDarurat,
            "NAMA": this.namaDarurat,
            "STATUS_HUBUNGAN": this.hubunganDarurat,
            "IS_DELETED": '2'
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
            "TINGKAT_PEND": this.tingkatPendidikan,
            "NAMA_INSTANSI": this.namaSekolah,
            "JURUSAN": this.jurusan,
            "TAHUN_LULUS": this.tahunLulus,
            "IS_DELETED": '2'
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
            "JABATAN": this.jabatanPekerjaan,
            "NAMA_PERUSAHAAN": this.namaPerusahaan,
            "LAMA_KERJA": this.lamaKerja,
            "PRESTASI": this.prestasi,
            "IS_DELETED": '2'
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
            'ID_ASSIGNMENT': '0',
            "IS_DELETED": '2',
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
      if ((this.imageURI == null || this.imageURI == '') && (this.fileName == null || this.fileName == '')) {
        err.push("File Hasil MCU");
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
        this.upload('kesehatan');
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
      myDate = new Date(dateSplit[2], (dateSplit[1] != '0') ? parseInt(dateSplit[1])-1 : dateSplit[1], dateSplit[0]);
    }
    if (type == 2 && (this.tglAkhirJab != null && this.tglAkhirJab != '')) {
      var dateSplit = this.tglAkhirJab.split("/");
      myDate = new Date(dateSplit[2], (dateSplit[1] != '0') ? parseInt(dateSplit[1])-1 : dateSplit[1], dateSplit[0]);
    }
    if (type == 3 && (this.tglMCU != null && this.tglMCU != '')) {
      var dateSplit = this.tglMCU.split("/");
      myDate = new Date(dateSplit[2], (dateSplit[1] != '0') ? parseInt(dateSplit[1])-1 : dateSplit[1], dateSplit[0]);
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
          var tglMulaiDate = new Date(tglMulaiSplit[2], (tglMulaiSplit[1] != '0') ? parseInt(tglMulaiSplit[1])-1 : tglMulaiSplit[1], tglMulaiSplit[0]);
          var tglAkhirDate = new Date(tglAkhirSplit[2], (tglAkhirSplit[1] != '0') ? parseInt(tglAkhirSplit[1])-1 : tglAkhirSplit[1], tglAkhirSplit[0]);

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
      // if (type == 3) {
      //   this.tmtJabatan = this.datePipe.transform(date, 'dd/MM/yyyy');
      // }
      // if (type == 4) {
      //   this.tmtKelasJabatan = this.datePipe.transform(date, 'dd/MM/yyyy');
      // }
      // if (type == 5) {
      //   this.tmtGolongan = this.datePipe.transform(date, 'dd/MM/yyyy');
      // }
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
    var today = new Date(endDateSplit[2], (endDateSplit[1] != '0') ? parseInt(endDateSplit[1])-1 : endDateSplit[1], endDateSplit[0]);

    var yearNow = today.getFullYear();
    var monthNow = today.getMonth();
    var dateNow = today.getDate();

    var startDateSplit = startDate.split('/');
    var dob = new Date(startDateSplit[2], (endDateSplit[1] != '0') ? parseInt(endDateSplit[1])-1 : endDateSplit[1], startDateSplit[0]);

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
      // else if (type == '2') {
      //   this.imageShow2 = this.win.Ionic.WebView.convertFileSrc(imageData);
      //   this.imageURI2 = imageData;
      //   URI = this.imageURI2;
      // }


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
      // else if (type == '2') {
      //   this.imageFileName2 = filename;
      // }

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
    // else if (type == '2') {
    //   if (this.fileType2 == 'gambar') {
    //     var d = new Date(), n = d.getTime();
    //     newFileName = n + "_konsumsi.jpg";
    //   } else {
    //     // console.log('error disini');
    //   }
    // }

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
        // else if (type == '2') {
        //   this.fileDocPath2 = uri;
        //   this.fileName2 = uri.substr(uri.lastIndexOf('/') + 1);
        //   this.fileName2 = this.fileName.substr(10);
        //   this.fileName2 = this.fileName.replace(/%20/g, " ");
        // }

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
        "ID_RIWAYAT_KESEHATAN": '0',
        "IS_DELETED": '2'
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
          loading.present();
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

}
