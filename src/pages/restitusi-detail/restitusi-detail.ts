import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RestitusiDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-restitusi-detail',
  templateUrl: 'restitusi-detail.html',
})
export class RestitusiDetailPage {
  dataRestitusi:any;
  jumlahTotal:any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams
    ) {
      this.dataRestitusi = this.navParams.get('dataRestitusi');
      this.jumlahTotal = this.navParams.get('jumlahTotal');
      console.log(this.dataRestitusi);
      console.log(this.jumlahTotal);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RestitusiDetailPage');
    
  }

}
