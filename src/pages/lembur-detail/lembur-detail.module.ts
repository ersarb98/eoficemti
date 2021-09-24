import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LemburDetailPage } from './lembur-detail';

@NgModule({
  declarations: [
    LemburDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(LemburDetailPage),
  ],
})
export class LemburDetailPageModule {}
