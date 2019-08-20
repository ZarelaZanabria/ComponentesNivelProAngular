import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss']
})
export class CountdownComponent implements OnInit {

  @Input() init: number = null;
  @Output() onDecrease = new EventEmitter<number>();
  @Output() onComplete = new EventEmitter<void>();
  public counter: number = 0;

  constructor() { }

  //Creamos las funciones 
  //Inicializamos el contador.

  startCountdown() {
    if (this.init && this.init > 0) {
      this.counter = this.init;
      this.doCountdown();
    }
  }

  doCountdown() {

    setTimeout(() => {
      this.counter = this.counter - 1;
      this.precessCountdown();

    }, 1000);

  }


  precessCountdown() {

    this.onDecrease.emit(this.counter);
    if (this.counter == 0) {
    this.onComplete.emit();

    } else {
      this.doCountdown();
    }

  }

  ngOnInit() {
    this.startCountdown();
  }

}
