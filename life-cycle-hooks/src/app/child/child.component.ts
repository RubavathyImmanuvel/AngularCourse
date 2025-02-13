import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent implements OnChanges{//OnChanges can be used only in child components
  @Input() items:any[] = [];
  @Input() title="";

  ngOnChanges(changes: SimpleChanges): void { //only to detect @input property changes
    if(changes['items']) {
      console.log("Items property changed", changes['items']); //check console output for more details
    }
    if(changes['title']) {
      console.log("Title property changed", changes['title'].isFirstChange);
    }
  }
}
