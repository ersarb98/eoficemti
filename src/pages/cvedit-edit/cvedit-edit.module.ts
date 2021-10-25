import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CveditEditPage } from './cvedit-edit';

@NgModule({
  declarations: [
    CveditEditPage,
  ],
  imports: [
    IonicPageModule.forChild(CveditEditPage),
  ],
})
export class CveditEditPageModule {}
