import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';
import { CurrencyPipe } from '@angular/common';
import { DatePicker } from '@ionic-native/date-picker';
import { DatePipe } from '@angular/common';
import { OneSignal } from '@ionic-native/onesignal';

import { Camera } from '@ionic-native/camera';
import { File } from '@ionic-native/file';
import { FilePath } from '@ionic-native/file-path';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer';
import { HttpClientModule } from '@angular/common/http';
import { FileChooser } from '@ionic-native/file-chooser';
import { InAppBrowser } from '@ionic-native/in-app-browser'; 
  
import { Device } from '@ionic-native/device';
 

import { MyApp } from './app.component';

import { Geolocation } from '@ionic-native/geolocation';
import { Base64 } from '@ionic-native/base64';
import { AndroidPermissions } from '@ionic-native/android-permissions';
import { Diagnostic } from '@ionic-native/diagnostic';
import { OpenNativeSettings } from '@ionic-native/open-native-settings';


var config = {
  backButtonText: '',
  backButtonIcon: 'ios-arrow-back',  
  modalEnter: 'modal-slide-in',
  modalLeave: 'modal-slide-out',  
}; 

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule, 
    HttpClientModule,
    IonicModule.forRoot(MyApp, config),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    CurrencyPipe,
    DatePicker,
    DatePipe,
    OneSignal,
    Camera,
    File,
    FilePath,
    FileTransfer,
    OneSignal,
    FileTransferObject,  
    FileChooser,
    InAppBrowser,
    Device,
    Geolocation,
    Base64,  
    AndroidPermissions,
    Diagnostic,
    OpenNativeSettings,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
