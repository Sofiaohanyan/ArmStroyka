import { Component, OnInit } from '@angular/core';
import {ProductService} from '../shered/product.service';
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  faArrowAltCircleRight = faArrowAltCircleRight
  product =  [
    {
      "id": 1,
      "title": "Бордюр садовый",
      "src": "assets/kamin/brs.png",
      "price": "Серая 320 руб./кв.м",
      "size": "300х300х30; 11 шт 1 м.кв",
      "price1": "Цветная от 360 руб./кв.м."
    },
    {
      "id": 2,
      "title": "Плитка",
      "src": "assets/kamin/kat.png",
      "price": "Серая 320 руб./кв.м",
      "size": "300х300х30; 11 шт 1 м.кв",
      "price1": "Цветная от 360 руб./кв.м."
    },
{
  "id": 3,
  "title": "Плитка Тучка",
  "src": "assets/kamin/trotuarnaya-plitka-tuchka-1-768x768.jpg",
  "price": "Серая 320 руб./кв.м",
  "size": " 300х300х30; 11 шт. 1 м.кв",
  "price1": "Цветная от 360 руб./кв.м"
},
{
  "id": 4,
  "title": "Плитка «Паутинка»",
  "src": "assets/kamin/trotuarnaya-plitka-pautinka-600x600.jpg",
  "price": "Серая 400 руб./кв.м",
  "size": "400х400х50; 11 шт 1 м.кв",
  "price1": "Цветная от 440 руб./кв.м."
},
{
  "id": 5,
  "title": "Плитка «Паркет»",
  "src": "assets/kamin/trotuarnaya-plitka-parketi-768x768.jpg",
  "price": "Серая 320 руб./кв.м.",
  "size": "300х300х30; 11 шт 1 м.кв",
  "price1": "Цветная от 360 руб./кв.м."
},
{
  "id": 6,
  "title": "Плитка «Версачи»",
  "src": "assets/kamin/trotuarnaya-plitka-ornament-768x768.jpg",
  "price": "Серая 320 руб./кв.м",
  "size": "300х300х30; 6 шт 1 м.кв",
  "price1": "Цветная от 360 руб./кв.м."
},
{
  "id": 7,
  "title": "Плитка «Гладкая»",
  "src": "assets/kamin/trotuarnaya-plitka-lastriko-768x768.jpg",
  "price": "Серая 320 руб./кв.м",
  "size": "300х300х30; 11 шт 1 м.кв",
  "price1": "Цветная от 360 руб./кв.м."
},
{
  "id": 8,
  "title": " Плитка Краковский",
  "src": "assets/kamin/trotuarnaya-plitka-kvadrat-karkasovi-768x768.jpg",
  "price": "Серая 320 руб./кв.м",
  "size": "300х300х30; 11 шт 1 м.кв",
  "price1": "Цветная от 360 руб./кв.м."
},
{
  "id": 9,
  "title": "Плитка «Краковская»",
  "src": "assets/kamin/trotuarnaya-plitka-klever-karkasovi-768x768.jpg",
  "price": "Серая 320 руб./кв.м",
  "size": "300х300х45; 11+11 шт 1 м.кв",
  "price1": "Цветная от 360 руб./кв.м."
},
{
  "id": 10,
  "title": "Плитка Калифорния",
  "src": "assets/kamin/trotuarnaya-plitka-kalifornia-768x768.jpg",
  "price": "Серая 320 руб./кв.м",
  "size": "300х300х30; 11 шт 1 м.кв",
  "price1": "Цветная от 360 руб./кв.м."
},
{
  "id": 11,
  "title": "Плитка «Волна»",
  "src": "assets/kamin/trotuarnaya-plitka-30x30-volna-768x768.jpg",
  "price": "Серая 320 руб./кв.м",
  "size": "300х300х30; 11 шт 1 м.кв",
  "price1": "Цветная от 360 руб./кв.м."
},
{
  "id": 12,
  "title": " Плитка «Цветок»",
  "src": "assets/kamin/trotuarnaya-plitka-cvetok-768x768.jpg",
  "price": "Серая 400 руб./кв.м",
  "size": "350х350х50; 8 шт 1 м.кв",
  "price1": "Цветная от 440 руб./кв.м."
},
{
  "id": 13,
  "title": "Плитка «Волна»",
  "src": "assets/kamin/trotuarnaya-plitka-30x30-volna-1-768x768.jpg",
  "price": "Серая 400 руб./кв.м",
  "size": "350х350х50; 8 шт 1 м.кв",
  "price1": "Цветная от 440 руб./кв.м."
},
{
  "id": 14,
  "title": "Плитка 8 кирпичей",
  "src": "assets/kamin/trotuarnaya-plitka-8-kirpichei-600x600.jpg",
  "price": "Серая 400 руб./кв.м",
  "size": " 400х400х50; 73 кг/м.кв.; 6 шт. 1 м.кв.",
  "price1": "Цветная от 440 руб./кв.м."
},
{
  "id": 15,
  "title": "Плитка «Сетка»",
  "src": "assets/kamin/setka-1-768x768.jpg",
  "price": "Серая 400 руб./м2",
  "size": "350х350х50;  8 шт 1 м2",
  "price1": " Цветная от 440 руб./м2"
},
{
  "id": 17,
  "title": "Плитка Фреско",
  "src": "assets/kamin/trotuarnaya-plitka-vosmeugolnik50-768x768.jpg",
  "price": "Серая 400 руб./кв.м",
  "size": "400х400х50; 11 шт 1 м.кв",
  "price1": "Цветная от 440 руб./кв.м."
},
{
  "id": 16,
  "title": "Плитка",
  "src": "assets/kamin/Rimskiy-bruk-1-768x768.jpg",
  "price": "Серая 320 руб./кв.м",
  "size": "300х300х30; 11 шт 1 м.кв",
  "price1": "Цветная от 360 руб./кв.м."
},
{
  "id": 17,
  "title": "Плитка",
  "src": "assets/kamin/kat.png",
  "price": "Серая 320 руб./кв.м",
  "size": "300х300х30; 11 шт 1 м.кв",
  "price1": "Цветная от 360 руб./кв.м."
},
{
  "id": 18,
  "title": "Плитка Чешуя",
  "src": "assets/kamin/images-1.jpg",
  "price": "Серая 400 руб./кв.м.",
  "size": "60 мм. 33 шт./кв.м",
  "price1": "Цветная от 440 руб./кв.м."
},
{
  "id": 19,
  "title": "Плитка Волна",
  "src": "assets/kamin/image-1ae9c1fc318c59fea3023350223a78a570ebaa220e7c0b7d9bab534e4d770119-V.jpg",
  "price": "Серая 400 руб./кв.м.",
  "size": "240х125х60; 40 шт 1 м.кв",
  "price1": "Цветная от 440 руб./кв.м."
},
{
  "id": 20,
  "title": "Плитка",
  "src": "assets/kamin/GKDwnL9RITI-500x500-1.jpg",
  "price": "Серая 60 руб./кв.м",
  "size": "500х200х80",
  "price1": "Цветная от 70 руб./кв.м."
},
{
  "id": 21,
  "title": "Плитка Английский булыжник",
  "src": "assets/kamin/full_bulizhnik_6-500x500_1_-500x500-1.jpg",
  "price": "Серая 400 руб./кв.м",
  "size": " 250х125х60; 32 шт 1 м.кв",
  "price1": "Цветная от 440 руб./кв.м"
},
{
  "id": 22,
  "title": "Плитка Эко",
  "src": "assets/kamin/eko.jpg",
  "price": "Серая 400 руб./кв.м",
  "size": "210х210х60; 14 шт 1 м.кв",
  "price1": "Цветная от 440 руб./кв.м"
},
{
  "id": 23,
  "title": "Плитка Брусчатка",
  "src": "assets/kamin/bruschatka.jpg",
  "price": "Серая 400 руб./кв.м",
  "size": "200х100х60; 50 шт 1 м.кв",
  "price1": "Цветная от 440 руб./кв.м."
},
{
  "id": 24,
  "title": "Плитка",
  "src": "assets/kamin/vol.png",
  "price": "Серая 320 руб./кв.м",
  "size": "300х300х30; 11 шт 1 м.кв",
  "price1": "Цветная от 360 руб./кв.м."
},
{
  "id": 25,
  "title": "Бордюр садовый",
  "src": "assets/kamin/bordyur-trotuarnyj-sadovyj-500kh200kh30-mm-768x768.jpg",
  "price": "Серая 40 руб./кв.м",
  "size": "500х200х80;",
  "price1": "Цветная от 50 руб./кв.м."
},
{
  "id": 26,
  "title": "Бордюр садовый",
  "src": "assets/kamin/111722-1.jpeg",
  "price": "Серая 100 руб./кв.м",
  "size": "1000х200х80",
  "price1": "Цветная от 120 руб./кв.м."
},
{
  "id": 27,
  "title": "Бордюр садовый",
  "src": "assets/kamin/891-800x800-1-768x768.jpg",
  "price": "Серая 320 руб./кв.м",
  "size": "300х300х30; 11 шт 1 м.кв",
  "price1": "Цветная от 360 руб./кв.м."
},
{
  "id": 28,
  "title": "Плитка «Паутинка»",
  "src": "assets/kamin/35_35_trot_plitka-500x500.jpg",
  "price": "Серая 400 руб./кв.м",
  "size": "350х350х50; 11 шт 1 м.кв",
  "price1": "Цветная от 440 руб./кв.м."
},
{
  "id": 29,
  "title": "Плитка 12 кирпичей",
  "src": "assets/kamin/12kirpich-1.jpg",
  "price": "Серая 400 руб./кв.м",
  "size": "500х500х50; 4 шт 1 м.кв",
  "price1": "Цветная от 440 руб./кв.м."
}
]
  constructor() { }

  ngOnInit() {
    // this.productService.getAll().subscribe((data: any[]) => {
    //   this.product = data;
    //   console.log(data)
    // });
  }

}
