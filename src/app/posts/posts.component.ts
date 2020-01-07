import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: Post[] = [];

  constructor() { 
  }

  ngOnInit() {
    
  }

  addPosts(event) {
    console.log(event);
    this.posts.push(event);
  }

  deletePost(post) {
    console.log(post);
    this.posts.splice(post, 1);
  }

}
