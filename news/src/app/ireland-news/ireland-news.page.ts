import { Component, OnInit } from '@angular/core';
import{ HttpClient} from '@angular/common/http';
import { NewsApiService } from '../news-api.service';

@Component({
  selector: 'app-ireland-news',
  templateUrl: './ireland-news.page.html',
  styleUrls: ['./ireland-news.page.scss'],
})
export class IrelandNewsPage implements OnInit {
  articles; //variable articles


  constructor(private newsApi :NewsApiService) { }

  ngOnInit() {
    this.newsApi.getIrelandNews().subscribe((data)=>{
      console.log(data);
      this.articles = data['articles'];
    });
  }

}
