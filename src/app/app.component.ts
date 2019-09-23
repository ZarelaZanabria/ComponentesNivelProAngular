import { Component, AfterContentInit, AfterViewInit, ElementRef, ViewChild, Renderer2, ViewContainerRef, ComponentFactoryResolver, ComponentRef } from '@angular/core';
import { SimpleAlertViewComponent } from './componentes/simple-alert-view/simple-alert-view.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements AfterContentInit, AfterViewInit {


  public isAddTimerVisible: boolean = false;
  public time: number = 0;
  public timers: Array<number> = [];
  //SimpleAlert devuelve la instancia del componente.
  public simpleAlert: ComponentRef<SimpleAlertViewComponent> = null;


  @ViewChild('timerInput', {static : false}) timeInput: ElementRef;
  @ViewChild('alert', { read: ViewContainerRef, static:false }) alertContainer: ViewContainerRef;
  constructor(private renderer: Renderer2, private resolver: ComponentFactoryResolver) {
    this.timers = [4, 16, 185];

  }


  logCountdowEnd() {
    console.log("The countdown has  finished");
  }
  ngAfterViewInit() {

    console.log('TimerIMPUT', this.timeInput);

    this.renderer.setAttribute(this.timeInput.nativeElement, "placeholder", "enter seconds");
    //Vamos agregar un atributo
    this.renderer.addClass(this.timeInput.nativeElement, 'time-in');



  }
  ngAfterContentInit(): void {

  }

  public showAddTimer() {
    this.isAddTimerVisible = true;
    setTimeout(() => {

      this.renderer.selectRootElement(this.timeInput.nativeElement).focus();
    });
  }

  public hideAddTimer() {
    this.isAddTimerVisible = false;
  }

  public showEndTimerAlert() {
    const alertFactory = this.resolver.resolveComponentFactory(SimpleAlertViewComponent);
    this.simpleAlert = this.alertContainer.createComponent(alertFactory);
    this.simpleAlert.instance.title = "The Gamers";
    this.simpleAlert.instance.message = "The game finished"
    this.simpleAlert.instance.onDismiss.subscribe(() => {
      console.log('this finisd');
      this.simpleAlert.destroy();
    })
    this.simpleAlert.instance.showAlert();

  }



  public submitAddTimer() {
    this.timers.push(this.time);
    this.hideAddTimer();
  }

}
