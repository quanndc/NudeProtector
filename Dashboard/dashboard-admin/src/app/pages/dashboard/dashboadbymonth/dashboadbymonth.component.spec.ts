import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboadbymonthComponent } from './dashboadbymonth.component';

describe('DashboadbymonthComponent', () => {
  let component: DashboadbymonthComponent;
  let fixture: ComponentFixture<DashboadbymonthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboadbymonthComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashboadbymonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
