import { Component, OnInit } from '@angular/core';
import { QuoteServiceService } from '../services/quote-service.service';
import { Quote } from '../models/quote';

@Component({
  selector: 'app-display-quote',
  templateUrl: './display-quote.component.html',
  styleUrls: ['./display-quote.component.css']
})
export class DisplayQuoteComponent implements OnInit {
  quote: Quote;
  constructor(private quoteService: QuoteServiceService ) { }

  ngOnInit() {
  }
  getQuote() {
    this.quoteService.getQuote()
      .subscribe(res => {
        console.log(res);
        this.quote = res;
        document.getElementById('con').style.display = 'none';
        document.getElementById('con').style.display = 'block';
        
      });
}
clearBox() {
  document.getElementById('con').style.display = 'none';
  }

}
