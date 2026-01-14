import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarDashhComponent } from './car-dashh.component';

describe('CarDashhComponent', () => {
  let component: CarDashhComponent;
  let fixture: ComponentFixture<CarDashhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarDashhComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarDashhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
