import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-granit-page',
  templateUrl: './granit-page.component.html',
  styleUrls: ['./granit-page.component.css']
})
export class GranitPageComponent implements OnInit {

  constructor() { }
  image = ['g1.jpg','g2.jpg','g3.jpg','g4.jpg','g5.jpg','g6.jpg','g7.jpg','g8.jpg','g9.jpg']
  ngOnInit() {
  }

}
