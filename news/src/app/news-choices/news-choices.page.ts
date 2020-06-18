import { Component, OnInit } from '@angular/core';
import{ HttpClient} from '@angular/common/http';
import { NewsApiService } from '../news-api.service';

@Component({
  selector: 'app-news-choices',
  templateUrl: './news-choices.page.html',
  styleUrls: ['./news-choices.page.scss'],
})
export class NewsChoicesPage implements OnInit {
  articles; //variable articles



  constructor(private newsApi :NewsApiService) { }

  ngOnInit() {
    this.newsApi.getIrelandNews().subscribe((data)=>{
      console.log(data);
      this.articles = data['articles'];
    });
  }
  




  projects=[

    {
      country:"Irish News",
      pageUrl:"/ireland-news",
      description:"Keep up to date with your news from Ireland"
    },

    {
      country:"UK News",
      pageUrl:"/uk"
    },

    {
      country:"France News",
      pageUrl:"/ireland-news"
    },

    


  ]

 

}
