import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JokesComponent } from './jokes.component';
import { HttpModule, Http } from '@angular/http';
import { JokeService } from '../services/joke.service';

describe('JokesComponent', () => {
  let component: JokesComponent;
  let fixture: ComponentFixture<JokesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [JokeService],
      declarations: [ JokesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JokesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
