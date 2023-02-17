import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagevalueComponent } from './pagevalue.component';

describe('PagevalueComponent', () => {
  let component: PagevalueComponent;
  let fixture: ComponentFixture<PagevalueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagevalueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagevalueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
