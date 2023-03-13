import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { UIShellModule, GridModule} from 'carbon-components-angular';
import { HeaderNavbarLinksService } from './header/header-navbar-links.service';
import { HomePageServicesContentServiceService } from './home-page-services-contents/home-page-services-content-service.service';

import { FrontPageSearchbarComponent } from './front-page-searchbar/front-page-searchbar.component';

// import { MatIconModule } from '@angular/material/icon';
import { HomePageServicesContentsComponent } from './home-page-services-contents/home-page-services-contents.component';
import { IconModule} from 'carbon-components-angular';
import { SearchModule} from 'carbon-components-angular';
import { IconService } from 'carbon-components-angular'

// import * as Icons from "@carbon/icons-angular"
import { HomeModule } from "@carbon/icons-angular"

// import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ApiManagementComponent } from './api-management/api-management.component';

import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FrontPageSearchbarComponent,
    HomePageServicesContentsComponent,
    ApiManagementComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UIShellModule,
    GridModule,
    IconModule,
    SearchModule,
    HomeModule,
    MatIconModule, 
    MatInputModule, 
    MatFormFieldModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'APIManagement', component: ApiManagementComponent},
      // {path: ':feature', component: FeaturesComponent},
      {path: '**', component: PageNotFoundComponent}
    ])
  ],
  providers: [HeaderNavbarLinksService, IconService, HomePageServicesContentServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
