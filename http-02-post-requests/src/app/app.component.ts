import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Subscription } from 'rxjs';
import { Post } from './post.model';
import { PostService } from './post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  loadedPosts = [];
  isFetching = false;
  error = null;
  private errorSub: Subscription;

  constructor(private http: HttpClient, private postSer: PostService) { }

  ngOnInit() {
    this.errorSub = this.postSer.error.subscribe(errorMessage => {
      this.error = errorMessage;
    });

    this.isFetching = true;
    this.postSer.fetchPosts().subscribe(posts => {
      this.loadedPosts = posts;
    });
    this.isFetching = false;
  }

  onCreatePost(postData: { title: string; content: string }) {
    // Send Http request
    this.postSer.createAndStorePost(postData.title, postData.content);
  }

  onFetchPosts() {
    // Send Http request
    this.isFetching = true;
    this.postSer.fetchPosts().subscribe(posts => {
      this.loadedPosts = posts;
    }, error => { this.error = error.message });
    this.isFetching = false;
  }

  onClearPosts() {
    // Send Http request
    this.postSer.deletePosts().subscribe(() => { }, error => { this.error = error.message });
    this.loadedPosts = [];
  }

  onHandleError() {
    this.error = null;
  }

  ngOnDestroy(): void {
    this.errorSub.unsubscribe();
  }
}
