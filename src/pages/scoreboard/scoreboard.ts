import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import List from '../stored/array';
import { HomePage } from '../home/home';
/**
 * Generated class for the ScoreboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-scoreboard',
  templateUrl: 'scoreboard.html',
})
export class ScoreboardPage {
  HTeam;
  ATeam;
  Hscore=0;
  Ascore=0;

arry=List;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  Con(){
    if(this.HTeam == "Away")
      this.Ascore +=3;
  else{
    this.Hscore +=3;
  }
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ScoreboardPage');
    console.log(this.arry)
  }

  Checking(u):any{
    this.HTeam = u;
  }

Convert(){
  if(this.HTeam == "Away")
    this.Ascore +=2;
else{
  this.Hscore +=2;
}
}
Trying(){
  if(this.HTeam == "Away")
    this.Ascore +=5;
  else{
    this.Hscore +=5;
  }
}
Resetings(a:any){
 List.splice(a,Infinity)
 this.navCtrl.push(HomePage)
}
undo(){
if (this.HTeam == "Away")
  this.Ascore -=5;
  else{
    this.Hscore -=5;
  }
}
undos(){
  if (this.HTeam == "Away")
    this.Ascore -=3;
    else{
      this.Hscore -=3;
    }
  }
  undois(){
    if (this.HTeam == "Away")
      this.Ascore -=2;
      else
      this.Hscore -=2;
    }
}
