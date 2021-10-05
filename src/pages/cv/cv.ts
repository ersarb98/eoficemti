import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { SoapService } from '../soap.service';
import { Storage } from '@ionic/storage';
import { api_base_url, api_user, api_pass } from '../../config';
// import { AnimationService, AnimationBuilder } from 'css-animator';

/**
 * Generated class for the CvPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cv',
  providers: [SoapService],
  templateUrl: 'cv.html',
})
export class CvPage {
  @ViewChild('assignmentAnim') assignmentAnim;
  // public animator: AnimationBuilder;
  userdataTPK: any;
  isLoading: Boolean = true;
  dataCV: any;

  showAssigment: Boolean = false;
  showPerform: Boolean = false;
  showEducation: boolean = false;
  showTraining: boolean = false;
  showFamily: boolean = false;
  showAssignHistory:Boolean = false;
  showReward:boolean = false;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public soapService: SoapService,
    public storage: Storage,
    public toastCtrl: ToastController,
  ) {
    this.storage.get('userdataTPK').then(val => {
      this.userdataTPK = val;
      this.getDataCV();
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CvPage');
  }

  toggleAssigment() {
    if (this.showAssigment == true) {
      this.showAssigment = false;
    } else {
      this.showAssigment = true;
      // this.animator.setType('fadeInLeft').show(this.assignmentAnim.nativeElement);
    }
  }

  togglePerform() {
    this.showPerform = !this.showPerform;


  }

  toggleEducation() {
    this.showEducation = !this.showEducation;

  }

  toggleTraining() {
    this.showTraining = !this.showTraining;

  }

  toggleFamily() {
    this.showFamily = !this.showFamily;

  }

  toggleAssignHistory() {
    this.showAssignHistory = !this.showAssignHistory;

  }

  toggleReward() {
    this.showReward = !this.showReward;

  }

  getDataCV() {
    this.isLoading = true;
    this.soapService.post(api_base_url, 'eoffice_get_cv', {
      fStream: JSON.stringify(
        {
          usernameEDI: api_user,
          passwordEDI: api_pass,
          nipp: this.userdataTPK['data']['NIPP'],
          id_user: this.userdataTPK['data']['IDUSER']
        }
      )
    }).then(result => {
      var responData = JSON.parse(String(result));
      //console.log(responData);
      if (responData['rcmsg'] == "SUCCESS") {
        this.dataCV = responData['data'];

        console.log(this.dataCV);
      } else {
        let toast = this.toastCtrl.create({
          message: 'tidak ada data.',
          duration: 3000,
          position: 'bottom'
        });
        toast.present();
      }
      // loading.dismiss();
      this.isLoading = false;
    })
      .catch(error => {
        let toast = this.toastCtrl.create({
          message: 'Terjadi Masalah Koneksi, Silahkan Coba Kembali.',
          duration: 3000,
          position: 'bottom'
        });
        toast.present();
        // loading.dismiss();
        this.isLoading = false;
      });
  }
}
