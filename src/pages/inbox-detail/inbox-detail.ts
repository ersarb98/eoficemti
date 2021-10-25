import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams, LoadingController, AlertController, ModalController, Modal, ToastController } from "ionic-angular";

import { SoapService } from "../soap.service";
import { Storage } from "@ionic/storage";
import { api_base_url, api_user, api_pass, sender_id, oneSignalAppId, sc_code, urldownload_srt, url_upload_sppd } from "../../config";
import { InAppBrowser, InAppBrowserOptions } from "@ionic-native/in-app-browser";
import { OneSignal } from "@ionic-native/onesignal";

import { DatePicker } from "@ionic-native/date-picker";
import { DatePipe } from "@angular/common";
import { Platform } from "ionic-angular";

import { FileTransfer, FileUploadOptions, FileTransferObject } from "@ionic-native/file-transfer";
import { FilePath } from "@ionic-native/file-path";
import { File } from "@ionic-native/file";
import { FileOpener } from "@ionic-native/file-opener";
import { FileChooser } from "@ionic-native/file-chooser";
import { Camera, CameraOptions } from "@ionic-native/camera";

/**
 * Generated class for the InboxDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-inbox-detail",
  providers: [SoapService],
  templateUrl: "inbox-detail.html",
})
export class InboxDetailPage {
  isLoading: boolean = true;
  isAtasan: boolean;
  showAllPenerima: boolean = false;

  showAllPenerimaJabatan: boolean = false;
  showAllTembusanJabatan: boolean = false;
  showAllPenerimaPekerja: boolean = false;
  showAllTembusanPekerja: boolean = false;
  showAllPenerimaNonPekerja: boolean = false;
  showAllTembusanNonPekerja: boolean = false;
  showDetailPesan: Boolean = false;

  userdataTPK: any;
  messageData: any;
  nipp: any;
  messageDetail: any;
  linkSurat: any;
  attachmentList: Array<any> = [];
  penerima: any = [];
  databawahan: Array<any> = [];
  disposisiJabatanList = [];
  disposisiPekerjaList = [];

  dasarSuratPerintah: any;
  isiPerintah: any;
  lastCatatan: string = "";
  keterangan: string = "";

  from_modul = "";
  pesertaSppdList: Array<any> = [];
  attrScanSppd: Array<any> = [];

  formDitangguhkan: Boolean = false;
  tanggalMulai: any = "";
  jamMulai: any = "23";
  jamSelesai: any = "23";
  tanggalSelesai: any = "";

  sisaCuti: any;
  dataJenisCuti: any;
  jumHari: any = 0;
  errorMsg: any = "";

  firstDate: any;
  secondDate: any;
  startTglSelesai: any;

  // param baru untuk revisi sppd
  isRevisi: Boolean = false;

  // param baru untuk laporan
  isLaporan: Boolean = false;
  jumFileLaporan: any = '0';
  komentarLaporan: any = '';

  tanggalMulaiRevisi: any = '';
  tanggalSelesaiRevisi: any = '';
  startTglSelesaiRevisi: any;
  firstDateRevisi: any;
  secondDateRevisi: any;

  alasanRevisi: any;
  komentarRevisi: any;

  private win: any = window;
  imageURI: any = "";
  imageShow: any = "assets/imgs/logo/camera.png";
  fileDocPath: any;
  fileName: any;
  fileType: any;
  imageFileName: any;

  imageURILaporan1: any = "";
  imageShowLaporan1: any = "assets/imgs/logo/camera.png";
  fileDocPathLaporan1: any = '';
  fileNameLaporan1: any = '';
  fileTypeLaporan1: any = '';
  imageFileNameLaporan1: any = '';

  imageURILaporan2: any = "";
  imageShowLaporan2: any = "assets/imgs/logo/camera.png";
  fileDocPathLaporan2: any = '';
  fileNameLaporan2: any = '';
  fileTypeLaporan2: any = '';
  imageFileNameLaporan2: any = '';

  imageURILaporan3: any = "";
  imageShowLaporan3: any = "assets/imgs/logo/camera.png";
  fileDocPathLaporan3: any = '';
  fileNameLaporan3: any = '';
  fileTypeLaporan3: any = '';
  imageFileNameLaporan3: any = '';

  imageURILaporan4: any = "";
  imageShowLaporan4: any = "assets/imgs/logo/camera.png";
  fileDocPathLaporan4: any = '';
  fileNameLaporan4: any = '';
  fileTypeLaporan4: any = '';
  imageFileNameLaporan4: any = '';

  imageURILaporan5: any = "";
  imageShowLaporan5: any = "assets/imgs/logo/camera.png";
  fileDocPathLaporan5: any = '';
  fileNameLaporan5: any = '';
  fileTypeLaporan5: any = '';
  imageFileNameLaporan5: any = '';

  imageURILaporan6: any = "";
  imageShowLaporan6: any = "assets/imgs/logo/camera.png";
  fileDocPathLaporan6: any = '';
  fileNameLaporan6: any = '';
  fileTypeLaporan6: any = '';
  imageFileNameLaporan6: any = '';

  imageURILaporan7: any = "";
  imageShowLaporan7: any = "assets/imgs/logo/camera.png";
  fileDocPathLaporan7: any = '';
  fileNameLaporan7: any = '';
  fileTypeLaporan7: any = '';
  imageFileNameLaporan7: any = '';

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public soapService: SoapService,
    public loadingCtrl: LoadingController,
    public storage: Storage,
    public alertCtrl: AlertController,
    public modalCtrl: ModalController,
    public inAppBrowser: InAppBrowser,
    public oneSignal: OneSignal,
    public toastCtrl: ToastController,
    private datePicker: DatePicker,
    public datePipe: DatePipe,
    public platform: Platform,
    public transfer: FileTransfer,
    public file: File,
    public fileOpener: FileOpener,
    public camera: Camera,
    public filepath: FilePath,
    public fileChooser: FileChooser
  ) {
    oneSignal.startInit(oneSignalAppId, sender_id);
    oneSignal.endInit();
  }

  show() {
    this.showDetailPesan = !this.showDetailPesan;
  }

  ionViewWillLoad() {}

  ionViewDidLoad() {
    this.isLoading = true;
    this.messageData = this.navParams.get("messageData");
    this.isRevisi = this.navParams.get("isRevisi");
    this.isLaporan = this.navParams.get("isLaporan");
    console.log(this.isRevisi);

    // console.log(this.messageData);
    this.from_modul = this.navParams.get("from_modul");
    this.storage.get("userdataTPK").then((val) => {
      this.userdataTPK = val;
      this.nipp = this.userdataTPK["data"]["NIPP"];
      this.getDetail();
    });
  }

  showModal(myModal) {
    let modal = this.modalCtrl.create(
      myModal,
      { idSurat: this.messageDetail["ID Surat"] },
      {
        enableBackdropDismiss: true,
        showBackdrop: true,
        cssClass: "my-modal12",
      }
    );
    modal.present();
  }

  getDetail() {
    // let loading = this.loadingCtrl.create({
    //   spinner: 'dots',
    //   content: "Mohon Tunggu...",
    //   cssClass: 'transparent',
    //   dismissOnPageChange:true
    // });
    // loading.present();

    this.soapService
      .post(api_base_url, "eoffice_viewmail", {
        fStream: JSON.stringify({
          usernameEDI: api_user,
          passwordEDI: api_pass,
          nipp: this.nipp,
          linkSurat: this.messageData["Location"],
          from_modul: this.from_modul != null || this.from_modul != "" ? this.from_modul : "inbox",
        }),
      })
      .then((result) => {
        var responData = JSON.parse(String(result));
        console.log(responData);

        if (responData["rcmsg"] == "SUCCESS") {
          this.messageDetail = responData["data"];
          console.log(this.messageDetail);

          if (this.isRevisi == true) {
            var tglMulaiSplit = this.messageDetail["Agenda"]["Tanggal Mulai"].split("-");
            var tglSelesaiSplit = this.messageDetail["Agenda"]["Tanggal Akhir"].split("-");
            console.log(tglMulaiSplit);
            var dateMulai = new Date(tglMulaiSplit[2], tglMulaiSplit[1], tglMulaiSplit[0]);

            var dateSelesai = new Date(tglSelesaiSplit[2], tglSelesaiSplit[1], tglSelesaiSplit[0]);
            console.log(dateMulai);
            this.tanggalMulaiRevisi = this.datePipe.transform(dateMulai, "dd/MM/yyyy");
            this.tanggalSelesaiRevisi = this.datePipe.transform(dateSelesai, "dd/MM/yyyy");
          }

          if (this.messageDetail.hasOwnProperty["Status"]) {
            if (this.messageData["Status"].indexOf("PERIKSA") != -1) {
              var mySubString = this.messageData["Status"].substring(this.messageData["Status"].indexOf("(") + 1, this.messageData["Status"].lastIndexOf(")"));

              var split = mySubString.split("/");

              this.messageDetail["URUT_PEMERIKSA"] = split[0];
              this.messageDetail["JUMLAH_PEMERIKSA"] = split[1];
            } else {
              this.messageDetail["URUT_PEMERIKSA"] = "";
              this.messageDetail["JUMLAH_PEMERIKSA"] = "";
            }
          }
          console.log(this.messageDetail);

          if (this.messageDetail["Jenis Surat"] == "Surat Perintah") {
            this.dasarSuratPerintah = this.messageDetail["Isi Surat"].split("xxdasaxx_").pop().split("_xxperintxx_")[0] + "<br>";
            this.dasarSuratPerintah = this.dasarSuratPerintah.replace(/_/gi, "<br><br>");
            this.isiPerintah = this.messageDetail["Isi Surat"].split("_xxperintxx_")[1];
            this.isiPerintah = this.isiPerintah.replace(/_/gi, "<br><br>");
          }

          if (this.messageDetail["Kode Jenis Surat"] == "nd_sppd") {
            this.getPesertaSPPD(this.messageDetail["ID Surat"]);
          } else if (this.messageDetail["Kode Jenis Surat"] == "permohonan") {
            this.getSisaCuti(this.messageDetail["NIPP Pemohon"]);
          } else {
            this.newSession();
          }

          this.linkSurat = this.messageDetail["Link Surat Asli"];
          this.attachmentList = this.messageDetail["Attachment"];
        } else {
          let toast = this.toastCtrl.create({
            message: "Mohon Maaf Sedang Terjadi Kesalahan, Coba Beberapa Saat Lagi.",
            duration: 3000,
            position: "bottom",
          });
          toast.present();
          this.isLoading = false;
        }
      })
      .catch((error) => {
        console.log(error);
        let toast = this.toastCtrl.create({
          message: "Terjadi Masalah Koneksi, Silahkan Coba Kembali (1).",
          duration: 3000,
          position: "bottom",
        });
        toast.present();
        this.isLoading = false;
      });
  }

  getPesertaSPPD(idSurat) {
    this.soapService
      .post(api_base_url, "eoffice_sppd_peserta", {
        fStream: JSON.stringify({
          usernameEDI: api_user,
          passwordEDI: api_pass,
          id_surat: atob(idSurat),
        }),
      })
      .then((result) => {
        let responData = JSON.parse(String(result));
        // console.log(responData);
        if (responData["rcmsg"] == "SUCCESS") {
          if (responData["data"]["PESERTA_JABATAN"].length > 0) {
            for (var i = 0; i < responData["data"]["PESERTA_JABATAN"].length; i++) {
              this.pesertaSppdList.push(responData["data"]["PESERTA_JABATAN"][i]);
            }
          }

          if (responData["data"]["PESERTA_PEGAWAI"].length > 0) {
            for (var i = 0; i < responData["data"]["PESERTA_PEGAWAI"].length; i++) {
              this.pesertaSppdList.push(responData["data"]["PESERTA_PEGAWAI"][i]);
            }
          }

          if (responData["data"]["PESERTA_NON_PEGAWAI"].length > 0) {
            for (var i = 0; i < responData["data"]["PESERTA_NON_PEGAWAI"].length; i++) {
              this.pesertaSppdList.push(responData["data"]["PESERTA_NON_PEGAWAI"][i]);
            }
          }

          // if (responData['data']['SCAN_SPPD'].length > 0) {
          //   for (var i = 0; i < responData['data']['SCAN_SPPD'].length; i++) {
          //     this.attrScanSppd.push( responData['data']['SCAN_SPPD'][i]);
          //   }
          // }
          this.newSession();
        } else {
          let toast = this.toastCtrl.create({
            message: "Mohon Maaf Sedang Terjadi Kesalahan, Coba Beberapa Saat Lagi.",
            duration: 3000,
            position: "bottom",
          });
          toast.present();
          this.isLoading = false;
        }
      })
      .catch((error) => {
        // console.log(error);
        let toast = this.toastCtrl.create({
          message: "Terjadi Masalah Koneksi, Silahkan Coba Kembali.",
          duration: 3000,
          position: "bottom",
        });
        toast.present();
        this.isLoading = false;
      });
  }

  newSession() {
    this.soapService
      .post(api_base_url, "eoffice_get_user_data", {
        fStream: JSON.stringify({
          usernameEDI: api_user,
          passwordEDI: api_pass,
          username: this.nipp,
        }),
      })
      .then((result) => {
        let responData = JSON.parse(String(result));
        if (responData["rcmsg"] == "SUCCESS") {
          if (responData["data"]["login_status"] == "404 Not Found") {
          } else if (responData["data"] == undefined) {
          } else if (responData["data"]["login_status"] == "AP NOT ALLOWED") {
          } else {
            responData["data"]["FL_FIRST_IMOVE"] = false;
            this.userdataTPK = responData;
            if (this.isEmptyObject(this.userdataTPK["data"]["LISTOFFICER"][0]) && this.isEmptyObject(this.userdataTPK["data"]["DATA_BAWAHAN"][0]) && this.isEmptyObject(this.userdataTPK["data"]["DATA_BAWAHAN_TNO"][0])) {
              this.isAtasan = false;
            } else {
              this.isAtasan = true;
            }
            this.getDataBawahan();
            this.getPenerima();

            this.storage.set("userdataTPK", responData).then(() => {});
          }
        } else {
        }
        this.isLoading = false;
      })
      .catch((error) => {
        this.isLoading = false;
      });
  }

  showMore(type) {
    //this.showAllPenerima = !this.showAllPenerima;
    if (type == 1) {
      this.showAllPenerimaJabatan = !this.showAllPenerimaJabatan;
    } else if (type == 2) {
      this.showAllTembusanJabatan = !this.showAllTembusanJabatan;
    } else if (type == 3) {
      this.showAllPenerimaPekerja = !this.showAllPenerimaPekerja;
    } else if (type == 4) {
      this.showAllTembusanPekerja = !this.showAllTembusanPekerja;
    } else if (type == 5) {
      this.showAllPenerimaNonPekerja = !this.showAllPenerimaNonPekerja;
    } else if (type == 6) {
      this.showAllTembusanNonPekerja = !this.showAllTembusanNonPekerja;
    } else {
    }
  }

  getDataBawahan() {
    // if (!this.isEmptyObject(this.userdataTPK['data']['LISTOFFICER'][0])) {
    //   for (var i = 0; i < this.userdataTPK['data']['LISTOFFICER'][0].length; i++) {
    //     this.databawahan.push(this.userdataTPK['data']['LISTOFFICER'][0][i]);
    //   }
    // }

    if (!this.isEmptyObject(this.userdataTPK["data"]["DATA_BAWAHAN"][0])) {
      for (var i = 0; i < this.userdataTPK["data"]["DATA_BAWAHAN"].length; i++) {
        this.databawahan.push(this.userdataTPK["data"]["DATA_BAWAHAN"][i]);
      }
    }

    if (!this.isEmptyObject(this.userdataTPK["data"]["DATA_BAWAHAN_TNO"][0])) {
      for (var i = 0; i < this.userdataTPK["data"]["DATA_BAWAHAN"].length; i++) {
        this.databawahan.push(this.userdataTPK["data"]["DATA_BAWAHAN"][i]);
      }
    }
  }

  getPenerima() {
    if (this.messageDetail["Penerima Pekerja"] != null) {
      for (var i = 0; i < this.messageDetail["Penerima Pekerja"].length; i++) {
        this.penerima.push(this.messageDetail["Penerima Pekerja"][i]);
      }
    }

    if (this.messageDetail["Penerima Jabatan"] != null) {
      for (var i = 0; i < this.messageDetail["Penerima Jabatan"].length; i++) {
        this.penerima.push(this.messageDetail["Penerima Jabatan"][i]);
      }
    }

    if (this.messageDetail["Penerima Non Pekerja"] != null) {
      for (var i = 0; i < this.messageDetail["Penerima Non Pekerja"].length; i++) {
        this.penerima.push(this.messageDetail["Penerima Non Pekerja"][i]);
      }
    }

    if (this.messageDetail["Tembusan Pekerja"] != null) {
      for (var i = 0; i < this.messageDetail["Tembusan Pekerja"].length; i++) {
        this.penerima.push(this.messageDetail["Tembusan Pekerja"][i]);
      }
    }

    if (this.messageDetail["Tembusan Jabatan"] != null) {
      for (var i = 0; i < this.messageDetail["Penerima Jabatan"].length; i++) {
        this.penerima.push(this.messageDetail["Penerima Jabatan"][i]);
      }
    }

    if (this.messageDetail["Tembusan Non Pekerja"] != null) {
      for (var i = 0; i < this.messageDetail["Tembusan Non Pekerja"].length; i++) {
        this.penerima.push(this.messageDetail["Tembusan Non Pekerja"][i]);
      }
    }
  }

  showDisposisi(tipeDisposisi) {
    var data;

    if (tipeDisposisi == "jabatan") {
      let modal = this.modalCtrl.create(
        "DisposisiPage",
        {
          kepadaList: this.databawahan,
          lastCatatan: this.lastCatatan,
          tipeDisposisi: tipeDisposisi,
        },
        {
          enableBackdropDismiss: true,
          showBackdrop: true,
        }
      );
      modal.present();

      modal.onDidDismiss((data) => {
        if (data != null) {
          if (data["disposisiJabatanList"].length > 0) {
            for (let i = 0; i < data["disposisiJabatanList"].length; i++) {
              this.disposisiJabatanList.push(data["disposisiJabatanList"][i]);
            }
          }
          this.lastCatatan = data["lastCatatan"];
        }
      });
    } else if (tipeDisposisi == "pekerja") {
      let modal = this.modalCtrl.create(
        "DisposisiPage",
        {
          kepadaList: this.userdataTPK["data"]["DATA_BAWAHAN"],
          lastCatatan: this.lastCatatan,
          tipeDisposisi: tipeDisposisi,
        },
        {
          enableBackdropDismiss: true,
          showBackdrop: true,
        }
      );
      modal.present();

      modal.onDidDismiss((data) => {
        if (data != null) {
          if (data["disposisiPekerjaList"].length > 0) {
            for (let i = 0; i < data["disposisiPekerjaList"].length; i++) {
              this.disposisiPekerjaList.push(data["disposisiPekerjaList"][i]);
            }
          }
          this.lastCatatan = data["lastCatatan"];
        }
      });
    } else {
    }
  }

  delete(disposisidata, tipeDisposisi) {
    if (tipeDisposisi == "jabatan") {
      const index: number = this.disposisiJabatanList.indexOf(disposisidata);
      if (index !== -1) {
        this.disposisiJabatanList.splice(index, 1);
      }
    } else if (tipeDisposisi == "pekerja") {
      const index: number = this.disposisiPekerjaList.indexOf(disposisidata);
      if (index !== -1) {
        this.disposisiPekerjaList.splice(index, 1);
      }
    }
  }

  sendDisposisi() {
    let alert = this.alertCtrl.create({
      subTitle: "Anda yakin ingin disposisi surat ?",
      cssClass: "alert",
      buttons: [
        {
          text: "TIDAK",
          role: "cancel",
          handler: () => {},
        },
        {
          text: "YA",
          handler: () => {
            let loading = this.loadingCtrl.create({
              spinner: "dots",
              content: "Mohon Tunggu...",
              cssClass: "transparent",
              dismissOnPageChange: true,
            });
            loading.present();
            this.isLoading = true;
            this.soapService
              .post(api_base_url, "eoffice_disposisi", {
                fStream: JSON.stringify({
                  usernameEDI: api_user,
                  passwordEDI: api_pass,
                  nipp: this.nipp,
                  linkSurat: this.messageData["Location"],
                  disposisi_jabatan: this.disposisiJabatanList,
                  disposisi_pekerja: this.disposisiPekerjaList,
                }),
              })
              .then((result) => {
                var responData = JSON.parse(String(result));
                // console.log(responData);

                if (responData["rcmsg"] == "SUCCESS") {
                  let toast = this.toastCtrl.create({
                    message: "Disposisi Berhasil",
                    duration: 3000,
                    position: "bottom",
                  });
                  toast.present().then(() => {
                    this.pushNotif();
                    this.navCtrl.pop();
                  });
                } else {
                  let alert = this.alertCtrl.create({
                    title: "",
                    subTitle: "Gagal Melakukan Disposisi, Silahkan Coba Beberapa Saat Lagi.",
                    buttons: ["OK"],
                  });
                  alert.present();
                }
                loading.dismiss();
                this.isLoading = false;
              })
              .catch((error) => {
                let alert = this.alertCtrl.create({
                  title: "",
                  subTitle: "Gagal Melakukan Disposisi, Periksa Koneksi Internet Anda.",
                  buttons: ["OK"],
                });
                alert.present();
                loading.dismiss();
                this.isLoading = false;
              });
          },
        },
      ],
    });
    alert.present();
  }

  pushNotif() {
    this.oneSignal.getIds().then((id) => {
      let userList = [];
      if (this.disposisiJabatanList.length > 0) {
        for (let i = 0; i < this.disposisiJabatanList.length; i++) {
          userList.push(this.disposisiJabatanList[i]["id_user"]);
        }
      }
      if (this.disposisiPekerjaList.length > 0) {
        for (let i = 0; i < this.disposisiPekerjaList.length; i++) {
          userList.push(this.disposisiPekerjaList[i]["id_user"]);
        }
      }

      this.soapService
        .post(api_base_url, "eoffice_notif_imove", {
          fStream: JSON.stringify({
            usernameEDI: api_user,
            passwordEDI: api_pass,
            id_user: userList,
            data: {
              // "res": "InboxPage"
              res: "InboxDetailPage",
              nipp: this.nipp,
              //userdataTPK : this.userdataTPK,
              messageData: this.messageData,
            },
            heading: {
              en: "Surat Masuk",
            },
            content: {
              en: "Anda memiliki disposisi baru dari " + this.userdataTPK["data"]["NAMA"] + ". \nPerihal : " + this.messageDetail["Perihal"],
            },
          }),
        })
        .then((result) => {
          let hasil = JSON.parse(String(result));
        })
        .catch((error) => {
          this.navCtrl.pop();
        });
    });
  }

  cancel() {
    this.navCtrl.pop();
  }

  downloadInbox(data) {
    let loading = this.loadingCtrl.create({
      spinner: "dots",
      content: "Mengunduh surat...",
      cssClass: "transparent",
      dismissOnPageChange: true,
    });
    loading.present();
    this.soapService
      .post(api_base_url, "find_file", {
        fStream: JSON.stringify({
          usernameEDI: api_user,
          passwordEDI: api_pass,
          fileName: data,
          id_surat: this.messageDetail["ID Surat"],
          jenis_surat: this.messageDetail["Kode Jenis Surat"],
          no_surat: this.messageData["No_Surat"],
        }),
      })
      .then((result) => {
        var responData = JSON.parse(String(result));

        loading.dismiss();
        const options: InAppBrowserOptions = {
          zoom: "no",
        };

        const browser = this.inAppBrowser.create(responData["data"]["LINK"], "_system", options);
      })
      .catch((error) => {
        let alert = this.alertCtrl.create({
          title: "",
          subTitle: "Gagal download surat, silahkan coba lagi",
          buttons: ["OK"],
        });
        alert.present();
        loading.dismiss();
      });
  }

  downloadAttach(data) {
    const options: InAppBrowserOptions = {
      zoom: "no",
    };
    const browser = this.inAppBrowser.create(data, "_system", options);
  }

  subStrAttachment(data) {
    var str = data;
    var n = str.lastIndexOf("/");
    return str.substring(n + 1);
  }

  doPeriksa(type) {
    if (this.keterangan == "") {
      let toast = this.toastCtrl.create({
        message: "Komentar harus diisi.",
        duration: 3000,
        position: "bottom",
      });
      toast.present();
    } else {
      if (type == "approve") {
        let alert = this.alertCtrl.create({
          subTitle: "Anda yakin ingin approve surat ?",
          cssClass: "alert",
          buttons: [
            {
              text: "TIDAK",
              role: "cancel",
              handler: () => {},
            },
            {
              text: "YA",
              handler: () => {
                let loading = this.loadingCtrl.create({
                  spinner: "dots",
                  content: "Approve surat...",
                  cssClass: "transparent",
                  dismissOnPageChange: true,
                });
                loading.present();
                this.soapService
                  .post(api_base_url, "eoffice_approve", {
                    fStream: JSON.stringify({
                      usernameEDI: api_user,
                      passwordEDI: api_pass,
                      nipp: this.nipp,
                      iduser: this.userdataTPK["data"]["IDUSER"],
                      nama: this.userdataTPK["data"]["NAMA"],
                      id_surat: this.messageDetail["ID Surat"],
                      kode_jenis_surat:
                        this.messageDetail["Kode Jenis Surat"] != "permohonan" && this.messageDetail["Jenis Surat"] != null ? this.messageDetail["Jenis Surat"].toLowerCase() : this.messageDetail["Kode Jenis Surat"].toLowerCase(),
                      komentar: this.keterangan,
                    }),
                  })
                  .then((result) => {
                    var responData = JSON.parse(String(result));
                    if (responData["rcmsg"] == "SUCCESS") {
                      let toast = this.toastCtrl.create({
                        message: "Approve berhasil !",
                        duration: 3000,
                        position: "bottom",
                      });
                      toast.present().then(() => {
                        this.sendApprovalNotif("approve");
                        this.navCtrl.pop();
                      });
                    } else {
                      let alert = this.alertCtrl.create({
                        title: "",
                        subTitle: "Gagal Approve Surat, Silahkan Coba Beberapa Saat Lagi.",
                        buttons: ["OK"],
                      });
                      alert.present();
                    }
                    loading.dismiss();
                  })
                  .catch((error) => {
                    let alert = this.alertCtrl.create({
                      title: "",
                      subTitle: "Gagal Approve Surat, Periksa Koneksi Internet Anda.",
                      buttons: ["OK"],
                    });
                    alert.present();
                    loading.dismiss();
                  });
              },
            },
          ],
        });
        alert.present();
      } else if (type == "decline") {
        let alert = this.alertCtrl.create({
          subTitle: "Anda yakin ingin decline surat ?",
          cssClass: "alert",
          buttons: [
            {
              text: "TIDAK",
              role: "cancel",
              handler: () => {},
            },
            {
              text: "YA",
              handler: () => {
                let loading = this.loadingCtrl.create({
                  spinner: "dots",
                  content: "Decline surat...",
                  cssClass: "transparent",
                  dismissOnPageChange: true,
                });
                loading.present();
                this.soapService
                  .post(api_base_url, "eoffice_decline", {
                    fStream: JSON.stringify({
                      usernameEDI: api_user,
                      passwordEDI: api_pass,
                      nipp: this.nipp,
                      iduser: this.userdataTPK["data"]["IDUSER"],
                      nama: this.userdataTPK["data"]["NAMA"],
                      id_surat: this.messageDetail["ID Surat"],
                      kode_jenis_surat: this.messageDetail["Kode Jenis Surat"] != "permohonan" ? this.messageDetail["Jenis Surat"].toLowerCase() : this.messageDetail["Kode Jenis Surat"].toLowerCase(),
                      komentar: this.keterangan,
                    }),
                  })
                  .then((result) => {
                    var responData = JSON.parse(String(result));
                    if (responData["rcmsg"] == "SUCCESS") {
                      let toast = this.toastCtrl.create({
                        message: "Decline berhasil !",
                        duration: 3000,
                        position: "bottom",
                      });
                      toast.present().then(() => {
                        this.sendApprovalNotif("decline");
                        this.navCtrl.pop();
                      });
                    } else {
                      let alert = this.alertCtrl.create({
                        title: "",
                        subTitle: "Gagal Decline Surat, Silahkan Coba Beberapa Saat Lagi.",
                        buttons: ["OK"],
                      });
                      alert.present();
                    }
                    loading.dismiss();
                  })
                  .catch((error) => {
                    let alert = this.alertCtrl.create({
                      title: "",
                      subTitle: "Gagal Decline Surat, Periksa Koneksi Internet Anda.",
                      buttons: ["OK"],
                    });
                    alert.present();
                    loading.dismiss();
                  });
              },
            },
          ],
        });
        alert.present();
      } else if (type == "kembalikan") {
        this.formDitangguhkan = true;
        let alert = this.alertCtrl.create({
          subTitle: "Anda yakin ingin kembalikan surat ?",
          cssClass: "alert",
          buttons: [
            {
              text: "TIDAK",
              role: "cancel",
              handler: () => {},
            },
            {
              text: "YA",
              handler: () => {
                let loading = this.loadingCtrl.create({
                  spinner: "dots",
                  content: "Kembalikan surat...",
                  cssClass: "transparent",
                  dismissOnPageChange: true,
                });
                loading.present();
                this.soapService
                  .post(api_base_url, "eoffice_kembalikan", {
                    fStream: JSON.stringify({
                      usernameEDI: api_user,
                      passwordEDI: api_pass,
                      id_surat: atob(this.messageDetail["ID Surat"]),
                      keterangan: this.keterangan,
                    }),
                  })
                  .then((result) => {
                    var responData = JSON.parse(String(result));
                    if (responData["rcmsg"] == "SUCCESS") {
                      let toast = this.toastCtrl.create({
                        message: "Kembalikan berhasil !",
                        duration: 3000,
                        position: "bottom",
                      });
                      toast.present().then(() => {
                        this.sendApprovalNotif("kembalikan");
                        this.navCtrl.pop();
                      });
                    } else {
                      let alert = this.alertCtrl.create({
                        title: "",
                        subTitle: "Gagal Kembalikan Surat, Silahkan Coba Beberapa Saat Lagi.",
                        buttons: ["OK"],
                      });
                      alert.present();
                    }
                    loading.dismiss();
                  })
                  .catch((error) => {
                    let alert = this.alertCtrl.create({
                      title: "",
                      subTitle: "Gagal Decline Surat, Periksa Koneksi Internet Anda.",
                      buttons: ["OK"],
                    });
                    alert.present();
                    loading.dismiss();
                  });
              },
            },
          ],
        });
        alert.present();
      }
    }
  }

  sendApprovalNotif(type) {
    let nippList = [];
    let pesan = "";
    let res = "";

    if (type == "approve") {
      if (this.messageDetail["Kode Jenis Surat"] == "permohonan") {
        if (this.nipp == this.messageDetail["NIPP Menyetujui"]) {
          if (this.messageDetail["NIPP Mengetahui"] != null) {
            nippList.push(this.messageDetail["NIPP Mengetahui"]);
            pesan = "Pengajuan cuti/izin dari " + this.messageDetail["Nama Pemohon"] + " membutuhkan persetujuan.";
            res = "InboxDetailPage";
          } else {
            nippList.push(this.messageDetail["NIPP Pemohon"]);
            pesan = "Pengajuan cuti/izin anda telah disetujui.";
            res = "CutiListPage";
          }
        } else if (this.nipp == this.messageDetail["NIPP Mengetahui"]) {
          nippList.push(this.messageDetail["NIPP Pemohon"]);
          pesan = "Pengajuan cuti/izin anda telah disetujui.";
          res = "CutiListPage";
        }
      } else {
        let pemeriksa: Array<any> = [];
        pemeriksa = this.messageDetail["Pemeriksa"].filter((x) => x["nipp_pemeriksa"].includes(this.userdataTPK["data"]["NIPP"]));

        this.pushNotifKeDrafter(this.messageDetail["Drafter"][0]["nipp_drafter"], this.userdataTPK["data"]["NAMA"]);
        this.pushNotifKePemeriksa(this.messageDetail["Pemeriksa"], this.userdataTPK["data"]["NAMA"]);

        if (this.messageDetail["Pemeriksa"].indexOf(pemeriksa[0]) != -1) {
          if (this.messageDetail["Pemeriksa"].indexOf(pemeriksa[0]) != this.messageDetail["Pemeriksa"].length - 1) {
            nippList.push(this.messageDetail["Pemeriksa"][this.messageDetail["Pemeriksa"].indexOf(pemeriksa[0]) + 1]["nipp_pemeriksa"]);
          } else if (this.messageDetail["Pemeriksa"].indexOf(pemeriksa[0]) == this.messageDetail["Pemeriksa"].length - 1) {
            nippList.push(this.messageDetail["Pengirim"]["NIPP"]);
          } else {
          }
        }

        pesan = "Surat Dari " + this.messageDetail["Drafter"][0]["nama_drafter"] + " Membutuhkan Approval. \nPerihal : " + this.messageDetail["Perihal"];
        res = "InboxDetailPage";
      }
    } else if (type == "decline") {
      if (this.messageDetail["Kode Jenis Surat"] == "permohonan") {
        nippList.push(this.messageDetail["NIPP Pemohon"]);
        pesan = "Permohonan cuti/izin Anda Telah dibatalkan oleh " + this.userdataTPK["data"]["NAMA"];
        res = "CutiListPage";
      } else {
        nippList.push(this.messageDetail["Drafter"][0]["nipp_drafter"]);
        pesan = "Surat Anda Telah Dibatalkan oleh " + this.userdataTPK["data"]["NAMA"] + ". \nPerihal : " + this.messageDetail["Perihal"];
        res = "InboxDetailPage";
      }
    } else if (type == "kembalikan") {
      if (this.messageDetail["Kode Jenis Surat"] == "permohonan") {
        nippList.push(this.messageDetail["NIPP Pemohon"]);
        pesan = "Permohonan cuti/izin Anda Telah dikembalikan oleh " + this.userdataTPK["data"]["NAMA"];
        res = "CutiListPage";
      } else {
        nippList.push(this.messageDetail["Drafter"][0]["nipp_drafter"]);
        pesan = "Surat Anda Dikembalikan oleh " + this.userdataTPK["data"]["NAMA"] + ". \nPerihal : " + this.messageDetail["Perihal"];
        res = "InboxDetailPage";
      }
    } else if ((type = "tangguhkan")) {
      if (this.messageDetail["Kode Jenis Surat"] == "permohonan") {
        nippList.push(this.messageDetail["NIPP Pemohon"]);
        pesan = "Permohonan cuti/izin Anda Telah ditangguhkan oleh " + this.userdataTPK["data"]["NAMA"];
        res = "CutiListPage";
      } else {
        nippList.push(this.messageDetail["Drafter"][0]["nipp_drafter"]);
        pesan = "Surat Anda Telah ditangguhkan oleh " + this.userdataTPK["data"]["NAMA"] + ". \nPerihal : " + this.messageDetail["Perihal"];
        res = "InboxDetailPage";
      }
    }

    this.soapService
      .post(api_base_url, "eoffice_notif_imove_nipp", {
        fStream: JSON.stringify({
          usernameEDI: api_user,
          passwordEDI: api_pass,
          nipp: nippList,
          data: {
            res: res,
            nipp: this.nipp,
            messageData: this.messageData,
          },
          content: {
            en: pesan,
          },
          heading: {
            en: "Surat Masuk",
          },
          id_kategori: "",
        }),
      })
      .then((result) => {
        let hasil = JSON.stringify(result);
        this.navCtrl.pop();
      })
      .catch((error) => {
        this.navCtrl.pop();
      });
  }

  pushNotifKeDrafter(nippTujuan, namaSession) {
    let nippList = [];
    let pesan = "surat anda telah diapprove oleh " + namaSession + ". \nPerihal : " + this.messageDetail["Perihal"];
    let res = "OutboxPage";
    nippList.push(nippTujuan);

    this.soapService
      .post(api_base_url, "eoffice_notif_imove_nipp", {
        fStream: JSON.stringify({
          usernameEDI: api_user,
          passwordEDI: api_pass,
          nipp: nippList,
          data: {
            res: res,
            nipp: this.nipp,
            messageData: this.messageData,
          },
          heading: {
            en: "Surat Masuk",
          },
          content: {
            en: pesan,
          },
          id_kategori: "",
        }),
      })
      .then((result) => {
        let hasil = JSON.stringify(result);
        this.navCtrl.pop();
      })
      .catch((error) => {
        this.navCtrl.pop();
      });
  }

  pushNotifKePemeriksa(nippPemeriksaList, namaSession) {
    let pemeriksa: Array<any> = [];
    pemeriksa = this.messageDetail["Pemeriksa"].filter((x) => x["nipp_pemeriksa"].includes(this.userdataTPK["data"]["NIPP"]));
    let indexSessionPemeriksa = nippPemeriksaList.indexOf(pemeriksa[0]);

    let nippList = [];
    let pesan = "surat anda telah diapprove oleh " + namaSession + ". \nPerihal : " + this.messageDetail["Perihal"];
    let res = "OutboxPage";
    for (let i = 0; i < nippPemeriksaList.length; i++) {
      if (indexSessionPemeriksa != -1) {
        if (i < indexSessionPemeriksa) {
          nippList.push(nippPemeriksaList[i]["nipp_pemeriksa"]);
        }
      } else {
        nippList.push(nippPemeriksaList[i]["nipp_pemeriksa"]);
      }
    }

    this.soapService
      .post(api_base_url, "eoffice_notif_imove_nipp", {
        fStream: JSON.stringify({
          usernameEDI: api_user,
          passwordEDI: api_pass,
          nipp: nippList,
          data: {
            res: res,
            nipp: this.nipp,
            messageData: this.messageData,
          },
          content: {
            en: pesan,
          },
          heading: {
            en: "Surat Masuk",
          },
          id_kategori: "",
        }),
      })
      .then((result) => {
        let hasil = JSON.stringify(result);
        this.navCtrl.pop();
      })
      .catch((error) => {
        this.navCtrl.pop();
      });
  }

  goToLogSurat() {
    this.navCtrl.push("LogSuratPage", {
      idSurat: this.messageDetail["ID Surat"],
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

  replaceNomorSurat(noSurat) {
    var result = "";
    result = noSurat.replace(/[-.\/]/g, "_");
    return result + ".pdf";
  }

  goToPertanggungjawaban() {
    let modal = this.modalCtrl.create(
      "PertanggungjawabanSppdPage",
      {
        messageData: this.messageData,
      },
      {
        enableBackdropDismiss: true,
        showBackdrop: true,
      }
    );
    modal.present();

    modal.onDidDismiss((data) => {
      if (data != null) {
        this.navCtrl.pop();
      }
    });
  }

  getSisaCuti(nipp) {
    this.soapService
      .post(api_base_url, "eoffice_sisa_cuti", {
        fStream: JSON.stringify({
          usernameEDI: api_user,
          passwordEDI: api_pass,
          nipp: nipp,
        }),
      })
      .then((result) => {
        let responData = JSON.parse(String(result));
        //console.log(responData);
        if (responData["rcmsg"] == "SUCCESS") {
          this.sisaCuti = responData["data"]["SISA_CUTI"];
          console.log("sisa cuti : " + this.sisaCuti);
          this.getJenisCuti();
        } else {
          let toast = this.toastCtrl.create({
            message: responData["rcmsg"],
            duration: 3000,
            position: "bottom",
          });
          toast.present();
          this.isLoading = false;
        }
      })
      .catch((error) => {
        let toast = this.toastCtrl.create({
          message: "Gagal mendapatkan sisa cuti, silahkan periksa koneksi internet anda.",
          duration: 3000,
          position: "bottom",
        });
        toast.present();
        this.isLoading = false;
      });
  }

  getJenisCuti() {
    console.log(this.messageDetail["Jenis Pengajuan"]);
    this.soapService
      .post(api_base_url, "eoffice_jenis_cuti", {
        fStream: JSON.stringify({
          usernameEDI: api_user,
          passwordEDI: api_pass,
        }),
      })
      .then((result) => {
        let responData = JSON.parse(String(result));
        console.log(responData);
        if (responData["rcmsg"] == "SUCCESS") {
          var jenisPengajuanList = responData["data"];
          console.log(jenisPengajuanList);
          this.dataJenisCuti = jenisPengajuanList.filter((x) => (x.JN_PENGAJUAN != null) ? x.JN_PENGAJUAN.includes(this.messageDetail["Jenis Pengajuan"]) : null);
          console.log(this.dataJenisCuti);
          this.newSession();
        } else {
          let toast = this.toastCtrl.create({
            message: responData["rcmsg"],
            duration: 3000,
            position: "bottom",
          });
          toast.present();
          this.isLoading = false;
        }
      })
      .catch((error) => {
        console.log(error);
        let toast = this.toastCtrl.create({
          message: "Gagal mendapatkan jenis cuti, silahkan periksa koneksi internet anda.",
          duration: 3000,
          position: "bottom",
        });
        toast.present();
        this.isLoading = false;
      });
  }

  ditangguhkan() {
    if (this.formDitangguhkan == false) {
      this.formDitangguhkan = true;
    } else {
      let validationForm;
      validationForm = this.tanggalMulai == "" || this.tanggalSelesai == "" || this.jamMulai == "" || this.jamSelesai == "" || this.jumHari == "";

      if (validationForm) {
        this.errorMsg = "*mohon melengkapi seluruh input.";
      } else if (this.dataJenisCuti[0]["IS_POTONG"] == "1" && parseInt(this.jumHari) > parseInt(this.sisaCuti)) {
        this.errorMsg = "*Jumlah hari cuti melebihi sisa cuti.";
      } else {
        let alert = this.alertCtrl.create({
          subTitle: "Anda yakin ingin menangguhkan cuti ?",
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
                let loading = this.loadingCtrl.create({
                  spinner: "dots",
                  content: "Tangguhkan cuti...",
                  cssClass: "transparent",
                  dismissOnPageChange: true,
                });
                loading.present();
                this.soapService
                  .post(api_base_url, "eoffice_tangguhkan", {
                    fStream: JSON.stringify({
                      usernameEDI: api_user,
                      passwordEDI: api_pass,
                      nipp: this.nipp,
                      iduser: this.userdataTPK["data"]["IDUSER"],
                      nama: this.userdataTPK["data"]["NAMA"],
                      id_surat: this.messageDetail["ID Surat"],
                      kode_jenis_surat: this.messageDetail["Kode Jenis Surat"] != "permohonan" ? this.messageDetail["Jenis Surat"].toLowerCase() : this.messageDetail["Kode Jenis Surat"].toLowerCase(),
                      komentar: this.keterangan,
                      tgl_mulai: this.tanggalMulai,
                      tgl_selesai: this.tanggalSelesai,
                      jam_mulai: this.jamMulai,
                      jam_selesai: this.jamSelesai,
                      jumlah: this.jumHari,
                    }),
                  })
                  .then((result) => {
                    var responData = JSON.parse(String(result));
                    if (responData["rcmsg"] == "SUCCESS") {
                      let toast = this.toastCtrl.create({
                        message: "Tangguhkan berhasil !",
                        duration: 3000,
                        position: "bottom",
                      });
                      toast.present().then(() => {
                        this.sendApprovalNotif("tangguhkan");
                        this.navCtrl.pop();
                      });
                    } else {
                      let alert = this.alertCtrl.create({
                        title: "",
                        subTitle: "Gagal Decline Surat, Silahkan Coba Beberapa Saat Lagi.",
                        buttons: ["OK"],
                      });
                      alert.present();
                    }
                    loading.dismiss();
                  })
                  .catch((error) => {
                    let alert = this.alertCtrl.create({
                      title: "",
                      subTitle: "Gagal Decline Surat, Periksa Koneksi Internet Anda.",
                      buttons: ["OK"],
                    });
                    alert.present();
                    loading.dismiss();
                  });
              },
            },
          ],
        });

        if (parseInt(this.dataJenisCuti[0]["MAX_JUM_CUTI"]) == 0) {
          if (this.jumHari >= parseInt(this.dataJenisCuti[0]["MIN_JUM_CUTI"])) {
            alert.present();
          } else {
            this.errorMsg = "*" + this.dataJenisCuti[0]["JN_PENGAJUAN"] + " minimal " + this.dataJenisCuti[0]["MIN_JUM_CUTI"] + " hari.";
          }
        } else {
          if (this.jumHari >= parseInt(this.dataJenisCuti[0]["MIN_JUM_CUTI"]) && this.jumHari <= parseInt(this.dataJenisCuti[0]["MAX_JUM_CUTI"])) {
            alert.present();
          } else {
            this.errorMsg = "*" + this.dataJenisCuti[0]["JN_PENGAJUAN"] + " minimal " + this.dataJenisCuti[0]["MIN_JUM_CUTI"] + " hari dan maksimal " + this.dataJenisCuti[0]["MIN_JUM_CUTI"] + " hari.";
          }
        }
      }
    }
  }

  getJumHari() {
    let loading = this.loadingCtrl.create({
      spinner: "dots",
      content: "Mengambil Data Cuti...",
      cssClass: "transparent",
      dismissOnPageChange: true,
    });
    loading.present();
    this.soapService
      .post(api_base_url, "eoffice_cuti_jumlah", {
        fStream: JSON.stringify({
          usernameEDI: api_user,
          passwordEDI: api_pass,
          id_user: this.userdataTPK["data"]["IDUSER"],
          tgl_mulai: this.tanggalMulai,
          tgl_selesai: this.tanggalSelesai,
        }),
      })
      .then((result) => {
        let responData = JSON.parse(String(result));
        //console.log(responData);
        if (responData["rcmsg"] == "SUCCESS") {
          this.jumHari = responData["data"]["JUMLAH_HARI"];
          loading.dismiss();
        } else {
          let toast = this.toastCtrl.create({
            message: responData["rcmsg"],
            duration: 3000,
            position: "bottom",
          });
          toast.present();
          loading.dismiss();
        }
      })
      .catch((error) => {
        let toast = this.toastCtrl.create({
          message: "Gagal mendapatkan hari, silahkan periksa koneksi internet anda.",
          duration: 3000,
          position: "bottom",
        });
        toast.present();
        loading.dismiss();
      });
  }

  checkFocus(data) {
    this.showDatePicker(data);
  }

  showDatePicker(type: number) {
    var myDate = new Date();
    var datePickerOption;
    datePickerOption = {
      date: myDate,
      mode: "date",
      androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_LIGHT,
    };

    // if (this.jenisPengajuan == 'Cuti Sakit') {
    //   datePickerOption = {
    //     date: myDate,
    //     mode: 'date',
    //     androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_LIGHT
    //   };
    // } else {
    //   datePickerOption = {
    //     date: myDate,
    //     mode: 'date',
    //     minDate: this.platform.is('ios') ? new Date() : (new Date()).valueOf(),
    //     androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_LIGHT
    //   };
    // }

    if (type == 1) {
      this.datePicker.show(datePickerOption).then(
        (date) => {
          this.firstDate = date;
          this.tanggalMulai = this.datePipe.transform(date, "MM/dd/yyyy");
          this.startTglSelesai = date;
        },
        (err) => console.log("Error occurred while getting date: ", err)
      );
    } else if (type == 2) {
      if (this.tanggalMulai == "") {
        let toast = this.toastCtrl.create({
          message: "tanggal mulai harus diisi dahulu.",
          duration: 3000,
          position: "bottom",
        });
        toast.present();
      } else {
        myDate = new Date(this.startTglSelesai);
        this.datePicker
          .show({
            date: myDate,
            mode: "date",
            minDate: this.platform.is("ios") ? myDate : myDate.valueOf(),
            androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_LIGHT,
          })
          .then(
            (date) => {
              this.secondDate = date;
              this.tanggalSelesai = this.datePipe.transform(date, "MM/dd/yyyy");
              this.getJumHari();
            },
            (err) => console.log("Error occurred while getting date: ", err)
          );
      }
    }
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

  downloadSPPD() {
    let loading = this.loadingCtrl.create({
      spinner: "dots",
      content: "Mengunduh surat...",
      cssClass: "transparent",
      dismissOnPageChange: true,
    });
    loading.present();
    var link = "";
    const fileTransfer: FileTransferObject = this.transfer.create();
    link = urldownload_srt + "outbox/cetak_surat_dup/prev_dir_dup/" + this.messageDetail["ID Surat"];
    fileTransfer.download(link, this.file.dataDirectory + "Generate_" + this.messageData["NO_SURAT"] + ".pdf").then(
      (entry) => {
        console.log("download complete 2: " + entry.toURL());
        loading.dismiss();
        let alert = this.alertCtrl.create({
          subTitle: "Recreate dan Generate PDF Berhasil!",
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
              text: "Buka Surat",
              handler: () => {
                this.fileOpener
                  .open(entry.toURL(), "application/pdf")
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

  downloadCuti(data) {
    let loading = this.loadingCtrl.create({
      spinner: "dots",
      content: "Mengunduh surat...",
      cssClass: "transparent",
      dismissOnPageChange: true,
    });
    loading.present();

    var link = "";
    link = urldownload_srt + "DownloadMobile/cetak_cuti_recreate/" + this.messageDetail["ID Surat"] + "/" + this.userdataTPK["data"]["IDJABATAN"];

    var link2 = "";
    link2 = urldownload_srt + "DownloadMobile/cetak_cuti_generate/" + this.messageDetail["ID Surat"] + "/" + this.userdataTPK["data"]["IDJABATAN"];

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
              subTitle: "Recreate dan Generate PDF Berhasil!",
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
                  text: "Buka Recreate",
                  handler: () => {
                    this.fileOpener
                      .open(localPath1, "application/pdf")
                      .then(() => console.log("File is opened"))
                      .catch((e) => console.log("Error opening file", e));
                  },
                },
                {
                  text: "Buka Generate",
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
  }

  showDatePickerRevisi(type: number) {
    var myDate;

    if (type == 1) {
      myDate = new Date();
      this.datePicker
        .show({
          date: myDate,
          mode: "date",
          minDate: this.platform.is("ios") ? new Date() : new Date().valueOf(),
          androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_LIGHT,
        })
        .then(
          (date) => {
            this.firstDateRevisi = date;
            this.tanggalMulaiRevisi = this.datePipe.transform(date, "dd/MM/yyyy");
            this.startTglSelesaiRevisi = date;
          },
          (err) => console.log("Error occurred while getting date: ", err)
        );
    } else if (type == 2) {
      if (this.tanggalMulaiRevisi == "") {
        let toast = this.toastCtrl.create({
          message: "tanggal mulai harus diisi dahulu.",
          duration: 3000,
          position: "bottom",
        });
        toast.present();
      } else {
        myDate = new Date(this.startTglSelesaiRevisi);
        this.datePicker
          .show({
            date: myDate,
            mode: "date",
            minDate: this.platform.is("ios") ? new Date() : new Date().valueOf(),
            androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_LIGHT,
          })
          .then(
            (date) => {
              this.secondDateRevisi = date;
              this.tanggalSelesaiRevisi = this.datePipe.transform(date, "dd/MM/yyyy");
            },
            (err) => console.log("Error occurred while getting date: ", err)
          );
      }
    }
  }

  takeImage(sourceType: number, type) {
    let mType = this.camera.MediaType.PICTURE;
    // console.log(mType);

    var options = {
      quality: 100,
      mediaType: mType,
      sourceType: sourceType,
      saveToPhotoAlbum: false,
      correctOrientation: true,
    };

    this.camera.getPicture(options).then(
      (imageData) => {
        let URI;
        this.imageShow = this.win.Ionic.WebView.convertFileSrc(imageData);
        this.imageURI = imageData;
        URI = this.imageURI;

        if (this.platform.is("android") && sourceType === this.camera.PictureSourceType.PHOTOLIBRARY) {
          this.filepath.resolveNativePath(URI).then((filePath) => {
            let correctPath = filePath.substr(0, filePath.lastIndexOf("/") + 1);
            let currentName = imageData.substring(imageData.lastIndexOf("/") + 1, imageData.lastIndexOf("?"));
            this.copyFileToLocalDir(correctPath, currentName, this.createFileName(type), type);
          });
        } else {
          var currentName = imageData.substr(imageData.lastIndexOf("/") + 1);
          var correctPath = imageData.substr(0, imageData.lastIndexOf("/") + 1);
          this.copyFileToLocalDir(correctPath, currentName, this.createFileName(type), type);
        }
        console.log(URI);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  private copyFileToLocalDir(namePath, currentName, filename, type) {
    this.file.copyFile(namePath, currentName, this.file.dataDirectory, filename).then(
      (success) => {
        this.imageFileName = filename;
        console.log(this.imageFileName);
      },
      (error) => {
        console.log("Error while storing file: " + error);
      }
    );
  }

  private createFileName(type) {
    var newFileName = "";

    if (this.fileType == "gambar") {
      var d = new Date(),
        n = d.getTime();
      newFileName = n + "_SPPD.jpg";
    } else {
      // console.log('error disini');
    }

    // console.log(newFileName);
    return newFileName;
  }

  public pathForImage(img) {
    if (img === null) {
      return "";
    } else {
      return this.file.dataDirectory + img;
    }
  }

  upload(idSurat, loader) {
    // console.log(this.fileDocPath);
    if (this.fileType == "file") {
      const fileTransfer: FileTransferObject = this.transfer.create();
      var options = {
        fileKey: "file",
        fileName: this.fileName,
        chunkedMode: false,
        mimeType: "multipart/form-data",
        params: { id_surat: idSurat, type: "1" },
      };

      fileTransfer.upload(this.fileDocPath, url_upload_sppd, options).then(
        (data) => {
          // console.log(JSON.stringify(data));
          // console.log(" Uploaded Successfully");
          if (data["responseCode"] == 200) {
            var responData = JSON.parse(String(data["response"]));
            // console.log(responData);

            if (responData["rcmsg"] == "SUCCESS") {
              let toast = this.toastCtrl.create({
                message: "Revisi SPPD Berhasil.",
                duration: 3000,
                position: "bottom",
              });
              toast.present();
              loader.dismiss();
              this.navCtrl.pop();
            } else {
              let toast = this.toastCtrl.create({
                message: "Revisi SPPD Berhasil, namun file attachment gagal diupload, silahkan hubungi admin.",
                duration: 3000,
                position: "bottom",
              });
              toast.present();
              loader.dismiss();
              this.navCtrl.pop();
            }
          } else {
            let toast = this.toastCtrl.create({
              message: "Revisi SPPD Berhasil, namun file attachment gagal diupload, silahkan hubungi admin.",
              duration: 3000,
              position: "bottom",
            });
            toast.present();
            loader.dismiss();
            this.navCtrl.pop();
          }
        },
        (err) => {
          // console.log("masuk sini");
          // console.log(err);
          let toast = this.toastCtrl.create({
            message: "Revisi SPPD Berhasil, namun file attachment gagal diupload, silahkan hubungi admin.",
            duration: 3000,
            position: "bottom",
          });
          toast.present();
          loader.dismiss();
          this.navCtrl.pop();

          // this.presentToast(err);
        });
    } else if (this.fileType == 'gambar') {
     
      console.log(this.imageFileName);
      console.log(this.fileName);
      console.log("image file path : " + this.pathForImage(this.imageFileName));
      const fileTransfer: FileTransferObject = this.transfer.create();

      var options = {
        fileKey: "file",
        fileName: this.fileName,
        chunkedMode: false,
        mimeType: "multipart/form-data",
        params: { id_surat: idSurat, type: "1" },
      };

      fileTransfer.upload(
        this.pathForImage(this.imageFileName),
        url_upload_sppd, options)
        .then((data) => {
          console.log(data);
          if (data['responseCode'] == 200) {

            var responData = JSON.parse(String(data['response']));
            console.log(responData);

            if (responData["rcmsg"] == "SUCCESS") {
              let toast = this.toastCtrl.create({
                message: "Pengajuan SPPD Berhasil.",
                duration: 3000,
                position: "bottom",
              });
              toast.present();
              loader.dismiss();
              this.navCtrl.pop();
            } else {
              let toast = this.toastCtrl.create({
                message: "Revisi SPPD Berhasil, namun file attachment gagal diupload, silahkan hubungi admin.",
                duration: 3000,
                position: "bottom",
              });
              toast.present();
              loader.dismiss();
              this.navCtrl.pop();
            }
          } else {
            let toast = this.toastCtrl.create({
              message: "Revisi SPPD Berhasil, namun file attachment gagal diupload, silahkan hubungi admin.",
              duration: 3000,
              position: "bottom",
            });
            toast.present();
            loader.dismiss();
            this.navCtrl.pop();
          }
        },
        (err) => {
          // console.log("masuk sini");
          // console.log(err);
          let toast = this.toastCtrl.create({
            message: "Revisi SPPD Berhasil, namun file attachment gagal diupload, silahkan hubungi admin.",
            duration: 3000,
            position: "bottom",
          });
          toast.present();
          loader.dismiss();
          this.navCtrl.pop();
        }
      );
    }
  }

  openChooser(type) {
    this.fileChooser
      .open()
      .then((uri) => {
        this.fileDocPath = uri;
        this.fileName = uri.substr(uri.lastIndexOf("/") + 1);
        this.fileName = this.fileName.substr(10);
        this.fileName = this.fileName.replace(/%20/g, " ");

        console.log(this.fileName);
      })
      .catch((e) => {
        // console.log(e)
      });
  }

  doRevisi() {
    var err = [];
    if (this.tanggalMulaiRevisi == "" || this.tanggalMulaiRevisi == null) {
      err.push("Tanggal Mulai");
    }
    if (this.tanggalSelesaiRevisi == "" || this.tanggalSelesaiRevisi == null) {
      err.push("Tanggal Selesai");
    }
    if (this.alasanRevisi == "" || this.alasanRevisi == null) {
      err.push("Alasan Revisi");
    }
    if (this.komentarRevisi == "" || this.komentarRevisi == null) {
      err.push("Komentar Revisi");
    }

    var showErr = "";

    for (var i = 0; i < err.length; i++) {
      if (i == err.length - 1) {
        showErr = showErr + err[i];
      } else {
        showErr = showErr + err[i] + ", ";
      }
    }

    if (err.length > 0) {
      let alertError = this.alertCtrl.create({
        title: "Peringatan",
        subTitle: "Field " + showErr + " tidak boleh kosong !",
        cssClass: "alert",
        buttons: [
          {
            text: "TUTUP",
            role: "cancel",
            handler: () => {
              //console.log('Cancel clicked');
            },
          },
        ],
      });
      alertError.present();
    } else {
      let alert = this.alertCtrl.create({
        subTitle: "Anda yakin ingin melakukan revisi SPPD?",
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
              let loading = this.loadingCtrl.create({
                spinner: "dots",
                content: "Mengirim revisi SPPD, Mohon Tunggu...",
                cssClass: "transparent",
                dismissOnPageChange: true,
              });
              loading.present();

              this.soapService
                .post(api_base_url, "eoffice_revisi_sppd", {
                  fStream: JSON.stringify({
                    usernameEDI: api_user,
                    passwordEDI: api_pass,
                    nipp_pembuat: this.userdataTPK["data"]["NIPP"],
                    nama_pembuat: this.userdataTPK["data"]["NAMA"],
                    id_pembuat: this.userdataTPK["data"]["IDUSER"],
                    tgl_surat: "",
                    tgl_mulai: this.tanggalMulaiRevisi,
                    tgl_selesai: this.tanggalSelesaiRevisi,
                    komentar: this.komentarRevisi,
                    id_surat_asli: atob(this.messageDetail["ID Surat"]),
                    alasan_revisi: this.alasanRevisi,
                  }),
                })
                .then((result) => {
                  var responData = JSON.parse(String(result));
                  if (responData["rcmsg"] == "SUCCESS") {
                    if (this.imageURI != "" || this.fileName != null) {
                      this.upload(responData["data"]["ID_SURAT"], loading);
                    } else {
                      let toast = this.toastCtrl.create({
                        message: "Revisi SPPD Berhasil.",
                        duration: 3000,
                        position: "bottom",
                      });
                      toast.present();
                      loading.dismiss();
                      this.navCtrl.pop();
                    }
                  } else {
                    let toast = this.toastCtrl.create({
                      message: "Gagal Revisi SPPD, silahkan coba kembali.",
                      duration: 3000,
                      position: "bottom",
                    });
                    toast.present();
                    loading.dismiss();
                  }
                })
                .catch((error) => {
                  let toast = this.toastCtrl.create({
                    message: "Input gagal, silahkan periksa koneksi internet anda.",
                    duration: 3000,
                    position: "bottom",
                  });
                  toast.present();
                  loading.dismiss();
                });
            },
          },
        ],
      });
      alert.present();
    }
  }

  createRange(data) {
    var dataInt = parseInt(data);
    return new Array(dataInt);
  }

  takeImageLaporan(sourceType: number, type) {
    let mType = this.camera.MediaType.PICTURE;
    // console.log(mType);

    var options = {
      quality: 100,
      mediaType: mType,
      sourceType: sourceType,
      saveToPhotoAlbum: false,
      correctOrientation: true
    };

    this.camera.getPicture(options).then((imageData) => {
      let URI;
      if (type == '1') {
        this.imageShowLaporan1 = this.win.Ionic.WebView.convertFileSrc(imageData);
        this.imageURILaporan1 = imageData;
        URI = this.imageURILaporan1;
      } else if (type == '2') {
        this.imageShowLaporan2 = this.win.Ionic.WebView.convertFileSrc(imageData);
        this.imageURILaporan2 = imageData;
        URI = this.imageURILaporan2;
      } else if (type == '3') {
        this.imageShowLaporan3 = this.win.Ionic.WebView.convertFileSrc(imageData);
        this.imageURILaporan3 = imageData;
        URI = this.imageURILaporan3;
      } else if (type == '4') {
        this.imageShowLaporan4 = this.win.Ionic.WebView.convertFileSrc(imageData);
        this.imageURILaporan4 = imageData;
        URI = this.imageURILaporan4;
      } else if (type == '5') {
        this.imageShowLaporan5 = this.win.Ionic.WebView.convertFileSrc(imageData);
        this.imageURILaporan5 = imageData;
        URI = this.imageURILaporan5;
      } else if (type == '6') {
        this.imageShowLaporan6 = this.win.Ionic.WebView.convertFileSrc(imageData);
        this.imageURILaporan6 = imageData;
        URI = this.imageURILaporan6;
      } else if (type == '7') {
        this.imageShowLaporan7 = this.win.Ionic.WebView.convertFileSrc(imageData);
        this.imageURILaporan7 = imageData;
        URI = this.imageURILaporan7;
      }


      if (this.platform.is('android') && sourceType === this.camera.PictureSourceType.PHOTOLIBRARY) {
        this.filepath.resolveNativePath(URI)
          .then(filePath => {
            let correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
            let currentName = imageData.substring(imageData.lastIndexOf('/') + 1, imageData.lastIndexOf('?'));
            this.copyFileToLocalDirLaporan(correctPath, currentName, this.createFileNameLaporan(type), type);
          });
      } else {
        var currentName = imageData.substr(imageData.lastIndexOf('/') + 1);
        var correctPath = imageData.substr(0, imageData.lastIndexOf('/') + 1);
        this.copyFileToLocalDirLaporan(correctPath, currentName, this.createFileNameLaporan(type), type);
      }
      console.log(URI);
    }, (err) => {
      console.log(err);
    });
  }

  private createFileNameLaporan(type) {
    var newFileName = '';
    if (type == '1') {
      if (this.fileTypeLaporan1 == 'gambar') {
        var d = new Date(), n = d.getTime();
        newFileName = n + "_SPPD.jpg";
      } else {
        // console.log('error disini');
      }
    } else if (type == '2') {
      if (this.fileTypeLaporan2 == 'gambar') {
        var d = new Date(), n = d.getTime();
        newFileName = n + "_SPPD.jpg";
      } else {
        // console.log('error disini');
      }
    } else if (type == '3') {
      if (this.fileTypeLaporan2 == 'gambar') {
        var d = new Date(), n = d.getTime();
        newFileName = n + "_SPPD.jpg";
      } else {
        // console.log('error disini');
      }
    } else if (type == '4') {
      if (this.fileTypeLaporan2 == 'gambar') {
        var d = new Date(), n = d.getTime();
        newFileName = n + "_SPPD.jpg";
      } else {
        // console.log('error disini');
      }
    } else if (type == '5') {
      if (this.fileTypeLaporan2 == 'gambar') {
        var d = new Date(), n = d.getTime();
        newFileName = n + "_SPPD.jpg";
      } else {
        // console.log('error disini');
      }
    } else if (type == '6') {
      if (this.fileTypeLaporan2 == 'gambar') {
        var d = new Date(), n = d.getTime();
        newFileName = n + "_SPPD.jpg";
      } else {
        // console.log('error disini');
      }
    } else if (type == '7') {
      if (this.fileTypeLaporan2 == 'gambar') {
        var d = new Date(), n = d.getTime();
        newFileName = n + "_SPPD.jpg";
      } else {
        // console.log('error disini');
      }
    }

    return newFileName;

  }

  private copyFileToLocalDirLaporan(namePath, currentName, filename, type) {
    this.file.copyFile(namePath, currentName, this.file.dataDirectory, filename).then(success => {
      if (type == '1') {
        this.imageFileNameLaporan1 = filename;
      } else if (type == '2') {
        this.imageFileNameLaporan2 = filename;
      } else if (type == '3') {
        this.imageFileNameLaporan3 = filename;
      } else if (type == '4') {
        this.imageFileNameLaporan4 = filename;
      } else if (type == '5') {
        this.imageFileNameLaporan5 = filename;
      } else if (type == '6') {
        this.imageFileNameLaporan6 = filename;
      } else if (type == '7') {
        this.imageFileNameLaporan7 = filename;
      }


      console.log(this.imageFileNameLaporan1);
    }, error => {
      console.log('Error while storing file: ' + error);
    });
  }

  openChooserLaporan(type) {
    this.fileChooser.open()
      .then(uri => {
        // console.log(uri);
        if (type == '1') {
          this.fileDocPathLaporan1 = uri;
          this.fileNameLaporan1 = uri.substr(uri.lastIndexOf('/') + 1);
          this.fileNameLaporan1 = this.fileNameLaporan1.substr(10);
          this.fileNameLaporan1 = this.fileNameLaporan1.replace(/%20/g, " ");
        } else if (type == '2') {
          this.fileDocPathLaporan2 = uri;
          this.fileNameLaporan2 = uri.substr(uri.lastIndexOf('/') + 1);
          this.fileNameLaporan2 = this.fileNameLaporan2.substr(10);
          this.fileNameLaporan2 = this.fileNameLaporan2.replace(/%20/g, " ");
        } else if (type == '3') {
          this.fileDocPathLaporan3 = uri;
          this.fileNameLaporan3 = uri.substr(uri.lastIndexOf('/') + 1);
          this.fileNameLaporan3 = this.fileNameLaporan3.substr(10);
          this.fileNameLaporan3 = this.fileNameLaporan3.replace(/%20/g, " ");
        } else if (type == '4') {
          this.fileDocPathLaporan4 = uri;
          this.fileNameLaporan4 = uri.substr(uri.lastIndexOf('/') + 1);
          this.fileNameLaporan4 = this.fileNameLaporan4.substr(10);
          this.fileNameLaporan4 = this.fileNameLaporan4.replace(/%20/g, " ");
        } else if (type == '5') {
          this.fileDocPathLaporan5 = uri;
          this.fileNameLaporan5 = uri.substr(uri.lastIndexOf('/') + 1);
          this.fileNameLaporan5 = this.fileNameLaporan5.substr(10);
          this.fileNameLaporan5 = this.fileNameLaporan5.replace(/%20/g, " ");
        } else if (type == '6') {
          this.fileDocPathLaporan6 = uri;
          this.fileNameLaporan6 = uri.substr(uri.lastIndexOf('/') + 1);
          this.fileNameLaporan6 = this.fileNameLaporan6.substr(10);
          this.fileNameLaporan6 = this.fileNameLaporan6.replace(/%20/g, " ");
        } else if (type == '7') {
          this.fileDocPathLaporan7 = uri;
          this.fileNameLaporan7 = uri.substr(uri.lastIndexOf('/') + 1);
          this.fileNameLaporan7 = this.fileNameLaporan7.substr(10);
          this.fileNameLaporan7 = this.fileNameLaporan7.replace(/%20/g, " ");
        }

        // console.log(this.fileName);
        // console.log(this.fileName2);
      })
      .catch(e => {
        // console.log(e)
      });
  }

  doLaporan() {
    var err = [];

    if (this.komentarLaporan == '' || this.komentarLaporan == null) {
      err.push("Komentar Laporan");
    }

    var showErr = '';

    for (var i = 0; i < err.length; i++) {
      if (i == err.length - 1) {
        showErr = showErr + err[i];
      } else {
        showErr = showErr + err[i] + ', ';
      }
    }

    if (err.length > 0) {
      let alertError = this.alertCtrl.create({
        title: 'Peringatan',
        subTitle: 'Field ' + showErr + ' tidak boleh kosong !',
        cssClass: 'alert',
        buttons: [
          {
            text: 'TUTUP',
            role: 'cancel',
            handler: () => {
              //console.log('Cancel clicked');
            }
          }
        ]
      });
      alertError.present();
    } else {
      let alert = this.alertCtrl.create({
        subTitle: 'Anda yakin ingin melakukan Pelaporan SPPD?',
        cssClass: 'alert',
        buttons: [
          {
            text: 'TIDAK',
            role: 'cancel',
            handler: () => {
              //console.log('Cancel clicked');
            }
          },
          {
            text: 'YA',
            handler: () => {

              let loading = this.loadingCtrl.create({
                spinner: 'dots',
                content: "Mengirim Laporan SPPD, Mohon Tunggu...",
                cssClass: 'transparent',
                dismissOnPageChange: true
              });
              loading.present();

              this.soapService
                .post(api_base_url, 'eoffice_laporan_sppd', {
                  fStream: JSON.stringify({
                    usernameEDI: api_user,
                    passwordEDI: api_pass,
                    nipp_pembuat: this.userdataTPK["data"]["NIPP"],
                    nama_pembuat: this.userdataTPK["data"]["NAMA"],
                    id_pembuat: this.userdataTPK["data"]["IDUSER"],
                    komentar: this.komentarRevisi,
                    id_surat_asli: atob(this.messageDetail["ID Surat"]),
                  })
                }).then((result) => {
                  var responData = JSON.parse(String(result));
                  if (responData["rcmsg"] == "SUCCESS") {
                    if (parseInt(this.jumFileLaporan) != 0) {
                      this.uploadLaporan(responData['data']['ID_SURAT'], loading);
                    } else {
                      let toast = this.toastCtrl.create({
                        message: 'Laporan SPPD Berhasil.',
                        duration: 3000,
                        position: 'bottom'
                      });
                      toast.present();
                      loading.dismiss();
                      this.navCtrl.pop();
                    }
                  } else {
                    let toast = this.toastCtrl.create({
                      message: "Gagal Laporan SPPD, silahkan coba kembali.",
                      duration: 3000,
                      position: 'bottom'
                    });
                    toast.present();
                    loading.dismiss();
                  }

                }).catch((error) => {
                  let toast = this.toastCtrl.create({
                    message: 'Input gagal, silahkan periksa koneksi internet anda.',
                    duration: 3000,
                    position: 'bottom'
                  });
                  toast.present();
                  loading.dismiss();
                });

            }
          }
        ]
      });
      alert.present();
    }
  }

  uploadLaporan(idSurat, loading) {

    // let loading = this.loadingCtrl.create({
    //   spinner: 'dots',
    //   content: "Mohon Tunggu...",
    //   cssClass: 'transparent',
    //   dismissOnPageChange: true
    // });
    // loading.present();

    var dataUpload = [];

    for (var i = 1; i <= parseInt(this.jumFileLaporan); i++) {
      if (i == 1) {
        dataUpload.push({
          "fileType": this.fileTypeLaporan1,
          "fileName": this.fileNameLaporan1,
          "fileDocPath": this.fileDocPathLaporan1,
          "imageFileName": this.imageFileNameLaporan1
        });
      }
      if (i == 2) {
        dataUpload.push({
          "fileType": this.fileTypeLaporan2,
          "fileName": this.fileNameLaporan2,
          "fileDocPath": this.fileDocPathLaporan2,
          "imageFileName": this.imageFileNameLaporan2
        });
      }
      if (i == 3) {
        dataUpload.push({
          "fileType": this.fileTypeLaporan3,
          "fileName": this.fileNameLaporan3,
          "fileDocPath": this.fileDocPathLaporan3,
          "imageFileName": this.imageFileNameLaporan3
        });
      }
      if (i == 4) {
        dataUpload.push({
          "fileType": this.fileTypeLaporan4,
          "fileName": this.fileNameLaporan4,
          "fileDocPath": this.fileDocPathLaporan4,
          "imageFileName": this.imageFileNameLaporan4
        });
      }
      if (i == 5) {
        dataUpload.push({
          "fileType": this.fileTypeLaporan5,
          "fileName": this.fileNameLaporan5,
          "fileDocPath": this.fileDocPathLaporan5,
          "imageFileName": this.imageFileNameLaporan5
        });
      }
      if (i == 6) {
        dataUpload.push({
          "fileType": this.fileTypeLaporan6,
          "fileName": this.fileNameLaporan6,
          "fileDocPath": this.fileDocPathLaporan6,
          "imageFileName": this.imageFileNameLaporan6
        });
      }
      if (i == 7) {
        dataUpload.push({
          "fileType": this.fileTypeLaporan7,
          "fileName": this.fileNameLaporan7,
          "fileDocPath": this.fileDocPathLaporan7,
          "imageFileName": this.imageFileNameLaporan7
        });
      }
    }

    console.log(dataUpload);
    var isUpload = false;
    var err = [];
    var success = [];
    var counterupload = 0;

    dataUpload.forEach((item, i) => {
      console.log(i);
      if ((item['fileName'] != null && item['fileName'] != '') || (item['imageFileName'] != null && item['imageFileName'] != '')) {
        if (item['fileType'] == 'file') {
          const fileTransfer: FileTransferObject = this.transfer.create();
          var options = {
            fileKey: "file",
            fileName: item['fileName'],
            chunkedMode: false,
            mimeType: "multipart/form-data",
            params: { id_surat: idSurat, type: '1' }
          };

          fileTransfer.upload(
            item['fileDocPath'],
            url_upload_sppd, options)
            .then((data) => {
              if (data['responseCode'] == 200) {
                var responData = JSON.parse(String(data['response']));
                console.log(responData);
                if (responData['rcmsg'] == 'SUCCESS') {
                  isUpload = false;
                  success.push('success upload ke - ' + i);
                } else {
                  err.push("gagal upload file ke - " + i);
                  isUpload = false;
                }
              } else {
                err.push("gagal upload file ke - " + i);
                isUpload = false;
              }

              if (i+1 == parseInt(this.jumFileLaporan)) {
                loading.dismiss();
                let toast = this.toastCtrl.create({
                  message: 'Laporan SPPD Berhasil.',
                  duration: 3000,
                  position: 'bottom'
                });
                toast.present();
                this.navCtrl.pop();
              }

            }, (err) => {
              if (i+1 == parseInt(this.jumFileLaporan)) {
                loading.dismiss();
                let toast = this.toastCtrl.create({
                  message: 'Laporan SPPD Berhasil, namun file attachment gagal diupload, hubungi admin.',
                  duration: 3000,
                  position: 'bottom'
                });
                toast.present();
                this,this.navCtrl.pop();
              }
              err.push("error upload file ke - " + i);
              isUpload = false;
            });
        } else if (item['fileType'] == 'gambar') {
          console.log('path image : ' + this.pathForImage(item['imageFileName']));
          const fileTransfer: FileTransferObject = this.transfer.create();

          var options = {
            fileKey: "file",
            fileName: this.fileName,
            chunkedMode: false,
            mimeType: "multipart/form-data",
            params: { id_surat: idSurat, type: '1' }
          };

          fileTransfer.upload(
            this.pathForImage(item['imageFileName']),
            url_upload_sppd, options)
            .then((data) => {
              console.log(data);
              if (data['responseCode'] == 200) {
                var responData = JSON.parse(String(data['response']));
                console.log(responData);

                if (responData['rcmsg'] == 'SUCCESS') {
                  isUpload = false;
                  success.push('success upload ke - ' + i);
                } else {
                  err.push("gagal upload gambar ke - " + i);
                  isUpload = false;
                }
              } else {
                err.push("gagal upload gambar ke - " + i);
                isUpload = false;
              }
              if (i+1 == parseInt(this.jumFileLaporan)) {
                loading.dismiss();
                let toast = this.toastCtrl.create({
                  message: 'Laporan SPPD Berhasil.',
                  duration: 3000,
                  position: 'bottom'
                });
                toast.present();
                this,this.navCtrl.pop();
              }
            }, (err) => {
              err.push("error upload gambar ke - " + i);
              isUpload = false;
              if (i+1 == parseInt(this.jumFileLaporan)) {
                loading.dismiss();
                let toast = this.toastCtrl.create({
                  message: 'Laporan SPPD Berhasil, namun file attachment gagal diupload, hubungi admin.',
                  duration: 3000,
                  position: 'bottom'
                });
                toast.present();
                this,this.navCtrl.pop();
              }
            });
        }
      } else {
        isUpload = false;
      }
    })

    // for (var i = 0; i < parseInt(this.jumFileLaporan) && isUpload == false; i++) {
    //   isUpload = true;
    //   if ((dataUpload[i]['fileName'] != null && dataUpload[i]['fileName'] != '') || (dataUpload[i]['imageFileName'] != null &&  dataUpload[i]['imageFileName'] != '') ) {
    //     if (dataUpload[i]['fileType'] == 'file') {
    //       const fileTransfer: FileTransferObject = this.transfer.create();
    //       var options = {
    //         fileKey: "file",
    //         fileName: dataUpload[i]['fileName'],
    //         chunkedMode: false,
    //         mimeType: "multipart/form-data",
    //         params: { id_surat: idSurat, type: '1' }
    //       };

    //       fileTransfer.upload(
    //         dataUpload[i]['fileDocPath'],
    //         url_upload_sppd, options)
    //         .then((data) => {
    //           if (data['responseCode'] == 200) {
    //             var responData = JSON.parse(String(data['response']));
    //             console.log(responData);
    //             if (responData['rcmsg'] == 'SUCCESS') {
    //               isUpload = false;
    //             } else {
    //               err.push("gagal upload file ke - " + i);
    //               isUpload = false;
    //             }
    //           } else {
    //             err.push("gagal upload file ke - " + i);
    //             isUpload = false;
    //           }

    //         }, (err) => {
    //           err.push("error upload file ke - " + i);
    //           isUpload = false;
    //         });
    //     } else if (dataUpload[i]['fileType'] == 'gambar') {
    //       const fileTransfer: FileTransferObject = this.transfer.create();

    //       var options = {
    //         fileKey: "file",
    //         fileName: this.fileName,
    //         chunkedMode: false,
    //         mimeType: "multipart/form-data",
    //         params: { id_surat: idSurat, type: '1' }
    //       };

    //       fileTransfer.upload(
    //         this.pathForImage(dataUpload[i]['imageFileName']),
    //         url_upload_sppd, options)
    //         .then((data) => {
    //           if (data['responseCode'] == 200) {
    //             var responData = JSON.parse(String(data['response']));
    //             console.log(responData);

    //             if (responData['rcmsg'] == 'SUCCESS') {
    //               isUpload = false;
    //             } else {
    //               err.push("gagal upload gambar ke - " + i);
    //               isUpload = false;
    //             }
    //           } else {
    //             err.push("gagal upload gambar ke - " + i);
    //             isUpload = false;
    //           }
    //         }, (err) => {
    //           err.push("error upload gambar ke - " + i);
    //           isUpload = false;
    //         });
    //     }
    //   } else {
    //     isUpload = false;
    //   }

    //   counterupload++;
    // }

    // console.log(counterupload);
    // console.log(parseInt(this.jumFileLaporan));

    // var showErr = '';
    // for (var i = 0; i < err.length; i++) {
    //   if (i == err.length - 1) {
    //     showErr = showErr + err[i];
    //   } else {
    //     showErr = showErr + err[i] + ', ';
    //   }
    // }
    // console.log(showErr);

    // if (counterupload == parseInt(this.jumFileLaporan)) {
    //   console.log("upload selesai");
    //   loading.dismiss();
    // }

  }

  tesUploadRevisi(id_surat) {
    let loading = this.loadingCtrl.create({
      spinner: 'dots',
      content: "Mohon Tunggu...",
      cssClass: 'transparent',
      dismissOnPageChange: true
    });
    loading.present();
    this.upload(id_surat, loading);
  }
}
