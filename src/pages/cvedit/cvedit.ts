import { Component, ViewChild, Injectable } from "@angular/core";
import { IonicPage, NavController, NavParams, ToastController } from "ionic-angular";
import { SoapService } from "../soap.service";
import { Storage } from "@ionic/storage";
import { api_base_url, api_user, api_pass } from "../../config";

/**
 * Generated class for the CveditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cvedit',
  providers: [SoapService],
  templateUrl: 'cvedit.html',
})
export class CveditPage {
  userdataTPK: any;
  isLoading: Boolean = true;
  dataCV: any;

  showPersonal: Boolean = false;
  showPDarurat: Boolean = false;
  showPFormal: Boolean = false;
  showPekerjaan: Boolean = false;
  showAsHistory: Boolean = false;
  showKesehatan: Boolean = false;
  showPelatihanPPI: Boolean = false;
  showIdentiasKeluarga: Boolean = false;
  showRewardDanPunishment: Boolean = false;
  showPerformance: Boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public soapService: SoapService, public storage: Storage, public toastCtrl: ToastController) {
    this.storage.get("userdataTPK").then((val) => {
      this.userdataTPK = val;
      this.getDataCV();
    });
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad CvPage");
  }

  togglePersonal() {
    this.showPersonal = !this.showPersonal;
  }
  togglePDarurat() {
    this.showPDarurat = !this.showPDarurat;
  }
  togglePFormal() {
    this.showPFormal = !this.showPFormal;
  }
  togglePekerjaan() {
    this.showPekerjaan = !this.showPekerjaan;
  }
  toggleAsHistory() {
    this.showAsHistory = !this.showAsHistory;
  }
  toggleKesehatan() {
    this.showKesehatan = !this.showKesehatan;
  }
  toggleRiwayatPelPPI() {
    this.showPelatihanPPI = !this.showPelatihanPPI;
  }
  toggleIdentitasKeluarga() {
    this.showIdentiasKeluarga = !this.showIdentiasKeluarga;
  }
  toggleRewardDanPunishment() {
    this.showRewardDanPunishment = !this.showRewardDanPunishment;
  }
  togglePerformance() {
    this.showPerformance = !this.showPerformance;
  }

  getDataCV() {
    this.isLoading = true;
    this.soapService
      .post(api_base_url, "eoffice_get_cv", {
        fStream: JSON.stringify({
          usernameEDI: api_user,
          passwordEDI: api_pass,
          nipp: this.userdataTPK["data"]["NIPP"],
          id_user: this.userdataTPK["data"]["IDUSER"],
        }),
      })
      .then((result) => {
        var responData = JSON.parse(String(result));
        //console.log(responData);
        if (responData["rcmsg"] == "SUCCESS") {
          this.dataCV = responData["data"];

          console.log(this.dataCV);
        } else {
          let toast = this.toastCtrl.create({
            message: "tidak ada data.",
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
  openPage(kategori) {
    this.navCtrl.push('CveditEditPage', {
      kat: kategori
    });
  }
}
