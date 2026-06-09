import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeEtudiant } from './liste-etudiant';

describe('ListeEtudiant', () => {
  let component: ListeEtudiant;
  let fixture: ComponentFixture<ListeEtudiant>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListeEtudiant]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeEtudiant);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
