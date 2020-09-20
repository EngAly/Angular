import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { T1InsideAppComponent } from './t1-inside-app.component';

describe('T1InsideAppComponent', () => {
  let component: T1InsideAppComponent;
  let fixture: ComponentFixture<T1InsideAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ T1InsideAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(T1InsideAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
