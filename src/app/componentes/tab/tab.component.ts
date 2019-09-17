import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Tab } from './tab.interface';


@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit, Tab {

  @Output() onClick: EventEmitter<any> = new EventEmitter();
  @Input() title : string;
  public isActive : boolean= false;
  constructor() { }

  ngOnInit() {
   
  }

  clickTabContent(){
    this.onClick.emit();
  }

}
