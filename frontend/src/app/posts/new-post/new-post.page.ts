import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.page.html',
  styleUrls: ['./new-post.page.scss'],
})
export class NewPostPage implements OnInit {
  form: FormGroup;

  constructor(
    private loadingCtrl: LoadingController,
    private postsService: PostsService,
    private router: Router
  ) { }

  ngOnInit() {
    this.form = new FormGroup({
      title: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      description: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required, Validators.maxLength(1000)]
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
  }

  onCreatePost() {
    if (!this.form.valid) {
      return;
    }

    this.loadingCtrl.create({
      message: 'Creating post...'
    }).then(loadingEl => {
      loadingEl.present();
      this.postsService.addPost(
        this.form.value.title,
        this.form.value.description,
        this.form.value.imageUrl,
        this.form.value.location,
        this.form.value.artist
      ).subscribe(() => {
        loadingEl.dismiss();
        this.form.reset();
        this.router.navigate(['/posts']);
      })
    });
  }
}
