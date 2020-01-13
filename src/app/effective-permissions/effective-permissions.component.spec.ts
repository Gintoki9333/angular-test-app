import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EffectivePermissionsComponent } from './effective-permissions.component';

describe('EffectivePermissionsComponent', () => {
  let component: EffectivePermissionsComponent;
  let fixture: ComponentFixture<EffectivePermissionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EffectivePermissionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EffectivePermissionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
