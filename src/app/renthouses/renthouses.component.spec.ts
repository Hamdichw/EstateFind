import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenthousesComponent } from './renthouses.component';

describe('RenthousesComponent', () => {
  let component: RenthousesComponent;
  let fixture: ComponentFixture<RenthousesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RenthousesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RenthousesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
