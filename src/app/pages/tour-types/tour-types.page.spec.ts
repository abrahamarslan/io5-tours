import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TourTypesPage } from './tour-types.page';

describe('TourTypesPage', () => {
  let component: TourTypesPage;
  let fixture: ComponentFixture<TourTypesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TourTypesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TourTypesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
