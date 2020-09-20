import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BindData2modelComponent } from './bind-data2model.component';

describe('BindData2modelComponent', () => {
  let component: BindData2modelComponent;
  let fixture: ComponentFixture<BindData2modelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BindData2modelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BindData2modelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
