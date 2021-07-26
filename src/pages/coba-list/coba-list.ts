import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the CobaListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-coba-list',
  templateUrl: 'coba-list.html',
})
export class CobaListPage {
  myModel:boolean = true;  

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public alertCtrl: AlertController
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CobaListPage');
  }

  checkEvent(event) {    
    if(event.checked==true) {
      
    } else {
      let alert = this.alertCtrl.create({
        title: 'Confirm',
        message: 'Do you want to uncheck ?',
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            handler: () => {
              // console.log('Cancel clicked');
              this.myModel = true;
            }
          },
          {
            text: 'YA',
            handler: () => {
              // console.log('Buy clicked');
            }
          }
        ]
      });
      alert.present();
    }
  }

  setchecked() {
    // console.log('test');
  }

}
