import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UKPage } from './uk.page';

describe('UKPage', () => {
  let component: UKPage;
  let fixture: ComponentFixture<UKPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UKPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UKPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
