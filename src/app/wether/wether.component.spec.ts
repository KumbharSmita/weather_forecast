import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WetherComponent } from './wether.component';

describe('WetherComponent', () => {
  let component: WetherComponent;
  let fixture: ComponentFixture<WetherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WetherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WetherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
