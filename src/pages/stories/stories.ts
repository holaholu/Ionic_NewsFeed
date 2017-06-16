import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Feed} from '../../providers/feed';
import {StoryPage} from '../story/story';

@Component({
  selector: 'page-stories',
  templateUrl: 'stories.html'
})
export class StoriesPage {
  topic:String;
  stories:Array<any>;
  constructor(public feed:Feed, public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    this.topic = 'cnn_topstories';
    this.getStories();
  }

  getStories(){
    this.feed.getStories(this.topic).subscribe(res => {
      //console.log(res.items);
      this.stories = res.items;
    });
  }

  storySelected(story){
    this.navCtrl.push(StoryPage, story);
  }

  changeTopic(){
    this.getStories();
  }

}
