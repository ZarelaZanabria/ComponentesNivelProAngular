import { Component, OnInit, Input, Output, EventEmitter , OnDestroy, OnChanges } from '@angular/core';
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
  private countdownTimeRef: any = null;

  constructor() { }

  //Creamos las funciones 
  //Inicializamos el contador.

  startCountdown() {
    if (this.init && this.init > 0) {
      this.clearTimeout();
      this.counter = this.init;
      this.doCountdown();
    }
  }

  doCountdown() {
    this.countdownTimeRef = setTimeout(() => {
      this.counter = this.counter - 1;
      this.precessCountdown();
    }, 1000);

  }

 private clearTimeout() {
    if(this.countdownTimeRef) {
      clearTimeout(this.countdownTimeRef);
      this.countdownTimeRef = null;
    }
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

  ngOnDestroy ():void{
    this.clearTimeout();

  }
  ngOnChanges(changes) : void{
  // Cuando detectamos el cambio del valor init, ejecutar la funcion de reiniciar contador.
console.log('Cuando inicia el evento', changes.init.currentValue);
this.startCountdown();
  }

}
