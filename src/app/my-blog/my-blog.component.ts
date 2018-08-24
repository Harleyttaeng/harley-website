import { Component, OnInit } from '@angular/core';
import {BlogListItemService} from '../service/blog-list-item.service';
import {BlogListItem} from '../blog-list-item/blog-list-item';

@Component({
  selector: 'app-my-blog',
  templateUrl: './my-blog.component.html',
  styleUrls: ['./my-blog.component.css']
})
export class MyBlogComponent implements OnInit {

  bloglistitems: BlogListItem[];

  constructor(private blogListItemService: BlogListItemService) { }

  ngOnInit() {
    this.getBlodListItems();
  }
  getBlodListItems(): void {
    this.blogListItemService.getBlodListItems()
      .subscribe(bloglistitems => this.bloglistitems = bloglistitems );
  }
}
