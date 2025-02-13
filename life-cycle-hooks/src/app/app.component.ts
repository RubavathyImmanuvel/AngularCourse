import { Component, DoCheck, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChildComponent } from './child/child.component';
import { FormsModule } from '@angular/forms';
import { SimpleMessageComponent } from './simple-message/simple-message.component';
import { HelloComponent } from './hello/hello.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ChildComponent, FormsModule, SimpleMessageComponent, HelloComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, DoCheck{
  title = 'life-cycle-hooks';
  prevTitle = "life-cycle-hooks";
  //component life cycle: created, property changes, content loaded, content changed, view loaded, view changed, destroyed
  //life cycle methods: ngOnChanges, ngOnInit, ngDoCheck, ngAfterContentInit, ngAfterViewInit, ngAfterViewChecked, ngOnDestroy

  itemList  = [
    {id:1, name:"Fruit-1"},
    {id:2, name:"Fruit-2"},
    {id:3, name:"Fruit-3"},
    {id:4, name:"Fruit-4"},
    {id:5, name:"Fruit-5"}
  ]

    message = "";
    ngOnInit(): void {
       this.message = "welcome to angular course";
    }

    ngDoCheck(): void { //whenever property changes
      console.log("property changed");
      if(this.title != this.prevTitle) {
        console.log("title changed");
        this.prevTitle = this.title;
      }
    }

    showHello = true;
}
