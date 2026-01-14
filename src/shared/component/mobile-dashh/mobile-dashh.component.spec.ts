import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileDashhComponent } from './mobile-dashh.component';

describe('MobileDashhComponent', () => {
  let component: MobileDashhComponent;
  let fixture: ComponentFixture<MobileDashhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileDashhComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobileDashhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
