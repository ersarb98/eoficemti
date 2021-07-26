import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController, ToastController } from 'ionic-angular';
import { SoapService } from '../soap.service';
import { Storage } from '@ionic/storage';
import { api_base_url, api_user, api_pass } from '../../config';
import { DatePipe } from '@angular/common';

/**
 * Generated class for the AbsenBawahanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-absen-bawahan',
  providers: [SoapService],
  templateUrl: 'absen-bawahan.html',
})
export class AbsenBawahanPage {
  bulan:any;
  tahun:any;  
  bulanList = [];
  absenList:any;
  userdataTPK:any;
  bawahanList = [];
  dataBawahan:any;
  tahunList:Array<any> = [];
  isLoading:Boolean=false;
  fakeUsers: Array<any> = new Array(5);

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public soapService:SoapService,
    public storage: Storage,
    public datepipe: DatePipe,  
    public toastCtrl: ToastController
  ) {
    

    let date = new Date();
    let currentYear = date.getFullYear();
    // let lastYear = date.getFullYear() - 1;
    // let currentMonth = date.getMonth();    
    // this.bulan = (currentMonth+1).toString();
    // this.tahun = currentYear;    
    
    for (var i = 0; i < 10;i++) {
      this.tahunList.push(currentYear - i);
    }

    // this.bulan = (currentMonth+1) + "_" + currentYear;    

    // for (var i = currentMonth + 2; i < 13 + (currentMonth+1) ; i++) {
    //   if (i > 12) {
    //     // "Bulan " + (i-12) + " tahun " + currentYear  );
    //     this.bulanList.push({bulan : (i-12), tahun: currentYear}); 
    //   } else {
    //    //  "Bulan " + (i) + " tahun " + lastYear  );
    //     this.bulanList.push({bulan : (i), tahun: lastYear});
    //   }      
    // }     
  }

  ionViewWillLoad() {
    let loading = this.loadingCtrl.create({
      spinner: 'dots',
      content: "Mohon Tunggu...",       
      cssClass: 'transparent',
      //dismissOnPageChange:true
    });
    loading.present();

    this.storage.get('userdataTPK').then(val => {      
      this.userdataTPK = val;   
      console.log(this.userdataTPK['data']['DATA_BAWAHAN']);
      if (this.userdataTPK['data']['DATA_BAWAHAN'].length > 0) {
        for (let i = 0; i < this.userdataTPK['data']['DATA_BAWAHAN'].length; i++) {
          this.bawahanList.push(this.userdataTPK['data']['DATA_BAWAHAN'][i]);
        }
      }
      if (this.userdataTPK['data']['DATA_BAWAHAN_TNO'].length > 0){
        for (let i = 0; i < this.userdataTPK['data']['DATA_BAWAHAN_TNO'].length; i++) {
          this.bawahanList.push(this.userdataTPK['data']['DATA_BAWAHAN_TNO'][i]);
        }        
      }      
      loading.dismiss();
    });   
  }
  


  ionViewDidLoad() {    
  }

  getAbsen(bulan, tahun) {
    var bawahanSplit = this.dataBawahan.split('_');
    console.log(bawahanSplit[2]);
    this.isLoading = true;
    this.soapService.post(api_base_url,'eoffice_absen_list',{fStream:JSON.stringify({
        usernameEDI : api_user, 
        passwordEDI : api_pass, 
        nipp : bawahanSplit[2],
        bulan : bulan,
        tahun : tahun                
      }
    )}).then(result => {
      var responData = JSON.parse(String(result));            
      if (responData['rcmsg'] == "SUCCESS") {
        this.absenList = responData['data'];                    
      } else {        
        let toast = this.toastCtrl.create({
          message: 'Mohon Maaf Sedang Terjadi Kesalahan, Coba Beberapa Saat Lagi.',
          duration: 3000,
          position: 'bottom'
        });
        toast.present();            
      } 
      this.isLoading = false;
    })
    .catch(error => {      
      let toast = this.toastCtrl.create({
        message: 'Terjadi Masalah Koneksi, Silahkan Coba Kembali.',
        duration: 3000,
        position: 'bottom'
      });
      toast.present();     
      this.isLoading = false;
    });    
  }

  searchBawahan() {
    this.getAbsen(this.bulan, this.tahun);
    // this.getAbsen(this.bulan.split('_')[0], this.bulan.split('_')[1]);
  }

  convertMonths() {
    switch (this.bulan.split('_')[0]) {
      case '1':
          return "Januari";          
      case '2':
          return "Februari";          
      case '3':
          return "Maret";          
      case '4':
          return "April";          
      case '5':
          return "Mei";          
      case '6':
          return "Juni";          
      case '7':
          return "Juli";          
      case '8':
          return "Agustus";
      case '9':
          return "September";
      case '10':
          return "Oktober";          
      case '11':
          return "November";        
      case '12':
          return "Desember";          
      default:
          return "false";          
    }
  }

  subTanggal(val) {    
    //val.split(" - "));
    //return val.split(" ", 1); 
  }

  goToAbsenMobileDetail(absen) {
    console.log(this.dataBawahan);
    var bawahanSplit = this.dataBawahan.split('_');

    var tgl = absen['TANGGAL'].split(" - ");
    var date = tgl[0];    
    if (tgl[0] < 10) {
      date = '0' + tgl[0];
    }
    
    this.navCtrl.push('AbsenMobileDetailPage', {
      id_user: bawahanSplit[0],
      nipp: bawahanSplit[2],
      nama : bawahanSplit[1],
      shift:"",
      date:date + "-" + this.bulan + "-" + this.tahun,
      fromPage:"AbsenBawahanPage"

    })
  }

}
