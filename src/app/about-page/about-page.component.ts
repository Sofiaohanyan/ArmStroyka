import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css']
})
export class AboutPageComponent implements OnInit {

  constructor() { }

  array = ["bg1.jpg","cc6400b94bd30509c37370cbcf5588e5.jpg", "74390507_w640_h640_62380981_w640_h640_fotolia_107752__ription_l1.jpg", "kartinka-3.jpg", "ob3.jpg", "qqqq.jpg"];
  ngOnInit() {
  }

}
