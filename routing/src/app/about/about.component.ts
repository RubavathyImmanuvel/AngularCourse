import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit{
  id!:string|null; //|-->or

  constructor(private route:ActivatedRoute) {

  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("id");
  }
}
