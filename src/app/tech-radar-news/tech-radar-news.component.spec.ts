import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechRadarNewsComponent } from './tech-radar-news.component';
import { TechRadarNewsService } from '../services/tech-radar-news.service';
import { HttpModule } from '@angular/http';

describe('TechRadarNewsComponent', () => {
  let component: TechRadarNewsComponent;
  let fixture: ComponentFixture<TechRadarNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechRadarNewsComponent ],
      imports: [HttpModule],
      providers: [TechRadarNewsService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechRadarNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
