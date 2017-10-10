import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceCardItemComponent } from './device-card-item.component';

describe('DeviceCardItemComponent', () => {
  let component: DeviceCardItemComponent;
  let fixture: ComponentFixture<DeviceCardItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeviceCardItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceCardItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
