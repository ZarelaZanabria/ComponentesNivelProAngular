import { Component, OnInit, Input, Output, OnDestroy, EventEmitter } from '@angular/core';
import { TimerService } from 'src/app/services/timer.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
  providers: [TimerService]
})
export class TimerComponent implements OnInit, OnDestroy {


  @Input() init: number = 20;
  @Output() onComplete = new EventEmitter<void>();
 
  constructor(public timerService: TimerService) {

  }

 
  ngOnInit(): void {

    this.timerService.restarCountdown(this.init);
  }
  ngOnDestroy(): void {
    this.timerService.destroy();

  }



}
