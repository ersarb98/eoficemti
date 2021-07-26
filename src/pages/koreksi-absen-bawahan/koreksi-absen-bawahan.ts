import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController, ActionSheetController, ModalController, ToastController } from 'ionic-angular';

import { SoapService } from '../soap.service';
import { Storage } from '@ionic/storage';
import { api_base_url, api_user, api_pass } from '../../config';
import { DatePipe } from '@angular/common';
/**
 * Generated class for the KoreksiAbsenBawahanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-koreksi-absen-bawahan',
  providers: [SoapService],
  templateUrl: 'koreksi-absen-bawahan.html',
})
export class KoreksiAbsenBawahanPage {
  bulan:any;
  tahun:any;   
  currentYear:any;
  currentMonth:any;
  userdataTPK:any;
  index:any;
  isLoading:boolean = true;  
  dataBawahanList = [];
  dataKoreksiList = [];
  tahunList:Array<any> = [];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public soapService:SoapService,
    public storage: Storage,
    public datepipe: DatePipe, 
    public actionSheetCtrl: ActionSheetController,
    public modalCtrl: ModalController,
    public toastCtrl: ToastController
  ) {
    let date = new Date();
   this.currentYear = date.getFullYear();    
    this.currentMonth = date.getMonth();  
    this.tahun = this.currentYear;       
    this.bulan = this.currentMonth+1;
    for (var i = 0; i < 10;i++) {
      this.tahunList.push(this.currentYear - i);
    }  
      
    this.storage.get('userdataTPK').then(val => {      
      this.userdataTPK = val;  
      this.getDataBawahan((this.currentMonth+1), this.tahun);   
    });   

  }    

  ionViewDidLoad() {
    console.log('ionViewDidLoad KoreksiAbsenBawahanPage');
  }

  getDataBawahan(bln, thn) {    
    let loading = this.loadingCtrl.create({
      spinner: 'dots',
      content: "Mohon Tunggu...",       
      cssClass: 'transparent',
      dismissOnPageChange:true
    });
    loading.present();
    let m = bln;
    this.soapService.post(api_base_url,'eoffice_absen_bawahan',{fStream:JSON.stringify({
        usernameEDI : api_user, 
        passwordEDI : api_pass, 
        nipp : this.userdataTPK['data']['NIPP'],
        idjabatan: this.userdataTPK['data']['IDJABATAN'],  
        bulan : m < 10 ? '0' + m : m,        
        tahun : thn                    
      } 
    )}).then(result => {
      var responData = JSON.parse(String(result));                 
      if (responData['rcmsg'] == "SUCCESS") {
        this.dataKoreksiList = [];
        this.dataKoreksiList = responData['data']['LIST_OFFICER'];                    
      } else {        
        let toast = this.toastCtrl.create({
          message: 'Mohon Maaf Sedang Terjadi Kesalahan, Coba Beberapa Saat Lagi.',
          duration: 3000,
          position: 'bottom'
        });
        toast.present();         
      } 
      loading.dismiss();
      this.isLoading = false;
    })
    .catch(error => {      
      let toast = this.toastCtrl.create({
        message: 'Terjadi Masalah Koneksi, Silahkan Coba Kembali.',
        duration: 3000,
        position: 'bottom'
      });
      toast.present();     
      loading.dismiss();
      this.isLoading = false;
    });    
  }
 
  convertMonths() {    
      switch (this.bulan) {
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

  selectVal() {
    this.dataKoreksiList = [];      
    if (this.dataBawahanList[this.index]['DATA KOREKSI'].length > 0) {
      for (let i=0; i < this.dataBawahanList[this.index]['DATA KOREKSI'].length;i++) {
        this.dataKoreksiList.push(this.dataBawahanList[this.index]['DATA KOREKSI'][i]);
      }      
    }    
    
  }

  showOption(data) {              
      let actionSheet = this.actionSheetCtrl.create({ 
        title: 'Pilih Proses',
        buttons: [
          {
            text: 'Approve',
            role: 'koreksiDatang',
            handler: () => {              
              let modal = this.modalCtrl.create("ApproveKoreksiAbsenPage",{
               dataKoreksi:data,
               status: '1',
               is_tno: data['IS_TNO']              
              }, {
                enableBackdropDismiss: true,
                showBackdrop:true,
                cssClass:'my-modal2'
              });
              modal.present();

              modal.onDidDismiss(data => {  
                this.getDataBawahan(this.bulan, this.tahun);   
              });           
            }
          },
          {
            text: 'Decline',
            handler: () => {              
              let modal = this.modalCtrl.create("ApproveKoreksiAbsenPage",{
                dataKoreksi:data,
                status: '0',
                is_tno: data['IS_TNO']
               }, {
                 enableBackdropDismiss: true,
                 showBackdrop:true,
                 cssClass:'my-modal2'
               });
               modal.present();

               modal.onDidDismiss(data => {  
                this.getDataBawahan(this.bulan, this.tahun);
              }); 
            }
          },
          {
            text: 'Tutup',
            role: 'cancel',
            handler: () => {
              
            }
          }
        ]
      });
   
      actionSheet.present();
  }

  searchDataKoreksi() {
    this.getDataBawahan(this.bulan, this.tahun);
  }
    
    


} 
