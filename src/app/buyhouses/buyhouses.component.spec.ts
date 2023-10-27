import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyhousesComponent } from './buyhouses.component';

describe('BuyhousesComponent', () => {
  let component: BuyhousesComponent;
  let fixture: ComponentFixture<BuyhousesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyhousesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuyhousesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
