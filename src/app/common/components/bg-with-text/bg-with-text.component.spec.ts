import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BgWithTextComponent } from './bg-with-text.component';

describe('BgWithTextComponent', () => {
  let component: BgWithTextComponent;
  let fixture: ComponentFixture<BgWithTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BgWithTextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BgWithTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
