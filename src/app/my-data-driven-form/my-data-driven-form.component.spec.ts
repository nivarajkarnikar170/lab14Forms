import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyDataDrivenFormComponent } from './my-data-driven-form.component';

describe('MyDataDrivenFormComponent', () => {
  let component: MyDataDrivenFormComponent;
  let fixture: ComponentFixture<MyDataDrivenFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyDataDrivenFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyDataDrivenFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
