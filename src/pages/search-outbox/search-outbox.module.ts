import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchOutboxPage } from './search-outbox';

@NgModule({
  declarations: [
    SearchOutboxPage,
  ],
  imports: [
    IonicPageModule.forChild(SearchOutboxPage),
  ],
})
export class SearchOutboxPageModule {}
