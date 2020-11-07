import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { PostsService } from '../posts/posts.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {
  @ViewChild('nameInput', { read: ElementRef }) nameInput: ElementRef;

  constructor(
    private router: Router,
    private postsService: PostsService
  ) { }

  ngOnInit() {
  }

  onLogin() {
    this.postsService.passNickname(this.nameInput.nativeElement.value);
    this.router.navigateByUrl('/posts');
  }
}
