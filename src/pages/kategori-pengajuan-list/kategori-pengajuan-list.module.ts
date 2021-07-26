import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { KategoriPengajuanListPage } from './kategori-pengajuan-list';

@NgModule({
  declarations: [
    KategoriPengajuanListPage,
  ],
  imports: [
    IonicPageModule.forChild(KategoriPengajuanListPage),
  ],
})
export class KategoriPengajuanListPageModule {}
