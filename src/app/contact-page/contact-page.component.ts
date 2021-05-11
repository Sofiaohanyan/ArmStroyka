import { Component, OnInit } from '@angular/core';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faViber } from '@fortawesome/free-brands-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit {
  faFacebook = faFacebook;
  faLocationArrow = faLocationArrow;
  faPhone = faPhone;
  faViber = faViber;
  faWhatsapp = faWhatsapp;
  constructor() { }

  ngOnInit() {
  }

}
