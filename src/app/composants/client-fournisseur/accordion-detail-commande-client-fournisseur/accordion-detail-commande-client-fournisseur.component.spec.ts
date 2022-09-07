import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionDetailCommandeClientFournisseurComponent } from './accordion-detail-commande-client-fournisseur.component';

describe('AccordionDetailCommandeClientFournisseurComponent', () => {
  let component: AccordionDetailCommandeClientFournisseurComponent;
  let fixture: ComponentFixture<AccordionDetailCommandeClientFournisseurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccordionDetailCommandeClientFournisseurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccordionDetailCommandeClientFournisseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
