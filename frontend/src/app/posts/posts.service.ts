import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment.prod';
import { map } from 'rxjs/operators';
import { Post } from './post.model';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }

  public getPosts() {
    return this.http
      .get(environment.backendApi)
      .pipe(
        map(resData => {
          const postArray: Post[] = Object.values(resData);
          return postArray;
        })
      );
  }
}
