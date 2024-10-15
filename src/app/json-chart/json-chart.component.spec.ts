import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonChartComponent } from './json-chart.component';

describe('JsonChartComponent', () => {
  let component: JsonChartComponent;
  let fixture: ComponentFixture<JsonChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsonChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JsonChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
