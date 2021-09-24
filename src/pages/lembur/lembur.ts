import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams, LoadingController, AlertController, ModalController, ToastController } from "ionic-angular";
import { DatePipe } from "@angular/common";

import { Storage } from "@ionic/storage";
import { api_res, api_user, api_pass } from "../../config";
import { HttpClient, HttpHeaders } from "@angular/common/http";

/**
 * Generated class for the LemburPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-lembur",
  templateUrl: "lembur.html",
})
export class LemburPage {
  userdataTPK: any;
  isLoading: Boolean = false;
  lemburList: Array<any> = [];
  fakeUsers: Array<any> = new Array(5);
  isAtasan: Boolean;
  batasAtas = 1;
  batasBawah = 10;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: HttpClient,
    public loadingCtrl: LoadingController,
    public storage: Storage,
    public alertCtrl: AlertController,
    public modalCtrl: ModalController,
    public toastCtrl: ToastController,
    public datepipe: DatePipe
  ) {}

  ionViewDidLoad() {
    console.log(this.lemburList.length);
    console.log("ionViewDidLoad LemburPage");
    this.storage.get("userdataTPK").then((val) => {
      this.userdataTPK = val;
      if (this.userdataTPK["data"]["DATA_BAWAHAN"].length == 0 && this.userdataTPK["data"]["DATA_BAWAHAN_TNO"].length == 0) {
        this.isAtasan = false;
      } else {
        this.isAtasan = true;
      }
      this.getLemburList("first", "");
    });
  }

  getLemburList(type, functionName) {
    if (type == "first" && functionName == "") {
      this.isLoading = true;
    }

    var date = new Date();
    var formattedDate = this.datepipe.transform(date, "yyyy-MM-dd HH:mm:ss");
    var rand = Math.floor(Math.random() * 100000000 + 1);

    var headers = new HttpHeaders({
      Accept: "*/*",
      username: api_user,
      password: api_pass,
      externalId: rand.toString(),
      timestamp: formattedDate,
      "Content-Type": "application/json",
    });

    this.http
      .post(
        api_res + "eoffice_lembur_list.php",
        {
          usernameEDI: api_user,
          passwordEDI: api_pass,
          id_user: this.userdataTPK["data"]["NIPP"],
          atas: this.batasAtas,
          bawah: this.batasBawah,
        },
        {
          headers,
        }
      )
      .subscribe(
        (result) => {
          var responseData = result;
          console.log(responseData["data"]["Lembur"].length);
          if (responseData["rcmsg"] == "SUCCESS") {
            if (type == "refresh" && functionName != "") {
              this.lemburList = [];
            }
            if (responseData["data"]["Lembur"].length > 0 || responseData["data"]["Lembur"].length != null) {
              for (var i = 0; i < responseData["data"]["Lembur"].length; i++) {
                this.lemburList.push(responseData["data"]["Lembur"][i]);
              }
            }
          } else {
            let toast = this.toastCtrl.create({
              message: "Gagal mendapatkan data lembur, silahkan coba kembali.",
              duration: 3000,
              position: "bottom",
            });
            toast.present();
          }

          if (type == "first" && functionName == "") {
            this.isLoading = false;
          } else if (type == "infinite" && functionName != "") {
            functionName.complete();
          } else if (type == "refresh" && functionName != "") {
            functionName.complete();
          }
        },
        (err) => {
          let toast = this.toastCtrl.create({
            message: "Gagal mendapatkan data lembur, periksa koneksi internet anda.",
            duration: 3000,
            position: "bottom",
          });
          toast.present();

          if (type == "first" && functionName == "") {
            this.isLoading = false;
          } else if (type == "infinite" && functionName != "") {
            functionName.complete();
          } else if (type == "refresh" && functionName != "") {
            functionName.complete();
          }

          this.isLoading = false;
        }
      );
  }

  doInfinite(infiniteScroll) {
    if (this.lemburList.length >= 10) {
      this.batasAtas = this.batasBawah + 1;
      this.batasBawah = this.batasBawah + 10;
      this.getLemburList("infinite", infiniteScroll);
    } else {
      infiniteScroll.complete();
    }
  }

  doRefresh(refresher) {
    this.batasAtas = 1;
    this.batasBawah = 10;
    this.getLemburList("refresh", refresher);
  }

  goToDetail(data) {
    // console.log(data);
    this.navCtrl.push("LemburDetailPage", {
      data: data,
      nipp: this.userdataTPK["data"]["NIPP"],
    });
  }
}
