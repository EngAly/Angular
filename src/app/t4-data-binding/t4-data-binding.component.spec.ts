import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { T4DataBindingComponent } from './t4-data-binding.component';

describe('T4DataBindingComponent', () => {
  let component: T4DataBindingComponent;
  let fixture: ComponentFixture<T4DataBindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ T4DataBindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(T4DataBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
