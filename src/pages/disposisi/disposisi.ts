import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController } from 'ionic-angular';
// import { FormGroup, Validators, FormBuilder } from '@angular/forms';

/**
 * Generated class for the DisposisiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-disposisi',
  templateUrl: 'disposisi.html',
})
export class DisposisiPage {
 // public disposisiForm: FormGroup;
  perintahList = [
    "Selesaikan", 
    "ACC dan Aksi", 
    "Evaluasi-Tanggapan", 
    "Saran Pendapat", 
    "Laporkan Hasilnya", 
    "Tunda Dulu", 
    "Bicarakan dengan Dirut", 
    "Koordinasi dengan Dirut", 
    "UDK dan Seperlunya",
    "Arsip"
  ];
  kepadaList:Array<any> = [];
  tipeDisposisi:any;
  disposisiJabatanList = [];
  disposisiPekerjaList = [];
  searchResultList:Array<any> = [];
  showResult:boolean= false;

  fcKepada:any = '';
  kepadaInputFocused:any;
  kepadaId:any = '';
  fcPerintah:any = '';
  fcCacatan:any = '';


  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    // private _fb: FormBuilder,
    public viewCtrl:ViewController,
    public modalCtrl: ModalController
  ) {

   
    // this.disposisiForm = this._fb.group({
    //   fcKepada: ['', Validators.compose([
    //     Validators.required
    //   ])],
    //   fcPerintah: ['', Validators.compose([
    //     Validators.required
    //   ])],
    //   fcCacatan: ['', Validators.compose([
    //     Validators.required
    //   ])]      
    // });
  }

  ionViewWillLoad() {
    this.kepadaList = this.navParams.get("kepadaList");
    // console.log(this.kepadaList);
    this.tipeDisposisi = this.navParams.get('tipeDisposisi');
    this.fcCacatan = this.navParams.get('lastCatatan');    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DisposisiPage');
  }

  getKepada() {  
    let input = this.fcKepada.toUpperCase();
    
    if (this.fcKepada.length > 1) {      
      this.searchResultList = this.kepadaList.filter(x => x.NAMA.includes(input) || x['NAMA JABATAN'].includes(input));
      this.showResult = true;         
    } else {
      this.searchResultList = [];
    }   
  }

  setKepada(kepadaResult) {    
    console.log(kepadaResult);
    if (this.tipeDisposisi == 'jabatan') {
      this.fcKepada = kepadaResult['NAMA JABATAN'] + " | " + kepadaResult['NAMA'] ;
      this.kepadaId = kepadaResult['ID USER'] + "_" + kepadaResult['ID JABATAN'] + "_" + kepadaResult['NIPP'] + "_" + kepadaResult['NAMA'] + "_" + kepadaResult['NAMA JABATAN'];
    } else if (this.tipeDisposisi == 'pekerja') {
      this.fcKepada = kepadaResult['NAMA'] + " | " + kepadaResult['NIPP'] + " | " + kepadaResult['NAMA JABATAN'];
      this.kepadaId = kepadaResult['ID USER'] + "_" + kepadaResult['ID JABATAN'] + "_" + kepadaResult['NIPP'] + "_" + kepadaResult['NAMA'] + "_" + kepadaResult['NAMA JABATAN'];
    }
    
    this.showResult=false;    
  }

  sendData() {
    let id =this.kepadaId;
    let tindakan = this.fcPerintah;
    let catatan = this.fcCacatan;    

    for (let index = 0; index < this.kepadaList.length; index++) {
      this.kepadaList[index].selected = false;
    }
    
    if (this.tipeDisposisi == 'jabatan') { 
      this.disposisiJabatanList.push({id_user: id.split('_')[0], id_jabatan: id.split('_')[1],  tindakan: tindakan, catatan: catatan, nipp: id.split('_')[2],nama: id.split('_')[3],nama_jabatan: id.split('_')[4] });       
      this.viewCtrl.dismiss({ disposisiJabatanList: this.disposisiJabatanList, disposisiPekerjaList:this.disposisiPekerjaList, lastCatatan: catatan }); 
    } else if (this.tipeDisposisi == 'pekerja') {
      this.disposisiPekerjaList.push({id_user: id.split('_')[0] ,id_jabatan: id.split('_')[1],  tindakan: tindakan, catatan: catatan, nipp: id.split('_')[2],nama: id.split('_')[3],nama_jabatan: id.split('_')[4]});      
      this.viewCtrl.dismiss({ disposisiJabatanList: this.disposisiJabatanList, disposisiPekerjaList:this.disposisiPekerjaList, lastCatatan: catatan });
    }    
  }

  cancel() {
    for (let index = 0; index < this.kepadaList.length; index++) {
      this.kepadaList[index].selected = false;
    }
    
    this.viewCtrl.dismiss();
  }

  openSelect() {
    let modal = this.modalCtrl.create('SelectBawahanDisposisiPage', { 'kepadaList': this.kepadaList  });
    modal.onDidDismiss((data) => {
      console.log(data);
      if (data != null) {
        this.setKepada(data);
      }    
    });
    modal.present();
  }


}
