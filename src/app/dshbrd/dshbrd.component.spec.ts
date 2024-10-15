import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DshbrdComponent } from './dshbrd.component';

describe('DshbrdComponent', () => {
  let component: DshbrdComponent;
  let fixture: ComponentFixture<DshbrdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DshbrdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DshbrdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
