import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = "Arm Стройка";
  constructor(private titleService: Title, private metaService: Meta){}
  ngOnInit(): void {
    this.titleService.setTitle(this.title);
    this.metaService.addTags([
      {name: 'keywords', content: 'Газон, гранит, Плитка, Бордюр'},
      {name: 'description', content: 'Пушкинский район деревня Костино дом 6. Поставки готовой продукции происходят по всему Московская область. Из производителей тротуарной плитки наша компания зарекомендовала себя как добросовестный поставщик строительных материалов. В лице наших партнёров, только ответственные поставщики и заказчики.'},
      {name: 'robots', content: 'index, follow'}
    ]);
  }
}
