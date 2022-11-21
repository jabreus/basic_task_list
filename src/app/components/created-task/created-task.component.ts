import { Component, Input, OnChanges } from '@angular/core';
import { CreatedTaskResponseModel } from 'src/app/models/created-task-response-model';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-created-task',
  templateUrl: './created-task.component.html',
  styleUrls: ['./created-task.component.css']
})
export class CreatedTaskComponent implements OnChanges{
  @Input() tasks: CreatedTaskResponseModel[] = [];
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

  ngOnChanges() {
    this.taskService.getTaskList().subscribe((res:any)=>{
      this.tasks = res.content;
    })
  }

  ngOnInit(){
  }
  constructor(private taskService: TaskService){}
}
