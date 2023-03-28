import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentyComponent } from './identy.component';

describe('IdentyComponent', () => {
  let component: IdentyComponent;
  let fixture: ComponentFixture<IdentyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdentyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdentyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
