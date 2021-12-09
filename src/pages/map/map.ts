import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController, LoadingController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

import { Platform } from 'ionic-angular';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { FilePath } from '@ionic-native/file-path';
import { File } from '@ionic-native/file';

import { Camera, CameraOptions } from '@ionic-native/camera';
import { api_base_url, api_user, api_pass, api_res,oneSignalAppId, sender_id  } from '../../config';
import leaflet from 'leaflet';
import { isRightSide } from 'ionic-angular/umd/util/util';
import { AndroidPermissions } from '@ionic-native/android-permissions';

import { Base64 } from '@ionic-native/base64';
import { SoapService } from '../soap.service';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Storage } from '@ionic/storage';
import { DatePipe } from '@angular/common';
import { Diagnostic } from '@ionic-native/diagnostic';
import { OpenNativeSettings } from '@ionic-native/open-native-settings';

import { OneSignal } from '@ionic-native/onesignal';
// declare var google;

/**
 * Generated class for the MapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-map',
  providers: [SoapService],
  templateUrl: 'map.html',
})

export class MapPage {
  @ViewChild('map') mapElement: ElementRef;
  private win: any = window;
  map: any;
  isLoading: Boolean = false;
  currAddress: any;
  lat: any = '';
  long: any = '';
  latSimplify:any;
  longSimplify:any;
  type: any;

  imageURI: any = "";
  imageShow: any = "assets/flat-icon/camera.png";
  imageFileName: any;
  fileType: any;

  filename: any;

  fromPage: any;
  userdataTPK: any;


  checkGeolocation:any;
  datalocation:any;
  status:any;

  isLoadingAddress:Boolean = false;

  addressData:Array<any> = [];
  isLoadingAddressData:Boolean = false;

  dataValidasi:any;

  geoLoc:any = '';

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public geolocation: Geolocation,
    public platform: Platform,
    public transfer: FileTransfer,
    public filepath: FilePath,
    public file: File,
    public camera: Camera,
    public toastCtrl: ToastController,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    private androidPermissions: AndroidPermissions,
    public base64: Base64,
    public http: HttpClient,
    public storage: Storage,
    public datepipe: DatePipe,
    public diagnostic: Diagnostic,
    public openNativeSetting: OpenNativeSettings,
    public oneSignal: OneSignal,
    public soapService: SoapService
  ) {
    oneSignal.startInit(oneSignalAppId, sender_id);
    oneSignal.endInit();


    if (this.platform.is('android')) {
      this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.CAMERA).then(
        result => console.log('Has permission?', result.hasPermission),
        err => this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.CAMERA)
      );

      this.androidPermissions.requestPermissions([this.androidPermissions.PERMISSION.CAMERA, this.androidPermissions.PERMISSION.GET_ACCOUNTS]);
    }

    this.storage.get('userdataTPK').then(val => {
      this.userdataTPK = val;
      console.log(this.userdataTPK);
    });

  }

  ionViewDidLoad() {
    this.isLoading = true;
    console.log('ionViewDidLoad MapPage'); 
    this.type = this.navParams.get('type');    
    this.long = this.navParams.get('long');
    this.lat = this.navParams.get('lat');
    this.longSimplify = (this.long != '') ?  Number((this.long)).toFixed(6) : '';
    this.latSimplify = (this.lat != '') ? Number((this.lat)).toFixed(6) : '';
    this.fromPage = this.navParams.get('fromPage');
    

    if (this.fromPage == 'FingerprintModalPage') {
      this.dataValidasi = this.navParams.get('dataValidasi');
    }
    console.log(this.dataValidasi);
    
    this.storage.get('userdataTPK').then(val => {
      this.userdataTPK = val;
      console.log(this.userdataTPK);
      if (this.fromPage == 'FingerprintModalPage') {
        this.getAddress();
        this.getLoc();            
      } else {
        this.isLoadingAddress = true;    
        this.showPosition(this.lat, this.long);
        this.loadMap(this.lat, this.long);
      }
    });  

    // this.loadMap();
  }

  getLoc() {
    this.isLoading = true;
    this.geolocation.getCurrentPosition().then((resp) => {
      console.log(resp);
      this.lat = resp['coords']['latitude'];
      this.long = resp['coords']['longitude'];
      this.longSimplify = (this.long != '') ?  Number((this.long)).toFixed(6) : '';
      this.latSimplify = (this.lat != '') ? Number((this.lat)).toFixed(6) : '';

      this.isLoadingAddress = true;    
      this.showPosition(this.lat,this.long);

      this.loadMap(resp['coords']['latitude'], resp['coords']['longitude']);
    }).catch((error) => {
      console.log('Error getting location', error);
      this.isLoading = false;
      let alert = this.alertCtrl.create({
        title: '',
        subTitle: 'Gagal mendapatkan Lokasi, nyalakan GPS/Location device anda atau ijinkan aplikasi IMOVE mengakses lokasi anda.',
        enableBackdropDismiss: false,
        buttons: [{
          text: "OK",
          handler: () => {
            this.getLocationReq();
          }
        }]
      });
      alert.present();
    });
  }

  getLocationReq() {
    this.diagnostic.getLocationAuthorizationStatus().then((state) => {
      console.log(state);
      switch (state) {
        case this.diagnostic.permissionStatus.NOT_REQUESTED:
          let alert = this.alertCtrl.create({
            title: 'PENTING',
            subTitle:
              '<br/>Tanpa GPS Fitur ini tidak dapat berjalan.<br/><br/>' +
              '1. Tekan tombol <b>"nyalakan Location"</b><br/>2. Pergi ke <b>PERMISSION</b><br/>3. Nyalakan <b>Location</b> <br/>' +
              '<br/>Kembali lagi ke aplikasi untuk dapat menggunakan fitur ini!',
            buttons: [{
              text: "Nyalakan Location",
              role: "gps",
              handler: () => {
                this.openNativeSetting.open("application_details");
                this.navCtrl.setRoot('Home3Page');
              }
            }]
          });
          alert.present();
          break;
        case this.diagnostic.permissionStatus.GRANTED:
          console.log("Location Permission Granted");
          break;
        case this.diagnostic.permissionStatus.DENIED:
          let alert1 = this.alertCtrl.create({
            title: 'PENTING',
            subTitle:
              '<br/>Tanpa GPS Fitur ini tidak dapat berjalan.<br/><br/>' +
              '1. Tekan tombol <b>"nyalakan Location"</b><br/>2. Pergi ke <b>PERMISSION</b><br/>3. Nyalakan <b>Location</b> <br/>' +
              '<br/>Kembali lagi ke aplikasi untuk dapat menggunakan fitur ini!',
            buttons: [{
              text: "Nyalakan Location",
              role: "gps",
              handler: () => {
                this.openNativeSetting.open("application_details");
                this.navCtrl.setRoot('Home3Page');
              }
            }]
          });
          alert1.present();
          break;
        case this.diagnostic.permissionStatus.DENIED_ALWAYS:
          let alert2 = this.alertCtrl.create({
            title: 'PENTING',
            subTitle:
              '<br/>Tanpa GPS Fitur ini tidak dapat berjalan.<br/><br/>' +
              '1. Tekan tombol <b>"nyalakan Location"</b><br/>2. Pergi ke <b>PERMISSION</b><br/>3. Nyalakan <b>Location</b> <br/>' +
              '<br/>Kembali lagi ke aplikasi untuk dapat menggunakan fitur ini!',
            buttons: [{
              text: "Nyalakan Location",
              role: "gps",
              handler: () => {
                this.openNativeSetting.open("application_details");
                this.navCtrl.setRoot('Home3Page');
              }
            }]
          });
          alert2.present();
          break;
          case state = 'DENIED_ONCE':
            let alert3 = this.alertCtrl.create({
              title: 'PENTING',
              subTitle:
                '<br/>Tanpa GPS Fitur ini tidak dapat berjalan.<br/><br/>' +
                '1. Tekan tombol <b>"nyalakan Location"</b><br/>2. Pergi ke <b>PERMISSION</b><br/>3. Nyalakan <b>Location</b> <br/>' +
                '<br/>Kembali lagi ke aplikasi untuk dapat menggunakan fitur ini!',
              buttons: [{
                text: "Nyalakan Location",
                role: "gps",
                handler: () => {
                  this.openNativeSetting.open("application_details");
                  this.navCtrl.setRoot('Home3Page');
                }
              }]
            });
            alert3.present();
            break;
      }
    })
  }

  loadMap(lat, long) {
    // let latLng = new google.maps.LatLng(lat, long);
    // let mapOptions = {
    //   center: latLng,
    //   zoom: 14,
    //   draggable: false,
    //   zoomControl: false,
    //   scrollwheel: false,
    //   disableDoubleClickZoom: false,
    //   streetViewControl: false,
    //   fullscreenControl: false,
    //   mapTypeControl: false      
    // }
    //this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    this.map = leaflet.map("map").fitWorld();
    leaflet.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attributions: "erda",
      // maxZoom:
    }).addTo(this.map);


    this.map.setView([lat, long], 16);

    let markerGroup = leaflet.featureGroup();
    let marker: any = leaflet.marker([ parseFloat(lat), parseFloat(long)]).on('click', () => {
      console.log("click");
    });

    markerGroup.addLayer(marker);
    this.map.addLayer(markerGroup);

    // this.addMarker();
    // var geocoder = new google.maps.Geocoder;
    // this.geocodeLatLng(geocoder, lat,long);  
    if (this.fromPage == 'FingerprintModalPage' &&  this.type == 'checkout') {
      console.log("masuk sini checkout");
      this.getDetailActivity();
    } else {
      this.isLoading = false;
    }
    
  }


  getDetailActivity() {
    this.isLoading = true;
    var formattedDate = this.datepipe.transform(new Date(), 'dd-MM-yyyy HH:mm:ss');
    this.http.post(api_res + "am7_activity.php", {
      "usernameEDI": "EDI-USERNAME",
      "passwordEDI": "RURJLVBBU1NXT1JE",
      "id_user":this.userdataTPK['data']['IDUSER'],
      "nipp":this.userdataTPK['data']['NIPP'],
      "arr_param": [],
      "action":"SELECT",
      "tgl": formattedDate,
      'select_type':'activity'

    }, {
      // headers
    }).subscribe(data => {
      console.log(data);
      if (data['rcmsg'] == "SUCCESS") {
        if (data['data'].length > 0) {
          this.isLoading = false;
        } else {
          let alert = this.alertCtrl.create({
            title: '',
            subTitle: 'Mohon untuk mengisi activity terlebih dahulu melalui menu Activity sebelum melakukan Check Out.',
            buttons: ['OK']
          });
          alert.present();
          this.isLoading = false;
          this.navCtrl.pop();      
        }      
      } else {
        let alert = this.alertCtrl.create({
          title: '',
          subTitle: 'Gagal mendapatkan data activity, coba kembali.',
          buttons: ['OK']
        });
        alert.present();
        this.isLoading = false;
        this.navCtrl.pop();      
      }
    }, err => {
      console.log(err);
      let alert = this.alertCtrl.create({
        title: '',
        subTitle: 'Gagal mendapatkan data activity, coba kembali.',
        buttons: ['OK']
      });
      alert.present();
      this.isLoading = false;
      this.navCtrl.pop();
    });
  }

  // addMarker(){
  //   let marker = new google.maps.Marker({
  //     map: this.map,
  //     animation: google.maps.Animation.DROP,
  //     position: this.map.getCenter()
  //   });

  //   let content = "<h4>Information!</h4>";          

  //   this.addInfoWindow(marker, content);

  // }

  // addInfoWindow(marker, content){

  //   let infoWindow = new google.maps.InfoWindow({
  //     content: content
  //   });

  //   google.maps.event.addListener(marker, 'click', () => {
  //     infoWindow.open(this.map, marker);
  //   });

  // }

  geocodeLatLng(geocoder, lat, long) {

    var latlng = { lat: parseFloat(lat), lng: parseFloat(long) };
    geocoder.geocode({ 'location': latlng }, (results, status) => {
      console.log(results);
      if (status === 'OK') {
        if (results[0]) {
          console.log(results[0].formatted_address);

          // this.currAddress = results[0];   
          var geoResult = results[0].formatted_address;
          if (geoResult.length > 125) {
            this.currAddress = geoResult.substring(0, 125) + "...";
          } else {
            this.currAddress = geoResult;
          }

          

          console.log(results[0].formatted_address);
          //storage.set('geoResult',results[0].formatted_address );
          //console.log(this.currAddress2);                 
        } else {
          console.log('location not found');
        }
      } else {
        console.log('Geocoder failed due to: ' + status);
      }
      this.isLoading = false;

    });
  }

  goToPage(fileBase64) {
    this.navCtrl.push('CheckInPage', {
      'lat': this.lat,
      'long': this.long,
      'type': this.type,
      'filename': this.filename,
      'fileBase64':fileBase64,
      // 'address': this.currAddress
      'address': this.geoLoc,
      'addressData':this.addressData,
      "dataValidasi":this.dataValidasi
    }).then(() => {
      // this.navCtrl.remove(1);
    });
  }

  takeImage(sourceType: number) {
    var options = {
      quality: 15,
      sourceType: sourceType,
      saveToPhotoAlbum: false,
      correctOrientation: true,
      cameraDirection: 1,
      // allowEdit:true
    };

    this.camera.getPicture(options).then((imageData) => {
      this.imageShow = this.win.Ionic.WebView.convertFileSrc(imageData);
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
    let loader = this.loadingCtrl.create({
      content: "Mengunggah foto...",
      spinner: 'dots',
      cssClass: 'transparent',
      dismissOnPageChange: true

    });
    loader.present();

    this.file.copyFile(namePath, currentName, this.file.dataDirectory, filename).then(success => {
      this.imageFileName = filename;
      console.log('filename : ' + this.imageFileName);
      this.uploadPhoto(loader);
      
      //this.base64File(loader);
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

  uploadPhoto(loader) {        
    const fileTransfer: FileTransferObject = this.transfer.create();

    var options = {
      fileKey: "file",
      fileName: this.imageFileName,
      chunkedMode: false,
      mimeType: "multipart/form-data",
      params: {
        "id_absen": "",
        "check_type": ""
      }
    };

    fileTransfer.upload(
      this.pathForImage(this.imageFileName),
      api_res + 'am2_upload_foto_absen.php', options)
      .then((data) => {
        if (data['responseCode'] == 200) {
          var responData = JSON.parse(String(data['response']));
          console.log(responData);
         

          if (responData['rcmsg'] == 'SUCCESS') {
            loader.dismiss();
            this.filename = responData['data'];
            this.goToPage('');
            // this.goToPage();
            // let alert = this.alertCtrl.create({
            //   subTitle:"Upload foto berhasil.",
            //   cssClass: 'alert',
            //   buttons: [
            //     {
            //       text: 'OK',
            //       handler: () => {
            //         this.filename = responData['data'];

            //       }
            //     }
            //   ]
            // });

            // alert.present();

          } else {
            loader.dismiss();
            let toast = this.toastCtrl.create({
              message: "gagal upload foto, coba kembali.",
              duration: 3000,
              position: 'bottom'
            });
            toast.present();
            this.takeImage(1);
          }
        } else {
          loader.dismiss();
          let toast = this.toastCtrl.create({
            message: "Gagal melakukan absen, periksa koneksi internet anda.",
            duration: 3000,
            position: 'bottom'
          });
          toast.present();
          this.takeImage(1);
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
        this.takeImage(1);
      });
  }

  public pathForImage(img) {
    if (img === null) {
      return '';
    } else {
      return this.file.dataDirectory + img;
    }
  }

  base64File(loader) {
    console.log('masuk sini');
    var date = new Date();
    var formattedDate = this.datepipe.transform(date, 'yyyy-MM-dd HH:mm:ss');
    var rand = Math.floor((Math.random() * 100000000) + 1);

    var headers = new HttpHeaders({
      'Accept':"*/*",
      //'Access-Control-Allow-Origin':'http://localhost:8100',
      // 'x-ibm-client-id': client_id,
      // 'x-ibm-client-secret': client_secret,
      'username': api_user,
      'password': api_pass,
      'externalId': rand.toString(),
      'timestamp': formattedDate,
      'Content-Type': 'application/json'
    });

    // this.file.readAsDataURL(this.file.dataDirectory, this.imageFileName)
    // .then(base64File => {
    //     console.log("here is encoded image ", base64File);
    //     console.log(base64File);
    //   let split = base64File.split(',');    

    //   this.http.post(api_base_url_apim_absensi + 'upload', {
    //     'person': this.userdataTPK['data']['PERSON_ID'],
    //     'photo': split[1]
    //   }, {
    //     headers
    //   }).subscribe(data => {
    //     console.log(data);
    //     if (data['status_upload'] == 'Success') {
    //       loader.dismiss();
    //       this.filename = data['filename'];
    //       this.goToPage(split[1]);

    //     } else {
    //       loader.dismiss();
    //       let toast = this.toastCtrl.create({
    //         message: "gagal upload foto, coba kembali.",
    //         duration: 3000,
    //         position: 'bottom'
    //       });
    //       toast.present();
    //       this.takeImage(1);
    //     }

    //   }, err => {
    //     console.log(err);
    //     loader.dismiss();
    //     let toast = this.toastCtrl.create({
    //       message: 'Upload file gagal, silahkan coba kembali',
    //       duration: 3000,
    //       position: 'bottom'
    //     });
    //     toast.present();
    //     this.takeImage(1);
    //   });
      
    // })
    // .catch(() => {
    //     console.log('Error reading file');
    //     loader.dismiss();
    //   let toast = this.toastCtrl.create({
    //     message: 'Upload file gagal, silahkan coba kembali',
    //     duration: 3000,
    //     position: 'bottom'
    //   });
    //   toast.present();
    //   this.takeImage(1);
    // });
    
    this.base64.encodeFile(this.file.dataDirectory + this.imageFileName).then((base64File: string) => {
      console.log(base64File);
      let split = base64File.split(',');    

      this.http.post("api_base_url_apim_absensi" + 'upload', {
        'person': this.userdataTPK['data']['PERSON_ID'],
        'photo': split[1]
      }, {
        headers
      }).subscribe(data => {
        console.log(data);
        if (data['status_upload'] == 'Success') {
          loader.dismiss();
          this.filename = data['filename'];
          this.goToPage(split[1]);

        } else {
          loader.dismiss();
          let toast = this.toastCtrl.create({
            message: "gagal upload foto, coba kembali.",
            duration: 3000,
            position: 'bottom'
          });
          toast.present();
          this.takeImage(1);
        }

      }, err => {
        console.log(err);
        loader.dismiss();
        let toast = this.toastCtrl.create({
          message: 'Upload file gagal, silahkan coba kembali',
          duration: 3000,
          position: 'bottom'
        });
        toast.present();
        this.takeImage(1);
      });

    }, (err) => {
      console.log(err);
      loader.dismiss();
      let toast = this.toastCtrl.create({
        message: 'Upload file gagal, silahkan coba kembali',
        duration: 3000,
        position: 'bottom'
      });
      toast.present();
      this.takeImage(1);
    });
  }  

  showPosition(lat,lng) {

    fetch("https://nominatim.openstreetmap.org/reverse?format=json&lat="+lat+"&lon="+lng+"")
      .then((response) => {
        return response.json()
      }).then(json => {
        if(json){
          console.log(json);
            this.currAddress = json['display_name'];
            this.geoLoc = json['address']['city_district'] + ', ' + json['address']['city']
            
        }else{
            // this.error = "Error Map, Please Try Again";
            console.log('error');
        }
        this.isLoadingAddress = false;
    })
  }

  getAddress() {
    this.isLoadingAddressData = true;
    this.http.post(api_res + "am9_address.php", {
      "usernameEDI": "EDI-USERNAME",
      "passwordEDI": "RURJLVBBU1NXT1JE",
      "id_user":this.userdataTPK['data']['IDUSER'],
      "nipp":this.userdataTPK['data']['NIPP'],
      "id_jabatan":"",
      "longitude":"",
      "latitude":"",
      "action":"get_address",      
      "status":""
    }, {
      // headers
    }).subscribe(data => {
      console.log(data);
      if (data['rcmsg'] == "SUCCESS") {
        this.addressData = data['data'];
       
      } else {
        let alert = this.alertCtrl.create({
          title: '',
          subTitle: 'Gagal mendapatkan data Address, coba kembali.',
          buttons: ['OK']
        });
        alert.present();        
        this.navCtrl.pop();      
      }
      console.log(this.addressData);
      this.isLoadingAddressData = false;
    }, err => {
      console.log(err);
      let alert = this.alertCtrl.create({
        title: '',
        subTitle: 'Gagal mendapatkan data Address, coba kembali.',
        buttons: ['OK']
      });
      alert.present();   
      this.isLoadingAddressData = false;   
      this.navCtrl.pop();
    });
  }

  insertAddress() {
    let alert = this.alertCtrl.create({
      subTitle: 'Anda yakin ingin Menggunakan lokasi ini sebagai lokasi domisili ?',
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
            let loading = this.loadingCtrl.create({
              spinner: 'dots',
              content: "Mohon Tunggu...",
              cssClass: 'transparent',
              dismissOnPageChange: true
            });
            loading.present();
            this.http.post(api_res + "am9_address.php", {
              "usernameEDI": "EDI-USERNAME",
              "passwordEDI": "RURJLVBBU1NXT1JE",
              "id_user":this.userdataTPK['data']['IDUSER'],
              "nipp":this.userdataTPK['data']['NIPP'],
              "id_jabatan":"",
              "longitude":this.long,
              "latitude":this.lat,
              "action":"insert",      
              "status":"",
              "geolocation":this.currAddress
            }, {
              // headers
            }).subscribe(data => {
              console.log(data);
              if (data['rcmsg'] == "SUCCESS") {
                this.addressData = data['data'];
                let alert = this.alertCtrl.create({
                  title: '',
                  subTitle: 'Setup lokasi domisili berhasil, menunggu approval atasan.',
                  buttons: ['OK']
                });
                alert.present();        
                this.pushNotif();
                this.navCtrl.pop();      
               
              } else {
                let alert = this.alertCtrl.create({
                  title: '',
                  subTitle: 'Gagal setup lokasi domisili, coba kembali.',
                  buttons: ['OK']
                });
                alert.present();        
                this.navCtrl.pop();      
              }             
            }, err => {
              console.log(err);
              let alert = this.alertCtrl.create({
                title: '',
                subTitle: 'Gagal setup lokasi domisili, coba kembali.',
                buttons: ['OK']
              });
              alert.present();                
              this.navCtrl.pop();
            });
          }
        }
      ]
    });
    alert.present();
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
                res: "Home3Page"
              },
              content: {
                "en": "Request Pengajuan Lokasi Domisili " + this.userdataTPK['data']['NAMA'] + " memerlukan persetujuan."
              },
              heading : {
                "en": "Request Lokasi Domisili"
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
