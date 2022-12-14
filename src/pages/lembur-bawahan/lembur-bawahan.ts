import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams, LoadingController, AlertController, ModalController, ToastController } from "ionic-angular";
import { DatePipe } from "@angular/common";

import { Storage } from "@ionic/storage";
import { api_res, api_user, api_pass } from "../../config";
import { HttpClient, HttpHeaders } from "@angular/common/http";

/**
 * Generated class for the LemburBawahanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-lembur-bawahan",
  templateUrl: "lembur-bawahan.html",
})
export class LemburBawahanPage {
  userdataTPK: any;
  isLoading: Boolean = false;
  lemburBawahanList: Array<any> = [];
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
    console.log("ionViewDidLoad LemburBawahanPage");
    this.storage.get("userdataTPK").then((val) => {
      this.userdataTPK = val;
      console.log('asd');
      if (this.userdataTPK["data"]["DATA_BAWAHAN"].length == 0 && this.userdataTPK["data"]["DATA_BAWAHAN_TNO"].length == 0) {
        this.isAtasan = false;
      } else {
        this.isAtasan = true;
      }
      this.lemburBawahanList = [];
      this.getLemburBawahanList("first", "");
    });
  }

  ionViewWillEnter() {
    
  }

  getLemburBawahanList(type, functionName) {
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
          isAtasan: this.isAtasan,
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
          console.log(responseData["data"]["Lembur Bawahan"].length);
          if (responseData["rcmsg"] == "SUCCESS") {
            if (type == "refresh" && functionName != "") {
              this.lemburBawahanList = [];
            }
            if (responseData["data"]["Lembur Bawahan"].length > 0 || responseData["data"]["Lembur Bawahan"].length != null) {
              for (var i = 0; i < responseData["data"]["Lembur Bawahan"].length; i++) {
                this.lemburBawahanList.push(responseData["data"]["Lembur Bawahan"][i]);
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
    if (this.lemburBawahanList.length >= 10) {
      this.batasAtas = this.batasBawah + 1;
      this.batasBawah = this.batasBawah + 10;
      this.getLemburBawahanList("infinite", infiniteScroll);
    } else {
      infiniteScroll.complete();
    }
  }

  doRefresh(refresher) {
    console.log(refresher);
    this.batasAtas = 1;
    this.batasBawah = 10;
    this.getLemburBawahanList("refresh", refresher);
  }

  goToDetail(data) {
    // console.log(data);
    this.navCtrl.push("LemburDetailPage", {
      data: data,
      nipp: this.userdataTPK["data"]["NIPP"],
    });
  }
}
