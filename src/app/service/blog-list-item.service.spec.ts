import { TestBed, inject } from '@angular/core/testing';

import { BlogListItemService } from './blog-list-item.service';

describe('BlogListItemService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BlogListItemService]
    });
  });

  it('should be created', inject([BlogListItemService], (service: BlogListItemService) => {
    expect(service).toBeTruthy();
  }));
});
