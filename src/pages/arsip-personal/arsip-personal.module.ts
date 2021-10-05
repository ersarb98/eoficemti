import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ArsipPersonalPage } from './arsip-personal';

@NgModule({
  declarations: [
    ArsipPersonalPage,
  ],
  imports: [
    IonicPageModule.forChild(ArsipPersonalPage),
  ],
})
export class ArsipPersonalPageModule {}
