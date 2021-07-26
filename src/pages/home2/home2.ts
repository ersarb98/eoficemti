import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

/**
 * Generated class for the Home2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home2',
  templateUrl: 'home2.html',
})
export class Home2Page {

  suratMenu = [];
  p2bMenu = [];
  budgtMonitoringMenu = [];
  selfServiceMenu = [];  

  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    public navParams: NavParams
  ) {

    this.suratMenu = [
      { img: 'assets/imgs/menu-icon/inbox-white.png', title: 'Surat Masuk', component: 'InboxPage' },
      { img: 'assets/imgs/menu-icon/outbox-white.png', title: 'Surat Keluar', component: 'OutboxPage' },
      { img: 'assets/imgs/menu-icon/sppd-white.png', title: 'SPPD', component: 'AbsenListPage' },
      { img: 'assets/imgs/menu-icon/show-more.png', title: 'Show More', component: 'showMore' }   
    ];
    
    this.p2bMenu = [
      { img: 'assets/imgs/menu-icon/p2b.png', title: 'P2B', component: 'CutiListPage' }
    ];

    this.budgtMonitoringMenu = [
      { img: 'assets/imgs/menu-icon/approval-prpo.png', title: 'Approval PR/PO', component: 'CutiListPage' },      
      { img: 'assets/imgs/menu-icon/uang-muka.png', title: 'Pengajuan Uang Muka', component: 'CutiListPage' }
    ]
 
    this.selfServiceMenu = [
      { img: 'assets/imgs/menu-icon/absensi.png', title: 'Absensi', component: 'InboxPage' },
      { img: 'assets/imgs/menu-icon/cuti.png', title: 'Izin/Cuti', component: 'OutboxPage' },
      { img: 'assets/imgs/menu-icon/payslip.png', title: 'Payslip', component: 'AbsenListPage' },
      { img: 'assets/imgs/menu-icon/show-more.png', title: 'Show More', component: 'showMore' },
      // { img: 'assets/imgs/menu-icon/helpdesk.png', title: 'Helpdesk', component: 'AbsenListPage' },
      // { img: 'assets/imgs/menu-icon/hrcontact.png', title: 'HR Contact Center', component: 'AbsenListPage' },
      // { img: 'assets/imgs/menu-icon/search.png', title: 'Cari Pegawai', component: 'AbsenListPage' }
    ]

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Home2Page');
  }

  ionViewDidEnter() { 
    
  } 

  openPage(item) {
    if (item == 'showMore') {
      let profileModal = this.modalCtrl.create("ShowMorePage",{},
      {
        showBackdrop:true,
        enableBackdropDismiss:true,
        cssClass:"mymodal"         
      });
      profileModal.present();
    } else {
      this.navCtrl.push(item);
    }
    
  }

  goToSetting() {
    this.navCtrl.push('SettingPage');
  }

  goToHome() {
    this.navCtrl.push("HomePage");
  }

}
