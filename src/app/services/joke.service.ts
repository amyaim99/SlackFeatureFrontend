import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class JokeService {
  constructor(private http: Http) { }
  
    getJoke(): Observable<any>{
      return this.http.get("http://localhost:8080/joke")
      .map(res=>res.json());
    }

}
