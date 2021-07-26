import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CutiDetailPage } from './cuti-detail';

@NgModule({
  declarations: [
    CutiDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(CutiDetailPage),
  ],
})
export class CutiDetailPageModule {}
