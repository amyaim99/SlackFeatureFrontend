import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayTechNewsComponent } from './display-tech-news.component';
import { TechNewsService } from '../services/tech-news.service';
import { HttpModule, Http } from '@angular/http';
describe('DisplayTechNewsComponent', () => {
  let component: DisplayTechNewsComponent;
  let fixture: ComponentFixture<DisplayTechNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      declarations: [ DisplayTechNewsComponent ],
      providers: [TechNewsService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayTechNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
