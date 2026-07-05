import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartPage } from './chart-page';

describe('ChartPage', () => {
  let component: ChartPage;
  let fixture: ComponentFixture<ChartPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChartPage],
    }).compileComponents();

    fixture = TestBed.createComponent(ChartPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
