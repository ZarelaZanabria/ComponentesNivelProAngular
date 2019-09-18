import { Component,  ViewChildren,  AfterContentInit, QueryList, AfterViewInit, ChangeDetectorRef, ViewChild, ElementRef } from '@angular/core';
import { SimpleAlertViewComponent } from './componentes/simple-alert-view/simple-alert-view.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterContentInit, AfterViewInit {

  
  public isAddTimerVisible : boolean = false;
  public time : number = 0;
  public timers : Array<number> = [];

  @ViewChildren(SimpleAlertViewComponent) alerts : QueryList<SimpleAlertViewComponent>;
  @ViewChild ("timerInput") timeInput : ElementRef;
  constructor (private  cRef : ChangeDetectorRef) {
    this.timers = [4,16,185];

  }


  logCountdowEnd() {
    console.log("The countdown has  finished");    
  }
  ngAfterViewInit() {

    console.log('TimerIMPUT', this.timeInput);
    //Vamos agregar un atributo
    this.timeInput.nativeElement.setAttibute("placeholder","enter seconds" );

    
    this.alerts.forEach(item =>{

      if(!item.title){
        item.title = "Hi!";
        item.message = "Welcome "
      }
      item.showAlert();
      console.log(item);
      
    });
    this.cRef.detectChanges();
  }
  ngAfterContentInit(): void {
   
  }

  public showAddTimer (){
    this.isAddTimerVisible = true;
    
  }

  public hideAddTimer(){
    this.isAddTimerVisible = false ;
  }

  public showEndTimerAlert(){
  this.alerts.first.showAlert();

  }

 

  public submitAddTimer() {
    this.timers.push(this.time);
    this.hideAddTimer();
  }
 
}
