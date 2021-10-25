import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams, LoadingController, ToastController, AlertController } from "ionic-angular";
import { Storage } from "@ionic/storage";
import { Camera, CameraOptions } from "@ionic-native/camera";
import { Platform } from "ionic-angular";
import { FileTransfer, FileUploadOptions, FileTransferObject } from "@ionic-native/file-transfer";
import { FilePath } from "@ionic-native/file-path";
import { File } from "@ionic-native/file";
import { api_base_url, api_user, api_pass, url_image, api_res } from "../../config";
import { SoapService } from "../soap.service";
import { DatePipe } from "@angular/common";

import { HttpClient, HttpHeaders } from "@angular/common/http";
import { DomSanitizer } from "@angular/platform-browser";

/**
 * Generated class for the CheckInPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-check-in",
  providers: [SoapService],
  templateUrl: "check-in.html",
})
export class CheckInPage {
  private win: any = window;
  lat: any;
  long: any;
  userdataTPK: any;
  imageURI: any = "";
  // imageShow: any = "assets/flat-icon/camera.png";
  imageShow: any = "assets/flat-icon/camera.png";
  imageFileName: any;
  fileType: any;

  attendanceType: any = null;
  lembur: any = null;
  note: any;

  type: any;
  check_type: String;

  isLoading: Boolean = false;
  filename: any;
  address: any;
  fileBase64: any;
  addressData: any;

  rate: any = "5";

  dataValidasi: any;

  showLembur: Boolean = false;

  keteranganLembur: any = "";

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public storage: Storage,
    public camera: Camera,
    public platform: Platform,
    public transfer: FileTransfer,
    public filepath: FilePath,
    public file: File,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    public alertCtrl: AlertController,
    public soapService: SoapService,
    public datePipe: DatePipe,
    public http: HttpClient,
    public sanitizer: DomSanitizer,
    public datepipe: DatePipe
  ) {
    this.storage.get("userdataTPK").then((val) => {
      this.userdataTPK = val;
      console.log(this.userdataTPK);
    });

    this.lat = navParams.get("lat");
    this.long = navParams.get("long");
    this.type = navParams.get("type");
    this.filename = navParams.get("filename");
    this.fileBase64 = navParams.get("fileBase64");
    this.address = navParams.get("address");
    this.addressData = navParams.get("addressData");
    this.dataValidasi = navParams.get("dataValidasi");
    this.imageShow = url_image + "/" + this.filename;
    //this.imageShow = this.sanitizer.bypassSecurityTrustUrl("data:Image/*;base64," + this.fileBase64);
    console.log(this.dataValidasi["SHIFT_DATE"]);

    // this.imageShow = url_image + '/' + '20200625_094623_1770451718.jpg';

    if (this.type == "checkin") {
      this.check_type = "CHECK_IN";
    } else {
      this.check_type = "CHECK_OUT";
    }
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad CheckInPage");
  }

  vadidasiAlamat() {
    if (this.addressData["STATUS"] == "APPROVED") {
      if (this.attendanceType == "WFH") {
        var countJarak = this.getDistanceFromLatLonInKm(this.addressData["LATITUDE"], this.addressData["LONGITUDE"], this.lat, this.long);

        if (countJarak <= parseInt(this.addressData["RADIUS_WFH"])) {
          if (this.attendanceType == null || this.attendanceType == undefined) {
            this.attendanceType = "";
          }
          let alert = this.alertCtrl.create({
            subTitle: "Anda yakin ingin " + this.check_type + " " + this.attendanceType + " ?",
            cssClass: "alert",
            buttons: [
              {
                text: "TIDAK",
                role: "cancel",
                handler: () => {},
              },
              {
                text: "YA",
                handler: () => {
                  this.doInsert();
                },
              },
            ],
          });
          alert.present();
        } else {
          let toast = this.toastCtrl.create({
            message: "Anda sedang tidak berada di radius lokasi domisili anda !",
            duration: 4000,
            position: "bottom",
          });
          toast.present();
        }
      } else if (this.attendanceType == "WFO") {
        var lat_kantor = "";
        var long_kantor = "";

        if (this.userdataTPK["data"]["IDCABANG"] == "31") {
          lat_kantor = this.addressData["LAT_PPI_PUSAT"];
          long_kantor = this.addressData["LONG_PPI_PUSAT"];
        } else if (this.userdataTPK["data"]["IDCABANG"] == "32") {
          lat_kantor = this.addressData["LAT_TPK_JAMBI"];
          long_kantor = this.addressData["LONG_TPK_JAMBI"];
        } else if (this.userdataTPK["data"]["IDCABANG"] == "33") {
          lat_kantor = this.addressData["LAT_TPK_PONTIANAK"];
          long_kantor = this.addressData["LONG_TPK_PONTIANAK"];
        }

        var countJarak = this.getDistanceFromLatLonInKm(lat_kantor, long_kantor, this.lat, this.long);
        if (countJarak <= parseInt(this.addressData["RADIUS_WFO"])) {
          if (this.attendanceType == null || this.attendanceType == undefined) {
            this.attendanceType = "";
          }
          let alert = this.alertCtrl.create({
            subTitle: "Anda yakin ingin " + this.check_type + " " + this.attendanceType + " ?",
            cssClass: "alert",
            buttons: [
              {
                text: "TIDAK",
                role: "cancel",
                handler: () => {},
              },
              {
                text: "YA",
                handler: () => {
                  this.doInsert();
                },
              },
            ],
          });
          alert.present();
        } else {
          let toast = this.toastCtrl.create({
            message: "Anda sedang tidak berada di radius lokasi Kantor anda !",
            duration: 4000,
            position: "bottom",
          });
          toast.present();
        }
      } else {
        if (this.attendanceType == null || this.attendanceType == undefined) {
          this.attendanceType = "";
        }
        let alert = this.alertCtrl.create({
          subTitle: "Anda yakin ingin " + this.check_type + " " + this.attendanceType + " ?",
          cssClass: "alert",
          buttons: [
            {
              text: "TIDAK",
              role: "cancel",
              handler: () => {},
            },
            {
              text: "YA",
              handler: () => {
                this.doInsert();
              },
            },
          ],
        });
        alert.present();
      }
    } else {
      if (this.attendanceType == "WFO") {
        var lat_kantor = "";
        var long_kantor = "";

        if (this.userdataTPK["data"]["IDCABANG"] == "31") {
          lat_kantor = this.addressData["LAT_PPI_PUSAT"];
          long_kantor = this.addressData["LONG_PPI_PUSAT"];
        } else if (this.userdataTPK["data"]["IDCABANG"] == "32") {
          lat_kantor = this.addressData["LAT_TPK_JAMBI"];
          long_kantor = this.addressData["LONG_TPK_JAMBI"];
        } else if (this.userdataTPK["data"]["IDCABANG"] == "33") {
          lat_kantor = this.addressData["LAT_TPK_PONTIANAK"];
          long_kantor = this.addressData["LONG_TPK_PONTIANAK"];
        }

        var countJarak = this.getDistanceFromLatLonInKm(lat_kantor, long_kantor, this.lat, this.long);
        if (countJarak < this.addressData["RADIUS_WFO"]) {
          let alert = this.alertCtrl.create({
            subTitle: "Anda yakin ingin " + this.check_type + " " + this.attendanceType + " ?",
            cssClass: "alert",
            buttons: [
              {
                text: "TIDAK",
                role: "cancel",
                handler: () => {},
              },
              {
                text: "YA",
                handler: () => {
                  this.doInsert();
                },
              },
            ],
          });
          alert.present();
        } else {
          let toast = this.toastCtrl.create({
            message: "Anda sedang tidak berada di radius lokasi Kantor anda !",
            duration: 4000,
            position: "bottom",
          });
          toast.present();
        }
      } else {
        if (this.attendanceType == null || this.attendanceType == undefined) {
          this.attendanceType = "";
        }
        let alert = this.alertCtrl.create({
          subTitle: "Anda yakin ingin " + this.check_type + " " + this.attendanceType + " ?",
          cssClass: "alert",
          buttons: [
            {
              text: "TIDAK",
              role: "cancel",
              handler: () => {},
            },
            {
              text: "YA",
              handler: () => {
                this.doInsert();
              },
            },
          ],
        });
        alert.present();
      }
    }
  }

  doInsert() {
    if (this.attendanceType == null || this.attendanceType == undefined || this.attendanceType == "") {
      let toast = this.toastCtrl.create({
        message: "Jenis absen, keterangan, dan foto harus diisi.",
        duration: 4000,
        position: "bottom",
      });
      toast.present();
    } else {
      let loader = this.loadingCtrl.create({
        content: "Memproses absen...",
        spinner: "dots",
        cssClass: "transparent",
        dismissOnPageChange: true,
      });
      loader.present();

      var date = new Date();
      var formattedDate = this.datepipe.transform(date, "yyyy-MM-dd HH:mm:ss");
      var rand = Math.floor(Math.random() * 100000000 + 1);

      var headers = new HttpHeaders({
        Accept: "*/*",
        // 'Access-Control-Allow-Origin': 'http://localhost:8100',
        // 'x-ibm-client-id': client_id,
        // 'x-ibm-client-secret': client_secret,
        username: api_user,
        password: api_pass,
        externalId: rand.toString(),
        timestamp: formattedDate,
        "Content-Type": "application/json",
      });

      if (this.type == "checkout") {
        if (this.rate == "0" || this.rate == "" || this.rate == null) {
          let toast = this.toastCtrl.create({
            message: "Evaluasi Atasan harus diisi.",
            duration: 3000,
            position: "bottom",
          });
          toast.present();
          loader.dismiss();
        } else {
          if (this.showLembur == true && (this.keteranganLembur == "" || this.keteranganLembur == null)) {
            let toast = this.toastCtrl.create({
              message: "Keterangan lembur harus diisi",
              duration: 4000,
              position: "bottom",
            });
            toast.present();
            loader.dismiss();
          } else {
            var shiftDate = this.datepipe.transform(new Date(), "dd/MM/yyyy");
            this.http
              .post(
                api_res + "am1_insert_absen_res.php",
                {
                  usernameEDI: api_user,
                  passwordEDI: api_pass,
                  nipp: this.userdataTPK["data"]["NIPP"],
                  photo: "",
                  lat: "",
                  long: "",
                  attendance_type: "",
                  geo: "",
                  check_type: "IN",
                  activity: "",
                  activity_spv: "",
                  rate: this.rate.toString(),
                  rate_spv: "0",
                  act_type: "3",
                  shift_date: shiftDate,
                },
                {
                  // headers
                }
              )
              .subscribe(
                (data) => {
                  console.log(data);
                  if (data["rcmsg"] == "SUCCESS") {
                    this.http
                      .post(
                        api_res + "am1_insert_absen_res.php",
                        {
                          usernameEDI: api_user,
                          passwordEDI: api_pass,
                          nipp: this.userdataTPK["data"]["NIPP"],
                          photo: this.filename,
                          lat: this.lat.toString(),
                          long: this.long.toString(),
                          attendance_type: this.attendanceType,
                          geo: this.address,
                          check_type: this.check_type == "CHECK_IN" ? "IN" : "OUT",
                          activity: "",
                          act_type: "1",
                          isLembur: this.showLembur,
                          keteranganLembur: this.keteranganLembur,
                          shift_date: this.dataValidasi["SHIFT_DATE"],
                        },
                        {
                          headers,
                        }
                      )
                      .subscribe(
                        (data) => {
                          console.log(data);
                          if (data["rcmsg"] == "SUCCESS") {
                            // this.uploadPhoto(responData['data']['id_absen'], loader);
                            let toast = this.toastCtrl.create({
                              message: this.check_type + " berhasil.",
                              duration: 3000,
                              position: "bottom",
                            });
                            toast.present();
                            //this.pushnotif();

                            this.navCtrl
                              .push("InsertNoteAttendancePage", {
                                fromPage: "CheckInPage",
                              })
                              .then(() => {
                                this.navCtrl.remove(1, 2);
                              });
                          } else {
                            let toast = this.toastCtrl.create({
                              message: this.check_type + " gagal, coba kembali.",
                              duration: 3000,
                              position: "bottom",
                            });
                            toast.present();
                            loader.dismiss();
                          }
                        },
                        (err) => {
                          console.log(err);
                          let alert = this.alertCtrl.create({
                            title: "",
                            subTitle: this.check_type + " gagal, periksa koneksi internet anda.",
                            buttons: ["OK"],
                          });
                          alert.present();
                          loader.dismiss();
                        }
                      );
                  } else {
                    let toast = this.toastCtrl.create({
                      message: this.check_type + " gagal, coba kembali.",
                      duration: 3000,
                      position: "bottom",
                    });
                    toast.present();
                    loader.dismiss();
                  }
                },
                (err) => {
                  console.log(err);
                  let alert = this.alertCtrl.create({
                    title: "",
                    subTitle: this.check_type + " gagal, periksa koneksi internet anda.",
                    buttons: ["OK"],
                  });
                  alert.present();
                  loader.dismiss();
                }
              );
          }
        }
      } else {
        this.http
          .post(
            api_res + "am1_insert_absen_res.php",
            {
              usernameEDI: api_user,
              passwordEDI: api_pass,
              nipp: this.userdataTPK["data"]["NIPP"],
              photo: this.filename,
              lat: this.lat.toString(),
              long: this.long.toString(),
              attendance_type: this.attendanceType,
              geo: this.address,
              check_type: this.check_type == "CHECK_IN" ? "IN" : "OUT",
              activity: "",
              act_type: "1",
            },
            {
              headers,
            }
          )
          .subscribe(
            (data) => {
              console.log(data);
              if (data["rcmsg"] == "SUCCESS") {
                // this.uploadPhoto(responData['data']['id_absen'], loader);
                let toast = this.toastCtrl.create({
                  message: this.check_type + " berhasil.",
                  duration: 3000,
                  position: "bottom",
                });
                toast.present();
                //this.pushnotif();
                var checkType = "";
                var attType = "";
                // if (this.check_type == 'CHECK_IN') {
                //   checkType = 'Check In';
                // } else {
                //   checkType = 'Check Out';
                // }

                // if (this.attendanceType == 'WFH') {
                //   attType = 'WFH (Work From Home)';
                // } else if (this.attendanceType == 'WFC') {
                //   attType = 'WFC (Work From Client)';
                // }

                var currDate = new Date();
                var formatedDate = this.datePipe.transform(currDate, "HH:MM:SS");
                var day = currDate.getDay();
                var month = currDate.getMonth();
                var year = currDate.getFullYear();
                var date = currDate.getDate();

                var formatedDay = "";
                var formatedMonth = "";

                this.navCtrl
                  .push("InsertNoteAttendancePage", {
                    // "transactionId": '',
                    // "checkType": this.check_type,
                    // "attendanceType": attType,
                    // "long": this.long,
                    // "lat": this.lat,
                    // "photo": url_image + '/' + this.filename,
                    // "checkTime": formatedDate,
                    // 'date': formatedDay + ", " + date + " " + formatedMonth + " " + year,
                    // "activity": "",
                    fromPage: "CheckInPage",
                  })
                  .then(() => {
                    this.navCtrl.remove(1, 2);
                  });
              } else {
                let toast = this.toastCtrl.create({
                  message: this.check_type + " gagal, coba kembali.",
                  duration: 3000,
                  position: "bottom",
                });
                toast.present();
                loader.dismiss();
              }
            },
            (err) => {
              console.log(err);
              let alert = this.alertCtrl.create({
                title: "",
                subTitle: this.check_type + " gagal, periksa koneksi internet anda.",
                buttons: ["OK"],
              });
              alert.present();
              loader.dismiss();
            }
          );
      }
    }
  }

  takeImage(sourceType: number) {
    var options = {
      quality: 25,
      sourceType: sourceType,
      saveToPhotoAlbum: false,
      correctOrientation: true,
    };

    this.camera.getPicture(options).then(
      (imageData) => {
        this.imageShow = this.win.Ionic.WebView.convertFileSrc(imageData);
        this.imageURI = imageData;
        if (this.platform.is("android") && sourceType === this.camera.PictureSourceType.PHOTOLIBRARY) {
          this.filepath.resolveNativePath(this.imageURI).then((filePath) => {
            let correctPath = filePath.substr(0, filePath.lastIndexOf("/") + 1);
            let currentName = imageData.substring(imageData.lastIndexOf("/") + 1, imageData.lastIndexOf("?"));
            this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
          });
        } else {
          var currentName = imageData.substr(imageData.lastIndexOf("/") + 1);
          var correctPath = imageData.substr(0, imageData.lastIndexOf("/") + 1);

          this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }

  private copyFileToLocalDir(namePath, currentName, filename) {
    this.file.copyFile(namePath, currentName, this.file.dataDirectory, filename).then(
      (success) => {
        this.imageFileName = filename;
        console.log("filename : " + this.imageFileName);
      },
      (error) => {
        console.log("Error while storing file.");
      }
    );
  }

  private createFileName() {
    var d = new Date(),
      n = d.getTime(),
      newFileName = n + ".jpg";
    return newFileName;
  }

  uploadPhoto(id_absen, loader) {
    const fileTransfer: FileTransferObject = this.transfer.create();

    var options = {
      fileKey: "file",
      fileName: this.imageFileName,
      chunkedMode: false,
      mimeType: "multipart/form-data",
      params: {
        id_absen: id_absen,
        check_type: this.check_type,
      },
    };

    fileTransfer.upload(this.pathForImage(this.imageFileName), "url_upload", options).then(
      (data) => {
        if (data["responseCode"] == 200) {
          var responData = JSON.parse(String(data["response"]));
          console.log(responData);

          if (responData["rcmsg"] == "SUCCESS") {
            loader.dismiss();
            let alert = this.alertCtrl.create({
              subTitle: this.check_type + " berhasil.",
              cssClass: "alert",
              buttons: [
                {
                  text: "OK",
                  handler: () => {
                    this.navCtrl.setRoot("HomePage");
                  },
                },
              ],
            });

            alert.present();
          } else {
            loader.dismiss();
            let toast = this.toastCtrl.create({
              message: "gagal melakukan absen, coba kembali.",
              duration: 3000,
              position: "bottom",
            });
            toast.present();
          }
        } else {
          loader.dismiss();
          let toast = this.toastCtrl.create({
            message: "Gagal melakukan absen, periksa koneksi internet anda.",
            duration: 3000,
            position: "bottom",
          });
          toast.present();
        }
      },
      (err) => {
        // console.log("masuk sini");
        // console.log(err);
        loader.dismiss();
        let toast = this.toastCtrl.create({
          message: "Upload file gagal, silahkan coba kembali",
          duration: 3000,
          position: "bottom",
        });
        toast.present();
      }
    );
  }

  public pathForImage(img) {
    if (img === null) {
      return "";
    } else {
      return this.file.dataDirectory + img;
    }
  }

  cancel() {
    this.navCtrl.setRoot("Home3Page");
  }

  pushnotif() {
    var tgl = this.datepipe.transform(new Date(), "dd-MM-yyyy");
    this.http
      .post(
        api_res + "hadirkoe_notif/notif_atasan.php",
        {
          usernameEDI: "EDI-USERNAME",
          passwordEDI: "RURJLVBBU1NXT1JE",
          nipp: this.userdataTPK["data"]["NIPP"],
          nama: this.userdataTPK["data"]["NAMA"],
          tgl: tgl,
          check_type: this.type,
        },
        {
          // headers
        }
      )
      .subscribe(
        (data) => {
          console.log(data);
          if (data["rcmsg"] == "SUCCESS") {
            console.log("berhasil push notif");
          } else {
            console.log("gagal push notif");
          }
        },
        (err) => {
          console.log("gagal push notif : " + err);
        }
      );
  }

  getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
    var R = 6371; // Radius of the earth in km
    var dLat = this.deg2rad(lat2 - lat1); // deg2rad below
    var dLon = this.deg2rad(lon2 - lon1);
    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c; // Distance in km
    return d * 1000;
  }

  deg2rad(deg) {
    return deg * (Math.PI / 180);
  }

  toggleLembur() {
    this.showLembur = !this.showLembur;
  }
}
