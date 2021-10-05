import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams, LoadingController, ToastController, ViewController } from "ionic-angular";
import { DatePipe } from "@angular/common";
import { Storage } from "@ionic/storage";
import { api_res, api_user, api_pass } from "../../config";
import { HttpClient, HttpHeaders } from "@angular/common/http";
/**
 * Generated class for the KomitmenModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-komitmen-modal",
  templateUrl: "komitmen-modal.html",
})
export class KomitmenModalPage {
  userdataTPK: any;
  idSurat: any;
  statusKomitmen: any;
  keteranganKomitmen: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: HttpClient,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    public datepipe: DatePipe,
    public storage: Storage,
    public viewCtrl: ViewController
  ) {
    this.idSurat = navParams.get("idSurat");
    this.storage.get("userdataTPK").then((val) => {
      this.userdataTPK = val;
    });
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad KomitmenModalPage");
  }

  cancel() {
    this.viewCtrl.dismiss();
  }

  submitKomitmen() {
    console.log(this.idSurat);
    console.log(this.statusKomitmen);
    console.log(this.keteranganKomitmen);
    let loading = this.loadingCtrl.create({
      spinner: "dots",
      content: "Mengupdate Komitmen...",
      cssClass: "transparent",
      dismissOnPageChange: true,
    });
    loading.present();

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
        api_res + "eoffice_komitmen.php",
        {
          usernameEDI: api_user,
          passwordEDI: api_pass,
          id_user: this.userdataTPK["data"]["NIPP"],
          nama: this.userdataTPK["data"]["NAMA"],
          idSurat: this.idSurat,
          status: this.statusKomitmen,
          keterangan: this.keteranganKomitmen,
        },
        {
          headers,
        }
      )
      .subscribe(
        (result) => {
          var responseData = result;
          if (responseData["rcmsg"] == "SUCCESS") {
            this.viewCtrl.dismiss();
            let toast = this.toastCtrl.create({
              message: "Berhasil mengupdate komitmen.",
              duration: 3000,
              position: "bottom",
            });
            loading.dismiss();
            toast.present();
          } else {
            let toast = this.toastCtrl.create({
              message: "Gagal mengupdate komitmen, silahkan coba kembali.",
              duration: 3000,
              position: "bottom",
            });
            loading.dismiss();
            toast.present();
          }
        },
        (err) => {
          let toast = this.toastCtrl.create({
            message: "Gagal mengupdate komitmen, periksa koneksi internet anda.",
            duration: 3000,
            position: "bottom",
          });
          loading.dismiss();
          toast.present();
        }
      );
  }
}
