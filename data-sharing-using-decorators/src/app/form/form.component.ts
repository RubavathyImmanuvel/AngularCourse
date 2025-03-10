import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  imports: [CommonModule, FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  carName:string = "";
  @Output() carAdded = new EventEmitter<string>();

  onSubmit() {
    console.log(this.carName);

    //sending the value outside
    this.carAdded.emit(this.carName);
    this.carName="";
  }
}
