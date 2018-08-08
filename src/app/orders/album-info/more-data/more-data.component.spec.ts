import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreDataComponent } from './more-data.component';

describe('MoreDataComponent', () => {
  let component: MoreDataComponent;
  let fixture: ComponentFixture<MoreDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoreDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
