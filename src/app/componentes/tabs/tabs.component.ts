import { Component, OnInit, ContentChildren, QueryList, AfterContentInit, OnDestroy } from '@angular/core';
import { Tab } from '../tab/tab.interface';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit, AfterContentInit, OnDestroy {
  @ContentChildren(TabComponent)
  public tabs: QueryList<TabComponent>;
  private tabClikSubcripcions: any[] = [];
  constructor() { }

  ngOnInit() {
  }

  ngOnDestroy() {

    if (this.tabClikSubcripcions) {
      this.tabClikSubcripcions.forEach(item => item.unsubscribe());

    }

  }
  ngAfterContentInit() {

    console.log('Query lis', this.tabs);
    this.tabs.forEach(tab => {
      let subcripcion = tab.onClick.subscribe(() => {
        console.log(`tab ${tab.title} content clicked`);

      });
      this.tabClikSubcripcions.push(subcripcion);
    });
    this.selectTab(this.tabs.first);
  }
  addTab(tab: Tab) {

  }


  selectTab(tab: Tab) {
    this.tabs.forEach(tab => tab.isActive = false);
    tab.isActive = true;
  }

}
