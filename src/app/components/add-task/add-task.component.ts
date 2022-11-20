import {Component, ElementRef, ViewChild} from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { TaskService } from 'src/app/services/task.service';

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
  accessToken = this.cookieService.get("accessToken");
  cancel(){
    this.new_task = ""
    this.flag = false;
  }

  addTask(){
    if(!this.new_task){
      this.flag = false;
    }else{
      
      // this.taskService.addTask()
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
  constructor(private taskService: TaskService, private cookieService: CookieService){}
}



