import { Component, OnInit } from '@angular/core';
import {WorksService} from "../shered/works.service";
import {SeoService} from "../seo.service";

@Component({
  selector: 'app-works-page',
  templateUrl: './works-page.component.html',
  styleUrls: ['./works-page.component.css']
})
export class WorksPageComponent implements OnInit {
work = [
  {
    "id": 1,
    "title": "json-server",
    "src": "assets/works/1.jpg",
    "info": "lorem lorem"
  },
  {
    "id": 2,
    "title": "json-server",
    "src": "assets/works/2.jpg",
    "info": "lorem lorem"
  },
  {
    "id": 3,
    "title": "json-server",
    "src": "assets/works/3.jpg",
    "info": "lorem lorem"
  },
  {
    "id": 4,
    "title": "json-server",
    "src": "assets/works/4.jpg",
    "info": "lorem lorem"
  },
  {
    "id": 5,
    "title": "json-server",
    "src": "assets/works/5.jpg",
    "info": "lorem lorem"
  },
  {
    "id": 6,
    "title": "json-server",
    "src": "assets/works/6.jpg",
    "info": "lorem lorem"
  },
  {
    "id": 7,
    "title": "json-server",
    "src": "assets/works/7.jpg",
    "info": "lorem lorem"
  },
  {
    "id": 8,
    "title": "json-server",
    "src": "assets/works/8.jpg",
    "info": "lorem lorem"
  },
  {
    "id": 9,
    "title": "json-server",
    "src": "assets/works/9.jpg",
    "info": "lorem lorem"
  },
  {
    "id": 10,
    "title": "json-server",
    "src": "assets/works/10.jpg",
    "info": "lorem lorem"
  },
  {
    "id": 11,
    "title": "json-server",
    "src": "assets/works/11.jpg",
    "info": "lorem lorem"
  },
  {
    "id": 12,
    "title": "json-server",
    "src": "assets/works/12.jpg",
    "info": "lorem lorem"
  },
  {
    "id": 13,
    "title": "json-server",
    "src": "assets/works/13.jpg",
    "info": "lorem lorem"
  },
  {
    "id": 14,
    "title": "json-server",
    "src": "assets/works/14.jpg",
    "info": "lorem lorem"
  },
  {
    "id": 15,
    "title": "json-server",
    "src": "assets/works/15.jpg",
    "info": "lorem lorem"
  },
  {
    "id": 16,
    "title": "json-server",
    "src": "assets/works/16.jpg",
    "info": "lorem lorem"
  },
  {
    "id": 17,
    "title": "json-server",
    "src": "assets/works/17.jpg",
    "info": "lorem lorem"
  },
  {
    "id": 18,
    "title": "json-server",
    "src": "assets/works/18.jpg",
    "info": "lorem lorem"
  },
  {
    "id": 19,
    "title": "json-server",
    "src": "assets/works/19.jpg",
    "info": "lorem lorem"
  },
  {
    "id": 20,
    "title": "json-server",
    "src": "assets/works/20.jpg",
    "info": "lorem lorem"
  },
  {
    "id": 21,
    "title": "json-server",
    "src": "assets/works/21.jpg",
    "info": "lorem lorem"
  },
  {
    "id": 22,
    "title": "json-server",
    "src": "assets/works/22.jpg",
    "info": "lorem lorem"
  },
  {
    "id": 23,
    "title": "json-server",
    "src": "assets/works/23.jpg",
    "info": "lorem lorem"
  },
  {
    "id": 24,
    "title": "json-server",
    "src": "assets/works/24.jpg",
    "info": "lorem lorem"
  },
  {
    "id": 25,
    "title": "json-server",
    "src": "assets/works/25.jpg",
    "info": "lorem lorem"
  },
  {
    "id": 26,
    "title": "json-server",
    "src": "assets/works/26.jpg",
    "info": "lorem lorem"
  },
  {
    "id": 27,
    "title": "json-server",
    "src": "assets/works/27.jpg",
    "info": "lorem lorem"
  },
  {
    "id": 28,
    "title": "json-server",
    "src": "assets/works/28.jpg",
    "info": "lorem lorem"
  },
  {
    "id": 29,
    "title": "json-server",
    "src": "assets/works/29.jpg",
    "info": "lorem lorem"
  },
  {
    "id": 30,
    "title": "json-server",
    "src": "assets/works/30.jpg",
    "info": "lorem lorem"
  },
  {
    "id": 31,
    "title": "json-server",
    "src": "assets/works/31.jpg",
    "info": "lorem lorem"
  },
  {
    "id": 32,
    "title": "json-server",
    "src": "assets/works/32.jpg",
    "info": "lorem lorem"
  },
  {
    "id": 33,
    "title": "json-server",
    "src": "assets/works/33.jpg",
    "info": "lorem lorem"
  },
  {
    "id": 34,
    "title": "json-server",
    "src": "assets/works/34.jpg",
    "info": "lorem lorem"
  },
  {
    "id": 35,
    "title": "json-server",
    "src": "assets/works/35.jpg",
    "info": "lorem lorem"
  },
  {
    "id": 36,
    "title": "json-server",
    "src": "assets/works/36.jpg",
    "info": "lorem lorem"
  },
  {
    "id": 37,
    "title": "json-server",
    "src": "assets/works/37.jpg",
    "info": "lorem lorem"
  },
  {
    "id": 38,
    "title": "json-server",
    "src": "assets/works/38.jpg",
    "info": "lorem lorem"
  },
  {
    "id": 39,
    "title": "json-server",
    "src": "assets/works/39.jpg",
    "info": "lorem lorem"
  },
  {
    "id": 40,
    "title": "json-server",
    "src": "assets/works/40.jpg",
    "info": "lorem lorem"
  },
  {
    "id": 41,
    "title": "json-server",
    "src": "assets/works/41.jpg",
    "info": "lorem lorem"
  },
  {
    "id": 42,
    "title": "json-server",
    "src": "assets/works/42.jpg",
    "info": "lorem lorem"
  },
  {
    "id": 43,
    "title": "json-server",
    "src": "assets/works/43.jpg",
    "info": "lorem lorem"
  },
  {
    "id": 44,
    "title": "json-server",
    "src": "assets/works/44.jpg",
    "info": "lorem lorem"
  },
  {
    "id": 45,
    "title": "json-server",
    "src": "assets/works/45.jpg",
    "info": "lorem lorem"
  },
  {
    "id": 46,
    "title": "json-server",
    "src": "assets/works/46.jpg",
    "info": "lorem lorem"
  },
  {
    "id": 47,
    "title": "json-server",
    "src": "assets/works/47.jpg",
    "info": "lorem lorem"
  },
  {
    "id": 48,
    "title": "json-server",
    "src": "assets/works/48.jpg",
    "info": "lorem lorem"
  },
  {
    "id": 49,
    "title": "json-server",
    "src": "assets/works/49.jpg",
    "info": "lorem lorem"
  }
]
  constructor() { }

  ngOnInit() {
    // this.worksService.getWork().subscribe((data: any []) => {
    //   this.work = data;
    // });

  }

}
