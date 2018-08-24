import {Component, Input, OnInit} from '@angular/core';
import {BlogListItem} from './blog-list-item';

@Component({
  selector: 'app-blog-list-item',
  templateUrl: './blog-list-item.component.html',
  styleUrls: ['./blog-list-item.component.css']
})
export class BlogListItemComponent implements OnInit {

  @Input() bloglistitem: BlogListItem;

  constructor() { }

  ngOnInit() {
  }

}
