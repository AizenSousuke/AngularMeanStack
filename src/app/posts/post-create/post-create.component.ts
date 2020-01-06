import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Post } from 'src/app/post';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {

  @Output() eventEmitter = new EventEmitter();

  enteredValue = '';
  enteredTitle = '';
  newPost: Post;

  constructor() { }

  ngOnInit() {
    this.eventEmitter.subscribe(event => {
      console.log("Outputted: " + event.title + " " + event.content);
    })
  }

  onCreatePost(event) {
    // Get the value and use it for temporary validation
    console.log(event.target[0].value);
    console.log(event.target[0]);
    console.log(event.target[1].value);
    this.newPost = {
      title: this.enteredTitle,
      content: this.enteredValue
    };
    this.eventEmitter.emit(this.newPost);
  }

}
