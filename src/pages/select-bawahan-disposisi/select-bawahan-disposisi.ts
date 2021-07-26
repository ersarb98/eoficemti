import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the SelectBawahanDisposisiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-select-bawahan-disposisi',
  templateUrl: 'select-bawahan-disposisi.html',
})
export class SelectBawahanDisposisiPage {
  searchText: string = "";
  items: any = [];
  filterItems: any[];
  selectedItems: any;
  displayOk: any = false;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public viewCtrl: ViewController
    ) {
      this.items = [];
      this.items = navParams.get('kepadaList');
      console.log(this.items);
      this.FilterItems();
  }

  FilterItems() {
    this.filterItems = this.items;
    if (this.searchText.trim() !== '') {
      this.filterItems = this.filterItems.filter((item) => {
        return (item.NAMA.toLowerCase().indexOf(this.searchText.toLowerCase()) > -1 || item['NAMA JABATAN'].toLowerCase().indexOf(this.searchText.toLowerCase()) > -1 );
      });
    }
  }

  CheckChange(item: any) {
    for (let index = 0; index < this.filterItems.length; index++) {
      const element = this.filterItems[index];
      if (element.NIPP == item.NIPP) {
        this.filterItems[index].selected = true;
        this.selectedItems = element;
      }
      else {
        this.filterItems[index].selected = false;
      }
    }
  }

  CloseModel() {
    this.viewCtrl.dismiss(this.selectedItems);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SelectBawahanDisposisiPage');
  }

}
