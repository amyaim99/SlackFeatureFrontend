import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechWebNewsComponent } from './tech-web-news.component';
import { WebTechNewsServiceService } from '../services/web-tech-news-service.service';
import { HttpModule } from '@angular/http';

describe('TechWebNewsComponent', () => {
  let component: TechWebNewsComponent;
  let fixture: ComponentFixture<TechWebNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechWebNewsComponent ],
      imports: [HttpModule],
      providers: [WebTechNewsServiceService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechWebNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
