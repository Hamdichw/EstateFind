import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TermeComponent } from './terme.component';

describe('TermeComponent', () => {
  let component: TermeComponent;
  let fixture: ComponentFixture<TermeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TermeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TermeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
