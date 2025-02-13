import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{ //one way binding, two way binding(component-view)->ng model
  title = 'BindingApp';
  fullName = "Sachin Tendulkar";
  imageUrl ="https://picsum.photos/id/237/200/300";
  imageAlt = "puppy";
  user = {
    name:"John Doe",
    age:30
  }

  user1:any = null

  clickCount = 0;

  getName() {
    return "John Doe"
  }

  ngOnInit(): void { //life cycle hook
    this.user1 = {
      name : "Jane Doe"
    }
  }

  clickMe() {
    this.clickCount++;
  }
}
