import {Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent{
  new_task = "";
  @ViewChild('taskInput')
  taskInput!: ElementRef;

  onInputChange(){
    setTimeout(()=>{
      this.taskInput.nativeElement.focus();
    })
  }

  cancel(){
    this.new_task = ""
  }

  addTask(){
    
  }

  save(event: any){
    console.log("You entered: ", event.target.value);
  }
}



