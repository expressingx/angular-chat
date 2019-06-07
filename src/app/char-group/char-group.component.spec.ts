import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharGroupComponent } from './char-group.component';

describe('CharGroupComponent', () => {
  let component: CharGroupComponent;
  let fixture: ComponentFixture<CharGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
