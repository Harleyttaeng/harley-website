import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MyStoryComponent} from '../my-story/my-story.component';
import {HomePageComponent} from '../home-page/home-page.component';

const routes: Routes = [
  {path: '', redirectTo: '/home-page', pathMatch: 'full'},
  {path: 'home-page', component: HomePageComponent},
  {path: 'my-story', component: MyStoryComponent}
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule { }
