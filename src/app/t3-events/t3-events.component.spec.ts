import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { T3EventsComponent } from './t3-events.component';

describe('T3EventsComponent', () => {
  let component: T3EventsComponent;
  let fixture: ComponentFixture<T3EventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ T3EventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(T3EventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
