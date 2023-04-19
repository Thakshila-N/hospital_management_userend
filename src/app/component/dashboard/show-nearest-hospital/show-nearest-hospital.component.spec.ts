import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowNearestHospitalComponent } from './show-nearest-hospital.component';

describe('ShowNearestHospitalComponent', () => {
  let component: ShowNearestHospitalComponent;
  let fixture: ComponentFixture<ShowNearestHospitalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowNearestHospitalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowNearestHospitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
