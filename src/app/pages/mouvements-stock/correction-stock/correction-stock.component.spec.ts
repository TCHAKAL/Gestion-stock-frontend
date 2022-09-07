import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorrectionStockComponent } from './correction-stock.component';

describe('CorrectionStockComponent', () => {
  let component: CorrectionStockComponent;
  let fixture: ComponentFixture<CorrectionStockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorrectionStockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CorrectionStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
