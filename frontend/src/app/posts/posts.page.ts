import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from './post.model';
import { PostsService } from './posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.page.html',
  styleUrls: ['./posts.page.scss'],
})
export class PostsPage implements OnInit {
  public posts: Post[];

  constructor(
    private router: Router,
    private postsService: PostsService
  ) { }

  ngOnInit() {
    this.postsService.getPosts().subscribe(posts => this.posts = posts);
  }

}
