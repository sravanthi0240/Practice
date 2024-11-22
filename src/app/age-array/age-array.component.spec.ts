import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgeArrayComponent } from './age-array.component';

describe('AgeArrayComponent', () => {
  let component: AgeArrayComponent;
  let fixture: ComponentFixture<AgeArrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgeArrayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgeArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
