import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeServerDetailsComponent } from './home-server-details.component';

describe('HomeServerDetailsComponent', () => {
  let component: HomeServerDetailsComponent;
  let fixture: ComponentFixture<HomeServerDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeServerDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeServerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
