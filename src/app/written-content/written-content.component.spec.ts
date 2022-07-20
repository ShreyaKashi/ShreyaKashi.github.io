import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WrittenContentComponent } from './written-content.component';

describe('WrittenContentComponent', () => {
  let component: WrittenContentComponent;
  let fixture: ComponentFixture<WrittenContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WrittenContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WrittenContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
