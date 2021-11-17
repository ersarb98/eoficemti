import { Component, ViewChild, Injectable } from "@angular/core";
import { IonicPage, NavController, NavParams, ToastController, ModalController, Platform, AlertController, LoadingController } from "ionic-angular";
import { SoapService } from "../soap.service";
import { Storage } from "@ionic/storage";
import { api_base_url, api_user, api_pass } from "../../config";

import { DatePicker } from '@ionic-native/date-picker';
import { DatePipe } from "@angular/common";

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

  namaPersonal: any = '';
  nipp: any = '';
  puspel: any = '';
  direktorat: any = '';
  divisi: any = '';
  subDivisi: any = '';
  kategoriJabatan: any = '';
  jabatan: any = '';
  kelasJabatan: any = '';
  areaKerja: any = '';
  golongan: any = '';
  statusPekerja: any = '';
  statusJabatan: any = '';
  kelompokPosisi: any = '';
  kategoriPosisi: any = '';
  tanggalCapeg: any = '';
  kelasCapeg: any = '';
  tmtPenuh: any = '';
  tmtJabatan: any = '';
  tmtKelasJabatan: any = '';
  tmtGolongan: any = '';
  tglMasukPPI: any = '';
  tglKeluarPPI: any = '';
  alasanKeluar: any = '';
  masaKerjaPPI: any = '';
  nomorKTP: any = '';
  nomorNPWP: any = '';
  statusPajak: any = '';
  nomorKK: any = '';
  bpjsKesehatan: any = '';
  bpjsKetenagakerjaan: any = '';
  tglLahir: any = '';
  tempatLahir: any = '';
  agama: any = '';
  pendidikanTerakhir: any = '';
  jurusan: any = '';
  namaInstitusi: any = '';
  jenisKelamin: any = '';
  alamatDomisili: any = '';
  alamatKTP: any = ''
  statusPerkawinan: any = '';
  jumlahAnak: any = '';
  jumlahTanggungan: any = '';
  ahliWaris: any = '';
  email: any = '';
  email2: any = '';
  noHp: any = '';
  noTelpRumah: any = '';

  jsonPerubahan: any;
  jsonInformasiPanggilanDarurat: any = [];
  jsonPendFormal: any = [];
  jsonPekerjaan: any = [];
  jsonAssignmentHistory: any = [];
  jsonKesehatan: any = [];
  jsonIdentitasKeluarga: any = [];
  jsonPenghargaan: any = [];
  jsonPerformansi: any = [];
  jsonPelatihan: any = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public soapService: SoapService,
    public storage: Storage,
    public toastCtrl: ToastController,
    public modalCtrl: ModalController,
    private datePicker: DatePicker,
    public platform: Platform,
    public datePipe: DatePipe,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController
  ) {
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
        console.log(responData);
        if (responData["rcmsg"] == "SUCCESS") {
          this.dataCV = responData["data"];
          this.namaPersonal = this.dataCV['DATA_HEADER']['NAMA_USER'];
          this.nipp = this.dataCV['DATA_HEADER']['NIPP'];
          this.puspel = this.dataCV['DATA_HEADER']['PUSPEL'];
          this.direktorat = this.dataCV['DATA_HEADER']['DIREKTORAT'];
          this.divisi = this.dataCV['DATA_HEADER']['DIVISI'];
          this.subDivisi = this.dataCV['DATA_HEADER']['SUB_DIVISI'];
          this.kategoriJabatan = this.dataCV['DATA_HEADER']['KATEGORI_JABATAN'];
          this.jabatan = this.dataCV['DATA_HEADER']['JABATAN'];
          this.kelasJabatan = this.dataCV['DATA_HEADER']['KELAS_JABATAN'];
          this.areaKerja = this.dataCV['DATA_HEADER']['AREA_KERJA'];
          this.golongan = this.dataCV['DATA_HEADER']['GOLONGAN'];
          this.statusPekerja = this.dataCV['DATA_HEADER']['STATUS_PEKERJA'];
          this.statusJabatan = this.dataCV['DATA_HEADER']['STATUS_JABATAN'];
          this.kelompokPosisi = this.dataCV['DATA_HEADER']['KELOMPOK_POSISI'];
          this.kategoriPosisi = this.dataCV['DATA_HEADER']['KATEGORI_POSISI'];
          this.tanggalCapeg = this.dataCV['DATA_HEADER']['TGL_CAPEG'];
          this.kelasCapeg = this.dataCV['DATA_HEADER']['KELAS_CAPEG'];
          this.tmtPenuh = this.dataCV['DATA_HEADER']['TMT_PENUH'];
          this.tmtJabatan = this.dataCV['DATA_HEADER']['TMT_JABATAN'];
          this.tmtKelasJabatan = this.dataCV['DATA_HEADER']['TMT_KELAS_JABATAN'];
          this.tmtGolongan = this.dataCV['DATA_HEADER']['TMT_GOLONGAN'];
          this.tglMasukPPI = this.dataCV['DATA_HEADER']['TGL_MASUK_PPI'];
          this.tglKeluarPPI = this.dataCV['DATA_HEADER']['TGL_KELUAR_PPI'];
          this.alasanKeluar = this.dataCV['DATA_HEADER']['ALASAN_KELUAR'];
          this.masaKerjaPPI = this.dataCV['DATA_HEADER']['MASA_KERJA_PPI'];
          this.nomorKTP = this.dataCV['DATA_HEADER']['NO_KTP'];
          this.nomorNPWP = this.dataCV['DATA_HEADER']['NO_NPWP'];
          this.statusPajak = this.dataCV['DATA_HEADER']['STATUS_PAJAK'];
          this.nomorKK = this.dataCV['DATA_HEADER']['NO_KK'];
          this.bpjsKesehatan = this.dataCV['DATA_HEADER']['NO_BPJS_KESEHATAN'];
          this.bpjsKetenagakerjaan = this.dataCV['DATA_HEADER']['NO_BPJS_KETENAGAKERJAAN'];
          this.tglLahir = this.dataCV['DATA_HEADER']['TGL_LAHIR'];
          this.tempatLahir = this.dataCV['DATA_HEADER']['TEMPAT_LAHIR'];
          this.agama = this.dataCV['DATA_HEADER']['AGAMA'];
          this.pendidikanTerakhir = this.dataCV['DATA_HEADER'][''];
          this.jurusan = this.dataCV['DATA_HEADER']['PEND_TERAKHIR'];
          this.namaInstitusi = this.dataCV['DATA_HEADER']['NAMA_INSTITUSI'];
          this.jenisKelamin = this.dataCV['DATA_HEADER']['JENIS_KELAMIN'];
          this.alamatDomisili = this.dataCV['DATA_HEADER']['ALAMAT_DOMISILI'];
          this.alamatKTP = this.dataCV['DATA_HEADER']['ALAMAT_KTP'];
          this.statusPerkawinan = this.dataCV['DATA_HEADER']['STATUS_PERKAWINAN'];
          this.jumlahAnak = this.dataCV['DATA_HEADER']['JUMLAH_ANAK'];
          this.jumlahTanggungan = this.dataCV['DATA_HEADER']['JUMLAH_TANGGUNGAN'];
          this.ahliWaris = this.dataCV['DATA_HEADER']['AHLI_WARIS'];
          this.email = this.dataCV['DATA_HEADER']['EMAIL1'];
          this.email2 = this.dataCV['DATA_HEADER']['EMAIL2'];
          this.noHp = this.dataCV['DATA_HEADER']['NO_HP'];
          this.noTelpRumah = this.dataCV['DATA_HEADER']['NO_TELP'];

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
    // this.navCtrl.push('CveditEditPage', {
    //   kat: kategori
    // });
    let modal = this.modalCtrl.create(
      "CveditEditPage",
      {
        kat: kategori
      },
      {
        enableBackdropDismiss: true,
        showBackdrop: true,
      }
    );
    modal.present();

    modal.onDidDismiss((data) => {
      if (data != null) {
        console.log(data);
        if (kategori == 'panggilandarurat') {
          this.dataCV['DATA_PANGGILAN_DARURAT'].push(
            {
              "ID_INFO": '0',
              "NO_DARURAT": data['data']['NO_DARURAT'],
              "NAMA": data['data']['NAMA'],
              "STATUS_HUBUNGAN": data['data']['STATUS_HUBUNGAN'],
              "IS_DELETED": data['data']['IS_DELETED']
            }
          );

          console.log(this.dataCV['DATA_PANGGILAN_DARURAT']);
        } else if (kategori == 'pendidikanformal') {
          this.dataCV['DATA_PEND_FORMAL'].push(
            {
              "ID_RIWAYAT_PEND": '0',
              "TINGKAT_PEND": data['data']['TINGKAT_PEND'],
              "NAMA_INSTANSI": data['data']['NAMA_INSTANSI'],
              "JURUSAN": data['data']['JURUSAN'],
              "TAHUN_LULUS": data['data']['TAHUN_LULUS'],
              "IS_DELETED": '2'
            }
          );

          console.log(this.dataCV['DATA_PEND_FORMAL']);
        } else if (kategori == 'pekerjaan') {
          this.dataCV['DATA_PEKERJAAN'].push(
            {
              "JABATAN": data['data']['JABATAN'],
              "NAMA_PERUSAHAAN": data['data']['NAMA_PERUSAHAAN'],
              "LAMA_KERJA": data['data']['LAMA_KERJA'],
              "PRESTASI": data['data']['PRESTASI'],
              "ID_RIWAYAT_PEKERJAAN": '0',
              "IS_DELETED": '2'
            }
          );

          console.log(this.dataCV['DATA_PEKERJAAN']);
        } else if (kategori == 'assigmenthistory') {
          this.dataCV['DATA_ASSIGN_HISTORY'].push(
            {
              "POSISI_JABATAN": data['data']['POSISI_JABATAN'],
              "NO_SK": data['data']['NO_SK'],
              "TGL_MULAI_JABATAN": data['data']['TGL_MULAI_JABATAN'],
              "TGL_AKHIR_JABATAN": data['data']['TGL_AKHIR_JABATAN'],
              "LAMA_JABATAN": data['data']['LAMA_JABATAN'],
              'ID_ASSIGNMENT': '0',
              "IS_DELETED": '2',
            }
          );

          console.log(this.dataCV['DATA_ASSIGN_HISTORY']);
        } else if (kategori == 'kesehatan') {
          this.dataCV['DATA_KESEHATAN'].push(
            {
              "TGL_MCU": data['data']['TGL_MCU'],
              "LEVEL_KESEHATAN": data['data']['LEVEL_KESEHATAN'],
              "UPLOAD_HASIL_MCU": data['data']['UPLOAD_HASIL_MCU'],
              "ID_RIWAYAT_KESEHATAN": '0',
              "IS_DELETED": '2',
            }
          );

          console.log(this.dataCV['DATA_KESEHATAN']);
        } else if (kategori == 'identitaskeluarga') {
          this.dataCV['DATA_IDENTITAS_KELUARGA'].push(
            {
              "NAMA": data['data']['NAMA'],
              "TGL_LAHIR": data['data']['TGL_LAHIR'],
              "HUBUNGAN": data['data']['HUBUNGAN'],
              "NIK": data['data']['NIK'],
              "TGL_NIKAH": data['data']['TGL_NIKAH'],
              'ID_IDENTITAS': '0',
              "IS_DELETED": '2',
            }
          );

          console.log(this.dataCV['DATA_IDENTITAS_KELUARGA']);
        } else if (kategori == 'rewardpunish') {
          this.dataCV['DATA_PENGHARGAAN_HK'].push(
            {
              "DESKRIPSI": data['data']['DESKRIPSI'],
              "TAHUN": data['data']['TAHUN'],
              "JENIS": data['data']['JENIS'],
              "INSTANSI_YANG_MENGELUARKAN": data['data']['INSTANSI_YANG_MENGELUARKAN'],
              "ID_PENGHUK": '0',
              "IS_DELETED": '2'
            }
          );

          console.log(this.dataCV['DATA_PENGHARGAAN_HK']);
        } else if (kategori == 'performa') {
          this.dataCV['DATA_PERFORMANSI'].push(
            {
              "NILAI_KINERJA_TAHUNAN": data['data']['NILAI_KINERJA_TAHUNAN'],
              "KATEGORI": data['data']['KATEGORI'],
              "TAHUN": data['data']['TAHUN'],
              "ID_RIWAYAT_PERFORMA": '0',
              "IS_DELETED": '2'
            }
          );

          console.log(this.dataCV['DATA_PERFORMANSI']);
        } else if (kategori == 'pelatihanppi') {
          this.dataCV['DATA_PELATIHAN'].push(
            {
              "NAMA_PELATIHAN": data['data']['NAMA_PELATIHAN'],
              "TAHUN_PELATIHAN": data['data']['TAHUN_PELATIHAN'],
              "NAMA_PENYELENGGARA": data['data']['NAMA_PENYELENGGARA'],
              "UPLOAD_BUKTI_SERTIFIKAT": data['data']['UPLOAD_BUKTI_SERTIFIKAT'],
              "EVALUASI1": data['data']['EVALUASI1'],
              "UPLOAD_DOK_EVAL1": data['data']['UPLOAD_DOK_EVAL1'],
              "EVALUASI2": data['data']['EVALUASI2'],
              "UPLOAD_DOK_EVAL2": data['data']['UPLOAD_DOK_EVAL2'],
              "HARGA_PELATIHAN": data['data']['HARGA_PELATIHAN'],
              "LOKASI": data['data']['LOKASI'],
              "TGL_PELATIHAN": data['data']['TGL_PELATIHAN'],
              "KETERANGAN": data['data']['KETERANGAN'],
              "ID_RIWAYAT_PELATIHAN": '0',
              "IS_DELETED": '2'
            }
          );

          console.log(this.dataCV['DATA_PELATIHAN']);
        }
      }
    });
  }

  submit() {
    this.jsonPerubahan = [];
    this.jsonInformasiPanggilanDarurat = [];
    this.jsonPendFormal = [];
    this.jsonPekerjaan = [];
    this.jsonAssignmentHistory = [];
    this.jsonKesehatan = [];
    var bool = false;
    var chekupdate = 0;

    bool = this.namaPersonal == this.dataCV['DATA_HEADER']['NAMA_USER'] && bool == false ? false : true;
    bool = this.nipp == this.dataCV['DATA_HEADER']['NIPP'] && bool == false ? false : true;
    bool = this.puspel == this.dataCV['DATA_HEADER']['PUSPEL'] && bool == false ? false : true;
    bool = this.direktorat == this.dataCV['DATA_HEADER']['DIREKTORAT'] && bool == false ? false : true;
    bool = this.divisi == this.dataCV['DATA_HEADER']['DIVISI'] && bool == false ? false : true;
    bool = this.subDivisi == this.dataCV['DATA_HEADER']['SUB_DIVISI'] && bool == false ? false : true;
    bool = this.kategoriJabatan == this.dataCV['DATA_HEADER']['KATEGORI_JABATAN'] && bool == false ? false : true;
    bool = this.jabatan == this.dataCV['DATA_HEADER']['JABATAN'] && bool == false ? false : true;
    bool = this.kelasJabatan == this.dataCV['DATA_HEADER']['KELAS_JABATAN'] && bool == false ? false : true;
    bool = this.areaKerja == this.dataCV['DATA_HEADER']['AREA_KERJA'] && bool == false ? false : true;
    bool = this.golongan == this.dataCV['DATA_HEADER']['GOLONGAN'] && bool == false ? false : true;
    bool = this.statusPekerja == this.dataCV['DATA_HEADER']['STATUS_PEKERJA'] && bool == false ? false : true;
    bool = this.statusJabatan == this.dataCV['DATA_HEADER']['STATUS_JABATAN'] && bool == false ? false : true;
    bool = this.kelompokPosisi == this.dataCV['DATA_HEADER']['KELOMPOK_POSISI'] && bool == false ? false : true;
    bool = this.kategoriPosisi == this.dataCV['DATA_HEADER']['KATEGORI_POSISI'] && bool == false ? false : true;
    bool = this.tanggalCapeg == this.dataCV['DATA_HEADER']['TGL_CAPEG'] && bool == false ? false : true;
    bool = this.kelasCapeg == this.dataCV['DATA_HEADER']['KELAS_CAPEG'] && bool == false ? false : true;
    bool = this.tmtPenuh == this.dataCV['DATA_HEADER']['TMT_PENUH'] && bool == false ? false : true;
    bool = this.tmtJabatan == this.dataCV['DATA_HEADER']['TMT_JABATAN'] && bool == false ? false : true;
    bool = this.tmtKelasJabatan == this.dataCV['DATA_HEADER']['TMT_KELAS_JABATAN'] && bool == false ? false : true;
    bool = this.tmtGolongan == this.dataCV['DATA_HEADER']['TMT_GOLONGAN'] && bool == false ? false : true;
    bool = this.tglMasukPPI == this.dataCV['DATA_HEADER']['TGL_MASUK_PPI'] && bool == false ? false : true;
    bool = this.tglKeluarPPI == this.dataCV['DATA_HEADER']['TGL_KELUAR_PPI'] && bool == false ? false : true;
    bool = this.alasanKeluar == this.dataCV['DATA_HEADER']['ALASAN_KELUAR'] && bool == false ? false : true;
    bool = this.masaKerjaPPI == this.dataCV['DATA_HEADER']['MASA_KERJA_PPI'] && bool == false ? false : true;
    bool = this.nomorKTP == this.dataCV['DATA_HEADER']['NO_KTP'] && bool == false ? false : true;
    bool = this.nomorNPWP == this.dataCV['DATA_HEADER']['NO_NPWP'] && bool == false ? false : true;
    bool = this.statusPajak == this.dataCV['DATA_HEADER']['STATUS_PAJAK'] && bool == false ? false : true;
    bool = this.nomorKK == this.dataCV['DATA_HEADER']['NO_KK'] && bool == false ? false : true;
    bool = this.bpjsKesehatan == this.dataCV['DATA_HEADER']['NO_BPJS_KESEHATAN'] && bool == false ? false : true;
    bool = this.bpjsKetenagakerjaan == this.dataCV['DATA_HEADER']['NO_BPJS_KETENAGAKERJAAN'] && bool == false ? false : true;
    bool = this.tglLahir == this.dataCV['DATA_HEADER']['TGL_LAHIR'] && bool == false ? false : true;
    bool = this.tempatLahir == this.dataCV['DATA_HEADER']['TEMPAT_LAHIR'] && bool == false ? false : true;
    bool = this.agama == this.dataCV['DATA_HEADER']['AGAMA'] && bool == false ? false : true;
    bool = this.pendidikanTerakhir == this.dataCV['DATA_HEADER']['PEND_TERAKHIR'] && bool == false ? false : true;
    bool = this.jurusan == this.dataCV['DATA_HEADER']['JURUSAN'] && bool == false ? false : true;
    bool = this.namaInstitusi == this.dataCV['DATA_HEADER']['NAMA_INSTITUSI'] && bool == false ? false : true;
    bool = this.jenisKelamin == this.dataCV['DATA_HEADER']['JENIS_KELAMIN'] && bool == false ? false : true;
    bool = this.alamatDomisili == this.dataCV['DATA_HEADER']['ALAMAT_DOMISILI'] && bool == false ? false : true;
    bool = this.statusPerkawinan == this.dataCV['DATA_HEADER']['STATUS_PERKAWINAN'] && bool == false ? false : true;
    bool = this.jumlahAnak == this.dataCV['DATA_HEADER']['JUMLAH_ANAK'] && bool == false ? false : true;
    bool = this.jumlahTanggungan == this.dataCV['DATA_HEADER']['JUMLAH_TANGGUNGAN'] && bool == false ? false : true;
    bool = this.ahliWaris == this.dataCV['DATA_HEADER']['AHLI_WARIS'] && bool == false ? false : true;
    bool = this.email == this.dataCV['DATA_HEADER']['EMAIL1'] && bool == false ? false : true;
    bool = this.email2 == this.dataCV['DATA_HEADER']['EMAIL2'] && bool == false ? false : true;
    bool = this.noHp == this.dataCV['DATA_HEADER']['NO_HP'] && bool == false ? false : true;
    bool = this.noTelpRumah == this.dataCV['DATA_HEADER']['NO_TELP'] && bool == false ? false : true;
    bool = this.alamatKTP == this.dataCV['DATA_HEADER']['ALAMAT_KTP'] && bool == false ? false : true;


    if (bool) {
      chekupdate = 1;
    }

    var info_personal = [
      'Y',
      this.namaPersonal == this.dataCV['DATA_HEADER']['NAMA_USER'] ? "" : this.namaPersonal,
      this.nipp == this.dataCV['DATA_HEADER']['NIPP'] ? "" : this.nipp,
      this.puspel == this.dataCV['DATA_HEADER']['PUSPEL'] ? "" : this.puspel,
      this.direktorat == this.dataCV['DATA_HEADER']['DIREKTORAT'] ? "" : this.direktorat,
      this.divisi == this.dataCV['DATA_HEADER']['DIVISI'] ? "" : this.divisi,
      this.subDivisi == this.dataCV['DATA_HEADER']['SUB_DIVISI'] ? "" : this.subDivisi,
      this.kategoriJabatan == this.dataCV['DATA_HEADER']['KATEGORI_JABATAN'] ? "" : this.kategoriJabatan,
      this.jabatan == this.dataCV['DATA_HEADER']['JABATAN'] ? "" : this.jabatan,
      this.kelasJabatan == this.dataCV['DATA_HEADER']['KELAS_JABATAN'] ? "" : this.kelasJabatan,
      this.areaKerja == this.dataCV['DATA_HEADER']['AREA_KERJA'] ? "" : this.areaKerja,
      this.golongan == this.dataCV['DATA_HEADER']['GOLONGAN'] ? "" : this.golongan,
      "",
      this.statusPekerja == this.dataCV['DATA_HEADER']['STATUS_PEKERJA'] ? "" : this.statusPekerja,
      this.statusJabatan == this.dataCV['DATA_HEADER']['STATUS_JABATAN'] ? "" : this.statusJabatan,
      this.kelompokPosisi == this.dataCV['DATA_HEADER']['KELOMPOK_POSISI'] ? "" : this.kelompokPosisi,
      this.kategoriPosisi == this.dataCV['DATA_HEADER']['KATEGORI_POSISI'] ? "" : this.kategoriPosisi,
      this.tanggalCapeg == this.dataCV['DATA_HEADER']['TGL_CAPEG'] ? "" : this.tanggalCapeg,
      this.tglMasukPPI == this.dataCV['DATA_HEADER']['TGL_MASUK_PPI'] ? "" : this.tglKeluarPPI,
      this.tglKeluarPPI == this.dataCV['DATA_HEADER']['TGL_KELUAR_PPI'] ? "" : this.tglKeluarPPI,
      this.masaKerjaPPI == this.dataCV['DATA_HEADER']['MASA_KERJA_PPI'] ? "" : this.masaKerjaPPI,
      this.nomorKTP == this.dataCV['DATA_HEADER']['NO_KTP'] ? "" : this.nomorKTP,
      this.nomorNPWP == this.dataCV['DATA_HEADER']['NO_NPWP'] ? "" : this.nomorNPWP,
      this.nomorKK == this.dataCV['DATA_HEADER']['NO_KK'] ? "" : this.nomorKK,
      this.bpjsKesehatan == this.dataCV['DATA_HEADER']['NO_BPJS_KESEHATAN'] ? "" : this.bpjsKesehatan,
      this.bpjsKetenagakerjaan == this.dataCV['DATA_HEADER']['NO_BPJS_KETENAGAKERJAAN'] ? "" : this.bpjsKetenagakerjaan,
      this.tglLahir == this.dataCV['DATA_HEADER']['TGL_LAHIR'] ? "" : this.tglLahir,
      this.tempatLahir == this.dataCV['DATA_HEADER']['TEMPAT_LAHIR'] ? "" : this.tempatLahir,
      this.agama == this.dataCV['DATA_HEADER']['AGAMA'] ? "" : this.agama,
      this.pendidikanTerakhir == this.dataCV['DATA_HEADER']['PEND_TERAKHIR'] ? "" : this.pendidikanTerakhir,
      this.jurusan == this.dataCV['DATA_HEADER']['JURUSAN'] ? "" : this.jurusan,
      this.namaInstitusi == this.dataCV['DATA_HEADER']['NAMA_INSTITUSI'] ? "" : this.namaInstitusi,
      this.jenisKelamin == this.dataCV['DATA_HEADER']['JENIS_KELAMIN'] ? "" : this.jenisKelamin,
      this.alamatKTP == this.dataCV['DATA_HEADER']['ALAMAT_KTP'] ? "" : this.alamatKTP,
      this.alamatDomisili == this.dataCV['DATA_HEADER']['ALAMAT_DOMISILI'] ? "" : this.alamatDomisili,
      this.statusPerkawinan == this.dataCV['DATA_HEADER']['STATUS_PERKAWINAN'] ? "" : this.statusPerkawinan,
      this.jumlahAnak == this.dataCV['DATA_HEADER']['JUMLAH_ANAK'] ? "" : this.jumlahAnak,
      this.jumlahTanggungan == this.dataCV['DATA_HEADER']['JUMLAH_TANGGUNGAN'] ? "" : this.jumlahTanggungan,
      this.email == this.dataCV['DATA_HEADER']['EMAIL1'] ? "" : this.email,
      this.email2 == this.dataCV['DATA_HEADER']['EMAIL2'] ? "" : this.email2,
      this.noHp == this.dataCV['DATA_HEADER']['NO_HP'] ? "" : this.noHp,
      this.noTelpRumah == this.dataCV['DATA_HEADER']['NO_TELP'] ? "" : this.noTelpRumah,
      this.kelasCapeg == this.dataCV['DATA_HEADER']['KELAS_CAPEG'] ? "" : this.kelasCapeg,
      this.tmtPenuh == this.dataCV['DATA_HEADER']['TMT_PENUH'] ? "" : this.tmtPenuh,
      this.tmtJabatan == this.dataCV['DATA_HEADER']['TMT_JABATAN'] ? "" : this.tmtJabatan,
      this.tmtKelasJabatan == this.dataCV['DATA_HEADER']['TMT_KELAS_JABATAN'] ? "" : this.tmtKelasJabatan,
      this.tmtGolongan == this.dataCV['DATA_HEADER']['TMT_GOLONGAN'] ? "" : this.tmtGolongan,
      this.alasanKeluar == this.dataCV['DATA_HEADER']['ALASAN_KELUAR'] ? "" : this.alasanKeluar,
      this.statusPajak == this.dataCV['DATA_HEADER']['STATUS_PAJAK'] ? "" : this.statusPajak,
      this.ahliWaris == this.dataCV['DATA_HEADER']['AHLI_WARIS'] ? "" : this.ahliWaris,
      chekupdate
    ];

    for (var i = 0; i < this.dataCV['DATA_PANGGILAN_DARURAT'].length; i++) {
      var data = [
        this.dataCV['DATA_PANGGILAN_DARURAT'][i]['NO_DARURAT'],
        this.dataCV['DATA_PANGGILAN_DARURAT'][i]['NAMA'],
        this.dataCV['DATA_PANGGILAN_DARURAT'][i]['STATUS_HUBUNGAN'],
        this.dataCV['DATA_PANGGILAN_DARURAT'][i]['ID_INFO'],
        this.dataCV['DATA_PANGGILAN_DARURAT'][i]['IS_DELETED'],
      ]
      console.log(data);
      this.jsonInformasiPanggilanDarurat.push(
        data
      )
    }

    for (var i = 0; i < this.dataCV['DATA_PEND_FORMAL'].length; i++) {
      var data = [
        this.dataCV['DATA_PEND_FORMAL'][i]['TINGKAT_PEND'],
        this.dataCV['DATA_PEND_FORMAL'][i]['NAMA_INSTANSI'],
        this.dataCV['DATA_PEND_FORMAL'][i]['JURUSAN'],
        this.dataCV['DATA_PEND_FORMAL'][i]['TAHUN_LULUS'],
        this.dataCV['DATA_PEND_FORMAL'][i]['ID_RIWAYAT_PEND'],
        this.dataCV['DATA_PEND_FORMAL'][i]['IS_DELETED'],
      ]
      console.log(data);
      this.jsonPendFormal.push(
        data
      )
    }

    for (var i = 0; i < this.dataCV['DATA_PEKERJAAN'].length; i++) {
      var data = [
        this.dataCV['DATA_PEKERJAAN'][i]['JABATAN'],
        this.dataCV['DATA_PEKERJAAN'][i]['NAMA_PERUSAHAAN'],
        this.dataCV['DATA_PEKERJAAN'][i]['LAMA_KERJA'],
        this.dataCV['DATA_PEKERJAAN'][i]['PRESTASI'],
        this.dataCV['DATA_PEKERJAAN'][i]['ID_RIWAYAT_PEKERJAAN'],
        this.dataCV['DATA_PEKERJAAN'][i]['IS_DELETED'],
      ]
      console.log(data);
      this.jsonPekerjaan.push(
        data
      )
    }

    for (var i = 0; i < this.dataCV['DATA_ASSIGN_HISTORY'].length; i++) {
      var data = [
        this.dataCV['DATA_ASSIGN_HISTORY'][i]['POSISI_JABATAN'],
        this.dataCV['DATA_ASSIGN_HISTORY'][i]['NO_SK'],
        this.dataCV['DATA_ASSIGN_HISTORY'][i]['TGL_MULAI_JABATAN'],
        this.dataCV['DATA_ASSIGN_HISTORY'][i]['TGL_AKHIR_JABATAN'],
        this.dataCV['DATA_ASSIGN_HISTORY'][i]['LAMA_JABATAN'],
        this.dataCV['DATA_ASSIGN_HISTORY'][i]['ID_ASSIGNMENT'],
        this.dataCV['DATA_ASSIGN_HISTORY'][i]['IS_DELETED']
      ]
      console.log(data);
      this.jsonAssignmentHistory.push(
        data
      )
    }

    for (var i = 0; i < this.dataCV['DATA_KESEHATAN'].length; i++) {
      var data = [
        this.dataCV['DATA_KESEHATAN'][i]['TGL_MCU'],
        this.dataCV['DATA_KESEHATAN'][i]['LEVEL_KESEHATAN'],
        this.dataCV['DATA_KESEHATAN'][i]['UPLOAD_HASIL_MCU'],
        this.dataCV['DATA_KESEHATAN'][i]['ID_RIWAYAT_KESEHATAN'],
        this.dataCV['DATA_KESEHATAN'][i]['IS_DELETED']
      ]
      console.log(data);
      this.jsonKesehatan.push(
        data
      )
    }

    for (var i = 0; i < this.dataCV['DATA_IDENTITAS_KELUARGA'].length; i++) {
      var data = [
        this.dataCV['DATA_IDENTITAS_KELUARGA'][i]['NAMA'],
        this.dataCV['DATA_IDENTITAS_KELUARGA'][i]['TGL_LAHIR'],
        this.dataCV['DATA_IDENTITAS_KELUARGA'][i]['HUBUNGAN'],
        this.dataCV['DATA_IDENTITAS_KELUARGA'][i]['NIK'],
        this.dataCV['DATA_IDENTITAS_KELUARGA'][i]['TGL_NIKAH'],
        this.dataCV['DATA_IDENTITAS_KELUARGA'][i]['ID_IDENTITAS'],
        this.dataCV['DATA_IDENTITAS_KELUARGA'][i]['IS_DELETED']
      ]
      console.log(data);
      this.jsonIdentitasKeluarga.push(
        data
      )
    }

    for (var i = 0; i < this.dataCV['DATA_PENGHARGAAN_HK'].length; i++) {
      var data = [
        this.dataCV['DATA_PENGHARGAAN_HK'][i]['DESKRIPSI'],
        this.dataCV['DATA_PENGHARGAAN_HK'][i]['TAHUN'],
        this.dataCV['DATA_PENGHARGAAN_HK'][i]['JENIS'],
        this.dataCV['DATA_PENGHARGAAN_HK'][i]['INSTANSI_YANG_MENGELUARKAN'],
        this.dataCV['DATA_PENGHARGAAN_HK'][i]['ID_PENGHUK'],
        this.dataCV['DATA_PENGHARGAAN_HK'][i]['IS_DELETED']
      ]
      console.log(data);
      this.jsonPenghargaan.push(
        data
      )
    }

    for (var i = 0; i < this.dataCV['DATA_PERFORMANSI'].length; i++) {
      var data = [
        this.dataCV['DATA_PERFORMANSI'][i]['NILAI_KINERJA_TAHUNAN'],
        this.dataCV['DATA_PERFORMANSI'][i]['KATEGORI'],
        this.dataCV['DATA_PERFORMANSI'][i]['TAHUN'],
        this.dataCV['DATA_PERFORMANSI'][i]['ID_RIWAYAT_PERFORMA'],
        this.dataCV['DATA_PERFORMANSI'][i]['IS_DELETED']
      ]
      console.log(data);
      this.jsonPerformansi.push(
        data
      )
    }

    for (var i = 0; i < this.dataCV['DATA_PELATIHAN'].length; i++) {
      var data = [
        this.dataCV['DATA_PELATIHAN'][i]['NAMA_PELATIHAN'],
        this.dataCV['DATA_PELATIHAN'][i]['TAHUN_PELATIHAN'],
        this.dataCV['DATA_PELATIHAN'][i]['NAMA_PENYELENGGARA'],
        this.dataCV['DATA_PELATIHAN'][i]['UPLOAD_BUKTI_SERTIFIKAT'],
        this.dataCV['DATA_PELATIHAN'][i]['EVALUASI1'],
        this.dataCV['DATA_PELATIHAN'][i]['UPLOAD_DOK_EVAL1'],
        this.dataCV['DATA_PELATIHAN'][i]['EVALUASI2'],
        this.dataCV['DATA_PELATIHAN'][i]['UPLOAD_DOK_EVAL2'],
        this.dataCV['DATA_PELATIHAN'][i]['HARGA_PELATIHAN'],
        this.dataCV['DATA_PELATIHAN'][i]['LOKASI'],
        this.dataCV['DATA_PELATIHAN'][i]['TGL_PELATIHAN'],
        this.dataCV['DATA_PELATIHAN'][i]['KETERANGAN'],
        this.dataCV['DATA_PELATIHAN'][i]['ID_RIWAYAT_PELATIHAN'],
        this.dataCV['DATA_PELATIHAN'][i]['IS_DELETED']
      ]
      console.log(data);
      this.jsonPelatihan.push(
        data
      )
    }


    this.jsonPerubahan = {
      "info_personal": info_personal,
      "informasi_panggilan_darurat": this.jsonInformasiPanggilanDarurat,
      "riwayat_pendidikan_formal": this.jsonPendFormal,
      "riwayat_pekerjaan": this.jsonPekerjaan,
      "assignment_history": this.jsonAssignmentHistory,
      "riwayat_kesehatan": this.jsonKesehatan,
      "riwayat_pelatihan_ppi": this.jsonPelatihan,
      "identitas_keluarga": this.jsonIdentitasKeluarga,
      "penghargaan_hukuman_kerja": this.jsonPenghargaan,
      "riwayat_performansi": this.jsonPerformansi
    }
    console.log(this.jsonPerubahan);

    let alertError = this.alertCtrl.create({
      title: 'Request Perubahan CV',
      subTitle: 'Anda yakin ingin melakukan request perubahan CV?',
      cssClass: 'alert',
      buttons: [
        {
          text: 'Tidak',
          role: 'cancel',
          handler: () => {
            //console.log('Cancel clicked');
          }
        },
        {
          text: 'Ya',
          handler: () => {
            //console.log('Cancel clicked');
            let loading = this.loadingCtrl.create({
              spinner: 'dots',
              content: "Request perubahan CV...",
              cssClass: 'transparent',
              dismissOnPageChange: true
            });
            loading.present();
    
            this.soapService
              .post(api_base_url, "eoffice_request_perubahan_cv", {
                fStream: JSON.stringify({
                  usernameEDI: api_user,
                  passwordEDI: api_pass,
                  id_user: this.userdataTPK["data"]["IDUSER"],
                  json_param: JSON.stringify(this.jsonPerubahan)
                }),
              })
              .then((result) => {
                var responData = JSON.parse(String(result));
                console.log(responData);
                if (responData["rcmsg"] == "SUCCESS") {
                  let toast = this.toastCtrl.create({
                    message: "Request perubahan data CV berhasil.",
                    duration: 3000,
                    position: "bottom",
                  });
                  toast.present();
                  this.navCtrl.pop();
                } else {
                  let toast = this.toastCtrl.create({
                    message: "Gagal request perubahan CV, coba kembali.",
                    duration: 3000,
                    position: "bottom",
                  });
                  toast.present();
                }
                loading.dismiss();
              })
              .catch((error) => {
                let toast = this.toastCtrl.create({
                  message: "Gagal request perubahan CV, coba kembali.",
                  duration: 3000,
                  position: "bottom",
                });
                toast.present();
                loading.dismiss();
              });
          }
        }
      ]
    });
    alertError.present();
  }

  delete(type, index, data) {
    console.log(data);
    if (type == 'emergency') {
      if (data['IS_DELETED'] == '0') {
        this.dataCV['DATA_PANGGILAN_DARURAT'][index]['IS_DELETED'] = '1';
      } else if (data['IS_DELETED'] == '2') {
        this.dataCV['DATA_PANGGILAN_DARURAT'].splice(index, 1);
      }
    } else if (type == 'pend_formal') {
      console.log('mausuk');
      if (data['IS_DELETED'] == '0') {
        this.dataCV['DATA_PEND_FORMAL'][index]['IS_DELETED'] = '1';
      } else if (data['IS_DELETED'] == '2') {
        this.dataCV['DATA_PEND_FORMAL'].splice(index, 1);
      }
    } else if (type == 'working') {
      console.log('mausuk');
      if (data['IS_DELETED'] == '0') {
        this.dataCV['DATA_PEKERJAAN'][index]['IS_DELETED'] = '1';
      } else if (data['IS_DELETED'] == '2') {
        this.dataCV['DATA_PEKERJAAN'].splice(index, 1);
      }
    } else if (type == 'assignHistory') {
      console.log('mausuk');
      if (data['IS_DELETED'] == '0') {
        this.dataCV['DATA_ASSIGN_HISTORY'][index]['IS_DELETED'] = '1';
      } else if (data['IS_DELETED'] == '2') {
        this.dataCV['DATA_ASSIGN_HISTORY'].splice(index, 1);
      }
    } else if (type == 'kesehatan') {
      console.log('mausuk');
      if (data['IS_DELETED'] == '0') {
        this.dataCV['DATA_KESEHATAN'][index]['IS_DELETED'] = '1';
      } else if (data['IS_DELETED'] == '2') {
        this.dataCV['DATA_KESEHATAN'].splice(index, 1);
      }
    } else if (type == 'keluarga') {
      console.log('mausuk');
      if (data['IS_DELETED'] == '0') {
        this.dataCV['DATA_IDENTITAS_KELUARGA'][index]['IS_DELETED'] = '1';
      } else if (data['IS_DELETED'] == '2') {
        this.dataCV['DATA_IDENTITAS_KELUARGA'].splice(index, 1);
      }
    } else if (type == 'penghargaan') {
      console.log('mausuk');
      if (data['IS_DELETED'] == '0') {
        this.dataCV['DATA_PENGHARGAAN_HK'][index]['IS_DELETED'] = '1';
      } else if (data['IS_DELETED'] == '2') {
        this.dataCV['DATA_PENGHARGAAN_HK'].splice(index, 1);
      }
    } else if (type == 'performansi') {
      console.log('mausuk');
      if (data['IS_DELETED'] == '0') {
        this.dataCV['DATA_PERFORMANSI'][index]['IS_DELETED'] = '1';
      } else if (data['IS_DELETED'] == '2') {
        this.dataCV['DATA_PERFORMANSI'].splice(index, 1);
      }
    } else if (type == 'pelatihan') {
      console.log('mausuk');
      if (data['IS_DELETED'] == '0') {
        this.dataCV['DATA_PELATIHAN'][index]['IS_DELETED'] = '1';
      } else if (data['IS_DELETED'] == '2') {
        this.dataCV['DATA_PELATIHAN'].splice(index, 1);
      }
    }

  }

  showDatePicker(type: number) {

    var myDate;
    myDate = new Date();

    if (type == 1 && (this.tanggalCapeg != null && this.tanggalCapeg != '')) {
      var dateSplit = this.tanggalCapeg.split("/");
      myDate = new Date(dateSplit[2], (dateSplit[1] != '0') ? parseInt(dateSplit[1]) - 1 : dateSplit[1], dateSplit[0]);
    }
    if (type == 2 && (this.tmtPenuh != null && this.tmtPenuh != '')) {
      var dateSplit = this.tmtPenuh.split("/");
      myDate = new Date(dateSplit[2], (dateSplit[1] != '0') ? parseInt(dateSplit[1]) - 1 : dateSplit[1], dateSplit[0]);
    }
    if (type == 3 && (this.tmtJabatan != null && this.tmtJabatan != '')) {
      var dateSplit = this.tmtJabatan.split("/");
      myDate = new Date(dateSplit[2], (dateSplit[1] != '0') ? parseInt(dateSplit[1]) - 1 : dateSplit[1], dateSplit[0]);
    }
    if (type == 4 && (this.tmtKelasJabatan != null && this.tmtKelasJabatan != '')) {
      var dateSplit = this.tmtKelasJabatan.split("/");
      myDate = new Date(dateSplit[2], (dateSplit[1] != '0') ? parseInt(dateSplit[1]) - 1 : dateSplit[1], dateSplit[0]);
    }
    if (type == 5 && (this.tmtGolongan != null && this.tmtGolongan != '')) {
      var dateSplit = this.tmtGolongan.split("/");
      myDate = new Date(dateSplit[2], (dateSplit[1] != '0') ? parseInt(dateSplit[1]) - 1 : dateSplit[1], dateSplit[0]);
    }
    if (type == 6 && (this.tglMasukPPI != null && this.tglMasukPPI != '')) {
      var dateSplit = this.tglMasukPPI.split("/");
      myDate = new Date(dateSplit[2], (dateSplit[1] != '0') ? parseInt(dateSplit[1]) - 1 : dateSplit[1], dateSplit[0]);
    }
    if (type == 7 && (this.tglKeluarPPI != null && this.tglKeluarPPI != '')) {
      var dateSplit = this.tglKeluarPPI.split("/");
      myDate = new Date(dateSplit[2], (dateSplit[1] != '0') ? parseInt(dateSplit[1]) - 1 : dateSplit[1], dateSplit[0]);
    }
    if (type == 8 && (this.tglLahir != null && this.tglLahir != '')) {
      var dateSplit = this.tglLahir.split("/");
      myDate = new Date(dateSplit[2], (dateSplit[1] != '0') ? parseInt(dateSplit[1]) - 1 : dateSplit[1], dateSplit[0]);
    }

    this.datePicker.show({
      date: myDate,
      mode: 'date',
      // minDate: this.platform.is('ios') ? new Date() : (new Date()).valueOf(),
      androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_LIGHT
    }).then(date => {
      if (type == 1) {
        this.tanggalCapeg = this.datePipe.transform(date, 'dd/MM/yyyy');
      }
      if (type == 2) {
        this.tmtPenuh = this.datePipe.transform(date, 'dd/MM/yyyy');
      }
      if (type == 3) {
        this.tmtJabatan = this.datePipe.transform(date, 'dd/MM/yyyy');
      }
      if (type == 4) {
        this.tmtKelasJabatan = this.datePipe.transform(date, 'dd/MM/yyyy');
      }
      if (type == 5) {
        this.tmtGolongan = this.datePipe.transform(date, 'dd/MM/yyyy');
      }
      if (type == 6) {
        this.tglMasukPPI = this.datePipe.transform(date, 'dd/MM/yyyy');
      }
      if (type == 7) {
        this.tglKeluarPPI = this.datePipe.transform(date, 'dd/MM/yyyy');
      }
      if (type == 8) {
        this.tglLahir = this.datePipe.transform(date, 'dd/MM/yyyy');
      }
    },
      err => console.log('Error occurred while getting date: ', err)
    );
  }
}
