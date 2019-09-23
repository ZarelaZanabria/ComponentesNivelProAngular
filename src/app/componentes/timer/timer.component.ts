import { Component, OnInit, Input, Output, OnDestroy, EventEmitter, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { TimerService } from 'src/app/services/timer.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
  providers: [TimerService],
  changeDetection : ChangeDetectionStrategy.OnPush,
})
export class TimerComponent implements OnInit, OnDestroy {

  @Input() init: number = 20;
  @Output() onComplete = new EventEmitter<void>();
  //Creo la referncia para ya no subcribirmi

  private countdownSubcription: Subscription = null;
  public progressSubcription : Subscription = null;
  public countdown : number = 0;
  /* Importanye los AYSNPIPE solo para HTML por eso nos subcribimos al observable
   */
  constructor(public timerService: TimerService, 
    private changeDetect: ChangeDetectorRef) {

  }

  get progress() {
    console.log('Ejecutando el progress');
    
    return (this.init - this.countdown )/ this.init * 100
  }

  ngOnInit(): void {
    this.timerService.restarCountdown(this.init);
    this.countdownSubcription = this.timerService.timeObservable.subscribe(() => {
      console.log('---Coutndow finish----');      
      this.onComplete.emit();
    });

    this.progressSubcription = this.timerService.countdownObservable.subscribe((data)=>{
      this.countdown = data;
      this.changeDetect.markForCheck();
    });
  }
  ngOnDestroy(): void {
    this.timerService.destroy();
    //Referncia para anular la subcripción del observable
    this.countdownSubcription.unsubscribe();
    //Cuando se tiene que desubcribirse al observable
    
  }



}
