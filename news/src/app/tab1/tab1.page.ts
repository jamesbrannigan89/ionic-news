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
    this.newsApi.getSportNews().subscribe((data)=>{
      console.log(data);
      this.articles = data['articles'];
    });
  }
 

  newsChoice=[

  { 
    country:'Ireland',
    pageUrl:'/ireland-news',
   


  },
  { 
    country:'UK',
    pageUrl:'/uk',


  },

  { 
    country:'France',
    pageUrl:'/french-news',

  },

  


  ]

}
