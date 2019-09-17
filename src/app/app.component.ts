import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

/*   counterProgress : number = 0;
  totalCountdown : number = 15 ; */

  public isAddTimerVisible : boolean = false;
  public isEndTimerAlertVisible : boolean = false;
  public time : number = 0;
  public timers : Array<number> = [];
  constructor () {
    this.timers = [4,16,185];

  }

 /*  updateProgress($event){
    this.counterProgress =  (this.totalCountdown - $event)/this.totalCountdown * 100 ;
  }
 */
  /* countdownFinish(){
    console.log ('finis')
  } */

  logCountdowEnd() {
    console.log("The countdown has  finished");
    
  }
  public showAddTimer (){
    this.isAddTimerVisible = true;
    
  }

  public hideAddTimer(){
    this.isAddTimerVisible = false ;
  }

  public showEndTimerAlert(){
    this.isEndTimerAlertVisible = true;
  }

  public hideEndTimerAlert(){
    this.isEndTimerAlertVisible = false;
  }

  public submitAddTimer() {
    this.timers.push(this.time);
    this.hideAddTimer();
  }
 
}
