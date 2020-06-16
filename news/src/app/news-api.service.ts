import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class NewsApiService {
  API_KEY ='378c91a64d5f488aa904eb13773d989e';

  
  constructor(private httpClient: HttpClient) { }
  public getIrelandNews(){
    return this.httpClient.get(`https://newsapi.org/v2/top-headlines?country=ie&apiKey=${this.API_KEY}`);
  }

 
  public getHealthNews(){
    return this.httpClient.get(`http://newsapi.org/v2/top-headlines?country=ie&category=health&apiKey=${this.API_KEY}`)
  }

}
