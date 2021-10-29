import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AboutKaffeKildenComponent } from './about-kaffe-kilden.component';

describe('AboutKaffeKildenComponent', () => {
  let component: AboutKaffeKildenComponent;
  let fixture: ComponentFixture<AboutKaffeKildenComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutKaffeKildenComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AboutKaffeKildenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
