import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { StoriesPage } from '../pages/stories/stories';
import { StoryPage } from '../pages/story/story';
import {Feed} from '../providers/feed';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    StoriesPage,
    StoryPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    StoriesPage,
    StoryPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, Feed]
})
export class AppModule {}
