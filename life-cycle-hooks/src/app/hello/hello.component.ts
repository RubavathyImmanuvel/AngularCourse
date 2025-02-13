import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-hello',
  imports: [],
  templateUrl: './hello.component.html',
  styleUrl: './hello.component.css'
})
export class HelloComponent implements AfterViewInit, OnInit, OnDestroy{
  //focus the input once view is initialized
  @ViewChild('nameInput') nameInput!:ElementRef;

  ngAfterViewInit(): void {
    this.nameInput.nativeElement.focus(); //oninit throws error
    console.log("Input focused");
  }

  counter:number = 0;
  private intervalId:any;
  //starts the timer
  ngOnInit(): void {
    this.intervalId = setInterval(() => {
      this.counter++;
    }, 1000);
    console.log("interval id", this.intervalId);
  }

  //clear the timer
  ngOnDestroy(): void {
    clearInterval(this.intervalId);
    console.log("timer stopped");
    
  }

}
