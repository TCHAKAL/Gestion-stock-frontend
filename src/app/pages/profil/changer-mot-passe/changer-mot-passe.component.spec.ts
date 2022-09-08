import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangerMotPasseComponent } from './changer-mot-passe.component';

describe('ChangerMotPasseComponent', () => {
  let component: ChangerMotPasseComponent;
  let fixture: ComponentFixture<ChangerMotPasseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangerMotPasseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangerMotPasseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
