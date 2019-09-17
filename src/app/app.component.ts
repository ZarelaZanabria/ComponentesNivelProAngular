import { Component,  ViewChildren,  AfterContentInit, QueryList, AfterViewInit } from '@angular/core';
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
  constructor () {
    this.timers = [4,16,185];

  }


  logCountdowEnd() {
    console.log("The countdown has  finished");
    
  }
  ngAfterViewInit() {
    this.alerts.forEach(item =>{
      console.log(item);
      
    })
  }
  ngAfterContentInit(): void {
   
  }
 /*  ngAfterContentInit(): void {
   
    console.log('Alerta',this.alert)
    this.alert.showAlert();
    this.alert.title = 'Hi';
    this.alert.message = 'Hello Word';
  } */
  public showAddTimer (){
    this.isAddTimerVisible = true;
    
  }

  public hideAddTimer(){
    this.isAddTimerVisible = false ;
  }

  public showEndTimerAlert(){
    /* this.alert.showAlert(); */
  }

 

  public submitAddTimer() {
    this.timers.push(this.time);
    this.hideAddTimer();
  }
 
}
