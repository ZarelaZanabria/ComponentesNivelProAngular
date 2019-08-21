import { Component, OnInit, Input, Output, OnDestroy, EventEmitter } from '@angular/core';
import { TimerService } from 'src/app/services/timer.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
  providers: [TimerService]
})
export class TimerComponent implements OnInit, OnDestroy {


  @Input() init: number = 20;
  @Output() onComplete = new EventEmitter<void>();
  //Creo la referncia para ya no subcribirmi

  private countdownSubcription: Subscription = null;

  constructor(public timerService: TimerService) {

  }


  ngOnInit(): void {
    this.timerService.restarCountdown(this.init);
    this.countdownSubcription = this.timerService.timeObservable.subscribe(() => {
      console.log('---Coutndow finish----');
      
      this.onComplete.emit();
    });
  }
  ngOnDestroy(): void {
    this.timerService.destroy();
    //Referncia para anular la subcripción del observable
    this.countdownSubcription.unsubscribe();
    //Cuando se tiene que desubcribirse al observable
    
  }



}
