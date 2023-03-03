import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomePageServicesContentServiceService {
  allHomePageServicesContent = {
    service1 : {
      name: "Launch ServiceNow",
      icon: "home",
      serviceContent : "The CIO instance of ServiceNow is our internal platform to modernize IT Service Management tools and processes."
    },
    service2 : {
      name: "ServiceNow News",
      icon: "newspaper",
      serviceContent : "Remain up to date with the latest news and releases of the CIO instance with our blog!"
    },
    service3 : {
      name: "Knowledge Base",
      icon: "book",
      serviceContent : "Browse and Search for articles, rate or submit feedback"
    },
    service4 : {
      name: "Get Help",
      icon: "emoji_people",
      serviceContent : "Contact support to make a request, or report a problem"
    }
 }

 getallHomePageServicesContent(){
  return this.allHomePageServicesContent;
 }
  constructor() {

   }
}
