import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CutiListPage } from './cuti-list';

@NgModule({
  declarations: [
    CutiListPage,
  ],
  imports: [
    IonicPageModule.forChild(CutiListPage),
  ],
})
export class CutiListPageModule {}
