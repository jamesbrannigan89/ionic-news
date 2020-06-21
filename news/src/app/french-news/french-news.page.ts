import { Component, OnInit } from '@angular/core';
import{ HttpClient} from '@angular/common/http';
import { NewsApiService } from '../news-api.service';

@Component({
  selector: 'app-french-news',
  templateUrl: './french-news.page.html',
  styleUrls: ['./french-news.page.scss'],
})
export class FrenchNewsPage implements OnInit {
  articles;

  constructor(private newsApi :NewsApiService) { }

  ngOnInit() {
    this.newsApi.getFrenchNews().subscribe((data)=>{
      console.log(data);
      this.articles = data['articles'];
    });
  }

}
