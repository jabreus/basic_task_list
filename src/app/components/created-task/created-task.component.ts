import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { TaskService } from 'src/app/services/task.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-created-task',
  templateUrl: './created-task.component.html',
  styleUrls: ['./created-task.component.css']
})
export class CreatedTaskComponent{
  tasks = ["#important Write to some@gmail.com and tell her @natash about https://staging.alldone.app", 
            "#important Write to some@gmail.com and tell her @bryan about https://staging.alldone.app",
            "#not-important Write to someother@gmail.com and tell her @will about https://sssss.alldone.app"
          ]
  // tasks = [];
  text: string [] = [];

  convertTextIntoWords(task: string){
    return task.split(" ");
  }

  firstLetter(word: string){
    return word.charAt(0);
  }
  removeFirstCharacter(word: string){
    return word.substring(1);
  }

  isAnEmail(word: string) {
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return word.match(validRegex);
  }

  isAnURL(word: string) {
    var pattern = new RegExp('^(https?:\\/\\/)?'+ 
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ 
      '((\\d{1,3}\\.){3}\\d{1,3}))'+ 
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+
      '(\\?[;&a-z\\d%_.~+=-]*)?'+
      '(\\#[-a-z\\d_]*)?$','i');
    return pattern.test(word);
  }
  ngOnInit(){
    this.taskService.getTaskList().subscribe((res:any)=>{
      this.tasks = res.content;
    })
  }
  constructor(private cookieService: CookieService, private taskService: TaskService){}
}
