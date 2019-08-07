import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BalancesDisplayComponent } from './balances-display.component';

describe('BalancesDisplayComponent', () => {
  let component: BalancesDisplayComponent;
  let fixture: ComponentFixture<BalancesDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BalancesDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BalancesDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
