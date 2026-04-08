import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowToImplement } from './how-to-implement';

describe('HowToImplement', () => {
  let component: HowToImplement;
  let fixture: ComponentFixture<HowToImplement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HowToImplement]
    })
      .compileComponents();

    fixture = TestBed.createComponent(HowToImplement);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
