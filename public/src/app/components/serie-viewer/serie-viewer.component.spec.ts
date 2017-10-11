import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SerieViewerComponent } from './serie-viewer.component';

describe('SerieViewerComponent', () => {
  let component: SerieViewerComponent;
  let fixture: ComponentFixture<SerieViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SerieViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SerieViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
