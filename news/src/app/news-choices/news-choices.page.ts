import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-news-choices',
  templateUrl: './news-choices.page.html',
  styleUrls: ['./news-choices.page.scss'],
})
export class NewsChoicesPage implements OnInit {
 


  constructor() { }

  ngOnInit() {
   
  }

  newsSources=[

    {
      country:"Irish News",
      pageUrl:"/ireland-news",
      description:"Keep up to date with your news from Ireland"
    },

    {
      country:"UK News",
      pageUrl:"/ireland-news"
    },

    {
      country:"France News",
      pageUrl:"/ireland-news"
    },

    


  ]

 

}
