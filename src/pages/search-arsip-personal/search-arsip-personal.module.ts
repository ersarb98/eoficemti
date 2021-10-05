import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchArsipPersonalPage } from './search-arsip-personal';

@NgModule({
  declarations: [
    SearchArsipPersonalPage,
  ],
  imports: [
    IonicPageModule.forChild(SearchArsipPersonalPage),
  ],
})
export class SearchArsipPersonalPageModule {}
