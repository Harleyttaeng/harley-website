import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {BlogListItem} from '../blog-list-item/blog-list-item';
import {BLOGLISTITEMS} from '../mock-blog-list-items';


@Injectable({
  providedIn: 'root'
})
export class BlogListItemService {

  constructor() { }

  getBlodListItems(): Observable<BlogListItem[]> {
    return of(BLOGLISTITEMS);
  }
}
