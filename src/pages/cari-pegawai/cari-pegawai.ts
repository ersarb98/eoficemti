import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController, ModalController, ToastController } from 'ionic-angular';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { SoapService } from '../soap.service';
import { Storage } from '@ionic/storage';
import { api_base_url, api_user, api_pass, sc_code, sc_type, } from '../../config';

/**
 * Generated class for the CariPegawaiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cari-pegawai',
  providers: [SoapService],
  templateUrl: 'cari-pegawai.html', 
})
export class CariPegawaiPage { 

  public pegawaiForm: FormGroup;
  isLoading:boolean=false;
  isAtasan:boolean;
  searchDataList:Array<any> = [];
  userdata:any;
  jumlahPegawai:any=0;
  batasAtas = 1;
  batasBawah = 20;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public _fb: FormBuilder, 
    public soapService:SoapService,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public modalCtrl: ModalController ,
    public storage: Storage,
    public toastCtrl: ToastController
  ) {

    this.pegawaiForm = this._fb.group({
      fcSearch: ['', Validators.compose([
        Validators.required
      ])]  
    });    
    
  }

  ionViewDidEnter() {
    // this.getJumlahPegawai();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CariPegawaiPage');
  }

  // getJumlahPegawai() {
  //   let loading = this.loadingCtrl.create({
  //     spinner: 'dots',
  //     content: "Mohon Tunggu...",       
  //     cssClass: 'transparent',
  //     dismissOnPageChange:true
  //   });
  //   loading.present();
  //   this.isLoading = true;
  //   this.soapService
  //   //.post(api_base_url,'eoffice_data_direktorat_ipcc',{fStream:JSON.stringify(
  //   .post(api_base_url,'eoffice_bypass_wso',{fStream:JSON.stringify(
  //     {
  //       // usernameEDI : api_user, 
  //       // passwordEDI : api_pass
  //       sc_type: 'countpeg',
  //       sc_code: sc_code,        
  //       data : {}         
  //     }
  //   )}).then(result => {
  //     var responData = JSON.parse(String(result));
  //     console.log(responData);
  //     if (responData['rcmsg'] == "SUCCESS") {        
  //       this.jumlahPegawai = responData['data'][0]['JUMLAH'];
  //     } else {        
  //       let toast = this.toastCtrl.create({
  //         message: 'Mohon Maaf Sedang Terjadi Kesalahan, Coba Beberapa Saat Lagi.',
  //         duration: 3000,
  //         position: 'bottom'
  //       });
  //       toast.present();  
  //     }  
  //     loading.dismiss();
  //     this.isLoading = false;    
  //   })
  //   .catch(error => {
  //     console.log(error);
  //     let toast = this.toastCtrl.create({
  //       message: 'Terjadi Masalah Koneksi, Silahkan Coba Kembali.',
  //       duration: 3000,
  //       position: 'bottom'
  //     });
  //     toast.present();          

  //     loading.dismiss();
  //     this.isLoading = false;       
      
  //   });
  // }

  doSearch() {
    this.batasAtas = 1;
    this.batasBawah = 20;
    this.searchDataList = [];
    this.getSearchList('first', '');
  }

  getSearchList(type, functionName) {
    let loading = this.loadingCtrl.create({
      spinner: 'dots',
      content: "Mohon Tunggu...",       
      cssClass: 'transparent',
      dismissOnPageChange:true
    });
    if (type == 'first' && functionName == '' ) {
      loading.present();      
    }
    let searchInput = this.pegawaiForm.controls.fcSearch.value;
    this.soapService
    .post(api_base_url,'eoffice_findemployee',{fStream:JSON.stringify(
      {       
        usernameEDI : api_user, 
        passwordEDI : api_pass,
        search : searchInput.toUpperCase(),
        atas: this.batasAtas,
        bawah: this.batasBawah       
      }
    )}).then(result => {
      var responData = JSON.parse(String(result));
      // console.log(responData);
      if (responData['rcmsg'] == "SUCCESS") {    
        if (type == 'refresh' && functionName != '') {
          this.searchDataList = [];
        }    
        if (responData['data'].length > 0 && !this.isEmptyObject(responData['data'][0])) {
          for (var i = 0; i < responData['data'].length; i++) {
            this.searchDataList.push(responData['data'][i]);
          }
        }
        // console.log(this.searchDataList);        
      } else {
        let toast = this.toastCtrl.create({
          message: 'Mohon Maaf Sedang Terjadi Kesalahan, Coba Beberapa Saat Lagi.',
          duration: 3000,
          position: 'bottom'
        });
        toast.present();
      } 
      
      if (type == 'first' && functionName == '' ) {
        loading.dismiss();
      } else if (type == 'infinite' && functionName != '') {
        functionName.complete();
      } else if (type == 'refresh' && functionName != '') {
        functionName.complete();
      }
      //this.isLoading = false;  
    })
    .catch(error => {
      // console.log(error);
      let toast = this.toastCtrl.create({
        message: 'Terjadi Masalah Koneksi, Silahkan Coba Kembali.',
        duration: 3000,
        position: 'bottom'
      });
      toast.present();  
            
      if (type == 'first' && functionName == '' ) {
        loading.dismiss();        
        this.isLoading = false;
      } else if (type == 'infinite' && functionName != '') {
        functionName.complete();
      } else if (type == 'refresh' && functionName != '') {
        functionName.complete();        
      }
    });
  }

  doInfinite(infiniteScroll) {
    if (this.searchDataList.length >= 20) {
      this.batasAtas = this.batasBawah + 1;
      this.batasBawah = this.batasBawah + 20;
      this.getSearchList('infinite', infiniteScroll);  
    } else {
      infiniteScroll.complete();
    }    
  }

  // goToDetailPegawai(data) {
  //   let modal = this.modalCtrl.create("CariPegawaiDetailPage",{ dataPegawai: data }, {
  //     enableBackdropDismiss: true,
  //     showBackdrop:true       
  //   });
  //   modal.present();
  // } 
 
  convertImage(data) {
    return btoa(data);
  }

  isEmptyObject(obj) {
    for(var prop in obj) {
       if (obj.hasOwnProperty(prop)) {
          return false;
       }
    }  
    return true;
  }

}
