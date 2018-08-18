import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogSelectionComponent } from './blog-selection.component';

describe('BlogSelectionComponent', () => {
  let component: BlogSelectionComponent;
  let fixture: ComponentFixture<BlogSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
