import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams, LoadingController, AlertController, ToastController } from "ionic-angular";
import { api_res, api_user, api_pass } from "../../config";
import { DatePipe } from "@angular/common";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Storage } from "@ionic/storage";

/**
 * Generated class for the LemburDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-lembur-detail",
  templateUrl: "lembur-detail.html",
})
export class LemburDetailPage {
  userdataTPK: any;
  isLoading: Boolean = false;
  fakeUsers: Array<any> = new Array(5);
  isAtasan: Boolean;
  dataPemohon: Array<any> = [];
  dataLembur: Array<any> = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: HttpClient,
    public loadingCtrl: LoadingController,
    public storage: Storage,
    public alertCtrl: AlertController,
    public toastCtrl: ToastController,
    public datepipe: DatePipe
  ) {
    this.dataPemohon = navParams.get("data");
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad LemburDetailPage");
    this.storage.get("userdataTPK").then((val) => {
      this.userdataTPK = val;
      if (this.userdataTPK["data"]["DATA_BAWAHAN"].length == 0 && this.userdataTPK["data"]["DATA_BAWAHAN_TNO"].length == 0) {
        this.isAtasan = false;
      } else {
        this.isAtasan = true;
      }
      this.getPemeriksa();
    });
  }

  getPemeriksa() {
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
        api_res + "eoffice_lembur_detail.php",
        {
          usernameEDI: api_user,
          passwordEDI: api_pass,
          id_lembur: this.dataPemohon["IdLembur"],
        },
        { headers }
      )
      .subscribe(
        (data) => {
          if (data["rcmsg"] == "SUCCESS") {
            this.dataLembur = data["data"];
          } else {
            let toast = this.toastCtrl.create({
              message: "Gagal mendapatkan data lembur, silahkan coba kembali.",
              duration: 3000,
              position: "bottom",
            });
            toast.present();
          }
        },
        (err) => {
          let toast = this.toastCtrl.create({
            message: "Gagal mendapatkan data lembur, periksa koneksi internet anda.",
            duration: 3000,
            position: "bottom",
          });
          toast.present();

          this.isLoading = false;
        }
      );
  }
}
