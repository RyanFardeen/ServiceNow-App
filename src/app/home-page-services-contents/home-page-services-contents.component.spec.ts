import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageServicesContentsComponent } from './home-page-services-contents.component';

describe('HomePageServicesContentsComponent', () => {
  let component: HomePageServicesContentsComponent;
  let fixture: ComponentFixture<HomePageServicesContentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePageServicesContentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomePageServicesContentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
