import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import {api_base_url, api_user, api_pass, api_res} from '../../config';
import { SoapService } from '../soap.service';
import { Storage } from '@ionic/storage';
import { DatePipe } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';

/**
 * Generated class for the AbsenTeamHadirkoePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-absen-team-hadirkoe',
  providers: [SoapService],
  templateUrl: 'absen-team-hadirkoe.html',
})
export class AbsenTeamHadirkoePage {
  isLoading: Boolean = false;
  fakeUsers: Array<any> = new Array(5);
  userdataTPK: any;
  idUser:any;
  date:any;
  absenList:Array<any> = [];
  notAbsenList:Array<any> = [];
  dayConvert:any;
  dateConvert:any;
  monthConvert:any;
  yearConvert:any;
  

  isPageAbsen: Boolean = true;
  isPageNotAbsen: Boolean = false;
  isAtasan:Boolean = false;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public soapService: SoapService,
    public storage: Storage,
    public datepipe: DatePipe,
    public http: HttpClient,
    public alertCtrl: AlertController
    ) {
      this.idUser = navParams.get('idUser');
      this.date = navParams.get('date');
      var split = this.date.split("-");
      this.dateConvert = new Date(split[2], (split[1] != '0') ? parseInt(split[1])-1 : split[1], split[0]);
      var weekday = new Array(7);
      weekday[0] = "Minggu";
      weekday[1] = "Senin";
      weekday[2] = "Selasa";
      weekday[3] = "Rabu";
      weekday[4] = "Kamis";
      weekday[5] = "Jumat";
      weekday[6] = "Sabtu";
      var month = new Array();
      month[0] = "Januari";
      month[1] = "Februari";
      month[2] = "Maret";
      month[3] = "April";
      month[4] = "Mei";
      month[5] = "Juni";
      month[6] = "Juli";
      month[7] = "Agustus";
      month[8] = "September";
      month[9] = "Oktober";
      month[10] = "November";
      month[11] = "Desember";
      console.log('get day : ' + this.dateConvert.getDay());
      console.log('get month : ' + this.dateConvert.getMonth());
      this.dayConvert = weekday[this.dateConvert.getDay()];
      this.monthConvert = month[this.dateConvert.getMonth()];
      this.dateConvert = split[0];
      this.yearConvert = split[2];
      console.log(this.dayConvert + ", " + this.dateConvert + " " + this.monthConvert + " " + this.yearConvert);
      console.log("dateconvert : " + this.dateConvert);
      this.getList(this.idUser, this.date);

      this.storage.get('userdataTPK').then(val => {
        this.userdataTPK = val;
        console.log(this.userdataTPK);
        if (this.isEmptyObject(this.userdataTPK['data']['LISTOFFICER'][0]) && this.isEmptyObject(this.userdataTPK['data']['DATA_BAWAHAN'][0]) && this.isEmptyObject(this.userdataTPK['data']['DATA_BAWAHAN_TNO'][0])) {
          this.isAtasan = false;
        } else {
          this.isAtasan = true;
        }
      });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AbsenTeamHadirkoePage');
  }

  getList(idUser, mydate) {
    this.isLoading = true;
    this.http.post(api_res + 'am8_team.php', {
      usernameEDI: api_user,
      passwordEDI: api_pass,      
      id_user: idUser,
      tgl : mydate
    }).subscribe(data => {
      console.log(data);
      //var responData = JSON.parse(data); 
      if (data['rcmsg'] == 'SUCCESS') {
        this.absenList = data['data']['ABSEN'];
        this.notAbsenList = data['data']['NOT_ABSEN'];
      } else {
        let alert = this.alertCtrl.create({
          title: '',
          subTitle: 'Gagal mendapatkan data, coba kembali.',
          buttons: ['OK']
        });
        alert.present();
      }
      
      this.isLoading = false;
    }, err => {
      console.log(err);
      this.isLoading = false;
    });
  }

  openFilter() {
    this.navCtrl.push('SearchTeamAbsenPage');
  }

  goToAbsenMobileDetail(absen) {    

    this.navCtrl.push('AbsenMobileDetailPage', {
      id_user: absen['ID_USER'],
      nipp: absen['NIPP'],
      nama : absen['NAMA'],
      shift:"",
      date: absen['SHIFT_DATE'],
      fromPage:"AbsenListPage"
    })
  }

  openAddressPage() {
    this.navCtrl.push('AddressBawahanPage', {      
    })
  }

  openSudahAbsen() {
    this.isPageAbsen = true;
    this.isPageNotAbsen = false;
  }

  openBelumAbsen() {
    this.isPageAbsen = false;
    this.isPageNotAbsen = true;
  }

  isEmptyObject(obj) {
    for (var prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        return false;
      }
    }
    return true;
  }



}

