import { AfterContentInit, Component, ContentChildren, ElementRef, OnInit, QueryList } from '@angular/core';

@Component({
  selector: 'app-simple-message',
  imports: [],
  templateUrl: './simple-message.component.html',
  styleUrl: './simple-message.component.css'
})
export class SimpleMessageComponent implements AfterContentInit{
  @ContentChildren('messageContent') messageElement!: QueryList<ElementRef>; //!:-->will not hold any value at start

  ngAfterContentInit(): void { //oninit will throw errors
    this.messageElement.forEach(element => {
        console.log("Projected content", element.nativeElement.textContent);
    })
  }

}
