import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionDetailMouvementsStockComponent } from './accordion-detail-mouvements-stock.component';

describe('AccordionDetailMouvementsStockComponent', () => {
  let component: AccordionDetailMouvementsStockComponent;
  let fixture: ComponentFixture<AccordionDetailMouvementsStockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccordionDetailMouvementsStockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccordionDetailMouvementsStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
