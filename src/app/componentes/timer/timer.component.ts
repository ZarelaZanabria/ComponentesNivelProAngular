import { Component, OnInit, Input, Output, OnDestroy, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit, OnDestroy {

  @Input() init: number = 20;
  @Output() onComplete = new EventEmitter<void>() ;

  private countdownTimerRef : any = null;
  public countdown : number = 0;

  
  constructor() { }

  ngOnInit(): void {
    this.starCountdown();
  }

  ngOnDestroy(): void {
   this.clearTimeout();
  }

  starCountdown(){
    if(this.init && this.init>0){
      this.clearTimeout();
      this.countdown = this.init;
      this.doCountdown();

    }
  }

  doCountdown(){
    this.countdownTimerRef = setTimeout(() => {
      this.countdown= this.countdown - 1;
      this.precessCountdown();
    }, 1000);
  }

  private clearTimeout() {
    if(this.countdownTimerRef) {
      clearTimeout(this.countdownTimerRef);
      this.countdownTimerRef = null;
    }
  }
  precessCountdown(){

    if(this.countdown == 0){
        this.onComplete.emit();
        console.log('---Contador end--');
    }else {
      this.doCountdown();
    }

  }
  

}
