import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginfirsttimeComponent } from './loginfirsttime.component';

describe('LoginfirsttimeComponent', () => {
  let component: LoginfirsttimeComponent;
  let fixture: ComponentFixture<LoginfirsttimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginfirsttimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginfirsttimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
