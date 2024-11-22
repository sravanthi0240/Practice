import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CombinedArrayComponent } from './combined-array.component';

describe('CombinedArrayComponent', () => {
  let component: CombinedArrayComponent;
  let fixture: ComponentFixture<CombinedArrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CombinedArrayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CombinedArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
