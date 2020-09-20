import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { T6PipesComponent } from './t6-pipes.component';

describe('T6PipesComponent', () => {
  let component: T6PipesComponent;
  let fixture: ComponentFixture<T6PipesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ T6PipesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(T6PipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
