import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController, ToastController } from 'ionic-angular';
import {api_base_url, api_user, api_pass, api_res} from '../../config';
import { SoapService } from '../soap.service';
import { Storage } from '@ionic/storage';
import { DatePipe } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';

/**
 * Generated class for the AddressBawahanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-address-bawahan',
  providers: [SoapService],
  templateUrl: 'address-bawahan.html',
})
export class AddressBawahanPage {
  isLoading: Boolean = false;
  fakeUsers: Array<any> = new Array(5);
  userdataTPK: any;
  addressData = [];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public soapService: SoapService,
    public storage: Storage,
    public datepipe: DatePipe,
    public http: HttpClient,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    public toastCtrl:ToastController
    ) {
      this.storage.get('userdataTPK').then(val => {
        this.userdataTPK = val;
        console.log(this.userdataTPK);
        this.getData('first','');
      });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddressBawahanPage');
  }

  getData(type, functionName) {
    this.isLoading = true;
    this.http.post(api_res + "am9_address.php", {
      "usernameEDI": "EDI-USERNAME",
      "passwordEDI": "RURJLVBBU1NXT1JE",
      "id_user":this.userdataTPK['data']['IDUSER'],
      "nipp":this.userdataTPK['data']['NIPP'],
      "id_jabatan":this.userdataTPK['data']['IDJABATAN'],
      "longitude":"",
      "latitude":"",
      "action":"get_address_bawahan",      
      "status":""
    }, {
      // headers
    }).subscribe(data => {
      console.log(data);
      if (data['rcmsg'] == "SUCCESS") {
        this.addressData = data['data'];          
        
      } else {
        let alert = this.alertCtrl.create({
          title: '',
          subTitle: 'Gagal mendapatkan data, coba kembali.',
          buttons: ['OK']
        });
        alert.present();        
        this.navCtrl.pop();      
      }            
      console.log(this.addressData) ;

      if (type == 'first' && functionName == '') {
          
      } else if (type == 'infinite' && functionName != '') {
        functionName.complete();
      } else if (type == 'refresh' && functionName != '') {
        functionName.complete();
      }
      this.isLoading = false;
    }, err => {
      console.log(err);
      let alert = this.alertCtrl.create({
        title: '',
        subTitle: 'Gagal mendapatkan data, coba kembali.',
        buttons: ['OK']
      });
      alert.present();   
      this.isLoading = false;             
      this.navCtrl.pop();
    });
  }

  doAction(address) {
    let alert = this.alertCtrl.create({
      subTitle: 'Pilih Action ?',
      cssClass: 'alert',
      buttons: [
       
        {
          text: 'APPROVE',
          handler: () => {
            this.action('APPROVED',address);
          }
        },
        {
          text: 'REJECT',
          handler: () => {
            this.action('REJECTED',address);
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {

          }
        }

      ]
    });
    alert.present();

    
  }

  action(status,address) {
    let loader = this.loadingCtrl.create({
      content: "Memproses...",
      spinner: 'dots',
      cssClass: 'transparent',
      dismissOnPageChange: true

    });
    loader.present();   

    this.http.post(api_res + "am9_address.php", {
      "usernameEDI": "EDI-USERNAME",
      "passwordEDI": "RURJLVBBU1NXT1JE",
      "id_user":'',
      "nipp":address['NIPP'],
      "id_jabatan":'',
      "longitude":address['LONGITUDE'],
      "latitude":address['LATITUDE'],
      "action":"update",      
      "status":status
    }, {
      // headers
    }).subscribe(data => {
      console.log(data);
      if (data['rcmsg'] == "SUCCESS") {
        let toast = this.toastCtrl.create({
          message: "berhasil " + status,
          duration: 3000,
          position: 'bottom'
        });
        toast.present();
        this.addressData.splice(this.addressData.indexOf(address),1);
       
      } else {
        let alert = this.alertCtrl.create({
          title: '',
          subTitle: 'Gagal melakukan action, coba kembali.',
          buttons: ['OK']
        });
        alert.present();                  
      }            
      console.log(this.addressData) ;
      loader.dismiss();
    }, err => {
      console.log(err);
      let alert = this.alertCtrl.create({
        title: '',
        subTitle: 'Gagal melakukan action, coba kembali.',
        buttons: ['OK']
      });
      alert.present(); 
      loader.dismiss();        
    });
  }

  doRefresh(refresher) {    
    this.addressData = [];
    this.getData('refresh', refresher);
  }

}
