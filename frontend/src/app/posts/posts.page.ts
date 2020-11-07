import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Post } from './post.model';
import { PostsService } from './posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.page.html',
  styleUrls: ['./posts.page.scss'],
})
export class PostsPage implements OnInit, OnDestroy {
  public posts: Post[];
  private postsSub: Subscription;

  constructor(
    private router: Router,
    private postsService: PostsService
  ) { }

  ngOnInit() {
    this.postsSub = this.postsService.posts.subscribe(posts => this.posts = posts);
  }

  ionViewDidEnter() {
    this.postsService.getPosts().subscribe();
  }

  onRandomPost() {
    this.postsService.getRandomPostId().subscribe(id => {
      this.router.navigate(['/posts/' + id]);
    });
  }

  ngOnDestroy() {
    if (this.postsSub) {
      this.postsSub.unsubscribe();
    }
  }
}
