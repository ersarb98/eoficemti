import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchInboxPage } from './search-inbox';

@NgModule({
  declarations: [
    SearchInboxPage,
  ],
  imports: [
    IonicPageModule.forChild(SearchInboxPage),
  ],
})
export class SearchInboxPageModule {}
