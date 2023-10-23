import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuplementoComponent } from './suplemento.component';

describe('SuplementoComponent', () => {
  let component: SuplementoComponent;
  let fixture: ComponentFixture<SuplementoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuplementoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuplementoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
