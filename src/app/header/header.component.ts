import { Component, OnInit } from '@angular/core';

import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faViber } from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  faFacebook = faFacebook;
  faWhatsapp = faWhatsapp;
  faViber = faViber;

  constructor() { }

  ngOnInit() {
  }




}
