import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentrequestComponent } from './rentrequest.component';

describe('RentrequestComponent', () => {
  let component: RentrequestComponent;
  let fixture: ComponentFixture<RentrequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentrequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RentrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
