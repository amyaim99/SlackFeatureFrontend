import { Component, OnInit } from '@angular/core';
import { TechRadarNews } from '../models/tech-radar-news';
import { TechRadarNewsService } from '../services/tech-radar-news.service';

@Component({
  selector: 'app-tech-radar-news',
  templateUrl: './tech-radar-news.component.html',
  styleUrls: ['./tech-radar-news.component.css']
})
export class TechRadarNewsComponent implements OnInit {

  radarNews: TechRadarNews;
  
  
    constructor(private techRadarService: TechRadarNewsService) { }
  
    getTechRadarNews(){
      this.techRadarService.getTechRadarNews()
      .subscribe(res =>{
        console.log(res);
        this.radarNews = res;
        document.getElementById('con5').style.display = 'block';
      });
    }
    clearBox() {
      document.getElementById('con5').style.display = 'none';
      }
    ngOnInit() {
    }

}
