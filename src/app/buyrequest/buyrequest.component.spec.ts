import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyrequestComponent } from './buyrequest.component';

describe('BuyrequestComponent', () => {
  let component: BuyrequestComponent;
  let fixture: ComponentFixture<BuyrequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyrequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuyrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
