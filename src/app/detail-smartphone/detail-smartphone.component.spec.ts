import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailSmartphoneComponent } from './detail-smartphone.component';

describe('DetailSmartphoneComponent', () => {
  let component: DetailSmartphoneComponent;
  let fixture: ComponentFixture<DetailSmartphoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailSmartphoneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailSmartphoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
