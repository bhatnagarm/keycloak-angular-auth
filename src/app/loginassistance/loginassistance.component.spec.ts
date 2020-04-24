import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginassistanceComponent } from './loginassistance.component';

describe('LoginassistanceComponent', () => {
  let component: LoginassistanceComponent;
  let fixture: ComponentFixture<LoginassistanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginassistanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginassistanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
