import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpimgComponent } from './upimg.component';

describe('UpimgComponent', () => {
  let component: UpimgComponent;
  let fixture: ComponentFixture<UpimgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpimgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpimgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
