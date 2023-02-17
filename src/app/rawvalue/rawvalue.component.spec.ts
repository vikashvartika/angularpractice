import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RawvalueComponent } from './rawvalue.component';

describe('RawvalueComponent', () => {
  let component: RawvalueComponent;
  let fixture: ComponentFixture<RawvalueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RawvalueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RawvalueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
