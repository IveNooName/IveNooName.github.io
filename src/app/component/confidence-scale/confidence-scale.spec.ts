import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfidenceScale } from './confidence-scale';

describe('ConfidenceScale', () => {
  let component: ConfidenceScale;
  let fixture: ComponentFixture<ConfidenceScale>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfidenceScale],
    }).compileComponents();

    fixture = TestBed.createComponent(ConfidenceScale);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
