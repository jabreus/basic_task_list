import { Component, ElementRef, ViewChild } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { CreateTaskModel } from 'src/app/models/create-task-model';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-add-task-less-than1230',
  templateUrl: './add-task-less-than1230.component.html',
  styleUrls: ['./add-task-less-than1230.component.css']
})
export class AddTaskLessThan1230Component {
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
      const content = new CreateTaskModel(this.new_task);
      this.taskService.addTask(content).subscribe((res)=>{
        console.log("response",res);
      });
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
