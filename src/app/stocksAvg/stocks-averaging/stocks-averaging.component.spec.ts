/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { StocksAveragingComponent } from './stocks-averaging.component';

describe('StocksAveragingComponent', () => {
  let component: StocksAveragingComponent;
  let fixture: ComponentFixture<StocksAveragingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StocksAveragingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StocksAveragingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
