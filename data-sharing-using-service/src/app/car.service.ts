import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor() { }

  private carNameSubject = new BehaviorSubject<string[]>([]);

  carNames = this.carNameSubject.asObservable();

  addCarName(name:string) {
      const currentNames = this.carNameSubject.getValue(); //returns current value
      const updatedValues = [...currentNames, name];//...->copy
      this.carNameSubject.next(updatedValues);
  }
}
