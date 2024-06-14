import { TestBed } from '@angular/core/testing';
import { CardRegisterComponent } from './card-register.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardRegisterComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(CardRegisterComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

});
