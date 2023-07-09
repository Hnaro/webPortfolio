import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActiveLinkService {
  isHomeActive: string = "";
  isProjectActive: boolean = false;
  constructor() {
  }
  setHomeState(status: any) {
    this.isHomeActive = status;
  }
  getHomeState() {
    return this.isHomeActive;
  }
  setProjectState(status: boolean) {
    this.isProjectActive = status;
  }
  getProjectState() {
    return this.isProjectActive;
  }

}
