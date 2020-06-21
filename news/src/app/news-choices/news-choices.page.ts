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
      description:"Keep up to date with your news from Ireland",
      imageUrl:'assets/images/ireland.jpg'
    },

    {
      country:"UK News",
      pageUrl:"/uk",
      imageUrl:'assets/images/uk.jpg'
    },

    {
      country:"France News",
      pageUrl:"/french-news",
      imageUrl:'assets/images/france.jpg'
    },

    


  ]

 

}
