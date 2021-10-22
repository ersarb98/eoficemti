import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams, App, AlertController, LoadingController, ToastController, ModalController, Platform } from "ionic-angular";
import { Storage } from "@ionic/storage";
import { api_base_url, api_user, api_pass, api_p2b_url, api_res } from "../../config";
import { SoapService } from "../soap.service";
import { Device } from "@ionic-native/device";

import { OneSignal } from "@ionic-native/onesignal";
import { InAppBrowser, InAppBrowserOptions } from "@ionic-native/in-app-browser";
import { HttpClient, HttpHeaders } from "@angular/common/http";

/**
 * Generated class for the Home3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-home3",
  providers: [SoapService],
  templateUrl: "home3.html",
})
export class Home3Page {
  userdataTPK: any;
  isLoading: Boolean = true;
  badgesList: any;
  badgesP2b: any;
  badgesPrpoList: any;
  agendaList: Array<any> = [];
  isSkipUpdate: Boolean = false;
  dataValidasi: any;
  isLoadingHadirkoe: Boolean = true;
  isAtasan: Boolean;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public app: App,
    public storage: Storage,
    public loadingCtrl: LoadingController,
    public soapService: SoapService,
    public toastCtrl: ToastController,
    public device: Device,
    public inAppBrowser: InAppBrowser,
    public oneSignal: OneSignal,
    public modalCtrl: ModalController,
    public http: HttpClient,
    public platform: Platform
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad Home3Page");
  }

  ionViewWillEnter() {
    this.storage.get("userdataTPK").then((val) => {
      // console.log(val);
      this.userdataTPK = val;
      this.getBadges();
      this.getBadgesP2b();
      this.getBadgesPrpo();
      this.getValidasi();
      this.newSession("first", "");
      this.getData("first", "");
      this.cekVersi();
      if (this.userdataTPK["data"]["DATA_BAWAHAN"].length == 0 && this.userdataTPK["data"]["DATA_BAWAHAN_TNO"].length == 0) {
        this.isAtasan = false;
      } else {
        this.isAtasan = true;
      }
    });
  }

  newSession(type, functionName) {
    // let loading = this.loadingCtrl.create({
    //   spinner: 'dots',
    //   content: "Mohon Tunggu...",
    //   cssClass: 'transparent',
    //   dismissOnPageChange: true
    // });

    // if (type == 'refresh') {
    //   loading.present();
    // }

    // this.isLoading = true;

    this.soapService
      .post(api_base_url, "eoffice_get_user_data", {
        fStream: JSON.stringify({
          usernameEDI: api_user,
          passwordEDI: api_pass,
          username: this.userdataTPK["data"]["NIPP"],
        }),
      })
      .then((result) => {
        let responData = JSON.parse(String(result));
        if (responData["rcmsg"] == "SUCCESS") {
          if (responData["data"]["login_status"] == "404 Not Found") {
            // console.log(responData['data']['login_status']);
          } else if (responData["data"] == undefined) {
            // console.log(responData['data']);
          } else if (responData["data"]["login_status"] == "AP NOT ALLOWED") {
            // console.log(responData['data']['login_status']);
          } else {
            this.userdataTPK = responData;
            this.storage.set("userdataTPK", responData).then(() => {
              //this.getData(type, functionName, loading);
            });
          }
        } else {
          // console.log("error here");
          //loading.dismiss();
          // this.isLoading = false;
        }
      })
      .catch((error) => {
        let toast = this.toastCtrl.create({
          message: "Terjadi Masalah Koneksi, Silahkan Coba Kembali.",
          duration: 3000,
          position: "bottom",
        });
        toast.present();
        if (type == "refresh") {
          functionName.complete();
          // loading.dismiss();
        }
        // this.isLoading = false;
      });
  }

  getData(type, functionName) {
    this.isLoading = true;

    this.soapService
      .post(api_base_url, "eoffice_home", {
        fStream: JSON.stringify({
          usernameEDI: api_user,
          passwordEDI: api_pass,
          iduser: this.userdataTPK.data.IDUSER,
          idjabatan: this.userdataTPK.data.IDJABATAN,
          nipp: this.userdataTPK.data.NIPP,
        }),
      })
      .then((result) => {
        var responData = JSON.parse(String(result));
        // console.log(responData);
        if (responData["rcmsg"] == "SUCCESS") {
          this.agendaList = [];
          for (var i = 0; i < responData["data"]["AGENDA_HARI_INI"].length; i++) {
            this.agendaList.push(responData["data"]["AGENDA_HARI_INI"][i]);
          }

          if (type == "refresh") {
            functionName.complete();
            // loading.dismiss();
          }
          this.isLoading = false;
        } else {
          let toast = this.toastCtrl.create({
            message: "Mohon Maaf Sedang Terjadi Kesalahan, Coba Beberapa Saat Lagi.",
            duration: 3000,
            position: "bottom",
          });
          toast.present();
          if (type == "refresh") {
            functionName.complete();
          }
          this.isLoading = false;
        }
      })
      .catch((error) => {
        let toast = this.toastCtrl.create({
          message: "Terjadi Masalah Koneksi, Silahkan Coba Kembali.",
          duration: 3000,
          position: "bottom",
        });
        toast.present();
        if (type == "refresh") {
          functionName.complete();
          // loading.dismiss();
        }
        this.isLoading = false;
      });
  }

  getToast() {
    let toast = this.toastCtrl.create({
      message: "Under Maintenance.",
      duration: 3000,
      position: "bottom",
    });
    toast.present();
  }

  getBadges() {
    this.soapService
      .post(api_base_url, "eoffice_countbadges", {
        fStream: JSON.stringify({
          usernameEDI: api_user,
          passwordEDI: api_pass,
          iduser: this.userdataTPK["data"]["IDUSER"],
          idjabatan: this.userdataTPK["data"]["IDJABATAN"],
          nipp: this.userdataTPK["data"]["NIPP"],
        }),
      })
      .then((result) => {
        var responData = JSON.parse(String(result));
        console.log(responData);

        if (responData["rcmsg"] == "SUCCESS") {
          this.badgesList = responData["data"];
          console.log(this.badgesList);
        } else {
          let toast = this.toastCtrl.create({
            message: "Gagal Mendapatkan Notifikasi, Coba Beberapa Saat Lagi.",
            duration: 3000,
            position: "bottom",
          });
          toast.present();
        }
      })
      .catch((error) => {
        let toast = this.toastCtrl.create({
          message: "Gagal Mendapatkan Notifikasi, Periksa Koneksi Internet Anda.",
          duration: 3000,
          position: "bottom",
        });
        toast.present();
      });
  }

  getBadgesP2b() {
    // this.soapService
    //   .post(api_p2b_url, 'eoffice_countbadges', {
    //     fStream: JSON.stringify(
    //       {
    //         usernameEDI: api_user,
    //         passwordEDI: api_pass,
    //         iduser: this.userdataTPK['data']['IDUSER'],
    //         idjabatan: this.userdataTPK['data']['IDJABATAN'],
    //         nipp: this.userdataTPK['data']['NIPP']
    //       }
    //     )
    //   }).then(result => {
    //     var responData = JSON.parse(String(result));
    //     console.log(responData);
    //     if (responData['rcmsg'] == "SUCCESS") {
    //       this.badgesP2b = responData['data'];
    //       // console.log(this.badgesList);
    //     } else {
    //       let toast = this.toastCtrl.create({
    //         message: 'Gagal Mendapatkan Notifikasi, Coba Beberapa Saat Lagi.',
    //         duration: 3000,
    //         position: 'bottom'
    //       });
    //       toast.present();
    //     }
    //   })
    //   .catch(error => {
    //     let toast = this.toastCtrl.create({
    //       message: 'Gagal Mendapatkan Notifikasi, Periksa Koneksi Internet Anda.',
    //       duration: 3000,
    //       position: 'bottom'
    //     });
    //     toast.present();
    //   });
  }

  getBadgesPrpo() {
    // this.soapService
    //   .post(api_p2b_url, 'eoffice_countbadgestpk', {
    //     fStream: JSON.stringify(
    //       {
    //         usernameEDI: api_user,
    //         passwordEDI: api_pass,
    //         nipp: this.userdataTPK['data']['NIPP']
    //       }
    //     )
    //   }).then(result => {
    //     var responData = JSON.parse(String(result));
    //     if (responData['rcmsg'] == "SUCCESS") {
    //       this.badgesPrpoList = responData['data'];
    //       console.log(this.badgesPrpoList);
    //     } else {
    //     }
    //   })
    //   .catch(error => {
    //   });
  }

  doRefresh(refresher) {
    this.getBadges();
    this.getBadgesP2b();
    this.getBadgesPrpo();
    this.getValidasi();
    this.getData("refresh", refresher);
    this.newSession("refresh", refresher);
    this.cekVersi();
  }

  logout() {
    let alert = this.alertCtrl.create({
      subTitle: "Apakah anda yakin ingin log out ?",
      cssClass: "alert",
      buttons: [
        {
          text: "TIDAK",
          role: "cancel",
          handler: () => {
            // console.log('Cancel clicked');
          },
        },
        {
          text: "YA",
          handler: () => {
            this.app
              .getRootNav()
              .setRoot("LoginPage")
              .then(() => {
                //this.events.unsubscribe('user:data',() => {});
                this.storage.clear();
              });
          },
        },
      ],
    });
    alert.present();
  }

  openPage(page) {
    this.navCtrl.push(page);
  }

  openPage2(page, param) {
    this.navCtrl.push(page, {
      modul: param,
    });
  }

  notEmpty(val) {
    if (typeof val != "undefined") {
      return true;
    } else {
      return false;
    }
  }

  parse(val) {
    var intValue = parseInt(val);

    if (intValue > 0) {
      return true;
    } else {
      return false;
    }
  }

  cekVersi() {
    if (this.platform.is("cordova")) {
      this.oneSignal.getIds().then((id) => {
        console.log(id);
        this.soapService
          .post(api_base_url, "eoffice_bypass_wso", {
            fStream: JSON.stringify({
              sc_type: "check_version",
              sc_code: "",
              data: {
                platform: "android",
                version: "1.1.0",
                player_id: id.userId,
                nipp: this.userdataTPK.data.NIPP,
                model: this.device.model,
                uuid: this.device.uuid,
              },
            }),
          })
          .then((result) => {
            var responData = JSON.parse(String(result));
            console.log(responData);
            if (responData["rcmsg"] == "SUCCESS") {
              if (responData["data"]["POPUP"] == "1" || responData["data"]["POPUP"] == "2" || responData["data"]["POPUP"] == "3") {
                this.showVersiPopup(responData["data"]["POPUP"], responData["data"]["POPUP_MESSAGE"], responData["data"]["URL"]);
              } else {
              }
            } else {
            }
          })
          .catch((error) => {
            console.log(error);
          });
      });
    }
  }

  showVersiPopup(popupCode, popupMessage, url) {
    let myButton = [];
    if (popupCode == "1") {
      myButton = [
        {
          text: "LEWATI",
          role: "cancel",
          handler: () => {
            console.log("Cancel clicked");
            this.isSkipUpdate = true;
            // return false;
          },
        },
        {
          text: "UPDATE",
          handler: () => {
            const options: InAppBrowserOptions = {
              zoom: "no",
            };
            const browser = this.inAppBrowser.create(url, "_system", options);
            return false;
          },
        },
      ];
    } else if (popupCode == "2") {
      myButton = [
        {
          text: "UPDATE",
          handler: () => {
            // this.market.open('ipc.imove');
            const options: InAppBrowserOptions = {
              zoom: "no",
            };
            const browser = this.inAppBrowser.create(url, "_system", options);
            return false;
          },
        },
      ];
    } else if (popupCode == "3") {
      myButton = [
        {
          text: "OK",
          role: "cancel",
          handler: () => {
            console.log("Cancel clicked");
          },
        },
      ];
    }
    let alert = this.alertCtrl.create({
      subTitle: popupMessage,
      enableBackdropDismiss: false,
      cssClass: "alert",
      buttons: myButton,
    });
    alert.present();
  }

  showModal(myModal) {
    let modal = this.modalCtrl.create(
      myModal,
      {},
      {
        enableBackdropDismiss: true,
        showBackdrop: true,
        cssClass: "my-modal10",
      }
    );
    modal.present();
  }

  getValidasi() {
    this.http
      .post(api_res + "am3_check_shift.php", {
        usernameEDI: api_user,
        passwordEDI: api_pass,
        person_id: this.userdataTPK["data"]["PERSON_ID"],
        nipp: this.userdataTPK["data"]["NIPP"],
        id_user: this.userdataTPK["data"]["IDUSER"],
      })
      .subscribe(
        (data) => {
          console.log(data);
          //var responData = JSON.parse(data);
          this.dataValidasi = data["data"];
          this.isLoadingHadirkoe = false;
        },
        (err) => {
          console.log(err);
          this.isLoadingHadirkoe = false;
        }
      );
  }
}
