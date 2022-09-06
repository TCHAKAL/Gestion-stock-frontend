import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailMouvementsStockComponent } from './detail-mouvements-stock.component';

describe('DetailMouvementsStockComponent', () => {
  let component: DetailMouvementsStockComponent;
  let fixture: ComponentFixture<DetailMouvementsStockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailMouvementsStockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailMouvementsStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
