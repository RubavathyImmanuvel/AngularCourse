import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { CarService } from '../car.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit{ //life cycle hook
  //@Input() carList:string[] =["car1", "car2"];
  carList:string[] = [];

  constructor(private carService:CarService) {

  }

  ngOnInit(): void {
    this.carService.carNames.subscribe((names) => {
      this.carList = names;
    })
  }
}
