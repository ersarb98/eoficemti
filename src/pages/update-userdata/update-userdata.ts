import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController, AlertController, Platform } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SoapService } from '../soap.service';
import { api_base_url, api_user, api_pass } from '../../config';
import { Storage } from '@ionic/storage';

import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { FilePath } from '@ionic-native/file-path';
import { File } from '@ionic-native/file';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the UpdateUserdataPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-update-userdata',
  providers: [SoapService],
  templateUrl: 'update-userdata.html',
})
export class UpdateUserdataPage {
  imageURI: any = "assets/imgs/logo/rotate.png";
  updateType: any = "";
  email: any = "";
  hp: any = "";
  passBaru: any = "";
  passLama: any = "";
  confPass: any = "";

  userdataTPK: any;
  kategoriList: any;
  unitList: any;
  jabatanList: any;
  isLoading: Boolean = true;

  imageFileName: any;
  fileType: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController,
    public soapService: SoapService,
    public storage: Storage,
    public transfer: FileTransfer,
    public camera: Camera,
    public filepath: FilePath,
    public file: File,
    public http: HttpClient,
    public alertCtrl: AlertController,
    public platform: Platform
  ) {
    this.userdataTPK = navParams.get('userdataTPK');
    this.updateType = navParams.get('updateType');
    console.log(this.userdataTPK);
    console.log(this.updateType);
    
    if (this.updateType == "email") {
      this.email = this.userdataTPK['data']['EMAIL'];
    }
    if (this.updateType == 'hp') {
      this.hp = this.userdataTPK['data']['HP'];
    }

    
    // this.formInput = formBuilder.group({
    //   email: [this.userdataTPK['data']['EMAIL'], Validators.required],
    //   phone: [this.userdataTPK['data']['HP'], Validators.required],
    //   passLama: ["", Validators.required],
    //   passBaru: ["", Validators.required],
    //   confPass: ["", Validators.required]      
    // });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UpdateUserdataPage');
  }

  doUpdate() {
    if (this.updateType == 'ttd') {
      this.upload();
    } else if (this.updateType == 'foto') {
      this.uploadFoto();
    }
     else {
      console.log(this.hp);
      let loading = this.loadingCtrl.create({
        spinner: 'dots',
        content: "Mengubah Data...",
        cssClass: 'transparent',
        dismissOnPageChange: true
      });
      loading.present();
      this.soapService
        .post(api_base_url, 'eoffice_update_user', {
          fStream: JSON.stringify(
            {
              usernameEDI: api_user,
              passwordEDI: api_pass,
              id_user: this.userdataTPK['data']['IDUSER'],
              password_lama: this.passLama,
              password: this.passBaru,
              conf_password: this.confPass,
              email: this.email,
              no_hp: this.hp
            }
          )
        })
        .then(result => {
          let responData = JSON.parse(String(result));
          console.log(responData);

          if (responData['rcmsg'] == "SUCCESS") {
            if (this.updateType == 'pass') {
              this.storage.set('correctPass', this.passBaru);
            }
            this.newSession(loading);
          }
          // else if (responData['rcmsg'] == "Password baru tidak sesuai" || responData['rcmsg'] == "Password lama tidak sesuai" || responData['rcmsg'] == 'FORMAT TIDAK VALID' ) {
          //   let toast = this.toastCtrl.create({
          //     message: responData['rcmsg'],
          //     duration: 3000,
          //     position: 'bottom'
          //   });
          //   toast.present(); 
          // } 
          else {
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

  back() {
    this.navCtrl.pop();
  }

  newSession(loading) {
    this.soapService
      .post(api_base_url, 'eoffice_get_user_data', {
        fStream: JSON.stringify(
          {
            usernameEDI: api_user,
            passwordEDI: api_pass,
            username: this.userdataTPK['data']['NIPP'],
          }
        )
      }).then(result => {
        let responData = JSON.parse(String(result));
        console.log(responData);
        if (responData['rcmsg'] == "SUCCESS") {
          if (responData['data']['login_status'] == '404 Not Found') {
            console.log(responData['data']['login_status']);
          } else if (responData['data'] == undefined) {
            console.log(responData['data']);
          } else if (responData['data']['login_status'] == 'AP NOT ALLOWED') {
            console.log(responData['data']['login_status']);
          }
          else {
            this.userdataTPK = responData;
            this.storage.set('userdata', responData).then(() => {
            });
          }
        } else {
          console.log("error here");
        }

        let toast = this.toastCtrl.create({
          message: 'Berhasil Mengubah Data.',
          duration: 3000,
          position: 'bottom'
        });

        toast.present();
        loading.dismiss();
        this.navCtrl.pop();
      })
      .catch(error => {
        console.log(error);
        let toast = this.toastCtrl.create({
          message: 'Gagal memperbarui session, silahkan login ulang.',
          duration: 3000,
          position: 'bottom'
        });
        toast.present();
        loading.dismiss();
        this.navCtrl.pop();
      });
  }

  getImage() {
    let alert = this.alertCtrl.create({
      title: '',
      subTitle: 'Pilih gambar dari ?',
      cssClass: "my-alert",
      buttons: [
        {
          text: 'Galeri',
          handler: () => {
            console.log('galeri clicked');
            this.takeImage(0);
          }
        },
        {
          text: 'Kamera',
          handler: () => {
            console.log('kamera clicked');
            this.takeImage(1);
          }
        }
      ]
    });
    alert.present();
  }

  takeImage(sourceType: number) {
    var options = {
      quality: 100,
      sourceType: sourceType,
      saveToPhotoAlbum: false,
      correctOrientation: true
    };

    this.camera.getPicture(options).then((imageData) => {
      this.imageURI = imageData;
      if (this.platform.is('android') && sourceType === this.camera.PictureSourceType.PHOTOLIBRARY) {
        this.filepath.resolveNativePath(this.imageURI)
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
    }, (err) => {
      console.log(err);
    });
  }

  private copyFileToLocalDir(namePath, currentName, filename) {
    this.file.copyFile(namePath, currentName, this.file.dataDirectory, filename).then(success => {
      this.imageFileName = filename;
      console.log('filename : ' + this.imageFileName);
    }, error => {
      console.log('Error while storing file.');
    });
  }

  private createFileName() {
    var d = new Date(),
      n = d.getTime(),
      newFileName = n + ".jpg";
    return newFileName;
  }

  upload() {
    console.log(this.imageFileName);
    const fileTransfer: FileTransferObject = this.transfer.create();
    let loader = this.loadingCtrl.create({
      content: "Uploading image...",
      dismissOnPageChange: true
    });
    loader.present();

    var options = {
      fileKey: "ttd",
      fileName: this.imageFileName,
      chunkedMode: false,
      // mimeType: "multipart/form-data",
      params: { 'id_user': this.userdataTPK['data']['IDUSER'], 'nipp': this.userdataTPK['data']['NIPP'] }
    };

    let filePath = 'http://103.19.80.243/cfs_dev/apiptpdev/f55_eoffice_upload_ttd.php';

    fileTransfer.upload(
      this.pathForImage(this.imageFileName),
      filePath, options)
      .then((data) => {
        console.log(data);
        let responData = JSON.parse(String(data['response']));
        console.log(responData);
        // this.imageFileName = "http://192.168.0.7:8080/static/images/ionicfile.jpg"       
        // this.presentToast("Image uploaded successfully");
        // loader.dismiss();
        // let toast = this.toastCtrl.create({
        //   message: 'Upload Tanda Tangan berhasil',
        //   duration: 3000,
        //   position: 'bottom'
        // });
        // toast.present();
        if (responData['rcmsg'] == "SUCCESS") {
          this.newSession(loader);
        } else {
          let toast = this.toastCtrl.create({
            message: responData['rcmsg'],
            duration: 3000,
            position: 'bottom'
          });
          toast.present();
          loader.dismiss();
        }

      }, (err) => {
        console.log("masuk sini");
        console.log(err);
        loader.dismiss();
        let toast = this.toastCtrl.create({
          message: 'Upload Tanda Tangan gagal, silahkan coba kembali',
          duration: 3000,
          position: 'bottom'
        });
        toast.present();
        // this.presentToast(err);
      });
  }

  uploadFoto() {
    console.log(this.imageFileName);
    const fileTransfer: FileTransferObject = this.transfer.create();
    let loader = this.loadingCtrl.create({
      content: "Uploading image...",
      dismissOnPageChange: true
      
    });
    loader.present();

    var options = {
      fileKey: "IMG",
      fileName: this.imageFileName,
      chunkedMode: false,
      // mimeType: "multipart/form-data",
      params: { 'id_user': this.userdataTPK['data']['IDUSER'], 'nipp': this.userdataTPK['data']['NIPP'] }
    };

    let filePath = 'http://103.19.80.243/cfs_dev/apiptpdev/f64_eoffice_upload_foto_cv.php';

    fileTransfer.upload(
      this.pathForImage(this.imageFileName),
      filePath, options)
      .then((data) => {
        console.log(data);
        let responData = JSON.parse(String(data['response']));
        console.log(responData);
        // this.imageFileName = "http://192.168.0.7:8080/static/images/ionicfile.jpg"       
        // this.presentToast("Image uploaded successfully");
        // loader.dismiss();
        // let toast = this.toastCtrl.create({
        //   message: 'Upload Tanda Tangan berhasil',
        //   duration: 3000,
        //   position: 'bottom'
        // });
        // toast.present();
        if (responData['rcmsg'] == "SUCCESS") {
          this.newSession(loader);
        } else {
          let toast = this.toastCtrl.create({
            message: responData['rcmsg'],
            duration: 3000,
            position: 'bottom'
          });
          toast.present();
          loader.dismiss();
        }

      }, (err) => {
        console.log("masuk sini");
        console.log(err);
        loader.dismiss();
        let toast = this.toastCtrl.create({
          message: 'Upload foto CV gagal, silahkan coba kembali',
          duration: 3000,
          position: 'bottom'
        });
        toast.present();
        // this.presentToast(err);
      });
  }

  public pathForImage(img) {
    if (img === null) {
      return '';
    } else {
      console.log("image + path : " + this.file.dataDirectory + img);
      return this.file.dataDirectory + img;
    }
  }


}

