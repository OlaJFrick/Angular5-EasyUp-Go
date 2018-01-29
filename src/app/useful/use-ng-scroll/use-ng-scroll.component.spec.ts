import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UseNgScrollComponent } from './use-ng-scroll.component';

describe('UseNgScrollComponent', () => {
  let component: UseNgScrollComponent;
  let fixture: ComponentFixture<UseNgScrollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UseNgScrollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UseNgScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
