import { Component } from '@angular/core';
import { HeaderNavbarLinksService } from './header-navbar-links.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  userFirstName = "";
  allLinksObj;
  constructor(service : HeaderNavbarLinksService){
    this.userFirstName = service.getUserName();
    this.allLinksObj = service.getAllLinks();
  }

  generateLink(sublink: string){
    return '/'+sublink.replace(' ','');
  }
}
