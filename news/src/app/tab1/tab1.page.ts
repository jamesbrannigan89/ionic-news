import { Component } from '@angular/core';
import{ HttpClient} from '@angular/common/http';
import { NewsApiService } from '../news-api.service';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  articles; //variable articles


  constructor(private newsApi :NewsApiService ) {
  }

  ngOnInit() {
    this.newsApi.getHealthNews().subscribe((data)=>{
      console.log(data);
      this.articles = data['articles'];
    });
  }
 

  news=[

  { 
    country:'Ireland',
    pageUrl:'/ireland-news',
    image:'/assets/images/ireland.jpg',


  },
  { 
    country:'UK',
    pageUrl:'/news-choices',
    image:'/assets/images/uj.jpg',


  },

  { 
    country:'France',
    pageUrl:'/news-choices',
    image:'/assets/images/france.jpg',

  },

  


  ]

}
