import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { KomitmenModalPage } from './komitmen-modal';

@NgModule({
  declarations: [
    KomitmenModalPage,
  ],
  imports: [
    IonicPageModule.forChild(KomitmenModalPage),
  ],
})
export class KomitmenModalPageModule {}
