import { Component } from "@angular/core";
import { Platform, IonicPage, NavController, NavParams, ActionSheetController, LoadingController, AlertController, PopoverController, ModalController, ToastController } from "ionic-angular";
import { SoapService } from "../soap.service";
import { Storage } from "@ionic/storage";
import { InAppBrowser, InAppBrowserOptions } from "@ionic-native/in-app-browser";
import { api_base_url, api_user, api_pass, api_res, urldownload_srt } from "../../config";
import { DatePipe } from "@angular/common";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { FileTransfer, FileUploadOptions, FileTransferObject } from "@ionic-native/file-transfer";
import { File } from "@ionic-native/file";
import { FileOpener } from "@ionic-native/file-opener";
/**
 * Generated class for the AbsenListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-absen-list",
  providers: [SoapService],
  templateUrl: "absen-list.html",
})
export class AbsenListPage {
  bulan: any;
  tahun: any;
  bulanList = [];
  tahunList: Array<any> = [];
  absenList: any;
  userdataTPK: any;
  isAtasan: boolean;
  isLoadingBadges: boolean = true;
  badgesList: any;

  isLoading: Boolean = true;
  fakeUsers: Array<any> = new Array(5);

  dataValidasi: any;
  isHadirkoe: Boolean = false;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public actionSheetCtrl: ActionSheetController,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public soapService: SoapService,
    public storage: Storage,
    public datepipe: DatePipe,
    public popoverCtrl: PopoverController,
    public modalCtrl: ModalController,
    public toastCtrl: ToastController,
    public inAppBrowser: InAppBrowser,
    public http: HttpClient,
    public transfer: FileTransfer,
    public file: File,
    public fileOpener: FileOpener,
    public platform: Platform
  ) {
  }

  ionViewDidLoad() {
    let date = new Date();
    let currentYear = date.getFullYear();
    // let lastYear = date.getFullYear() - 1;
    let currentMonth = date.getMonth();
    this.bulan = (currentMonth + 1).toString();
    this.tahun = currentYear;

    this.storage.get("userdataTPK").then((val) => {
      this.userdataTPK = val;
      this.getBadges();
      this.newSession();

      this.getAbsen(currentMonth + 1, currentYear);
      this.getValidasi();
    });

    for (var i = 0; i < 10; i++) {
      this.tahunList.push(currentYear - i);
    }

    for (var i = 1; i <= this.bulan; i++) {
      let myMonth = this.getMonth(i);
      this.bulanList.push({ val: i, bulan: myMonth });
    }
  }

  onChangeYear() {
    let date = new Date();
    let currentYear = date.getFullYear();
    let currentMonth = date.getMonth();
    let bulan = (currentMonth + 1).toString();

    if (currentYear > this.tahun) {
      this.bulanList = [];
      for (var i = 1; i <= 12; i++) {
        let myMonth = this.getMonth(i);
        this.bulanList.push({ val: i, bulan: myMonth });
      }
    } else if (currentYear == this.tahun) {
      this.bulan = bulan;
      this.bulanList = [];
      for (var i = 1; i <= parseInt(bulan); i++) {
        let myMonth = this.getMonth(i);
        this.bulanList.push({ val: i, bulan: myMonth });
      }
    }
  }

  getMonth(i) {
    if (i == 1) {
      return "Januari";
    } else if (i == 2) {
      return "Februari";
    } else if (i == 3) {
      return "Maret";
    } else if (i == 4) {
      return "April";
    } else if (i == 5) {
      return "Mei";
    } else if (i == 6) {
      return "Juni";
    } else if (i == 7) {
      return "Juli";
    } else if (i == 8) {
      return "Agustus";
    } else if (i == 9) {
      return "September";
    } else if (i == 10) {
      return "Oktober";
    } else if (i == 11) {
      return "November";
    } else if (i == 12) {
      return "Desember";
    } else {
      //console.log('error disini');
    }
  }

  newSession() {
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
        // console.log(responData);
        if (responData["rcmsg"] == "SUCCESS") {
          if (responData["data"]["login_status"] == "404 Not Found") {
          } else if (responData["data"] == undefined) {
          } else if (responData["data"]["login_status"] == "AP NOT ALLOWED") {
          } else {
            responData["data"]["FL_FIRST_IMOVE"] = false;
            this.userdataTPK = responData;
            if (this.isEmptyObject(this.userdataTPK["data"]["LISTOFFICER"][0]) && this.isEmptyObject(this.userdataTPK["data"]["DATA_BAWAHAN"][0]) && this.isEmptyObject(this.userdataTPK["data"]["DATA_BAWAHAN_TNO"][0])) {
              this.isAtasan = false;
            } else {
              this.isAtasan = true;
            }

            this.storage.set("userdataTPK", responData).then(() => {});
          }
        } else {
        }
      })
      .catch((error) => {
        //console.log(error);
      });
  }

  showOption(type, absen) {
    let buttonList = [];
    buttonList.push({
      text: "Koreksi Jam Datang",
      role: "koreksiDatang",
      cssClass: absen["IS_KOREKSI_DATANG"] ? "" : "action-sheet-disable",
      handler: () => {
        let modal = this.modalCtrl.create(
          "KoreksiAbsenPersonalPage",
          {
            userdataTPK: this.userdataTPK,
            dataAbsen: absen,
            jenisAbsen: "1",
          },
          {
            enableBackdropDismiss: true,
            showBackdrop: true,
            cssClass: "my-modal2",
          }
        );

        if (absen["IS_KOREKSI_DATANG"]) {
          modal.present();
        }

        modal.onDidDismiss((data) => {
          if (!data.isCancel) {
            this.selectVal(this.bulan, this.tahun);
          }
        });
      },
    });

    buttonList.push({
      text: "Koreksi Jam Pulang",
      role: "koreksiPulang",
      cssClass: absen["IS_KOREKSI_PULANG"] ? "" : "action-sheet-disable",
      handler: () => {
        let modal = this.modalCtrl.create(
          "KoreksiAbsenPersonalPage",
          {
            userdataTPK: this.userdataTPK,
            dataAbsen: absen,
            jenisAbsen: "2",
          },
          {
            enableBackdropDismiss: true,
            showBackdrop: true,
            cssClass: "my-modal2",
          }
        );
        if (absen["IS_KOREKSI_PULANG"]) {
          modal.present();
        }
        modal.onDidDismiss((data) => {
          if (!data.isCancel) {
            this.selectVal(this.bulan, this.tahun);
          }
        });
      },
    });

    buttonList.push({
      text: "Tutup",
      role: "cancel",
      handler: () => {},
    });

    if (type == 1) {
      let actionSheet = this.actionSheetCtrl.create({
        title: "Pilih Proses",
        cssClass: "my-action-sheet",
        buttons: buttonList,
      });

      actionSheet.present();
    } else if (type == 2) {
      let actionSheet = this.actionSheetCtrl.create({
        //title: 'Choose Action',
        buttons: [
          {
            text: "Koreksi Jam Datang",
            role: "koreksiDatang",
            handler: () => {
              //console.log('koreksiDatang clicked');
            },
          },
          {
            text: "Koreksi Jam Pulang",
            handler: () => {
              //console.log('koreksiPulang clicked');
            },
          },
          {
            text: "Tutup",
            role: "cancel",
            handler: () => {
              //console.log('Cancel clicked');
            },
          },
        ],
      });

      actionSheet.present();
    }
  }

  selectVal(bln, thn) {
    //this.getAbsen(this.bulan.split('_')[0], this.bulan.split('_')[1]);
    this.getAbsen(bln, thn);
  }

  getAbsen(bulan, tahun) {
    // let loading = this.loadingCtrl.create({
    //   spinner: 'dots',
    //   content: "Mohon Tunggu...",
    //   cssClass: 'transparent',
    //   dismissOnPageChange:true
    // });
    // loading.present();
    this.isLoading = true;
    this.soapService
      .post(api_base_url, "eoffice_get_list_absen_personal", {
        fStream: JSON.stringify({
          usernameEDI: api_user,
          passwordEDI: api_pass,
          nipp: this.userdataTPK.data.NIPP,
          bulan: bulan,
          tahun: tahun,
        }),
      })
      .then((result) => {
        var responData = JSON.parse(String(result));
        //console.log(responData);
        if (responData["rcmsg"] == "SUCCESS") {
          this.absenList = responData["data"];
          for (var i = 0; i < this.absenList.length; i++) {
            var hari = this.absenList[i]["TANGGAL"].substr(0, this.absenList[i]["TANGGAL"].indexOf(","));
            this.absenList[i]["HARI"] = hari;
            var tglSplit = this.absenList[i]["TANGGAL"].split(" ");
            this.absenList[i]["TGL"] = tglSplit[1];
          }

          console.log(this.absenList);
        } else {
          let toast = this.toastCtrl.create({
            message: "Mohon Maaf Sedang Terjadi Kesalahan, Coba Beberapa Saat Lagi.",
            duration: 3000,
            position: "bottom",
          });
          toast.present();
        }
        // loading.dismiss();
        this.isLoading = false;
      })
      .catch((error) => {
        let toast = this.toastCtrl.create({
          message: "Terjadi Masalah Koneksi, Silahkan Coba Kembali.",
          duration: 3000,
          position: "bottom",
        });
        toast.present();
        // loading.dismiss();
        this.isLoading = false;
      });
  }

  getBadges() {
    this.isLoadingBadges = true;
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
        if (responData["rcmsg"] == "SUCCESS") {
          this.badgesList = responData["data"];
        } else {
          // let toast = this.toastCtrl.create({
          //   message: 'Gagal Mendapatkan Notifikasi',
          //   duration: 3000,
          //   position: 'bottom'
          // });
          //toast.present();
        }
        this.isLoadingBadges = false;
      })
      .catch((error) => {
        //console.log(error);
        // let toast = this.toastCtrl.create({
        //   message: 'Gagal Mendapatkan Notifikasi, Periksa Koneksi Internet Anda.',
        //   duration: 3000,
        //   position: 'bottom'
        // });
        //toast.present();
        this.isLoadingBadges = false;
      });
  }

  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create("MenuAbsenPage", {}, { cssClass: "my-popover" });
    popover.present({
      ev: myEvent,
    });
  }

  convertMonths() {
    switch (this.bulan.split("_")[0]) {
      case "1":
        return "Januari";
      case "2":
        return "Februari";
      case "3":
        return "Maret";
      case "4":
        return "April";
      case "5":
        return "Mei";
      case "6":
        return "Juni";
      case "7":
        return "Juli";
      case "8":
        return "Agustus";
      case "9":
        return "September";
      case "10":
        return "Oktober";
      case "11":
        return "November";
      case "12":
        return "Desember";
      default:
        return "false";
    }
  }

  convertMonths2(val) {
    switch (val) {
      case 1:
        return "Januari";
      case 2:
        return "Februari";
      case 3:
        return "Maret";
      case 4:
        return "April";
      case 5:
        return "Mei";
      case 6:
        return "Juni";
      case 7:
        return "Juli";
      case 8:
        return "Agustus";
      case 9:
        return "September";
      case 10:
        return "Oktober";
      case 11:
        return "November";
      case 12:
        return "Desember";
      default:
        return "false";
    }
  }

  subTanggal(val) {
    //console.log(val.split(" - "));
    //return val.split(" ", 1);
  }

  isEmptyObject(obj) {
    for (var prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        return false;
      }
    }
    return true;
  }

  parse(val) {
    var intValue = parseInt(val);

    if (intValue > 0) {
      return true;
    } else {
      return false;
    }
  }

  goToAbsenMobileDetail(absen) {
    console.log(absen);
    // var tgl = absen['TANGGAL_ONLY'].split("-");
    // var date = tgl[0];
    // if (tgl[0] < 10) {
    //   date = '0' + tgl[0];
    // }

    // console.log(date + "-" + this.bulan + "-" + this.tahun);
    // console.log(this.datepipe.transform(date + "-" + this.bulan + "-" + this.tahun, 'dd-MM-yyyy'));

    this.navCtrl.push("AbsenMobileDetailPage", {
      id_user: this.userdataTPK["data"]["IDUSER"],
      nipp: this.userdataTPK["data"]["NIPP"],
      nama: this.userdataTPK["data"]["NAMA"],
      shift: "",
      // date: date + "-" + this.bulan + "-" + this.tahun,
      date: absen["TANGGAL_ONLY"],
      fromPage: "AbsenListPage",
    });
  }

  getValidasi() {
    var date = new Date();
    var formattedDate = this.datepipe.transform(date, "yyyy-MM-dd HH:mm:ss");
    var rand = Math.floor(Math.random() * 100000000 + 1);
    this.http
      .post(api_res + "am3_check_shift.php", {
        usernameEDI: api_user,
        passwordEDI: api_pass,
        nipp: this.userdataTPK["data"]["NIPP"],
        id_user: this.userdataTPK["data"]["IDUSER"],
      })
      .subscribe(
        (data) => {
          console.log(data);
          if (data["rcmsg"] == "SUCCESS") {
            this.dataValidasi = data["data"];
            this.isHadirkoe = this.dataValidasi["HADIRKOE"];
          } else {
            this.isHadirkoe = false;
          }
        },
        (err) => {
          console.log(err);
          this.isHadirkoe = false;
        }
      );
  }

  // cetakAbsen() {
  //   var date = new Date();
  //   var formattedDate = this.datepipe.transform(date, "yyyy-MM-dd HH:mm:ss");
  //   var rand = Math.floor(Math.random() * 100000000 + 1);

  //   var headers = new HttpHeaders({
  //     Accept: "*/*",
  //     username: api_user,
  //     password: api_pass,
  //     externalId: rand.toString(),
  //     timestamp: formattedDate,
  //     "Content-Type": "application/json",
  //   });

  //   if (this.bulan == null || this.tahun == null) {
  //     let toast = this.toastCtrl.create({
  //       message: "Anda belum memilih bulan atau tahun.",
  //       duration: 3000,
  //       position: "bottom",
  //     });
  //     toast.present();
  //   } else {
  //     let loading = this.loadingCtrl.create({
  //       spinner: "dots",
  //       content: "Mengunduh Absen...",
  //       cssClass: "transparent",
  //       dismissOnPageChange: true,
  //     });
  //     loading.present();
  //     this.http
  //       .post(
  //         api_res + "DownloadMobile.php",
  //         {
  //           usernameEDI: api_user,
  //           passwordEDI: api_pass,
  //           nipp: btoa(this.userdataTPK["data"]["NIPP"]),
  //           bulan: this.bulan,
  //           tahun: this.tahun,
  //         },
  //         {
  //           headers,
  //         }
  //       )
  //       .subscribe(
  //         (result) => {
  //           var responData = result;
  //           if (responData["rcmsg"] == "SUCCESS") {
  //             const options: InAppBrowserOptions = {
  //               zoom: "no",
  //             };

  //             const browser = this.inAppBrowser.create(responData["data"]["LINK"], "_system", options);
  //           } else {
  //             let toast = this.toastCtrl.create({
  //               message: "Terjadi kesalahan.",
  //               duration: 3000,
  //               position: "bottom",
  //             });
  //             toast.present();
  //           }
  //         },
  //         (err) => {
  //           let toast = this.toastCtrl.create({
  //             message: "Gagal mengunduh absen, silahkan coba kembali.",
  //             duration: 3000,
  //             position: "bottom",
  //           });
  //           toast.present();
  //         }
  //       );
  //     loading.dismiss();
  //   }
  // }

  cetakAbsen() {
    let loading = this.loadingCtrl.create({
      spinner: "dots",
      content: "Mengunduh Absen ...",
      cssClass: "transparent",
      dismissOnPageChange: true,
    });
    loading.present();

    var link = "";
    link = urldownload_srt + "DownloadMobile/cetak_absen?nipp=" + btoa(this.userdataTPK["data"]["NIPP"]) + "&bulan=" + this.bulan + "&tahun=" + this.tahun;

    console.log(link);
    var localPath1 = "";

    const fileTransfer: FileTransferObject = this.transfer.create();
    fileTransfer.download(link, this.file.dataDirectory + "Report_Absen_" + this.userdataTPK["data"]["NIPP"] + "_" + this.bulan + "_" + this.tahun + ".pdf").then(
      (entry) => {
        console.log("download complete 1: " + entry.toURL());
        localPath1 = entry.toURL();

        loading.dismiss();
        let alert = this.alertCtrl.create({
          subTitle: "Generate Absen PDF Berhasil!",
          cssClass: "alert",
          buttons: [
            {
              text: "Tutup",
              role: "cancel",
              handler: () => {
                //console.log('Cancel clicked');
              },
            },
            {
              text: "Buka Report Absen",
              handler: () => {
                this.fileOpener
                  .open(localPath1, "application/pdf")
                  .then(() => console.log("File is opened"))
                  .catch((e) => console.log("Error opening file", e));
              },
            },
          ],
        });
        alert.present();
      },
      (error) => {
        // handle error
        loading.dismiss();
      }
    );
  }
}
