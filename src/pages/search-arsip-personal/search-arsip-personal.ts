import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ViewController,
  LoadingController,
  AlertController,
  ToastController,
} from "ionic-angular";
import { DatePicker } from "@ionic-native/date-picker";
import { DatePipe } from "@angular/common";
import { SoapService } from "../soap.service";
import { Storage } from "@ionic/storage";
import { api_base_url, api_user, api_pass, sc_code } from "../../config";
import { Platform } from "ionic-angular";

/**
 * Generated class for the SearchArsipPersonalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-search-arsip-personal",
  providers: [SoapService],
  templateUrl: "search-arsip-personal.html",
})
export class SearchArsipPersonalPage {
  perihal: any = "";
  namaPengirim: any = "";
  noSurat: any = "";
  startDate: any = "";
  endDate: any = "";
  statusBaca: any = "";

  messages: Array<any> = [];
  loading: any;
  batasAtas = 1;
  batasBawah = 20;
  isLoading: boolean = false;
  userdataTPK: any;
  fakeUsers: Array<any> = new Array(5);
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public storage: Storage,
    public loadingCtrl: LoadingController,
    public soapService: SoapService,
    public alertCtrl: AlertController,
    public datePipe: DatePipe,
    public datePicker: DatePicker,
    public platform: Platform,
    public toastCtrl: ToastController
  ) {
    this.storage.get("userdataTPK").then((val) => {
      this.userdataTPK = val;
    });
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad SearchArsipPersonalPage");
  }

  showDatePicker(type: number) {
    this.datePicker
      .show({
        date: new Date(),
        mode: "date",
        maxDate: new Date().valueOf(),
        androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_LIGHT,
      })
      .then(
        (date) => {
          if (type == 1) {
            this.startDate = this.datePipe.transform(date, "dd-MM-yyyy");
          } else if (type == 2) {
            this.endDate = this.datePipe.transform(date, "dd-MM-yyyy");
          }
        },
        (err) => console.log("Error occurred while getting date: ", err)
      );
  }

  doSearch() {
    this.batasAtas = 1;
    this.batasBawah = 20;
    this.messages = [];
    if (this.startDate == "" && this.endDate != "") {
      this.startDate = this.endDate;
    } else if (this.endDate == "" && this.startDate != "") {
      this.endDate = this.startDate;
    }
    this.getmessages("first", "");
  }

  getmessages(type, functionName) {
    if (type == "first" && functionName == "") {
      this.isLoading = true;
    }

    this.soapService
      .post(api_base_url, "eoffice_search_arsip", {
        fStream: JSON.stringify({
          usernameEDI: api_user,
          passwordEDI: api_pass,
          iduser: this.userdataTPK["data"]["IDUSER"],
          idjabatan: this.userdataTPK["data"]["IDJABATAN"],
          pengirim: this.namaPengirim,
          no_surat: this.noSurat,
          perihal: this.perihal,
          tanggalawal:
            this.startDate == "" && this.endDate != ""
              ? this.endDate
              : this.startDate,
          tanggalakhir:
            this.endDate == "" && this.startDate != ""
              ? this.startDate
              : this.endDate,
          status_baca: this.statusBaca,
          page: this.batasAtas,
          jmlpage: this.batasBawah,
          sorting: "1",
        }),
      })
      .then((result) => {
        var responData = JSON.parse(String(result));
        console.log(responData);
        if (responData["rcmsg"] == "SUCCESS") {
          if (type == "refresh" && functionName != "") {
            this.messages = [];
          }

          if (
            responData["data"]["List_Arsip"].length > 0 &&
            !this.isEmptyObject(responData["data"]["List_Arsip"][0])
          ) {
            for (var i = 0; i < responData["data"]["List_Arsip"].length; i++) {
              this.messages.push(responData["data"]["List_Arsip"][i]);
            }
          }
        } else {
          let toast = this.toastCtrl.create({
            message:
              "Mohon Maaf Sedang Terjadi Kesalahan, Coba Beberapa Saat Lagi.",
            duration: 3000,
            position: "bottom",
          });
          toast.present();
        }

        if (type == "first" && functionName == "") {
        } else if (type == "infinite" && functionName != "") {
          functionName.complete();
        } else if (type == "refresh" && functionName != "") {
          functionName.complete();
        }

        this.isLoading = false;
      })
      .catch((error) => {
        let toast = this.toastCtrl.create({
          message: "Terjadi Masalah Koneksi, Silahkan Coba Kembali.",
          duration: 3000,
          position: "bottom",
        });
        toast.present();
        if (type == "first" && functionName == "") {
        } else if (type == "infinite" && functionName != "") {
          functionName.complete();
        } else if (type == "refresh" && functionName != "") {
          functionName.complete();
        }
        this.isLoading = false;
      });
  }

  closeModal() {
    this.viewCtrl.dismiss();
  }

  goToDetail(message) {
    this.navCtrl.push("InboxDetailPage", {
      messageData: message,
      userdataTPK: this.userdataTPK,
      nipp: this.userdataTPK["data"]["NIPP"],
    });
  }

  doInfinite(infiniteScroll) {
    if (this.messages.length >= 20) {
      this.batasAtas++;
      this.getmessages("infinite", infiniteScroll);
    } else {
      infiniteScroll.complete();
    }
  }

  isEmptyObject(obj) {
    for (var prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        return false;
      }
    }
    return true;
  }

  clearField() {
    this.perihal = "";
    this.namaPengirim = "";
    this.noSurat = "";
    this.startDate = "";
    this.endDate = "";
    this.statusBaca = "";
  }

  checkFocus(data) {
    this.showDatePicker(data);
  }

  doKembalikan(data) {
    let loading = this.loadingCtrl.create({
      spinner: "dots",
      content: "Mengembalikan Surat...",
      cssClass: "transparent",
      dismissOnPageChange: true,
    });
    loading.present();
    this.soapService
      .post(api_base_url, "eoffice_arsip_kembalikan", {
        fStream: JSON.stringify({
          usernameEDI: api_user,
          passwordEDI: api_pass,
          id_surat: data["id_surat"],
          keterangan: data["Status"],
          id_user: this.userdataTPK.data.IDUSER,
          id_jab: this.userdataTPK.data.IDJABATAN,
        }),
      })
      .then((result) => {
        var responData = JSON.parse(String(result));
        let toast = this.toastCtrl.create({
          message: "Surat Berhasil Dikembalikan ke Inbox.",
          duration: 3000,
          position: "bottom",
        });
        toast.present();
        this.getmessages("first", "");
        loading.dismiss();
      })
      .catch((error) => {
        let toast = this.toastCtrl.create({
          message:
            "Mohon Maaf Sedang Terjadi Kesalahan, Coba Beberapa Saat Lagi.",
          duration: 3000,
          position: "bottom",
        });
        toast.present();
        loading.dismiss();
      });
  }
}
