import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CveditPage } from './cvedit';

@NgModule({
  declarations: [
    CveditPage,
  ],
  imports: [
    IonicPageModule.forChild(CveditPage),
  ],
})
export class CveditPageModule {}
