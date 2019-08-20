import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit , OnChanges {
  
  @Input () time : number = 0;
  public minutes : string = '00';
  public seconds : string = '00';
 
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes){
    if(changes.time){
      //Retorna la parte entera de un numero cualquier dijito franccionario
      const minutes = Math.trunc(changes.time.currentValue/60);
      const seconds = changes.time.currentValue - minutes*60;

      this.minutes = ("0" + minutes).substr(-2);
      this.seconds = ("0" + seconds).substr(-2);
    }
  }

}
