import { Component, OnInit } from '@angular/core';
import { WebTechNews } from '../models/web-tech-news';
import { WebTechNewsServiceService } from '../services/web-tech-news-service.service';

@Component({
  selector: 'app-tech-web-news',
  templateUrl: './tech-web-news.component.html',
  styleUrls: ['./tech-web-news.component.css']
})
export class TechWebNewsComponent implements OnInit {
  teckNews: WebTechNews;
  
  
    constructor(private techWebService: WebTechNewsServiceService) { }
  
    getTechNews(){
      this.techWebService.getWebTechNews()
      .subscribe(res =>{
        console.log(res);
        console.log('am I working');
        this.teckNews = res;
        document.getElementById('con4').style.display = 'block';
      });
    }
    clearBox() {
      document.getElementById('con4').style.display = 'none';
      }
    ngOnInit() {
    }

}
