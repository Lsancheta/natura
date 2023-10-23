import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmenuProdutosComponent } from './submenu-produtos.component';

describe('SubmenuProdutosComponent', () => {
  let component: SubmenuProdutosComponent;
  let fixture: ComponentFixture<SubmenuProdutosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubmenuProdutosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubmenuProdutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
