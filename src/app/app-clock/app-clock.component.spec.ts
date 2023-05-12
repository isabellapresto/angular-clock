import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppClockComponent } from './app-clock.component';

describe('AppClockComponent', () => {
  let component: AppClockComponent;
  let fixture: ComponentFixture<AppClockComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppClockComponent]
    });
    fixture = TestBed.createComponent(AppClockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
