import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FrenchNewsPage } from './french-news.page';

describe('FrenchNewsPage', () => {
  let component: FrenchNewsPage;
  let fixture: ComponentFixture<FrenchNewsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrenchNewsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FrenchNewsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
