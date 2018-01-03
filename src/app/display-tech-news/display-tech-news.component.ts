import { Component, OnInit } from '@angular/core';
import { TechNews } from '../models/tech-news';
import { TechNewsService } from '../services/tech-news.service';

@Component({
  selector: 'app-display-tech-news',
  templateUrl: './display-tech-news.component.html',
  styleUrls: ['./display-tech-news.component.css']
})
export class DisplayTechNewsComponent implements OnInit {

  teckNews: TechNews;
  
  
    constructor(private teckService: TechNewsService) { }
  
    getTechNews(){
      this.teckService.getTechNews()
      .subscribe(res =>{
        console.log(res);
        console.log('am I working');
        this.teckNews = res;
        document.getElementById('con3').style.display = 'block';
      });
    }
    clearBox() {
      document.getElementById('con3').style.display = 'none';
      }
    ngOnInit() {
    }

}
