import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboadbydayComponent } from './dashboadbyday.component';

describe('DashboadbydayComponent', () => {
  let component: DashboadbydayComponent;
  let fixture: ComponentFixture<DashboadbydayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboadbydayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashboadbydayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
