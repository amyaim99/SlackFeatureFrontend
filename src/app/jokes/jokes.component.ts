import { Component, OnInit } from '@angular/core';
import { Joke } from '../models/joke';
import { JokeService } from '../services/joke.service';

@Component({
  selector: 'app-jokes',
  templateUrl: './jokes.component.html',
  styleUrls: ['./jokes.component.css']
})
export class JokesComponent implements OnInit {

  joke: Joke;
  constructor(private jokeService: JokeService) { }g

  getJoke() {
    this.jokeService.getJoke()
    .subscribe(res => {
      console.log(res);
      this.joke = res;
      document.getElementById('con2').style.display = 'block';
    });
  }
  clearBox() {
    document.getElementById('con2').style.display = 'none';
    }
  ngOnInit() {
  }
}
