import { Injectable } from '@angular/core';
import {Meta} from '@angular/platform-browser';

@Injectable()
export class SeoService {

  constructor(private meta: Meta) { }

  generalTags(conf) {
    conf = {
      title: 'Стройка Сергиево-Посадский' ,
      description: 'Укладка тротуарной плитки, брусчатки бордюров в Пушкино и Пушкинском районе,(Костино), Ивантеевка, Щёлково, Королёв. укладка брусчатки в Пушкино,Щёлково',
      image: 'assets/buil/cost-img.png',
      slug: '',
      ...conf
    }
    this.meta.updateTag({name: 'twitter:card', content: 'summery'});
    this.meta.updateTag({name: 'twitter:site', content: '@angularfirebase'});
    this.meta.updateTag({name: 'twitter:title', content: conf.title});
    this.meta.updateTag({name: 'twitter:image', content: conf.image});

    this.meta.updateTag({property: 'og:type', content: 'article'});
    this.meta.updateTag({property: 'og:site_name', content: 'Стройка Сергиево-Посадский'});
    this.meta.updateTag({property: 'og:title', content: conf.title});
    this.meta.updateTag({property: 'og:description', content:  conf.description});
    this.meta.updateTag({property: 'og:image', content:  conf.image});
    this.meta.updateTag({property: 'og:url', content:  `http://armstroy.gsodeveloper.com/${conf.slug}`})
}

}
