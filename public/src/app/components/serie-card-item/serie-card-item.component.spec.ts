import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SerieCardItemComponent } from './serie-card-item.component';

describe('SerieCardItemComponent', () => {
  let component: SerieCardItemComponent;
  let fixture: ComponentFixture<SerieCardItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SerieCardItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SerieCardItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
