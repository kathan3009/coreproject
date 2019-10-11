import { Component, ViewChild } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  @ViewChild('content') nav: NavController;
  rootPage: any = "LoginPage";

  constructor(
    platform: Platform, 
    statusBar: StatusBar, 
    splashScreen: SplashScreen,
    ) {
    this.declarePages();
    platform.ready().then(() => {
      statusBar.styleDefault();
       splashScreen.hide(); 
    });
  }
  public pages: { title:string, name:string}[]
  
  declarePages() {
    this.pages = [
   
      { title: 'Home', name: "HomePage" },
      { title: 'Shop', name: "LessonsPage" },
      { title: 'News', name: "MeditationPage" },
     
     // { title: 'Profile', name: "ProfilePage" },
      
    
   ];
  }

  public openPage(page:string){
    this.nav.setRoot(page)
  }
}

