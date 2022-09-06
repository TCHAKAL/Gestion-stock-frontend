import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMouvementsStockComponent } from './page-mouvements-stock.component';

describe('PageMouvementsStockComponent', () => {
  let component: PageMouvementsStockComponent;
  let fixture: ComponentFixture<PageMouvementsStockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageMouvementsStockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageMouvementsStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
