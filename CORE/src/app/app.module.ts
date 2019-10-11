import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, NavController } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { CameraPreview } from '@ionic-native/camera-preview';
import { Camera } from '@ionic-native/camera/ngx';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';


export const firebaseConfig={
  apiKey: "AIzaSyBAfiSU6giuEFneHxHYSzunswB9q0M6c7I",
  authDomain: "core-eb7ba.firebaseapp.com",
  databaseURL: "https://core-eb7ba.firebaseio.com",
  projectId: "core-eb7ba",
  storageBucket: "core-eb7ba.appspot.com",
  messagingSenderId: "836059172830",
  appId: "1:836059172830:web:6861f45bde65c9548a574f",
  measurementId: "G-LQTP61K0G4"
};
@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp, 
  ],
  providers: [
    StatusBar,
    SplashScreen,
    CameraPreview,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})

 export class AppModule {}
