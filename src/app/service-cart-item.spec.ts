import { TestBed } from '@angular/core/testing';

import { ServiceCartItem } from './service-cart-item';

describe('ServiceCartItem', () => {
  let service: ServiceCartItem;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceCartItem);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
