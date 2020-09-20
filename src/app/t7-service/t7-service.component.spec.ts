import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { T7ServiceComponent } from './t7-service.component';

describe('T7ServiceComponent', () => {
  let component: T7ServiceComponent;
  let fixture: ComponentFixture<T7ServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ T7ServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(T7ServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
