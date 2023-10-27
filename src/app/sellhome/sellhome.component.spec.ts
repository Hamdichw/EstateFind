import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellhomeComponent } from './sellhome.component';

describe('SellhomeComponent', () => {
  let component: SellhomeComponent;
  let fixture: ComponentFixture<SellhomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellhomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
