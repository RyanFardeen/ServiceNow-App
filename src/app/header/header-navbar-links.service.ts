import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderNavbarLinksService {
  
  username = "User"
  allLinks = {
    "API & Access Management" : ["API Management","Group Management","Temporary Permissions"],
    "Integrations" : ["PagerDuty Integration","Jira Integration","AnsibleTower Integration", "IT Support Readiness", "Monitoring@IBM"],
    "Developers" : ["Change and Release Calendar","Developer Documentation"],
    Requests : null,
    Support : null
  }

  getUserName(){
    return this.username;
  }

  getAllLinks(){
    return this.allLinks;
  }
 
  constructor() { }
}
