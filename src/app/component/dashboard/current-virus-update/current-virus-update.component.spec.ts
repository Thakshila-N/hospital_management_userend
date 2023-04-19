import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentVirusUpdateComponent } from './current-virus-update.component';

describe('CurrentVirusUpdateComponent', () => {
  let component: CurrentVirusUpdateComponent;
  let fixture: ComponentFixture<CurrentVirusUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentVirusUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrentVirusUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
