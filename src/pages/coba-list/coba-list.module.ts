import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CobaListPage } from './coba-list';

@NgModule({
  declarations: [
    CobaListPage,
  ],
  imports: [
    IonicPageModule.forChild(CobaListPage),
  ],
})
export class CobaListPageModule {}
