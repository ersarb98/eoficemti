import { Component } from "@angular/core";
import { Platform, IonicPage, NavController, NavParams, ViewController, LoadingController, AlertController, ToastController } from "ionic-angular";
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
 * Generated class for the AbsenBawahanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-absen-bawahan",
  providers: [SoapService],
  templateUrl: "absen-bawahan.html",
})
export class AbsenBawahanPage {
  bulan: any;
  tahun: any;
  bulanList = [];
  absenList: any;
  userdataTPK: any;
  bawahanList = [];
  dataBawahan: any;
  tahunList: Array<any> = [];
  isLoading: Boolean = false;
  fakeUsers: Array<any> = new Array(5);

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public soapService: SoapService,
    public storage: Storage,
    public datepipe: DatePipe,
    public toastCtrl: ToastController,
    public inAppBrowser: InAppBrowser,
    public http: HttpClient,
    public transfer: FileTransfer,
    public file: File,
    public fileOpener: FileOpener,
    public viewCtrl: ViewController,
    private platform: Platform
  ) {
    let date = new Date();
    let currentYear = date.getFullYear();
    // let lastYear = date.getFullYear() - 1;
    // let currentMonth = date.getMonth();
    // this.bulan = (currentMonth+1).toString();
    // this.tahun = currentYear;

    for (var i = 0; i < 10; i++) {
      this.tahunList.push(currentYear - i);
    }

    // this.bulan = (currentMonth+1) + "_" + currentYear;

    // for (var i = currentMonth + 2; i < 13 + (currentMonth+1) ; i++) {
    //   if (i > 12) {
    //     // "Bulan " + (i-12) + " tahun " + currentYear  );
    //     this.bulanList.push({bulan : (i-12), tahun: currentYear});
    //   } else {
    //    //  "Bulan " + (i) + " tahun " + lastYear  );
    //     this.bulanList.push({bulan : (i), tahun: lastYear});
    //   }
    // }
  }

  ionViewWillLoad() {
    let loading = this.loadingCtrl.create({
      spinner: "dots",
      content: "Mohon Tunggu...",
      cssClass: "transparent",
      //dismissOnPageChange:true
    });
    loading.present();

    this.storage.get("userdataTPK").then((val) => {
      this.userdataTPK = val;
      console.log(this.userdataTPK["data"]["DATA_BAWAHAN"]);
      if (this.userdataTPK["data"]["DATA_BAWAHAN"].length > 0) {
        for (let i = 0; i < this.userdataTPK["data"]["DATA_BAWAHAN"].length; i++) {
          this.bawahanList.push(this.userdataTPK["data"]["DATA_BAWAHAN"][i]);
        }
      }
      if (this.userdataTPK["data"]["DATA_BAWAHAN_TNO"].length > 0) {
        for (let i = 0; i < this.userdataTPK["data"]["DATA_BAWAHAN_TNO"].length; i++) {
          this.bawahanList.push(this.userdataTPK["data"]["DATA_BAWAHAN_TNO"][i]);
        }
      }
      
    });
    loading.dismiss();
  }

  ionViewDidLoad() {
  }

  getAbsen(bulan, tahun) {
    var bawahanSplit = this.dataBawahan.split("_");
    console.log(bawahanSplit[2]);
    this.isLoading = true;
    this.soapService
      .post(api_base_url, "eoffice_get_list_absen_personal", {
        fStream: JSON.stringify({
          usernameEDI: api_user,
          passwordEDI: api_pass,
          nipp: bawahanSplit[2],
          bulan: bulan,
          tahun: tahun,
        }),
      })
      .then((result) => {
        var responData = JSON.parse(String(result));
        if (responData["rcmsg"] == "SUCCESS") {
          this.absenList = responData["data"];
          for (var i = 0; i < this.absenList.length; i++) {
            var hari = this.absenList[i]["TANGGAL"].substr(0, this.absenList[i]["TANGGAL"].indexOf(","));
            this.absenList[i]["HARI"] = hari;
            var tglSplit = this.absenList[i]["TANGGAL"].split(" ");
            this.absenList[i]["TGL"] = tglSplit[1];
          }
          this.isLoading = false;
        } else {
          let toast = this.toastCtrl.create({
            message: "Terjadi Masalah Koneksi, Silahkan Coba Kembali.",
            duration: 3000,
            position: "bottom",
          });
          toast.present();
          this.isLoading = false;
        }
      });
  }

  searchBawahan() {
    this.getAbsen(this.bulan, this.tahun);
    // this.getAbsen(this.bulan.split('_')[0], this.bulan.split('_')[1]);
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

  subTanggal(val) {
    //val.split(" - "));
    //return val.split(" ", 1);
  }

  goToAbsenMobileDetail(absen) {
    console.log(this.dataBawahan);
    var bawahanSplit = this.dataBawahan.split("_");

    var tgl = absen["TANGGAL"].split(" - ");
    var date = tgl[0];
    if (tgl[0] < 10) {
      date = "0" + tgl[0];
    }

    this.navCtrl.push("AbsenMobileDetailPage", {
      id_user: bawahanSplit[0],
      nipp: bawahanSplit[2],
      nama: bawahanSplit[1],
      shift: "",
      // date: date + "-" + this.bulan + "-" + this.tahun,
      date: absen["TANGGAL_ONLY"],
      fromPage: "AbsenBawahanPage",
    });
  }

  cetakAbsenBawahan() {
    if (this.bulan == null || this.tahun == null || this.dataBawahan == null) {
      let toast = this.toastCtrl.create({
        message: "Anda belum memilih bulan, tahun atau data bawahan.",
        duration: 3000,
        position: "bottom",
      });
      toast.present();
    } else {
      var bawahanSplit = this.dataBawahan.split("_");
      let loading = this.loadingCtrl.create({
        spinner: "dots",
        content: "Mengunduh Absen Bawahan...",
        cssClass: "transparent",
        dismissOnPageChange: true,
      });
      loading.present();

      var link = "";
      link = urldownload_srt + "DownloadMobile/cetak_absen?nipp=" + btoa(bawahanSplit[2]) + "&bulan=" + this.bulan + "&tahun=" + this.tahun;

      console.log(link);
      var localPath1 = "";

      const fileTransfer: FileTransferObject = this.transfer.create();
      fileTransfer.download(link, this.file.dataDirectory + "Report_Absen_" + bawahanSplit[2] + "_" + this.bulan + "_" + this.tahun + ".pdf").then(
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
}
