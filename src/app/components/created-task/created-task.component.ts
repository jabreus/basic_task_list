import { Component } from '@angular/core';

@Component({
  selector: 'app-created-task',
  templateUrl: './created-task.component.html',
  styleUrls: ['./created-task.component.css']
})
export class CreatedTaskComponent {
  text = ["#important", "Write to", "some@gmail.com", "and tell","@natasha","about","https://staging.alldone.app"]

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
}
