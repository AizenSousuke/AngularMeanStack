import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts = [];

  constructor() { 
  }

  ngOnInit() {
    
  }

  addPosts(event) {
    console.log(event);
    this.posts.push(event);
  }

}
