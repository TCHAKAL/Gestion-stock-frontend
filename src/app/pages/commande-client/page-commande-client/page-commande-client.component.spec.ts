import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCommandeClientComponent } from './page-commande-client.component';

describe('PageCommandeClientComponent', () => {
  let component: PageCommandeClientComponent;
  let fixture: ComponentFixture<PageCommandeClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageCommandeClientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageCommandeClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
