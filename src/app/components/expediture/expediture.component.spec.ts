import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpeditureComponent } from './expediture.component';

describe('ExpeditureComponent', () => {
  let component: ExpeditureComponent;
  let fixture: ComponentFixture<ExpeditureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpeditureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpeditureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
