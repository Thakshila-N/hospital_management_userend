import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookOpdNumberComponent } from './book-opd-number.component';

describe('BookOpdNumberComponent', () => {
  let component: BookOpdNumberComponent;
  let fixture: ComponentFixture<BookOpdNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookOpdNumberComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookOpdNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
