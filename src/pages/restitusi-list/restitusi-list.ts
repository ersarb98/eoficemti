import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController, ModalController, ToastController } from 'ionic-angular';

import { SoapService } from '../soap.service';
import { Storage } from '@ionic/storage';
import { api_base_url, api_user, api_pass } from '../../config';

/**
 * Generated class for the RestitusiListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-restitusi-list',
  providers: [SoapService],
  templateUrl: 'restitusi-list.html',
})
export class RestitusiListPage {
  userdataTPK: any;
  isLoading: Boolean = true;
  restitusiList: Array<any> = [];
  fakeUsers: Array<any> = new Array(5);  
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
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RestitusiListPage');
    this.storage.get('userdataTPK').then(val => {
      this.userdataTPK = val;     
      this.getRestitusiList('first', '');
    });
  }

  getRestitusiList(type, functionName) {    
    if (type == 'first' && functionName == '') {
      this.isLoading = true;  
    }    
    this.soapService
      .post(api_base_url, 'eoffice_restitusi_list', {
        fStream: JSON.stringify(
          {
            usernameEDI : api_user, 
            passwordEDI : api_pass,
            id_user:this.userdataTPK['data']['IDUSER'],            
            atas: this.batasAtas,
            bawah: this.batasBawah
          }
        )
      }).then(result => {
        var responData = JSON.parse(String(result)); 
        console.log(responData);
        if (responData['rcmsg'] == "SUCCESS") {
          if (type == 'refresh' && functionName != '') {
            this.restitusiList = [];
          }
          if (responData['data'].length > 0 ) {
            for (var i = 0; i < responData['data'].length; i++) {
              this.restitusiList.push(responData['data'][i]);
            }
          }          
        } else {
          let toast = this.toastCtrl.create({
            message: 'Gagal mendapatkan data cuti, silahkan coba kembali.',
            duration: 3000,
            position: 'bottom'
          });
          toast.present();
        }

        if (type == 'first' && functionName == '') {
          this.isLoading = false;  
        } else if (type == 'infinite' && functionName != '') {
          functionName.complete();
        } else if (type == 'refresh' && functionName != '') {
          functionName.complete();
        }        
        
      })
      .catch(error => {        
        let toast = this.toastCtrl.create({
          message: 'Gagal mendapatkan data cuti, periksa koneksi internet anda.',
          duration: 3000,
          position: 'bottom'
        });
        toast.present();
      
        if (type == 'first' && functionName == '') {
          this.isLoading = false;  
        } else if (type == 'infinite' && functionName != '') {
          functionName.complete();
        } else if (type == 'refresh' && functionName != '') {
          functionName.complete();
        }

        this.isLoading = false;
      });
  }

  doInfinite(infiniteScroll) {
    if (this.restitusiList.length >= 10) {
      this.batasAtas = this.batasBawah + 1;
      this.batasBawah = this.batasBawah + 10;
      this.getRestitusiList('infinite', infiniteScroll);
    } else {
      infiniteScroll.complete();
    }
  }

  doRefresh(refresher) {
    this.batasAtas = 1;
    this.batasBawah = 10;
    this.getRestitusiList('refresh', refresher);
  }

  goToDetail(data) {    
    var tot =this.sum(data);
    this.navCtrl.push("RestitusiDetailPage", {
      dataRestitusi: data,
      jumlahTotal : tot
    });
  }

  sum(data) {
    var total = 0;
    for (var i=0; i < data['DETAIL'].length;i++) {
      var jumInt = parseInt(data['DETAIL'][i]['JUMLAH']);
      total = total + jumInt;
    }
    return total;
  }

  goToForm() {
    let modal = this.modalCtrl.create("AddRestitusiPage",{
                
    }, {
      enableBackdropDismiss: true,
      showBackdrop:true,
      // cssClass:'my-modal2' 
    });
    modal.present();
  }


}
