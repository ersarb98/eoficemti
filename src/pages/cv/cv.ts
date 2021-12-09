import { Component, ViewChild } from "@angular/core";
import { IonicPage, NavController, NavParams, ToastController, LoadingController, AlertController } from "ionic-angular";
import { SoapService } from "../soap.service";
import { Storage } from "@ionic/storage";
import { api_base_url, api_user, api_pass, urldownload_srt } from "../../config";
import { InAppBrowser, InAppBrowserOptions } from "@ionic-native/in-app-browser";
import { FileTransfer, FileUploadOptions, FileTransferObject } from "@ionic-native/file-transfer";
import { File } from "@ionic-native/file";
import { FileOpener } from "@ionic-native/file-opener";
// import { AnimationService, AnimationBuilder } from 'css-animator';

/**
 * Generated class for the CvPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-cv",
  providers: [SoapService],
  templateUrl: "cv.html",
})
export class CvPage {
  @ViewChild("assignmentAnim") assignmentAnim;
  // public animator: AnimationBuilder;
  userdataTPK: any;
  isLoading: Boolean = true;
  dataCV: any;

  showAssigment: Boolean = false;
  showPerform: Boolean = false;
  showEducation: boolean = false;
  showTraining: boolean = false;
  showFamily: boolean = false;
  showAssignHistory: Boolean = false;
  showReward: boolean = false;
  showEmergency: boolean = false;
  showWorkingHistory: boolean = false;
  showMedical: boolean = false;

  constructor(
    public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    public navParams: NavParams,
    public soapService: SoapService,
    public storage: Storage,
    public toastCtrl: ToastController,
    public inAppBrowser: InAppBrowser,
    public alertCtrl: AlertController,
    public transfer: FileTransfer,
    public file: File,
    public fileOpener: FileOpener
  ) {
    this.storage.get("userdataTPK").then((val) => {
      this.userdataTPK = val;
      this.getDataCV();
    });
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad CvPage");
  }

  toggleAssigment() {
    if (this.showAssigment == true) {
      this.showAssigment = false;
    } else {
      this.showAssigment = true;
      // this.animator.setType('fadeInLeft').show(this.assignmentAnim.nativeElement);
    }
  }

  togglePerform() {
    this.showPerform = !this.showPerform;
  }

  toggleEducation() {
    this.showEducation = !this.showEducation;
  }

  toggleTraining() {
    this.showTraining = !this.showTraining;
  }

  toggleFamily() {
    this.showFamily = !this.showFamily;
  }

  toggleAssignHistory() {
    this.showAssignHistory = !this.showAssignHistory;
  }

  toggleReward() {
    this.showReward = !this.showReward;
  }

  toggleEmergency() {
    this.showEmergency = !this.showEmergency;
  }

  toggleWorkingHistory() {
    this.showWorkingHistory = !this.showWorkingHistory;
  }

  toggleMedical() {
    this.showMedical = !this.showMedical;
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
  openPage(page) {
    this.navCtrl.push(page);
  }

  download(data) {
    const options: InAppBrowserOptions = {
      zoom: "no",
    };
    const browser = this.inAppBrowser.create(urldownload_srt + "upload_personal_info/" + data, "_system", options);
  }

  downloadEcv() {
    let loading = this.loadingCtrl.create({
      spinner: "dots",
      content: "Mengunduh CV ...",
      cssClass: "transparent",
      dismissOnPageChange: true,
    });
    loading.present();

    var link = "";
    link = urldownload_srt + "DownloadMobile/cetak_summary_new?nipp=" + this.userdataTPK["data"]["NIPP"] + "&personal=" + this.dataCV["ID_PERSONAL"];

    console.log(link);
    var localPath1 = "";

    const fileTransfer: FileTransferObject = this.transfer.create();
    fileTransfer.download(link, this.file.dataDirectory + "e_cv_" + this.userdataTPK["data"]["NIPP"] + ".pdf").then(
      (entry) => {
        console.log("download complete 1: " + entry.toURL());
        localPath1 = entry.toURL();

        loading.dismiss();
        let alert = this.alertCtrl.create({
          subTitle: "Generate E-CV PDF Berhasil!",
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
              text: "Buka E-CV",
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
