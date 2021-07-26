import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ShowMorePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-show-more',
  templateUrl: 'show-more.html',
})
export class ShowMorePage {

  suratMenu = [];
  p2bMenu = [];
  budgtMonitoringMenu = [];
  selfServiceMenu = [];  

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.suratMenu = [
      { img: 'assets/imgs/menu-icon/inbox.png', title: 'Surat Masuk', component: 'InboxPage' },
      { img: 'assets/imgs/menu-icon/outbox.png', title: 'Surat Keluar', component: 'OutboxPage' },
      { img: 'assets/imgs/menu-icon/sppd.png', title: 'SPPD', component: 'AbsenListPage' }      
    ];
    
    this.p2bMenu = [
      { img: 'assets/imgs/menu-icon/p2b.png', title: 'P2B', component: 'CutiListPage' }
    ];

    this.budgtMonitoringMenu = [
      { img: 'assets/imgs/menu-icon/approval-prpo.png', title: 'Approval PR/PO', component: 'CutiListPage' },      
      { img: 'assets/imgs/menu-icon/uang-muka.png', title: 'Pengajuan Uang Muka', component: 'CutiListPage' }
    ]
 
    this.selfServiceMenu = [
      { img: 'assets/imgs/menu-icon/absensi_white.png', title: 'Absensi', component: 'InboxPage' },
      { img: 'assets/imgs/menu-icon/cuti_white.png', title: 'Izin/Cuti', component: 'OutboxPage' },
      { img: 'assets/imgs/menu-icon/payslip_white.png', title: 'Payslip', component: 'AbsenListPage' },
      { img: 'assets/imgs/menu-icon/survey_white.png', title: 'Survey', component: 'showMore' },
      { img: 'assets/imgs/menu-icon/helpdesk_white.png', title: 'Helpdesk', component: 'AbsenListPage' },
      { img: 'assets/imgs/menu-icon/hrcontact_white.png', title: 'HR Contact Center', component: 'AbsenListPage' },
      { img: 'assets/imgs/menu-icon/search_white.png', title: 'Cari Pegawai', component: 'AbsenListPage' }
    ]
  }

  ionViewDidEnter() {    
   
  } 

}
