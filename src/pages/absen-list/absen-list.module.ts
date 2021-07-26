import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AbsenListPage } from './absen-list';

@NgModule({
  declarations: [
    AbsenListPage,
  ],
  imports: [
    IonicPageModule.forChild(AbsenListPage),
  ],
})
export class AbsenListPageModule {}
