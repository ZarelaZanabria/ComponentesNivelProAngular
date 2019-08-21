import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimerService {

  private countdownTimerRef: any = null;
  public countdown: number = 0;
  public paused: boolean = true;
  private init: number = 0;

  constructor() {

  }

  //Funcion
  destroy(): void {
    this.clearTimeout();
  }

  restarCountdown(time?) {

    console.log('Si ejecuta la función');
    console.log(time);
   
    if (time) 
      this.init = time;
      console.log(this.init, '01');    
   
    if (this.init && this.init > 0) {
      console.log(this.init, '02');
      this.paused = true;
      this.clearTimeout();
      this.countdown = this.init;
    }
   
    
  }

  toogleCountdown() {
    this.paused = !this.paused;
    if (this.paused == false) {
      this.doCountdown();
    } else {
      this.clearTimeout();
    }
  }

  doCountdown() {
    this.countdownTimerRef = setTimeout(() => {
      console.log('countendw', this.countdown);

      this.countdown = this.countdown - 1;
      this.precessCountdown();
    }, 1000);
  }

  private clearTimeout() {
    if (this.countdownTimerRef) {
      clearTimeout(this.countdownTimerRef);
      this.countdownTimerRef = null;
    }
  }
  precessCountdown() {

    if (this.countdown <= 0) {
      /*this.onComplete.emit(); */
      console.log('---Contador end--');
    } else {
      this.doCountdown();
    }

  }

}
