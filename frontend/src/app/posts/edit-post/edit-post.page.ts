import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController, NavController } from '@ionic/angular';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.page.html',
  styleUrls: ['./edit-post.page.scss'],
})
export class EditPostPage implements OnInit {
  id: string;
  form: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private navCtrl: NavController,
    private postsService: PostsService,
    private loadingCtrl: LoadingController,
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if (!paramMap.has('postId')) {
        this.navCtrl.navigateBack('/posts');
        return;
      }

      this.id = paramMap.get('postId');
      this.form = new FormGroup({
        title: new FormControl(null, {
          updateOn: 'blur',
          validators: [Validators.required]
        }),
        description: new FormControl(null, {
          updateOn: 'blur',
          validators: [Validators.required, Validators.maxLength(180)]
        }),
        imageUrl: new FormControl(null, {
          updateOn: 'blur',
          validators: [Validators.required]
        }),
        location: new FormControl(null, {
          updateOn: 'blur',
          validators: [Validators.required]
        }),
        artist: new FormControl(null, {
          updateOn: 'blur',
          validators: [Validators.required]
        })
      });

      this.postsService.getPostById(paramMap.get('postId')).subscribe(post => {
        this.form.setValue({
          title: post.title,
          description: post.description,
          imageUrl: post.imageUrl,
          location: post.location,
          artist: post.artist
        });
      });
    });
  }

  onEditPost() {
    if (!this.form.valid) {
      return;
    }
    
    this.loadingCtrl.create({
      message: "Editing post..."
    }).then(loadingEl => {
      loadingEl.present();
      this.postsService.editPost(
        this.id,
        this.form.value.title,
        this.form.value.description,
        this.form.value.imageUrl,
        this.form.value.location,
        this.form.value.artist
      ).subscribe(() => {
        loadingEl.dismiss();
        const id = this.form.value.id;
        this.form.reset();
        this.navCtrl.pop();
      })
    })
  }

}
