import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams, LoadingController, AlertController, ModalController, ToastController } from "ionic-angular";

import { SoapService } from "../soap.service";
import { Storage } from "@ionic/storage";
import { api_base_url, api_user, api_pass } from "../../config";

/**
 * Generated class for the CutiListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-cuti-list",
  providers: [SoapService],
  templateUrl: "cuti-list.html",
})
export class CutiListPage {
  userdataTPK: any;
  isLoading: Boolean = true;
  cutiList: Array<any> = [];
  fakeUsers: Array<any> = new Array(5);
  isAtasan: Boolean;
  batasAtas = 1;
  batasBawah = 10;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public soapService: SoapService,
    public loadingCtrl: LoadingController,
    public storage: Storage,
    public alertCtrl: AlertController,
    public modalCtrl: ModalController,
    public toastCtrl: ToastController
  ) {}

  ionViewDidEnter() {}

  ionViewDidLoad() {
    this.storage.get("userdataTPK").then((val) => {
      this.userdataTPK = val;
      if (this.userdataTPK["data"]["DATA_BAWAHAN"].length == 0 && this.userdataTPK["data"]["DATA_BAWAHAN_TNO"].length == 0) {
        this.isAtasan = false;
      } else {
        this.isAtasan = true;
      }
      this.getCutiList("first", "");
    });
  }

  goToForm() {
    let modal = this.modalCtrl.create(
      "AddCutiPage",
      {
        openFrom: "CutiListPage",
      },
      {
        enableBackdropDismiss: true,
        showBackdrop: true,
        // cssClass:'my-modal2'
      }
    );
    modal.present();
  }

  getCutiList(type, functionName) {
    if (type == "first" && functionName == "") {
      this.isLoading = true;
    }
    this.soapService
      .post(api_base_url, "eoffice_cuti_list", {
        fStream: JSON.stringify({
          usernameEDI: api_user,
          passwordEDI: api_pass,
          id_user: this.userdataTPK["data"]["IDUSER"],
          search_jenis: "",
          search_tgl_pengajuan: "",
          search_tgl_mulai: "",
          search_tgl_selesai: "",
          search_alasan: "",
          atas: this.batasAtas,
          bawah: this.batasBawah,
        }),
      })
      .then((result) => {
        var responData = JSON.parse(String(result));
        if (responData["rcmsg"] == "SUCCESS") {
          if (type == "refresh" && functionName != "") {
            this.cutiList = [];
          }
          if (responData["data"]["Cuti Personal"].length > 0) {
            for (var i = 0; i < responData["data"]["Cuti Personal"].length; i++) {
              this.cutiList.push(responData["data"]["Cuti Personal"][i]);
            }
          }
        } else {
          let toast = this.toastCtrl.create({
            message: "Gagal mendapatkan data cuti, silahkan coba kembali.",
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
      })
      .catch((error) => {
        let toast = this.toastCtrl.create({
          message: "Gagal mendapatkan data cuti, periksa koneksi internet anda.",
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
      });
  }

  doInfinite(infiniteScroll) {
    if (this.cutiList.length >= 10) {
      this.batasAtas = this.batasBawah + 1;
      this.batasBawah = this.batasBawah + 10;
      this.getCutiList("infinite", infiniteScroll);
    } else {
      infiniteScroll.complete();
    }
  }

  doRefresh(refresher) {
    this.batasAtas = 1;
    this.batasBawah = 10;
    this.getCutiList("refresh", refresher);
  }

  searchCuti() {
    const modal = this.modalCtrl.create("SearchCutiPage");
    modal.present();
  }

  goToDetail(data) {
    this.navCtrl.push("CutiDetailPage", {
      data: data,
      nipp: this.userdataTPK["data"]["NIPP"],
      userdataTPK: this.userdataTPK,
    });
  }
}
