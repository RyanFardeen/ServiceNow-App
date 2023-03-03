import { HomePageServicesContentServiceService } from './home-page-services-content-service.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page-services-contents',
  templateUrl: './home-page-services-contents.component.html',
  styleUrls: ['./home-page-services-contents.component.scss']
})
export class HomePageServicesContentsComponent {
    allHomeServices;
    constructor(service : HomePageServicesContentServiceService){
      this.allHomeServices = service.getallHomePageServicesContent();
    }
}
