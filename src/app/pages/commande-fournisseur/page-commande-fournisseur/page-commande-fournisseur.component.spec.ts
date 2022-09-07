import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCommandeFournisseurComponent } from './page-commande-fournisseur.component';

describe('PageCommandeFournisseurComponent', () => {
  let component: PageCommandeFournisseurComponent;
  let fixture: ComponentFixture<PageCommandeFournisseurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageCommandeFournisseurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageCommandeFournisseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
