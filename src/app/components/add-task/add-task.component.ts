import {Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent{
  new_task = "";
  flag = false;
  @ViewChild('taskInput')
  taskInput!: ElementRef;

  cancel(){
    this.new_task = ""
    this.flag = false;
  }

  addTask(){
    if(!this.new_task){
      this.flag = false;
    }
  }
  
  ngOnInit(){
    document.getElementById('first_task_input')!.onclick = () =>{
      this.flag = true;
      setTimeout(()=>{
        document.getElementById('task_input')!.focus();
      })
    }
  }
}



