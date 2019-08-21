import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimerService {

  private countdownTimerRef: any = null;
  
  public paused: boolean = true;
  private init: number = 0;
  //Te permite emitir eventos
  private timeSubject = new Subject<void>();   
  //Solo es un observable
  public timeObservable = this.timeSubject.asObservable();
  //Contador de manera reactiva el microservicio indi
  private countdownSource = new BehaviorSubject<number>(0);
  public countdownObservable = this.countdownSource.asObservable();



  constructor() {

  }

  //Funcion
  destroy(): void {
    this.clearTimeout();
  }

  restarCountdown(time?) {

    if (time)
      this.init = time;
    if (this.init && this.init > 0) {
      this.paused = true;
      this.clearTimeout();
      this.countdownSource.next(this.init);
      /* this.countdown = this.init; */
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
      //Utilizamos el valor de next para pasar información.
      this.countdownSource.next(this.countdownSource.getValue() -1 );
    /*   this.countdown = this.countdown - 1; */
      this.precessCountdown();
    }, 1000);
  }


  precessCountdown() {

    if (this.countdownSource.getValue() <= 0) {      
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
