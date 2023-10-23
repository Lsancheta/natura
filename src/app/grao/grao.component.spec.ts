import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraoComponent } from './grao.component';

describe('GraoComponent', () => {
  let component: GraoComponent;
  let fixture: ComponentFixture<GraoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
