import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IrelandNewsPage } from './ireland-news.page';

describe('IrelandNewsPage', () => {
  let component: IrelandNewsPage;
  let fixture: ComponentFixture<IrelandNewsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IrelandNewsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IrelandNewsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
