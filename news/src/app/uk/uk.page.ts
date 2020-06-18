import { Component, OnInit } from '@angular/core';
import{ HttpClient} from '@angular/common/http';
import { NewsApiService } from '../news-api.service';

@Component({
  selector: 'app-uk',
  templateUrl: './uk.page.html',
  styleUrls: ['./uk.page.scss'],
})
export class UKPage implements OnInit {
  articles;
 

  constructor(private newsApi :NewsApiService) { }

  ngOnInit() {
    this.newsApi.getIrelandNews().subscribe((data)=>{
      console.log(data);
      this.articles = data['articles'];
    });
  }

}
