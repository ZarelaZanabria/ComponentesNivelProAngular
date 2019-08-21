import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimerService {

  private countdownTimerRef: any = null;
  public countdown: number = 0;
  public paused: boolean = true;
  private init: number = 0;

  //Te permite emitir eventos
  private timeSubject = new Subject<void>(); 
  private 
  //Solo es un observable
  public timeObservable = this.timeSubject.asObservable();

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

    if (this.init && this.init > 0) {
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
      this.countdown = this.countdown - 1;
      this.precessCountdown();
    }, 1000);
  }


  precessCountdown() {

    if (this.countdown <= 0) {
      
      //Con next emitimos un evento
      this.timeSubject.next();
      /*this.onComplete.emit(); */
      console.log('---Contador end--');
    } else {
      this.doCountdown();
    }

  }
  private clearTimeout() {
    if (this.countdownTimerRef) {
      clearTimeout(this.countdownTimerRef);
      this.countdownTimerRef = null;
    }
  }

}
