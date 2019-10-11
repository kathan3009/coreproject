import { Component} from '@angular/core';
import { IonicPage, NavController, NavParams,MenuController } from 'ionic-angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth} from 'Firebase/app';




/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

   email:string;
   password:string;
  constructor(public navCtrl: NavController, public navParams: NavParams ,public menu:MenuController, public afAuth:AngularFireAuth) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');

  }
  Register(){
    this.navCtrl.setRoot('RegisterPage'); 

  }
  ionViewDidEnter() {
    
    this.menu.enable(false);
  }

  ionViewWillLeave() {
    
    this.menu.enable(true);
}
 


   async login(){ 
     const {email,password}=this
    console.log(this.email);
    console.log(this.password);
    var c=0;
    try{
    const res= await this.afAuth.auth.signInWithEmailAndPassword(email,password);
    c++;
    }catch(err){
      console.dir(err);

    }
    
    
     if(c==1)
      this.navCtrl.setRoot('HomePage'); 
    

 
  }
 
}
