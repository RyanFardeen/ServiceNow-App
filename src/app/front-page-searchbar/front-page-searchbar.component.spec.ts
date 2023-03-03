import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontPageSearchbarComponent } from './front-page-searchbar.component';

describe('FrontPageSearchbarComponent', () => {
  let component: FrontPageSearchbarComponent;
  let fixture: ComponentFixture<FrontPageSearchbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrontPageSearchbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrontPageSearchbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
