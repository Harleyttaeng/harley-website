import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { GreetingMessageComponent } from './greeting-message/greeting-message.component';
import { BlogSelectionComponent } from './blog-selection/blog-selection.component';
import { CardComponent } from './card/card.component';
import { FooterComponent } from './footer/footer.component';
import { MyStoryComponent } from './my-story/my-story.component';
import {AppRoutingModule} from './routing/app-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { MyBlogComponent } from './my-blog/my-blog.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { BlogComponent } from './blog/blog.component';
import { BlogListItemComponent } from './blog-list-item/blog-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GreetingMessageComponent,
    BlogSelectionComponent,
    CardComponent,
    FooterComponent,
    MyStoryComponent,
    HomePageComponent,
    MyBlogComponent,
    ContactMeComponent,
    BlogComponent,
    BlogListItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
