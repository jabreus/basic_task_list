import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreatedTaskComponent } from './created-task.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('CreatedTaskComponent', () => {
  let component: CreatedTaskComponent;
  let fixture: ComponentFixture<CreatedTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[ReactiveFormsModule],
      declarations: [ CreatedTaskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatedTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
