import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MainMlPage } from './main-ml';

@NgModule({
  declarations: [
    MainMlPage,
  ],
  imports: [
    IonicPageModule.forChild(MainMlPage),
  ],
})
export class MainMlPageModule {}
