import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbonnementsModule } from './abonnements-module';

describe('AbonnementsModule', () => {
  let component: AbonnementsModule;
  let fixture: ComponentFixture<AbonnementsModule>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AbonnementsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbonnementsModule);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
