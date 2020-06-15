import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewsChoicesPage } from './news-choices.page';

describe('NewsChoicesPage', () => {
  let component: NewsChoicesPage;
  let fixture: ComponentFixture<NewsChoicesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsChoicesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewsChoicesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
