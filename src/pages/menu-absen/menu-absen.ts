import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, App, AlertController, Platform } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { SoapService } from '../soap.service';
import { api_base_url, api_user, api_pass, sc_code } from '../../config';

/**
 * Generated class for the MenuAbsenPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu-absen',
  providers: [SoapService],
  templateUrl: 'menu-absen.html',
})
export class MenuAbsenPage {
  isLoadingBadges:boolean = true;
  badgesList:any;  
  userdataTPK:any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public app:App  ,
    public storage: Storage,
    public soapService:SoapService,
    public alertCtrl: AlertController,
    public platform: Platform
  ) {
    // this.platform.ready().then(() => {
    //   console.log('asd');
    //   this.platform.registerBackButtonAction(() => {
    //         this.viewCtrl.dismiss();
    //   });
    // });
  }

  ionViewDidEnter() {
    this.storage.get('userdataTPK').then((val) => {
      this.userdataTPK = val;
      this.getBadges();
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuAbsenPage');
  }

  goToPage(page) {    
     this.viewCtrl.dismiss();
     this.app.getRootNav().push(page);
  }

  getBadges() {
    this.isLoadingBadges = true;
    this.soapService
    .post(api_base_url,'eoffice_countbadges',{fStream:JSON.stringify(
      {
        usernameEDI : api_user, 
        passwordEDI : api_pass, 
        iduser: this.userdataTPK['data']['IDUSER'] ,
        idjabatan: this.userdataTPK['data']['IDJABATAN'],
        nipp: this.userdataTPK['data']['NIPP']
      }
    )}).then(result => {      
      var responData = JSON.parse(String(result));            
      if (responData['rcmsg'] == "SUCCESS") {                     
        this.badgesList = responData['data'];        
      } else {
        let alert = this.alertCtrl.create({
          title: '',
          subTitle: 'Gagal mendapatkan data Notifikasi (1)',
          buttons: ['OK']
        });
        //alert.present();
      }      
      this.isLoadingBadges = false;
    })
    .catch(error => {      
      let alert = this.alertCtrl.create({
        title: '',
        subTitle: 'Gagal mendapatkan data Notifikasi (2)',
        buttons: ['OK']
      });
      //alert.present();    
      this.isLoadingBadges = false;
    });
  }

  isEmptyObject(obj) {
    for(var prop in obj) {
       if (obj.hasOwnProperty(prop)) {
          return false;
       }
    }  
    return true;
  }

  parse(val) {
    var intValue = parseInt(val);

    if(intValue > 0) {
        return true;
    } else {
        return false;
    }
  }


}
