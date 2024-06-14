import { TestBed } from '@angular/core/testing';
import { UserInfoComponent } from './user-info.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserInfoComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(UserInfoComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

});
