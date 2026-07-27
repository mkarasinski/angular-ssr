import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadingsChart } from './readings-chart';

describe('ReadingsChart', () => {
  let component: ReadingsChart;
  let fixture: ComponentFixture<ReadingsChart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReadingsChart],
    }).compileComponents();

    fixture = TestBed.createComponent(ReadingsChart);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
