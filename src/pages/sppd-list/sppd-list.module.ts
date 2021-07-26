import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SppdListPage } from './sppd-list';

@NgModule({
  declarations: [
    SppdListPage,
  ],
  imports: [
    IonicPageModule.forChild(SppdListPage),
  ],
})
export class SppdListPageModule {}
