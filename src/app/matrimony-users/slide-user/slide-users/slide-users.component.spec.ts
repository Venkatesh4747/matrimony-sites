import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideUsersComponent } from './slide-users.component';

describe('SlideUsersComponent', () => {
  let component: SlideUsersComponent;
  let fixture: ComponentFixture<SlideUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlideUsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
