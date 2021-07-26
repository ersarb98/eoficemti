import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OutboxDetailPage } from './outbox-detail';

@NgModule({
  declarations: [
    OutboxDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(OutboxDetailPage),
  ],
})
export class OutboxDetailPageModule {}
