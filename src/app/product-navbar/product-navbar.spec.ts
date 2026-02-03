import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductNavbar } from './product-navbar';

describe('ProductNavbar', () => {
  let component: ProductNavbar;
  let fixture: ComponentFixture<ProductNavbar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductNavbar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductNavbar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
