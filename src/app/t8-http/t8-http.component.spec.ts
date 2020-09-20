import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { T8HttpComponent } from './t8-http.component';

describe('T8HttpComponent', () => {
  let component: T8HttpComponent;
  let fixture: ComponentFixture<T8HttpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ T8HttpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(T8HttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
