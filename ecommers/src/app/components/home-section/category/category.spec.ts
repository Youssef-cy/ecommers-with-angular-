import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Catoegories } from './catoegories';

describe('Catoegories', () => {
  let component: Catoegories;
  let fixture: ComponentFixture<Catoegories>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Catoegories]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Catoegories);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
