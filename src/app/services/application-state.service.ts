import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApplicationStateService {

  private isLessThan1230: boolean;

  constructor() {
    if (window.innerWidth < 1230) {
      this.isLessThan1230 = true;
    } else {
      this.isLessThan1230 = false;
    }
  }

  public getIsLessThan1230(): boolean {
    return this.isLessThan1230;
  }
}
