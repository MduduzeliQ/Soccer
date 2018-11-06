import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { ScoreboardPage } from '../scoreboard/scoreboard'
import List from '../stored/array';
import { Goals } from '../stored/scored';
import { Placeholder } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
Home:string;
Away:string;

splash = true;
  constructor(public navCtrl: NavController,public alertCtrl:  AlertController) {

  }
Start(){
  let a = new Goals(this.Home, this.Away);
if(this.Home == this.Away){
  const alert = this.alertCtrl.create({
    title: 'They match the same.',
    subTitle: 'Team names they match the same!',
    buttons: ['Change']
  });
  alert.present();
}
else {
  const alert = this.alertCtrl.create({
    title: 'Welcome.',
    subTitle: 'The game has begin!',
    buttons: ['OK']
  });
  alert.present();
     List.push(a);
     this.navCtrl.push( ScoreboardPage);
     console.log(List);
  }
}
Eraser(){
this.Home ='';
this.Away = '';
}
ionViewDidLoad() {
  setTimeout(() => this.splash = false, 2000);
}
}
