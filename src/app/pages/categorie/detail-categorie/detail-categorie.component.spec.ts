import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailCategorieComponent } from './detail-categorie.component';

describe('DetailCategorieComponent', () => {
  let component: DetailCategorieComponent;
  let fixture: ComponentFixture<DetailCategorieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailCategorieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailCategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
