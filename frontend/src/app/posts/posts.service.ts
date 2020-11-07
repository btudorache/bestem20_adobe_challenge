import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment.prod';
import { map, switchMap, take, tap } from 'rxjs/operators';
import { Post } from './post.model';
import { env } from 'process';
import { BehaviorSubject } from 'rxjs';

interface PostData {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  artist: string;
  location: string;
  created_at: string;
}

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private _posts = new BehaviorSubject<Post[]>([]);

  get posts() {
    return this._posts.asObservable();
  }

  constructor(private http: HttpClient) { }

  public getPosts() {
    return this.http
      .get<PostData[]>(environment.backendApi)
      .pipe(
        take(1),
        map(resData => {
          const postArray: Post[] = Object.values(resData);
          return postArray;
        }),
        tap(posts => {
          this._posts.next(posts);
        })
      );
  }

  public getPostById(id: string) {
    return this.http
      .get<PostData>(environment.backendApi + `${id}`)
      .pipe(
        take(1),
        map(resData => {
          return new Post(
            resData.id,
            resData.title,
            resData.description,
            resData.imageUrl,
            resData.artist,
            resData.location,
            resData.created_at
          );
        })
      )
  }

  public deletePostById(id: string) {
    return this.http
      .delete(environment.backendApi + `${id}`)
      .pipe(
        take(1),
        switchMap(() => {
          return this.posts;
        }),
        take(1),
        tap(posts => {
          this._posts.next(posts.filter(p => p.id !== id));
        })
      );
  }

  public addPost(
    title: string,
    description: string,
    imageUrl: string,
    location: string,
    artist: string
  ) {
    let newPost: Post = new Post(
      Math.random.toString(),
      title,
      description,
      imageUrl,
      artist,
      location,
      new Date().toString()
    );

    return this.http
      .post(environment.backendApi, newPost)
      .pipe(
        switchMap(resData => {
					return this.posts;
				}),
        take(1),
        tap(posts => {
					this._posts.next(posts.concat(newPost));
				})
      );
  }
}
