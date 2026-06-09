import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeAbonnement } from './liste-abonnement';

describe('ListeAbonnement', () => {
  let component: ListeAbonnement;
  let fixture: ComponentFixture<ListeAbonnement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListeAbonnement]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeAbonnement);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
