import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { T2BindingBasicsComponent } from './t2-binding-basics.component';

describe('T2BindingBasicsComponent', () => {
  let component: T2BindingBasicsComponent;
  let fixture: ComponentFixture<T2BindingBasicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ T2BindingBasicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(T2BindingBasicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
