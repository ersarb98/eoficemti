import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InsertNoteAttendancePage } from './insert-note-attendance';

@NgModule({
  declarations: [
    InsertNoteAttendancePage,
  ],
  imports: [
    IonicPageModule.forChild(InsertNoteAttendancePage),
  ],
})
export class InsertNoteAttendancePageModule {}
