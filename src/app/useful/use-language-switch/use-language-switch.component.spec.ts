import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UseLanguageSwitchComponent } from './use-language-switch.component';

describe('UseLanguageSwitchComponent', () => {
  let component: UseLanguageSwitchComponent;
  let fixture: ComponentFixture<UseLanguageSwitchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UseLanguageSwitchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UseLanguageSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
