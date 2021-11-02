import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams, LoadingController, AlertController, ModalController, ToastController } from "ionic-angular";

import { SoapService } from "../soap.service";
import { Storage } from "@ionic/storage";
import { api_base_url, api_user, api_pass, urldownload_srt } from "../../config";
import { InAppBrowser, InAppBrowserOptions } from "@ionic-native/in-app-browser";
import { DatePipe } from "@angular/common";
import { not } from "@angular/compiler/src/output/output_ast";
import { Downloader, DownloadRequest, NotificationVisibility } from "@ionic-native/downloader";

import { FileTransfer, FileUploadOptions, FileTransferObject } from "@ionic-native/file-transfer";
import { FilePath } from "@ionic-native/file-path";
import { File } from "@ionic-native/file";
import { FileOpener } from "@ionic-native/file-opener";

/**
 * Generated class for the CutiDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-cuti-detail",
  providers: [SoapService],
  templateUrl: "cuti-detail.html",
})
export class CutiDetailPage {
  isLoading: boolean = true;
  userdataTPK: any;
  messageData: any;
  nipp: any;
  messageDetail: any;
  linkSurat: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public soapService: SoapService,
    public loadingCtrl: LoadingController,
    public storage: Storage,
    public alertCtrl: AlertController,
    public modalCtrl: ModalController,
    public toastCtrl: ToastController,
    public inAppBrowser: InAppBrowser,
    public datePipe: DatePipe,
    public downloader: Downloader,
    public transfer: FileTransfer,
    public file: File,
    public fileOpener: FileOpener
  ) {
    this.storage.get("userdataTPK").then((val) => {
      this.userdataTPK = val;
    });
  }

  ionViewWillLoad() {
    this.storage.get("userdataTPK").then((val) => {
      this.userdataTPK = val;
    });
    this.messageData = this.navParams.get("data");
    console.log(this.messageData);
    this.nipp = this.navParams.get("nipp");
    this.getDetail();
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad CutiDetailPage");
  }

  getDetail() {
    this.isLoading = true;
    this.soapService
      .post(api_base_url, "eoffice_viewmail", {
        fStream: JSON.stringify({
          usernameEDI: api_user,
          passwordEDI: api_pass,
          nipp: this.nipp,
          linkSurat: this.messageData["Location"],
          from_modul: "cuti",
        }),
      })
      .then((result) => {
        var responData = JSON.parse(String(result));

        if (responData["rcmsg"] == "SUCCESS") {
          this.messageDetail = responData["data"];

          this.linkSurat = this.messageDetail["Link Surat Asli"];
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

  isEmptyObject(obj) {
    for (var prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        return false;
      }
    }
    return true;
  }

  goToLogSurat() {
    this.navCtrl.push("LogSuratPage", {
      idSurat: this.messageDetail["ID Surat"],
    });
  }

  downloadInbox(data) {
    let loading = this.loadingCtrl.create({
      spinner: "dots",
      content: "Mengunduh surat...",
      cssClass: "transparent",
      dismissOnPageChange: true,
    });
    loading.present();
    // this.soapService
    //   .post(api_base_url, 'find_file_cuti', {
    //     fStream: JSON.stringify(
    //       {
    //         "usernameEDI": api_user,
    //         "passwordEDI": api_pass,
    //         "fileName": data,
    //         "id_surat":this.messageDetail['ID Surat'],
    //         "jenis_surat":this.messageDetail['Kode Jenis Surat'],
    //         "no_surat":''
    //       }
    //     )
    //   }).then(result => {
    //     var responData = JSON.parse(String(result));
    //     loading.dismiss();
    //     const options: InAppBrowserOptions = {
    //       zoom: 'no'
    //     }

    //     const browser = this.inAppBrowser.create(responData['data']['LINK'], '_system', options);

    //   })
    //   .catch(error => {        npm install --save @ionic-native/downloader@4
    //     let alert = this.alertCtrl.create({
    //       title: '',
    //       subTitle: 'Gagal download surat, silahkan coba lagi',
    //       buttons: ['OK']
    //     });
    //     alert.present();
    //     loading.dismiss();
    //   });

    var link = "";
    link = urldownload_srt + "DownloadMobile/cetak_cuti_recreate/" + this.messageDetail["ID Surat"] + "/" + this.userdataTPK["data"]["IDJABATAN"];
    // const options: InAppBrowserOptions = {
    //   zoom: 'no'
    // }
    // const browser = this.inAppBrowser.create(link, '_blank', options);

    var link2 = "";
    link2 = urldownload_srt + "DownloadMobile/cetak_cuti_generate/" + this.messageDetail["ID Surat"] + "/" + this.userdataTPK["data"]["IDJABATAN"];
    // const options2: InAppBrowserOptions = {
    //   zoom: 'no'
    // }
    // const browser2 = this.inAppBrowser.create(link2, '_blank', options2);
    var localPath1 = "";
    var localPath2 = "";
    const fileTransfer: FileTransferObject = this.transfer.create();
    fileTransfer.download(link, this.file.dataDirectory + "Recreate_" + this.messageData["NO_SURAT"] + ".pdf").then(
      (entry) => {
        console.log("download complete 1: " + entry.toURL());
        localPath1 = entry.toURL();
        fileTransfer.download(link2, this.file.dataDirectory + "Generate_" + this.messageData["NO_SURAT"] + ".pdf").then(
          (entry) => {
            console.log("download complete 2: " + entry.toURL());
            localPath2 = entry.toURL();
            loading.dismiss();
            let alert = this.alertCtrl.create({
              subTitle: "Berhasil Generate PDF Surat Permohonan dan Surat Perintah",
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
                  text: "Buka Surat Permohonan",
                  handler: () => {
                    this.fileOpener
                      .open(localPath1, "application/pdf")
                      .then(() => console.log("File is opened"))
                      .catch((e) => console.log("Error opening file", e));
                  },
                },
                {
                  text: "Buka Surat Perintah",
                  handler: () => {
                    this.fileOpener
                      .open(localPath2, "application/pdf")
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
      },
      (error) => {
        // handle error
        loading.dismiss();
      }
    );

    // var request: DownloadRequest = {
    //   uri: urldownload_srt + 'cetak_cuti_recreate/' + this.messageDetail['ID Surat'] + '/' + this.userdataTPK['data']['IDJABATAN'],
    //   title: 'MyDownload',
    //   description: '',
    //   mimeType: '',
    //   visibleInDownloadsUi: true,
    //   notificationVisibility: NotificationVisibility.VisibleNotifyCompleted,
    //   destinationInExternalPublicDir: {
    //     dirType: 'Download',
    //     subPath: this.messageData['NO_SURAT'] + '.pdf'
    //   }
    // };

    // this.downloader.download(request)
    //   .then((location: string) => {
    //     console.log('File downloaded at:' + location);
    //     let toast = this.toastCtrl.create({
    //       message: 'Download berhasil, file didownload di folder ' + location,
    //       duration: 3000,
    //       position: 'bottom'
    //     });
    //     toast.present().then(() => {
    //       this.navCtrl.pop();
    //     });
    //   }).catch((error: any) => console.error(error));
  }

  replaceNomorSurat(noSurat) {
    var result = "";
    console.log(noSurat);
    //result = noSurat.replace(/[-.\/]/g, "_");

    // result = result.replace(/-/g, '_');
    //return result + '.pdf';
    return "";
  }

  doAction(type) {
    if (type == "approve") {
      let alert = this.alertCtrl.create({
        subTitle: "Anda yakin ingin menyetujui revisi permohonan tersebut ?",
        cssClass: "alert",
        buttons: [
          {
            text: "TIDAK",
            role: "cancel",
            handler: () => {
              //console.log('Cancel clicked');
            },
          },
          {
            text: "YA",
            handler: () => {
              this.penangguhan("approve");
            },
          },
        ],
      });
      alert.present();
    } else if (type == "decline") {
      let alert = this.alertCtrl.create({
        subTitle: "Anda yakin ingin membatalkan permohonan tersebut ?",
        cssClass: "alert",
        buttons: [
          {
            text: "TIDAK",
            role: "cancel",
            handler: () => {
              //console.log('Cancel clicked');
            },
          },
          {
            text: "YA",
            handler: () => {
              this.penangguhan("decline");
            },
          },
        ],
      });
      alert.present();
    }
  }

  penangguhan(action) {
    var tgl_mulai_revisi = this.datePipe.transform(new Date(this.messageDetail["TANGGAL_MULAI_REVISI"]), "yyyy-MM-dd HH:mm:ss");
    var tgl_selesai_revisi = this.datePipe.transform(new Date(this.messageDetail["TANGGAL_SELESAI_REVISI"]), "yyyy-MM-dd HH:mm:ss");

    console.log(tgl_selesai_revisi);

    let loading = this.loadingCtrl.create({
      spinner: "dots",
      content: "Memproses Cuti...",
      cssClass: "transparent",
      dismissOnPageChange: true,
    });
    loading.present();
    this.soapService
      .post(api_base_url, "eoffice_cuti_user_action", {
        fStream: JSON.stringify({
          usernameEDI: api_user,
          passwordEDI: api_pass,
          nipp: this.nipp,
          iduser: this.userdataTPK["data"]["IDUSER"],
          nama: this.userdataTPK["data"]["NAMA"],
          id_surat: this.messageDetail["ID Surat"],
          tgl_mulai_revisi: tgl_mulai_revisi,
          tgl_selesai_revisi: tgl_selesai_revisi,
          jumlah_revisi: this.messageDetail["JUMLAH_HARI_REVISI"],
          action: action,
        }),
      })
      .then((result) => {
        var responData = JSON.parse(String(result));
        if (responData["rcmsg"] == "SUCCESS") {
          let toast = this.toastCtrl.create({
            message: "Proses berhasil !",
            duration: 3000,
            position: "bottom",
          });
          toast.present().then(() => {
            this.navCtrl.pop();
          });
        } else {
          let alert = this.alertCtrl.create({
            title: "",
            subTitle: "Gagal Memproses Cuti, Silahkan Coba Beberapa Saat Lagi.",
            buttons: ["OK"],
          });
          alert.present();
        }
        loading.dismiss();
      })
      .catch((error) => {
        let alert = this.alertCtrl.create({
          title: "",
          subTitle: "Gagal Memproses Cuti, Periksa Koneksi Internet Anda.",
          buttons: ["OK"],
        });
        alert.present();
        loading.dismiss();
      });
  }
}
