import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTaskLessThan1230Component } from './add-task-less-than1230.component';

describe('AddTaskLessThan1230Component', () => {
  let component: AddTaskLessThan1230Component;
  let fixture: ComponentFixture<AddTaskLessThan1230Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTaskLessThan1230Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddTaskLessThan1230Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
