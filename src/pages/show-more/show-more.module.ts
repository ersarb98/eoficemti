import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShowMorePage } from './show-more';

@NgModule({
  declarations: [
    ShowMorePage,
  ],
  imports: [
    IonicPageModule.forChild(ShowMorePage),
  ],
})
export class ShowMorePageModule {}
