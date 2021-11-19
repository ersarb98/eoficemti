import { Component, ViewChild } from "@angular/core";
import { IonicPage, NavController, NavParams, ToastController, LoadingController, Alert, AlertController, ModalController, Content } from "ionic-angular";
import { SoapService } from "../soap.service";
import { api_base_url, api_user, api_pass, url_image, api_res } from "../../config";
import { Storage } from "@ionic/storage";

import { DomSanitizer } from "@angular/platform-browser";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { getNonHydratedSegmentIfLinkAndUrlMatch } from "ionic-angular/umd/navigation/url-serializer";
import { DatePipe } from "@angular/common";

import { DatePicker } from "@ionic-native/date-picker";
import { from } from "rxjs/observable/from";

@IonicPage()
@Component({
  selector: "page-insert-note-attendance",
  providers: [SoapService],
  templateUrl: "insert-note-attendance.html",
})
export class InsertNoteAttendancePage {
  @ViewChild(Content) content: Content;

  userdataTPK: any;
  transactionId: any;
  checkType: any;
  attendanceType: any;
  activity: any;
  long: any;
  lat: any;
  photo: any;
  date: any;
  checkTime: any;
  fromPage: any;
  shiftDate: any;
  dateShift: any;

  activityList: any;
  idUser: any;

  isLoading: Boolean = false;
  arahanAtasan: any;

  inputActivityList = [];

  originalActivityList = [];

  updateStatusAlert = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public toastCtrl: ToastController,
    public soapService: SoapService,
    public loadingCtrl: LoadingController,
    public storage: Storage,
    public sanitizer: DomSanitizer,
    public http: HttpClient,
    public alertCtrl: AlertController,
    public datepipe: DatePipe,
    public modalCtrl: ModalController,
    public datePicker: DatePicker
  ) {
    // this.transactionId = navParams.get('transactionId');
    // this.checkType = navParams.get('checkType');
    // this.attendanceType = navParams.get('attendanceType');
    // this.long = navParams.get('long');
    // this.lat = navParams.get('lat');
    // this.photo = navParams.get('photo');
    // this.date = navParams.get('date');
    // this.checkTime = navParams.get('checkTime');
    this.fromPage = navParams.get("fromPage");
    this.shiftDate = navParams.get("shiftDate");
    // this.activity = navParams.get('activity');
    console.log(this.fromPage);
    // if (20 > this.numberExtractor('Dalam Proses - 20%')) {
    //   console.log('iya lebih besar');
    // }

    console.log(this.photo);

    this.storage.get("userdataTPK").then((val) => {
      this.userdataTPK = val;
      this.idUser = this.userdataTPK["data"]["IDUSER"];
      this.isLoading = true;
      this.getDetail();
      console.log(this.userdataTPK);
    });

    console.log(this.checkType);
    console.log(this.attendanceType);
    console.log(this.transactionId);

    console.log(this.navCtrl.length());
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad InsertNoteAttendancePage");
  }

  doInsert() {
    if (this.activity.length > 1000) {
      let alert = this.alertCtrl.create({
        title: "",
        subTitle: "Jumlah karakter activity maksimal 1000 karakter.",
        buttons: ["OK"],
      });
      alert.present();
    } else {
      let loader = this.loadingCtrl.create({
        content: "Mohon tunggu...",
        spinner: "dots",
        cssClass: "transparent",
        dismissOnPageChange: true,
      });
      loader.present();
      // this.soapService.post(api_base_url, 'am1_insert_absen', {
      //   fStream: JSON.stringify(
      //     {
      //       "usernameEDI": api_user,
      //       "passwordEDI": api_pass,
      //       "nipp": this.userdataTPK['data']['NIPP'],
      //       "photo": '',
      //       "lat": '',
      //       "long": '',
      //       "attendance_type": '',
      //       "geo": '',
      //       "check_type": (this.checkType == 'CHECK_IN') ? 'IN' : 'OUT',
      //       'activity': this.activity,
      //       'act_type': '2'
      //     }
      //   )
      // }).then(result => {
      //   var responData = JSON.parse(String(result));
      //   console.log(responData);
      //   if (responData['rcmsg'] == "SUCCESS") {
      //     let toast = this.toastCtrl.create({
      //       message: "Berhasil menambahkan activity.",
      //       duration: 4000,
      //       position: 'bottom'
      //     });
      //     loader.dismiss();
      //     toast.present();
      //     this.navCtrl.setRoot('Home3Page');
      //   } else {
      //     let toast = this.toastCtrl.create({
      //       message: "gagal menambahkan activity, coba kembali.",
      //       duration: 3000,
      //       position: 'bottom'
      //     });
      //     toast.present();
      //     loader.dismiss();
      //     this.navCtrl.setRoot('Home3Page');
      //   }
      // }).catch(error => {
      //   console.log(error);
      //   let toast = this.toastCtrl.create({
      //     message: "gagal menambahkan activity, coba kembali.",
      //     duration: 3000,
      //     position: 'bottom'
      //   });
      //   toast.present();
      //   loader.dismiss();
      //   this.navCtrl.setRoot('Home3Page');
      // });

      var date = new Date();
      var formattedDate = this.datepipe.transform(date, "yyyy-MM-dd HH:mm:ss");
      var rand = Math.floor(Math.random() * 100000000 + 1);

      var headers = new HttpHeaders({
        Accept: "*/*",
        //'Access-Control-Allow-Origin':'http://localhost:8100',
        // 'x-ibm-client-id': client_id,
        // 'x-ibm-client-secret': client_secret,
        username: api_user,
        password: api_pass,
        externalId: rand.toString(),
        timestamp: formattedDate,
        "Content-Type": "application/json",
      });

      this.http
        .post(
          api_res + "absen",
          {
            nipp: this.userdataTPK["data"]["NIPP"],
            photo: "",
            lat: "",
            long: "",
            attendance_type: "",
            geo: "",
            check_type: this.checkType == "CHECK_IN" ? "IN" : "OUT",
            activity: this.activity,
            act_type: "2",
          },
          {
            headers,
          }
        )
        .subscribe(
          (data) => {
            console.log(data);
            if (data["status"] == "SUCCESS") {
              let toast = this.toastCtrl.create({
                message: "Berhasil menambahkan activity.",
                duration: 4000,
                position: "bottom",
              });
              loader.dismiss();
              toast.present();
              this.navCtrl.setRoot("Home3Page");
            } else {
              let toast = this.toastCtrl.create({
                message: "gagal menambahkan activity, coba kembali.",
                duration: 3000,
                position: "bottom",
              });
              toast.present();
              loader.dismiss();
            }
          },
          (err) => {
            console.log(err);
            let toast = this.toastCtrl.create({
              message: "gagal menambahkan activity, coba kembali.",
              duration: 3000,
              position: "bottom",
            });
            toast.present();
            loader.dismiss();
          }
        );
    }
  }

  openMap() {
    this.navCtrl
      .push("MapPage", {
        type: "",
        long: this.long,
        lat: this.lat,
        fromPage: "InsertNoteAttendancePage",
      })
      .then(() => {});
  }

  getDetail() {
    console.log({
      usernameEDI: api_user,
      passwordEDI: api_pass,
      id_user: this.idUser,
      tgl: formattedDate,
    });
    var date = new Date();
    var formattedDate = this.datepipe.transform(date, "yyyy-MM-dd HH:mm:ss");
    var rand = Math.floor(Math.random() * 100000000 + 1);

    var headers = new HttpHeaders({
      Accept: "*/*",
      //'Access-Control-Allow-Origin':'http://localhost:8100',
      // 'x-ibm-client-id': client_id,
      // 'x-ibm-client-secret': client_secret,
      username: api_user,
      password: api_pass,
      externalId: rand.toString(),
      timestamp: formattedDate,
      "Content-Type": "application/json",
    });

    var currentDate = new Date();
    var formattedDate = this.datepipe.transform(currentDate, "dd-MM-yyyy");

    if (this.shiftDate) {
      this.dateShift = this.shiftDate;
    } else {
      this.dateShift = formattedDate;
    }

    this.http
      .post(api_res + "am6_detail_absen.php", {
        usernameEDI: api_user,
        passwordEDI: api_pass,
        id_user: this.idUser,
        // 'tgl': formattedDate
        tgl: this.dateShift,
      })
      .subscribe(
        (result) => {
          var data = result["data"];
          console.log(data);

          if (result["rcmsg"] == "SUCCESS") {
            if (data["CHECK_IN"] != null || data["CHECK_OUT"] != null) {
              this.activityList = data;
              this.arahanAtasan = this.activityList["CHECK_IN_ACTIVITY_SPV"];
            }

            console.log(this.activityList);
            if (data["CHECK_IN"] == null && data["CHECK_OUT"] == null) {
              console.log("masuk sini");
              let alert = this.alertCtrl.create({
                title: "",
                subTitle: "Belum ada data absensi, silahkan melakukan Check In/Check Out terlebih dahulu.",
                buttons: ["OK"],
              });
              alert.present();
              this.navCtrl.pop();
            } else if (data["CHECK_IN"] != null && data["CHECK_OUT"] == null) {
              this.transactionId = "";
              this.checkType = "CHECK_IN";
              this.attendanceType = this.activityList["CHECK_IN_TYPE"];
              this.long = this.activityList["CHECK_IN_LONGITUDE"];
              this.lat = this.activityList["CHECK_IN_LATITUDE"];
              this.photo = this.activityList["CHECK_IN_PHOTO"];
              this.checkTime = this.activityList["CHECK_IN"];
              this.date = this.activityList["DATE"];
              this.activity = this.activityList["CHECK_IN_ACTIVITY"];
            } else if (data["CHECK_IN"] == null && data["CHECK_OUT"] != null) {
              this.transactionId = "";
              this.checkType = "CHECK_OUT";
              this.attendanceType = this.activityList["CHECK_OUT_TYPE"];
              this.long = this.activityList["CHECK_OUT_LONGITUDE"];
              this.lat = this.activityList["CHECK_OUT_LATITUDE"];
              this.photo = this.activityList["CHECK_OUT_PHOTO"];
              this.checkTime = this.activityList["CHECK_OUT"];
              this.date = this.activityList["DATE"];
              this.activity = this.activityList["CHECK_OUT_ACTIVITY"];
            } else if (data["CHECK_IN"] != null && data["CHECK_OUT"] != null) {
              this.transactionId = "";
              this.checkType = "CHECK_OUT";
              this.attendanceType = this.activityList["CHECK_OUT_TYPE"];
              this.long = this.activityList["CHECK_OUT_LONGITUDE"];
              this.lat = this.activityList["CHECK_OUT_LATITUDE"];
              this.photo = this.activityList["CHECK_OUT_PHOTO"];
              this.checkTime = this.activityList["CHECK_OUT"];
              this.date = this.activityList["DATE"];
              this.activity = this.activityList["CHECK_OUT_ACTIVITY"];
            }
            this.photo = this.sanitizer.bypassSecurityTrustUrl("data:Image/*;base64," + this.photo);
            // this.isLoading = false;

            if (this.fromPage == "CheckInPage" && this.checkType == "CHECK_OUT") {
              if (this.activityList["CHECK_IN_ACTIVITY_SPV"] != "" && this.activityList["CHECK_IN_ACTIVITY_SPV"] != null) {
                this.activity = this.activityList["CHECK_IN_ACTIVITY"] + "\n" + this.activityList["CHECK_IN_ACTIVITY_SPV"];
              } else {
                this.activity = this.activityList["CHECK_IN_ACTIVITY"];
              }
            }

            this.getDetailActivity();
          } else {
            let toast = this.toastCtrl.create({
              message: "Terjadi kesalahan, Silahkan Coba Kembali.",
              duration: 3000,
              position: "bottom",
            });
            toast.present();
            this.isLoading = false;
          }

          // if (this.fromPage == 'CheckInPage' && this.checkType == 'CHECK_IN') {
          //   this.getDetailActivity();
          // } else {
          //   this.getDetailActivity();
          // }
        },
        (err) => {
          console.log(err);
          let toast = this.toastCtrl.create({
            message: "Terjadi Masalah Koneksi, Silahkan Coba Kembali.",
            duration: 3000,
            position: "bottom",
          });
          toast.present();

          this.isLoading = false;
        }
      );
  }

  openModalRating(type) {
    let modal = this.modalCtrl.create(
      "RateAbsensiPage",
      {
        // kepadaList : this.userdataTPK['data']['LISTOFFICER'],
        data: this.activityList,
        type: type,
        shiftDate: new Date(),
        fromPage: "InsertNoteAttendancePage",
        rateFor: "atasan",
      },
      {
        enableBackdropDismiss: true,
        showBackdrop: true,
        cssClass: "my-modal2",
      }
    );
    modal.present();
    modal.onDidDismiss((data) => {
      console.log(data);
      if (data != null) {
        if (data["isSubmit"]) {
          this.getDetail();
        }
      }
    });
  }

  createRange(number) {
    var items: number[] = [];
    for (var i = 1; i <= number; i++) {
      items.push(i);
    }
    return items;
  }

  pushNotif() {
    // let nippList = [];
    // let pesan = this.userdataTPK['data']['NAMA'] +  ' melakukan check in WFH / WFC, mohon berikan arahan (opsional)';
    // let res = 'OutboxPage';
    // nippList.push(this.userdataTPK['data']['NAMA']);
    // this.soapService
    //   .post(api_base_url, 'eoffice_notif_imove_nipp', {
    //     fStream: JSON.stringify(
    //       {
    //         usernameEDI: api_user,
    //         passwordEDI: api_pass,
    //         nipp: nippList,
    //         data: {
    //           "res": res,
    //           "nipp": this.nipp,
    //           "messageData": this.messageData
    //         },
    //         heading : {
    //           "en": "Absensi"
    //         },
    //         content: {
    //           "en": pesan
    //         },
    //         id_kategori: ""
    //       }
    //     )
    //   }).then(result => {
    //     let hasil = JSON.stringify(result);
    //     this.navCtrl.pop();
    //   }).catch(error => {
    //     this.navCtrl.pop();
    //   });
  }

  getDetailActivity() {
    console.log("check type nya : " + this.checkType);
    var selectType = "";
    if (this.checkType == "CHECK_OUT") {
      selectType = "checkout";
    } else {
      selectType = "activity";
    }
    var formattedDate = this.datepipe.transform(new Date(), "dd-MM-yyyy HH:mm:ss");
    this.http
      .post(
        api_res + "am7_activity.php",
        {
          usernameEDI: "EDI-USERNAME",
          passwordEDI: "RURJLVBBU1NXT1JE",
          id_user: this.idUser,
          nipp: this.userdataTPK["data"]["NIPP"],
          arr_param: [],
          action: "SELECT",
          tgl: formattedDate,
          select_type: selectType,
        },
        {
          // headers
        }
      )
      .subscribe(
        (data) => {
          console.log(data);
          if (data["rcmsg"] == "SUCCESS") {
            for (var i = 0; i < data["data"].length; i++) {
              this.inputActivityList.push({
                att_activity_id: data["data"][i]["ATT_ACTIVITY_ID"],
                activity: data["data"][i]["ACTIVITY"],
                status: data["data"][i]["STATUS"],
                tgl_awal: data["data"][i]["TGL_AWAL"],
                tgl_akhir: data["data"][i]["TGL_AKHIR"],
              });

              this.originalActivityList.push({
                att_activity_id: data["data"][i]["ATT_ACTIVITY_ID"],
                activity: data["data"][i]["ACTIVITY"],
                status: data["data"][i]["STATUS"],
                tgl_awal: data["data"][i]["TGL_AWAL"],
                tgl_akhir: data["data"][i]["TGL_AKHIR"],
              });
            }

            if (data["data"].length == 0) {
              console.log("masuk sini");
              this.inputActivityList.push({
                att_activity_id: "",
                activity: "",
                status: "",
                tgl_awal: "",
                tgl_akhir: "",
              });

              this.originalActivityList.push({
                att_activity_id: "",
                activity: "",
                status: "",
                tgl_awal: "",
                tgl_akhir: "",
              });
            }

            console.log(this.inputActivityList);

            this.isLoading = false;
          } else {
            let alert = this.alertCtrl.create({
              title: "",
              subTitle: "Gagal mendapatkan data activity, coba kembali.",
              buttons: ["OK"],
            });
            alert.present();
            this.isLoading = false;
            this.navCtrl.pop();
          }
        },
        (err) => {
          console.log(err);
          let alert = this.alertCtrl.create({
            title: "",
            subTitle: "Gagal mendapatkan data activity, coba kembali.",
            buttons: ["OK"],
          });
          alert.present();
          this.isLoading = false;
          this.navCtrl.pop();
        }
      );
  }

  addNewActivity() {
    this.inputActivityList.push({
      att_activity_id: "",
      activity: "",
      status: "",
      tgl_awal: "",
      tgl_akhir: "",
    });

    setTimeout(() => {
      this.content.scrollToBottom(1000);
    });
  }

  delActivity(index) {
    this.inputActivityList.splice(index, 1);
  }

  showDatePicker(type: number, index) {
    this.datePicker
      .show({
        date: new Date(),
        mode: "date",
        androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_LIGHT,
      })
      .then(
        (date) => {
          if (type == 1) {
            this.inputActivityList[index]["tgl_awal"] = this.datepipe.transform(date, "dd-MM-yyyy");
          } else if (type == 2) {
            this.inputActivityList[index]["tgl_akhir"] = this.datepipe.transform(date, "dd-MM-yyyy");
          }
        },
        (err) => console.log("Error occurred while getting date: ", err)
      );
  }

  checkFocus(data, index) {
    this.showDatePicker(data, index);
  }

  submitActivity(actionType) {
    console.log(actionType);
    var arrayParamInsert = [];
    var arrayParamUpdate = [];

    for (var i = 0; i < this.inputActivityList.length; i++) {
      if (this.inputActivityList[i]["att_activity_id"] == "") {
        var tgl_awal = this.datepipe.transform(new Date(), "dd-MM-yyyy");
        var tgl_akhir = "";
        if (this.inputActivityList[i]["status"] == "Selesai - 100%" || this.inputActivityList[i]["status"] == "Batal") {
          tgl_akhir = this.datepipe.transform(new Date(), "dd-MM-yyyy");
        } else {
          // tgl_akhir = this.inputActivityList[i]['tgl_akhir'];
          tgl_akhir = null;
        }
        arrayParamInsert.push({
          att_activity_id: "",
          activity: this.inputActivityList[i]["activity"],
          status: this.inputActivityList[i]["status"],
          tgl_awal: tgl_awal,
          tgl_akhir: tgl_akhir,
        });
      }

      if (this.inputActivityList[i]["att_activity_id"] != "") {
        var tgl_akhir = "";
        if (this.inputActivityList[i]["status"] == "Selesai - 100%" || this.inputActivityList[i]["status"] == "Batal") {
          tgl_akhir = this.datepipe.transform(new Date(), "dd-MM-yyyy");
        } else {
          // tgl_akhir = this.inputActivityList[i]['tgl_akhir'];
          tgl_akhir = null;
        }
        arrayParamUpdate.push({
          att_activity_id: this.inputActivityList[i]["att_activity_id"],
          activity: this.inputActivityList[i]["activity"],
          status: this.inputActivityList[i]["status"],
          tgl_awal: this.inputActivityList[i]["tgl_awal"],
          tgl_akhir: tgl_akhir,
        });
      }

      // if (actionType == 'INSERT') {
      //   if (this.inputActivityList[i]['att_activity_id'] == '') {
      //     var tgl_awal  = this.datepipe.transform(new Date(),'dd-MM-yyyy');
      //     arrayParamInsert.push(
      //       {
      //         'att_activity_id':'',
      //         'activity': this.inputActivityList[i]['activity'],
      //         'status':'',
      //         'tgl_awal': tgl_awal,
      //         'tgl_akhir':'',
      //       }
      //     )
      //   }
      // } else if (actionType == 'UPDATE') {
      //   var tgl_akhir = '';
      //   if (this.inputActivityList[i]['status'] == 'Selesai - 100%' || this.inputActivityList[i]['status'] == 'Batal' ) {
      //     tgl_akhir = this.datepipe.transform(new Date(),'dd-MM-yyyy');
      //   } else {
      //     // tgl_akhir = this.inputActivityList[i]['tgl_akhir'];
      //     tgl_akhir = null;
      //   }
      //   arrayParamUpdate.push(
      //     {
      //       'att_activity_id':this.inputActivityList[i]['att_activity_id'],
      //       'activity': this.inputActivityList[i]['activity'],
      //       'status':this.inputActivityList[i]['status'],
      //       'tgl_awal': this.inputActivityList[i]['tgl_awal'],
      //       'tgl_akhir':tgl_akhir,
      //     }
      //   )
      // }
    }

    console.log("array insert : " + JSON.stringify(arrayParamInsert));
    console.log("array update : " + JSON.stringify(arrayParamUpdate));

    let loader = this.loadingCtrl.create({
      content: "Mohon tunggu...",
      spinner: "dots",
      cssClass: "transparent",
      dismissOnPageChange: true,
    });
    loader.present();

    if (arrayParamInsert.length > 0 && arrayParamUpdate.length > 0) {
      this.http
        .post(
          api_res + "am7_activity.php",
          {
            usernameEDI: "EDI-USERNAME",
            passwordEDI: "RURJLVBBU1NXT1JE",
            id_user: this.idUser,
            nipp: this.userdataTPK["data"]["NIPP"],
            arr_param: arrayParamInsert,
            action: "INSERT",
            tgl: "",
          },
          {}
        )
        .subscribe(
          (data) => {
            console.log(data);
            if (data["rcmsg"] == "SUCCESS") {
              this.http
                .post(
                  api_res + "am7_activity.php",
                  {
                    usernameEDI: "EDI-USERNAME",
                    passwordEDI: "RURJLVBBU1NXT1JE",
                    id_user: this.idUser,
                    nipp: this.userdataTPK["data"]["NIPP"],
                    arr_param: arrayParamUpdate,
                    action: "UPDATE",
                    tgl: "",
                  },
                  {}
                )
                .subscribe(
                  (data) => {
                    console.log(data);
                    if (data["rcmsg"] == "SUCCESS") {
                      let toast = this.toastCtrl.create({
                        message: "Berhasil menambah/mengubah activity.",
                        duration: 4000,
                        position: "bottom",
                      });
                      loader.dismiss();
                      toast.present();
                      this.navCtrl.setRoot("Home3Page");
                    } else {
                      let toast = this.toastCtrl.create({
                        message: "berhasil menambah, namun gagal mengubah activity.",
                        duration: 3000,
                        position: "bottom",
                      });
                      toast.present();
                      loader.dismiss();
                    }
                  },
                  (err) => {
                    console.log(err);
                    let toast = this.toastCtrl.create({
                      message: "berhasil menambah, namun gagal mengubah activity.",
                      duration: 3000,
                      position: "bottom",
                    });
                    toast.present();
                    loader.dismiss();
                  }
                );
            } else {
              let toast = this.toastCtrl.create({
                message: "gagal menambahkan activity, coba kembali.",
                duration: 3000,
                position: "bottom",
              });
              toast.present();
              loader.dismiss();
            }
          },
          (err) => {
            console.log(err);
            let toast = this.toastCtrl.create({
              message: "gagal menambahkan activity, coba kembali.",
              duration: 3000,
              position: "bottom",
            });
            toast.present();
            loader.dismiss();
          }
        );
    } else if (arrayParamInsert.length > 0 && arrayParamUpdate.length == 0) {
      this.http
        .post(
          api_res + "am7_activity.php",
          {
            usernameEDI: "EDI-USERNAME",
            passwordEDI: "RURJLVBBU1NXT1JE",
            id_user: this.idUser,
            nipp: this.userdataTPK["data"]["NIPP"],
            arr_param: arrayParamInsert,
            action: "INSERT",
            tgl: "",
          },
          {}
        )
        .subscribe(
          (data) => {
            console.log(data);
            if (data["rcmsg"] == "SUCCESS") {
              let toast = this.toastCtrl.create({
                message: "Berhasil menambahkan activity.",
                duration: 4000,
                position: "bottom",
              });
              loader.dismiss();
              toast.present();
              this.navCtrl.setRoot("Home3Page");
            } else {
              let toast = this.toastCtrl.create({
                message: "gagal menambahkan activity, coba kembali.",
                duration: 3000,
                position: "bottom",
              });
              toast.present();
              loader.dismiss();
            }
          },
          (err) => {
            console.log(err);
            let toast = this.toastCtrl.create({
              message: "gagal menambahkan activity, coba kembali.",
              duration: 3000,
              position: "bottom",
            });
            toast.present();
            loader.dismiss();
          }
        );
    } else if (arrayParamInsert.length == 0 && arrayParamUpdate.length > 0) {
      this.http
        .post(
          api_res + "am7_activity.php",
          {
            usernameEDI: "EDI-USERNAME",
            passwordEDI: "RURJLVBBU1NXT1JE",
            id_user: this.idUser,
            nipp: this.userdataTPK["data"]["NIPP"],
            arr_param: arrayParamUpdate,
            action: "UPDATE",
            tgl: "",
          },
          {}
        )
        .subscribe(
          (data) => {
            console.log(data);
            if (data["rcmsg"] == "SUCCESS") {
              let toast = this.toastCtrl.create({
                message: "Berhasil mengubah activity.",
                duration: 4000,
                position: "bottom",
              });
              loader.dismiss();
              toast.present();
              this.navCtrl.setRoot("Home3Page");
            } else {
              let toast = this.toastCtrl.create({
                message: "gagal mengubah activity, coba kembali.",
                duration: 3000,
                position: "bottom",
              });
              toast.present();
              loader.dismiss();
            }
          },
          (err) => {
            console.log(err);
            let toast = this.toastCtrl.create({
              message: "gagal mengubah activity, coba kembali.",
              duration: 3000,
              position: "bottom",
            });
            toast.present();
            loader.dismiss();
          }
        );
    } else {
      let toast = this.toastCtrl.create({
        message: "gagal menambahkan activity, coba kembali.",
        duration: 3000,
        position: "bottom",
      });
      toast.present();
      loader.dismiss();
    }
  }

  disableSubmitButton() {
    var error = [];

    for (var i = 0; i < this.inputActivityList.length; i++) {
      if (this.checkType == "CHECK_OUT") {
        if (this.inputActivityList[i]["activity"] == "" || this.inputActivityList[i]["status"] == "" || this.inputActivityList[i]["status"] == null) {
          error.push("error");
        } else {
          if (this.inputActivityList[i]["att_activity_id"] != "") {
            if (this.inputActivityList[i]["status"] != "" || this.inputActivityList[i]["status"] != null) {
              if (this.inputActivityList[i]["status"] != "Batal" && this.numberExtractor(this.originalActivityList[i]["status"]) > this.numberExtractor(this.inputActivityList[i]["status"])) {
                error.push("error");
              }
            }
          }

          // error.push('false');
        }
      } else if (this.checkType == "CHECK_IN") {
        if (this.inputActivityList[i]["activity"] == "") {
          error.push("error");
        } else {
          // error.push('false');
        }
      }
    }

    if (error.length > 0) {
      return true;
    } else {
      return false;
    }
  }

  checkReadOnly(input) {
    if (input["att_activity_id"] != "" || input["att_activity_id"] != null) {
      return true;
    } else {
      return false;
    }
  }

  numberExtractor(text) {
    if (text != null && text != "Batal") {
      var thenum = text.match(/\d+/);
      return parseInt(thenum[0]);
    }
    // else if (text == 'Batal') {
    //   return 110;
    // }
    else {
      return 0;
    }
  }

  onChangeStatus(event, i) {
    // console.log('yg di input : ' + this.numberExtractor(this.inputActivityList[i]['status']));
    // console.log('yg sebelumnya : ' + this.numberExtractor(this.originalActivityList[i]['status']));
    // console.log('yg ori > dari yang di input : ');
    // if (this.inputActivityList[i]['status'] != '' || this.inputActivityList[i]['status'] != null) {
    //   if (this.inputActivityList[i]['status'] != 'Batal' && this.numberExtractor(this.originalActivityList[i]['status']) > this.numberExtractor(this.inputActivityList[i]['status'])) {
    //     // this.updateStatusAlert[i] = '1';
    //     console.log('IYO');
    //   } else {
    //     // this.updateStatusAlert[i] = '0';
    //     console.log('OGAK');
    //   }
    // }
  }

  skip() {
    this.navCtrl.pop();
  }
}
