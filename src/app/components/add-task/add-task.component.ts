import {Component, ElementRef, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { CreateTaskModel } from 'src/app/models/create-task-model';
import { CreatedTaskResponseModel } from 'src/app/models/created-task-response-model';
import { TaskService } from 'src/app/services/task.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent{
  new_task = "";
  flag = false;
  list_of_tasks: CreatedTaskResponseModel[] = [];
  @ViewChild('taskInput')
  taskInput!: ElementRef;
  accessToken = this.userService.getToken();
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
      });
      this.taskService.getTaskList().subscribe((res:any)=>{
        this.list_of_tasks = res.content;
      })
    }
  }

  logout(){
    this.userService.cleanToken();
    this.router.navigate(['/']);
  }
  
  ngOnInit(){
    document.getElementById('first_task_input')!.onclick = () =>{
      this.flag = true;
      setTimeout(()=>{
        document.getElementById('task_input')!.focus();
      })
    }
  }
  
  constructor(private taskService: TaskService, private userService: UserService, private router: Router){
  }
}



