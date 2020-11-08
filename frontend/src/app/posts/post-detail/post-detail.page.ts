import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { Post } from '../post.model';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.page.html',
  styleUrls: ['./post-detail.page.scss'],
})
export class PostDetailPage implements OnInit {
  public loadedPost: Post;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private navCtrl: NavController,
    private postsService: PostsService,
    private alertCtrl: AlertController
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if (!paramMap.has('postId')) {
        this.navCtrl.navigateBack('/posts');
        return;
      }
      
      this.postsService.getPostById(paramMap.get('postId')).subscribe(post => this.loadedPost = post);
    })
  }

  deletePost(id: string) {
    this.alertCtrl.create({
      message: 'Are you sure you want to delete this post?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Ok',
          handler: () => {
            this.postsService.deletePostById(id).subscribe(() => {
              this.navCtrl.navigateBack('/posts');
            });
          }
        }
      ]
    }).then(alertEl => {
      alertEl.present();
    });
    
  }

  onEdit(id: string) {
    this.router.navigate(['/', 'posts', 'edit', id]);
  }

}
