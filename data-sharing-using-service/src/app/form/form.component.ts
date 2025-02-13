import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CarService } from '../car.service';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, FormsModule, CarService],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  carName:string = "";
  //@Output() carAdded = new EventEmitter<string>();

  constructor(private carService:CarService) {

  }

  onSubmit() {
    console.log(this.carName);

    //sending the value using car service
    //this.carAdded.emit(this.carName);
    this.carService.addCarName(this.carName);
    this.carName="";
  }
}
