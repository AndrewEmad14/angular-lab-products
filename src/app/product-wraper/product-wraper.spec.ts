import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductWraper } from './product-wraper';

describe('ProductWraper', () => {
  let component: ProductWraper;
  let fixture: ComponentFixture<ProductWraper>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductWraper]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductWraper);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
