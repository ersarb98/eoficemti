import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, LoadingController, ToastController, AlertController, Platform } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { FilePath } from '@ionic-native/file-path';
import { File } from '@ionic-native/file';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { FileChooser } from '@ionic-native/file-chooser';

import { Camera, CameraOptions } from '@ionic-native/camera';
/**
 * Generated class for the PertanggungjawabanSppdPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pertanggungjawaban-sppd',
  templateUrl: 'pertanggungjawaban-sppd.html',
})
export class PertanggungjawabanSppdPage {
  userdataTPK: any;
  messageData: any;

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
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    public transfer: FileTransfer,
    public fileChooser: FileChooser,
    public filepath: FilePath,
    public file: File,
    public storage: Storage,
    public alertCtrl: AlertController,
    public camera: Camera,
    public platform: Platform
  ) {
    this.messageData = navParams.get('messageData');
    // console.log(this.messageData);
    this.storage.get('userdataTPK').then(val => {
      this.userdataTPK = val;
      // console.log(this.userdataTPK);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PertanggungjawabanSppdPage');
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

  cancel() {
    this.viewCtrl.dismiss();
  }

  getImage() {
    let alert = this.alertCtrl.create({
      // title: '',
      // subTitle: 'Pilih gambar dari ?',
      cssClass: "my-alert",
      buttons: [
        {
          text: 'Galeri',
          handler: () => {
            // console.log('galeri clicked');
            this.takeImage(0);
          }
        },
        {
          text: 'Kamera',
          handler: () => {
            // console.log('kamera clicked');
            this.takeImage(1);
          }
        }
      ]
    });
    alert.present();
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

  upload() {

    // console.log(this.fileDocPath);

    let alert = this.alertCtrl.create({
      subTitle: 'Anda yakin ingin upload file ini ?',
      cssClass: 'alert',
      buttons: [
        {
          text: 'TIDAK',
          role: 'cancel',
          handler: () => {

          }
        },
        {
          text: 'YA',
          handler: () => {
            if (this.fileType == 'file') {
              const fileTransfer: FileTransferObject = this.transfer.create();
              let loader = this.loadingCtrl.create({
                content: "Uploading file...",
                spinner: 'dots',
                cssClass: 'transparent',
                dismissOnPageChange: true

              });
              loader.present();

              var options = {
                fileKey: "file",
                fileName: this.fileName,
                chunkedMode: false,
                mimeType: "multipart/form-data",
                params: { id_surat: this.messageData['ID_SURAT'], nipp: this.userdataTPK['data']['NIPP'], nama_lengkap: this.userdataTPK['data']['NAMA'] }
              };

              fileTransfer.upload(
                this.fileDocPath,
                'http://103.234.195.187/api_itpk/f111_eoffice_upload_pertanggungjawaban_sppd.php', options)
                .then((data) => {
                  // console.log(JSON.stringify(data));
                  // console.log(" Uploaded Successfully");    
                  if (data['responseCode'] == 200) {
                    var responData = JSON.parse(String(data['response']));
                    // console.log(responData);

                    if (responData['rcmsg'] == 'SUCCESS') {
                      loader.dismiss();
                      let toast = this.toastCtrl.create({
                        message: 'Pertanggungjawaban SPPD Berhasil',
                        duration: 3000,
                        position: 'bottom'
                      });
                      toast.present();
                      this.viewCtrl.dismiss({ isSuccess: true });
                    } else {
                      loader.dismiss();
                      let toast = this.toastCtrl.create({
                        message: responData['rcmsg'],
                        duration: 3000,
                        position: 'bottom'
                      });
                      toast.present();
                    }
                  } else {
                    loader.dismiss();
                    let toast = this.toastCtrl.create({
                      message: "Gagal Upload, silahkan coba kembali.",
                      duration: 3000,
                      position: 'bottom'
                    });
                    toast.present();
                  }


                }, (err) => {
                  // console.log("masuk sini");
                  // console.log(err);
                  loader.dismiss();
                  let toast = this.toastCtrl.create({
                    message: 'Upload file gagal, silahkan coba kembali',
                    duration: 3000,
                    position: 'bottom'
                  });
                  toast.present();
                  // this.presentToast(err);
                });
            } else if (this.fileType == 'gambar') {
              // console.log(this.imageFileName);
              // console.log("image file path : " + this.pathForImage(this.imageFileName));
              const fileTransfer: FileTransferObject = this.transfer.create();
              let loader = this.loadingCtrl.create({
                content: "Uploading file...",
                spinner: 'dots',
                cssClass: 'transparent',
                dismissOnPageChange: true

              });
              loader.present();

              var options = {
                fileKey: "file",
                fileName: this.fileName,
                chunkedMode: false,
                mimeType: "multipart/form-data",
                params: { id_surat: this.messageData['ID_SURAT'], nipp: this.userdataTPK['data']['NIPP'], nama_lengkap: this.userdataTPK['data']['NAMA'] }
              };

              fileTransfer.upload(
                this.pathForImage(this.imageFileName),
                'http://103.234.195.187/api_itpk/f111_eoffice_upload_pertanggungjawaban_sppd.php', options)
                .then((data) => {
                  if (data['responseCode'] == 200) {
                    var responData = JSON.parse(String(data['response']));
                    // console.log(responData);

                    if (responData['rcmsg'] == 'SUCCESS') {
                      loader.dismiss();
                      let toast = this.toastCtrl.create({
                        message: 'Pertanggungjawaban SPPD Berhasil',
                        duration: 3000,
                        position: 'bottom'
                      });
                      toast.present();
                      this.viewCtrl.dismiss({ isSuccess: true });
                    } else {
                      loader.dismiss();
                      let toast = this.toastCtrl.create({
                        message: responData['rcmsg'],
                        duration: 3000,
                        position: 'bottom'
                      });
                      toast.present();
                    }
                  } else {
                    loader.dismiss();
                    let toast = this.toastCtrl.create({
                      message: "Gagal Upload, silahkan coba kembali.",
                      duration: 3000,
                      position: 'bottom'
                    });
                    toast.present();
                  }
                }, (err) => {
                  // console.log("masuk sini");
                  // console.log(err);
                  loader.dismiss();
                  let toast = this.toastCtrl.create({
                    message: 'Upload file gagal, silahkan coba kembali',
                    duration: 3000,
                    position: 'bottom'
                  });
                  toast.present();
                });
            }

          }
        }
      ]
    });
    alert.present();
  }

  public pathForImage(img) {
    if (img === null) {
      return '';
    } else {
      return this.file.dataDirectory + img;
    }
  }

  isDisable() {
    if (this.fileType == 'file') {
      if (this.fileName == '' || this.fileName == null) {
        return true;
      } else {
        return false;
      }
    } else if (this.fileType == 'gambar') {
      if (this.imageFileName == '' || this.imageFileName == null) {
        return true;
      } else {
        return false;
      }
    } else {
      return true;
    }
  }


}
