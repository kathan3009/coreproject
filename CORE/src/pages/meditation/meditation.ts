import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MeditationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-meditation',
  templateUrl: 'meditation.html',
})
export class MeditationPage {
  cards: any;
  category: string="gear";


  

     

  

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad MeditationPage');
    
    if (this.category=="gear"){

    
    this.cards = new Array(10);
    }
    else if(this.category=="clothing"){
       
      this.cards = new Array(2);
    }
    else {

    }
  }

 
}
