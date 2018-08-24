import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MyStoryComponent} from '../my-story/my-story.component';
import {HomePageComponent} from '../home-page/home-page.component';
import {MyBlogComponent} from '../my-blog/my-blog.component';
import {ContactMeComponent} from '../contact-me/contact-me.component';
import {BlogComponent} from '../blog/blog.component';

const routes: Routes = [
  {path: '', redirectTo: '/home-page', pathMatch: 'full'},
  {path: 'home-page', component: HomePageComponent},
  {path: 'my-story', component: MyStoryComponent},
  {path: 'my-blog', component: MyBlogComponent},
  {path: 'contact-me', component: ContactMeComponent},
  {path: 'blog', component: BlogComponent}
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule { }
